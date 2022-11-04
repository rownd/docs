# Javascript (browser)

The Rownd SDK Javascript provides browser-based access to the Rownd platform. In fact, you don't even need a backend server in order to authenticate users, save their profile information, and so on.

## Getting started

1.  Obtain your Rownd Javascript code-snippet from the [Rownd dashboard](https://app.rownd.io).

    ```html
    // EXAMPLE ONLY--THIS WON'T WORK IN A REAL APP
    <script type="text/javascript">
    !function(){var e=window._rphConfig=window._rphConfig||[];let t=window.localStorage.getItem("rph_base_url_override")||"https://hub.rownd.io";e.push(["setBaseUrl",t]);var r=document,s=r.createElement("script")=r.getElementsByTagName("script")[0];s.type="text/javascript",s.async=!0,s.src=t+"/static/scripts/rph.js",a&amp;&amp;a.parentNode?a.parentNode.insertBefore(s,a):r.body.appendChild(s)}();
    </script>
    ```
2.  Add the snippet to your website If you're using a CMS (e.g., WordPress, Webflow, Wix, etc.), you can typically add the snippet through the "settings" portion of their editors.

    If you're testing locally or want to add the snippet directly to your site code, add the snippet to your main layout or template HTML file. Ideally, add the snippet just before the closing `</body>` tag.

At this point, if you load your site in a browser after saving or publishing, you should see the Rownd Hub appear in the lower left-hand corner of the site.

{% hint style="warning" %}
If you're building a single-page app in React, Vue, etc, then use our framework-specific SDKs instead of these instructions.

If your single-page app is separate from your website, then you'll want to use the instructions on this page for the website and the framework SDK instructions for the single-page app.

If you find any of this unclear, get in touch with us and we can help you figure out which pieces you'll need.
{% endhint %}

## Customizing the Rownd Hub

The Rownd Hub is a customizable widget that can be adjusted to fit your needs. The following options can be added as additional Javascript code.

Simply add an additional script block _after_ the main Rownd snippet:

```html
<script type="text/javascript">
    _rphConfig.push(["<option name>","<value>"]);
</script>
```

### setAppKey

Sets the publishable key for the app. This is usually part of the snippet obtained from the Rownd dashboard, so you don't need to set it here.

Example:

```javascript
_rphConfig.push(['setAppKey', '82f7fa9a-8110-416c-8cc8-e3c0506fbf93']);
```

### setPostLoginRedirect

Sets the URL to redirect to after a user signs in. This can be an absolute or relative URL. If not provided, the user will simply remain on the current page.

Example:

```javascript
_rphConfig.push(['setPostLoginRedirect', 'https://app.rownd.io']);
```

### setPostRegistrationRedirect

Sets the URL to redirect to after a user signs in for the first time. This can be an absolute or relative URL. If not provided, the user will simply remain on the current page.

Example

```javascript
_rphConfig.push(['setPostRegistrationRedirect', 'https://app.rownd.io/post-registration']);
```

## Hooks

The Rownd Hub supports various hooks that can be used to modify the behavior of content on a page. These are controlled by [HTML data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use\_data\_attributes). The following attribute hooks are supported.

### Sign in / sign up buttons / triggers

#### `data-rownd-sign-in-trigger`

Attach to a clickable control (e.g., `<a>` or `<button>`) to trigger the Rownd authentication modal when not signed in.

Example:

```html
<a href="/dashboard" data-rownd-sign-in-trigger>Sign in</a>
```

#### `data-rownd-authenticated-text="<text>"`

When the user is authenticated, the text in this attribute will replace the element's original text.

Example:

```html
<a href="/dashboard" 
   data-rownd-sign-in-trigger
   data-rownd-authenticated-text="Sign out">Sign in</a>
```

#### `data-rownd-authenticated-redirect-url="<url>"`

When the user is authenticated, the clicked element will navigate the browser to the specified absolute or relative URL. If not specified in the case of an `<a>` tag, the `href` attribute from the tag will be used instead.

Example:

```html
<button data-rownd-sign-in-trigger
        data-rownd-authenticated-text="Sign out"
        data-rownd-authenticated-redirect-url="/dashboard">Sign in</button>
```

**`data-rownd-request-sign-in`** / **`data-rownd-require-sign-in`**

When one of these attributes is present on any DOM element, the Rownd sign-in modal will automatically display if the user is not currently signed in.

The only difference between the two is that `data-rownd-request-sign-in` will display a closable sign-in modal (i.e., with a close icon showing) whereas `data-rownd-require-sign-in` will display a persistent, non-closable modal until the user successfully completes the sign-in process.

**Pre-set the user's email address or phone number**

If you already know the current visitor's sign-in identifier (i.e., email or phone), Rownd can pre-populate that into the sign-in modal. Simply add the following additional attribute to the same element where the request/require sign-in attribute is present: `data-rownd-default-user-identifier="REPLACE_WITH_EMAIL_OR_PHONE"`

Here's a complete example:

```html
<div 
  data-rownd-require-sign-in="auto-submit"
  data-rownd-default-user-identifier="jrose@rownd.io"
/>
```

### Display user profile information for site customization

Use these hooks when you want to customize site content with information about the currently signed-in user. The fields available here will match those specified in the Rownd dashboard.

If the user's profile changes within the browser context, the changes will automatically be reflected within the site.

#### `data-rownd-field-interpolate`

Replaces templated strings within the element's HTML content with the values from the currently signed-in user's profile.

Example:

```html
<p data-rownd-field-interpolate>Hello, {{ first_name }} {{ last_name }}!</p>

// Result: <p data-rownd-field-interpolate>Hello, Alice Remansi!</p>
```

#### `data-rownd-field-mapping="<field name>"`

Examples:

```html
<p>Hello,
    <span data-rownd-field-mapping="first_name"></span>
    <span data-rownd-field-mapping="last_name"></span>!
</p>

Result:
<p> Hello,
    <span data-rownd-field-mapping="first_name">Alice</span>
    <span data-rownd-field-mapping="last_name">Remansi</span>!
</p>
```

Rownd can also render images when this attribute is applied to an `img` element and the field name corresponds to a field of type "image". Example:

```markup
<h3>Profile Picture</h3>
<img data-rownd-field-mapping="profile_picture" />
```

## Programmatic API

In addition to the declarative markup described above, you can use the Rownd Hub's programmatic API to create more advanced functionality.

#### The \`rownd\` object

Once the Rownd Hub initializes, it will place a `rownd` property on the global `Window` object. All JS APIs are available on this object.

Before calling methods or accessing data on the Rownd API, you'll need to wait for the API to be ready. Start by adding a function to the configuration's `onLoaded` event, like this:

```html
<script type="text/javascript">
    _rphConfig.push(['onLoaded', () => {
        // window.rownd should be available now!
        console.log(window.rownd);
    });
</script>
```

#### Authentication

Trigger the Rownd sign in dialog

```javascript
rownd.requestSignIn({
    auto_sign_in: false,
    identifier: 'me@company.com' || '+19105551212'
});
```

* `auto_sign_in: boolean` - when `true`, automatically trigger a sign-in attempt _if_ `identifier` is included or an email address or phone number has already been set in the user data.
* `identifier: string` - an email address or phone number (in E164 format) to which a verification message may be sent. If the Rownd app is configured to allow unverified users, then sign-in will complete without verification if the user has not signed in previously.
* `post_login_redirect` - the location (URL or path on the current domain) to which a user will be redirected after successfully signing in.

Sign out

```javascript
rownd.signOut();
```

Retrieve the current user's access token

```javascript
let accessToken = await rownd.getAccessToken({
    waitForToken: false
});
```

* `waitForToken: boolean` - when `true`, if no access token is present or if it's expired, the promise will not be resolved until a valid token is available. While unlikely, this could result in waiting forever.

#### User profile

A user's profile is retrieved from Rownd when a user is signed in. The profile is cached locally in the browser and any changes to it are synced to Rownd automatically. When there is no user signed in, you may still write information to the user's profile and it will remain cached locally. Once the user signs in, the collected information will then be sent to Rownd.

Get cached user profile

```javascript
let user = rownd.user.get();
```

Get a specific field from the user profile

```javascript
let firstName = rownd.user.getValue('first_name');
```

Merge data into the user profile

```javascript
rownd.user.set({
    first_name: 'Alice',
    last_name: 'Ranier'
});
```

Set a specific field in the user profile

```javascript
rownd.user.setValue('first_name', 'Alice');
```

Upload a file for a specific field

_The file parameter must be a javascript_ [_File_](https://developer.mozilla.org/en-US/docs/Web/API/File)_. If the field name corresponds to an image field, the mime type of the file must have an "image/" prefix (e.g. "image/png")_

```javascript
rownd.user.uploadFile('profile_picture', file);
```

#### Events

The Rownd Hub emits various events when state changes occur. For example, initial authentication, updates to user data, etc. You can listen for these event changes and react to them.

**Authentication**\
The `auth` event fires any time the user moves from an unauthenticated state to an authenticated state. It will also fire any time the access token is refreshed.

```javascript
rownd.events.addEventListener('auth', (evt) => {
    const { access_token, user_id, app_id } = evt.detail;
});
```

Sign out

```javascript
rownd.events.addEventListener('sign_out', () => {
    // do something now that the user has signed out
});
```

**User profile changes**

```javascript
rownd.events.addEventListener('user_data', (evt) => {
    const { data } = evt.detail;
    console.log('first_name:', data.first_name);
});
```
