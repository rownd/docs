# Rownd SDK for iOS

The Rownd SDK for iOS provides authentication, account and user profile management, deep linking, encryption and more for native iPhone, iPad, and even macOS applications.

Using the Rownd platform, you can easily bring the same authentication that's on your website to your mobile apps. Or if you only authenticate users on your mobile apps, you can streamline the authentication process using Rownd's passwordless sign-in links, enabling you to seamlessly authenticate users from an app link sent to their email or phone number.

Once a user is authenticated, you can retrieve and update their profile information on the fly using native APIs. Leverage Rownd's pre-built mobile app components to give users profile management tools. Additionally, you can manage encryption of data on-device before sending it back to Rownd or your own backend.

## Installation

In Xcode, select your project file, select the main target, then scroll down to the "frameworks" section to add a package dependency to your project. See the [official documentation](https://developer.apple.com/documentation/xcode/adding-package-dependencies-to-your-app) for specific steps.

Enter this as the package repository url:

```
https://github.com/rownd/ios.git
```

## Usage

### Initializing the Rownd SDK

In your `AppDelegate` file, call the `Rownd.configure()` method during application launch:

```swift
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
    
    Rownd.configure(launchOptions: launchOptions, appKey: "82f7fa9a-8110-416c-8cc8-e3c0506fbf93")
    
    return true
}
```

After initialization, your app will typically call `Rownd.requestSignIn()` at some point, if the user is not already authenticated. This will display the Rownd interface for authenticating the user. Once they complete the sign-in process, an access token and the user's profile information will be available to your app.

### Handling authentication

Rownd leverages an observeable architecture to expose data to your app. This means that as the Rownd state changes, an app can dynamically update without complicated logic. For example, a view can display different information based on the user's authentication status.

Here's an example SwiftUI view that displays different messages depending on the user's authenticated status:

```swift
import SwiftUI
import Rownd

struct MyView: View {
    @StateObject var authState = Rownd.getInstance().state(type: .auth)
    
    var body: some View {
        VStack {
            Button(action: {
                if authState.current.isAuthenticated {
                    Rownd.signOut()
                } else {
                    Rownd.requestSignIn()
                }
            },
            label: {
                Text(!authState.current.isAuthenticated ? "Sign in" : "Sign out")
            })
        }
    }
}

struct MyView_Previews: PreviewProvider {
    static var previews: some View {
        MyView()
    }
}
```

You can subscribe to any state object that Rownd supports. Here's a list of available states and their structures:

#### .auth

```swift
public struct AuthState {
    public var accessToken: String?     // Current, valid access token for the user (valid for one hour)
    public var isVerifiedUser: Bool?    // Whether the current user has verified at least one identifier (e.g., email)
}
```

#### .user

```
public struct UserState {
    public var id: String?                      // The user's ID as known to Rownd
    public var data: Dictionary<String, Any>    // Contains key/value pairs for the current user
    public var redacted: [String]               // An array of field keys that the current user has disabled your app from accessing
}

## API reference

In addition to the state observable APIs, Rownd provides imperative APIs that you can call to get and retrieve user profile information, retrieve a current access token, or encrypt user data with the user's local key.

### Rownd.user.get() -> UserState
Returns the entire `UserState` object

### Rownd.user.get(field: String) -> Any
Returns the value of a specific field in the user's data dictionary. `"id"` is a special case that will return the user's ID, even though it's technically not in the dictionary itself.

### Rownd.user.set(data: Dictionary<String, Any>) -> void
Replaces the user's data with that contained in the dictionary. This may overwrite existing values, but must match the schema you defined within your Rownd application dashboard. Any fields that are flagged as `encrypted` will be encrypted on-device prior to storing in Rownd's platform.

If something goes wrong during the operation (e.g., schema mismatch, network failure, etc), the method will throw.

### Rownd.user.set(field: String, value: Any) -> void 
Sets a specific user profile field to the provided value, overwriting if a value already exists. If the field is flagged as `encrypted`, it will be encrypted on-device prior to storing in Rownd's platform.

If something goes wrong during the operation (e.g., schema mismatch, network failure, etc), the method will throw.


## Data encryption
As indicated previously, Rownd can automatically assist you in protecting sensitive user data by encrypting it on-device with a user's unique encryption key prior to saving it in Rownd's own platform storage.

When you configure your app within the Rownd platform, you can indicate that it supports on-device encryption. When this flag is set, Rownd will automatically generate a cryptographically secure, unrecoverable encryption key on the user's device after they sign in. The key is stored in the device Keychain and all encryption is handled on the device. The key is never transmitted to Rownd's servers.

Only fields that you designate `encrypted` is encrypted on-device prior to sending it to Rownd. Some identifying fields like email and phone number do not support on-device encryption at this time.

Of course, all data within the Rownd platform is encrypted at rest on disk and in transit, but this does not afford the same privacy guarantees as data encrypted on a user's local device. For especially sensitive data, we recommend enabling field-level encryption.

> NOTE: Data encrypted on-device will not be accessible by you, the app developer outside of the context of your app. In other words, your app can use encrypted data in its plaintext (decrypted) form while the user is signed in, but you won't be able to retrieve that data from the Rownd servers in a decrypted form. 

In some cases, you may want to encrypt data on-device that you'll send to your own servers for storage. Rownd provides convenience methods to encrypt and decrypt that data with the same user-owned key.

### Rownd.user.encrypt(data: String) -> String
Encrypts the provided String `data` using the user's symmetric encryption key and returns the ciphertext as a string. You can encrypt anything that can be represented as a string (e.g., Int, Dictionary, Array, etc), but it's currently up to you to get it into a string format first.

### Rownd.user.decrypt(data: String) -> String
Attempts to decrypt the provided String `data`, returning the plaintext as a string. If the data originated as some other type (e.g., Dictionary), you'll need to decode the data back into its original type.
```
