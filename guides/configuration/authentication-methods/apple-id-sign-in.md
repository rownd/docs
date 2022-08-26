# Apple ID Sign-in

### In the Apple Developer console create a services ID to associate with your app. Paste that ID here.When to use Apple ID sign-in.

iPhones are incredibly popular and when speed is the goal, using Apple ID makes sense.  It does require a bit more set up, since Apple requires an app be registered in their development console, but if you already have a iOS Mobile app, this has already been accomplished.&#x20;

### Navigating to the Apple Authentication  method

Toggle Sign in with Apple to "Allow for Authentication." &#x20;

![](<../../../.gitbook/assets/image (30).png>)

### Configuration

**Apple Services ID:** In the Apple Developer console, create a services ID to associate with your app. Paste that ID here.  More information from Apple [here](https://help.apple.com/developer-account/#/dev1c0e25352).&#x20;

**Add Rownd Auth Callback to Apple Developer Console.**  Inside of the App Configuration in the Apple Developer Console, add `https://api.rownd.io/hub/auth/apple/callback`
