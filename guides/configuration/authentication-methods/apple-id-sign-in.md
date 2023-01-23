# Apple ID Sign-in

Using Rownd to add "Sign in with Apple" to your app is quick and easy, usually requiring no code changes. Our implementation supports iOS, Android, and web clients so no matter how your users are accessing your app or service, they can always sign in with their method of choice.

To enable Sign-in with Apple, complete the following steps.

1. Create an [Apple Services ID](https://developer.apple.com/account/resources/identifiers/list/serviceId) for your app. Note the identifier to use in the next step. Ensure that this Callback URL is set within the Services ID: `https://api.rownd.io/hub/auth/apple/callback`
2. On the [Rownd dashboard](https://app.rownd.io), navigate to the **Sign in with Apple** authentication method and press **Configure**.
3. Enter the Services ID created in Step 1
4. Ensure the **Allow for authentication** switch is turned on.
5. Press **save.**

That's it! Your app and/or website is now ready to handle sign-in requests for users with an Apple ID.
