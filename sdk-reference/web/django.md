---
description: >-
  Integrate Rownd instant accounts and authentication into your Django-backed
  project.
---

# Django (Python)

## Installation

Begin by adding the `rownd_django` package to your dependencies. In `requirements.txt`, this would look like:

```
rownd_django>=1.0.0
```

> NOTE: This plugin only works with Django v3 and above. We strongly recommend upgrading if you're using something older. If you can't for some reason, please [get in touch](mailto:support@rownd.io?subject=Django%soSDK:%20Request%20for%20older%20version%20support).

Next, add the Rownd app and authentication backend to your Django `settings.py` file.

```python
INSTALLED_APPS = [
    ...
    'rownd_django',
]

AUTHENTICATION_BACKENDS = [
    'rownd_django.auth.backend.RowndAuthenticationBackend',
    'django.contrib.auth.backends.ModelBackend'
]
```

If you're using Django REST Framework, then add the Rownd authentication class to your `REST_FRAMEWORK` settings.

```python
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rownd_django.auth.backend.RowndApiAuthentication',
    ]
}
```

Finally, add your Rownd app credentials to your Django `settings.py` file. You can obtain these from the [Rownd dashboard](https://app.rownd.io). These credentials enable the Rownd authentication backend to communicate with the Rownd API.

```python
ROWND = {
    'APP_KEY': '<your app key>',
    'APP_SECRET': '<your app secret>',
}
```

### Configure the Rownd Hub (required)

Rownd authentication requires a small code snippet to be embedded within your app, present on all HTML pages. Setup for the Hub/snippet itself is outside the scope of this document, but you can find the relevant setup guides for either [single page apps](https://docs.rownd.io/rownd/sdk-reference/web/react-next.js) or [traditional web apps via vanilla js](https://docs.rownd.io/rownd/sdk-reference/web/javascript-browser).

Use our SDKs to embed the Hub/snippet in your SPA or use the vanilla JS SDK to add the snippet in your main Django template HTML.

Now that everything is set up, you can add Rownd authentication to your APIs or views.

## Usage

The Rownd Django SDK provides support for both "traditional" Django apps where you have an authentication session that follows a user across page loads, as well as "single-page" (SPA) Django apps using frameworks like React, Vue, etc.

### Single-page apps (SPA) / API-based

When using an SPA framework like React, Vue, or similar, you'll likely want to leverage the specific Rownd SDK for those frameworks. You can find a list of supported frameworks in [our documentation](https://docs.rownd.io/rownd/sdk-reference/web).

Typically, an SPA will use an API-driven request/response flow which makes typical sessions unnecessary (though Rownd supports them if you need them). We highly recommend the [Django REST framework](https://www.django-rest-framework.org) for this purpose. Rownd provides plug-and-play support for the REST framework's authentication API.

Here's an example of how you might configure an API to leverage Rownd's authenticator, given the installation instructions above:

```python
from rownd_django.auth.backend import RowndApiAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

class ExampleView(APIView):
    authentication_classes = [RowndApiAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        content = {
            'user': str(request.user),  # `django.contrib.auth.User` instance.
            'auth': str(request.auth),  # None
        }
        return Response(content)
```

### Traditional (non-SPA) apps / session-based

In this flow, once a user has been authenticated with the Rownd Hub, the Hub will make a request to your app's backend to set up a session for the user.

First, ensure your project has session middleware enabled.

```python
MIDDLEWARE = [
    ...
    'django.contrib.sessions.middleware.SessionMiddleware',
    ...
]
```

Next, include the Rownd `session_authenticator` in your `urls.py` file.

```python
urlpatterns = [
    ...
    path('rownd/', include('rownd_django.auth.urls', namespace='rownd')),
    ...
]
```

Finally, update your Rownd Hub code snippet to fire a post-authenticate API request to the session authenticator we just enabled.

```html
<script type="text/javascript">
(function () {
    // Rownd Hub snippet
})();
</script>
<script type="text/javascript">
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    _rphConfig.push(['setAppKey', '<rownd app key>']);
    _rphConfig.push(['setPostAuthenticationApi', {
        method: 'post',
        url: '/rownd/session_authenticate',
        extra_headers: {
            'X-CSRFToken': getCookie('csrftoken')
        }
    }]);
</script>
```

The session authenticator will establish an authenticated session if one doesn't already exist and will return a response indicating that the Rownd Hub should trigger a page refresh. This is usually necessary for your app views to display the desired authenticated context. In the event that an authenticated session already exists, the Hub will not trigger further page refreshes.
