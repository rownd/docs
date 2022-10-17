# Google Sign-in

Turn on the Google authentication method to allow users to sign in with their Google accounts on your website and mobile apps.&#x20;

### Prerequisites

Before you turn on Google Sign-in, you'll need to do a few things in the Google Cloud Platform.&#x20;

#### OAuth Web Client ID

Use [these instructions](https://support.google.com/workspacemigrate/answer/9222992?hl=en) from Google to create an OAuth web client ID. You'll need this client ID to configure Rownd for all deployments regardless of web or mobile app.

{% hint style="info" %}
The OAuth client ID's **Authorized JavaScript Origins** should contain any sites on which you will embed Rownd and support Google Sign-in. If you are only using Rownd on your mobile apps, you can leave this list empty
{% endhint %}

#### OAuth iOS Client ID (optional)

If you are adding Rownd to an iOS app, you'll need to create another OAuth client ID. In the Google Cloud Platform you can create one just like before, but this time, set the application type to "iOS". You'll be asked to provide your app's bundle ID, App Store ID, and team ID.

{% hint style="info" %}
When you finish creating the client ID, take note of the **iOS URL Scheme** value. You will need this later when adding a custom URL scheme to your iOS app.

This value will be the reversed client ID value and look something like this:

```
com.googleusercontent.apps.224565757208-05divavgck1qgqg9b58piodfhqb55h90
```
{% endhint %}

For detailed instructions check out this [documentation](https://support.google.com/cloud/answer/6158849?hl=en#zippy=%2Cnative-applications%2Cios)

#### OAuth Android Client ID (optional)

If you are adding Rownd to an Android app, you'll need one more OAuth client ID. Use an existing one or create a new one in the Google Cloud Platform just the same as before with your web or iOS client ID. When creating, make sure to select the "Android" application type. Provide your app's package name and SHA-1 fingerprint.

For detailed instructions check out this [documentation](https://support.google.com/cloud/answer/6158849?hl=en#zippy=%2Cnative-applications%2Candroid)

### Enabling Google Sign-in

Once you have completed the prerequisites, you can configure Rownd to enable Google Sign-in.

Navigate to the [Rownd Platform](https://app.rownd.io), and make sure your desired application is chosen in the application switcher.

Scroll down to view the authentication methods, and click **Configure** next to **Google**

<figure><img src="../../../.gitbook/assets/Screen Shot 2022-10-11 at 1.26.40 PM.png" alt="Google sign in method in the Rownd Platform"><figcaption></figcaption></figure>

On the configuration screen, enter the following information

* **Google Oauth Client ID** - Enter your OAuth web client ID that you created as the first prerequisite step
* **Google OAuth Client Secret -** Enter the client secret associated with your OAuth web client ID
* **Google iOS OAuth Client ID** - Enter your OAuth iOS client ID that you created as a prerequisite
* **Google OAuth Scopes** - (Optional) Enter additional OAuth scopes that you would like to request from the user during authentication. By default Rownd will request `email` and `profile`. Most of the time, you don't need to provide a value in this field.

{% hint style="success" %}
If you are using Rownd on an Android app, you do not need to configure anything in the Rownd platform. Google uses the package name and SHA-1 fingerprint that you provided when creating the OAuth client ID to authenticate your app.
{% endhint %}

#### One Last thing for iOS Apps

When Google finishes signing in a user, it calls back into your app on a custom URL scheme. You'll need to define this inside your XCode project settings.

1. Click on your project in XCode, and then select your app under **TARGETS**
2. Next, go to the **Info** tab and scroll down to the bottom of the view where you see **URL Types**
3. Expand **URL Types** and click the **+** icon to add a new value
4. Set the **URL Schemes** value to the URL Scheme (reversed iOS Client ID) value that you noted when creating the OAuth iOS client ID earlier. Again, this value will look something like: `com.googleusercontent.apps.422565757208-05dqvvigck1qgqg9b58piodfhqb55h90`

That's it! In the end, it should look like this:

<figure><img src="../../../.gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

{% hint style="danger" %}
You'll need to publish this new version of your app before turning on Google Sign-in in the Rownd Platform.
{% endhint %}

### Finishing up

At this point, you're all done! Make sure you save the Google configuration inside of the Rownd Platform. When you are ready to turn it on, click the toggle to enable Google Sign-in. Your users will then see a new option in the Rownd sign in dialog to continue with Google.

<figure><img src="../../../.gitbook/assets/image (17).png" alt=""><figcaption></figcaption></figure>

