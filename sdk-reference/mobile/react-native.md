---
description: Rownd bindings for React Native
---

# React Native

### Prerequisites

You must be using React Native v0.64 or higher.

### Installation

First, install the Rownd SDK for React Native.

```bash
npm install @rownd/react-native
```

#### Android

1. Ensure the Sdk versions match or are above provided versions. File: _android/build.gradle_

```bash
ext {
  ...
  minSdkVersion = 26
  compileSdkVersion = 32
  targetSdkVersion = 31
  ...
}
```

2\. Install the Rownd library and dependencies.

```bash
cd android && ./gradlew build
```

#### iOS

1. Ensure iOS version is at least 14. File: _ios/Podfile_

```
platform :ios, '14.0'
```

2\. Add the code below to install the Sodium pod dependency correctly. Place inside the target. File: _ios/Podfile_

```
dynamic_frameworks = ['Sodium']
pre_install do |installer|
  installer.pod_targets.each do |pod|
    if dynamic_frameworks.include?(pod.name)
      puts "Overriding the dynamic_framework? method for #{pod.name}"
      def pod.dynamic_framework?;
        true
      end
      def pod.build_type;
        Pod::BuildType.dynamic_framework
      end
    end
  end
end
```

3\. Install the Rownd pod and it's dependencies

```
cd ios && pod install
```

### Setup

#### Enable deep linking

Rownd supports automatically signing-in users when they initially install your app or when they click a sign-in link when the app is already installed.

### Usage

The Rownd SDK includes a context provider that will enable any component of your app to access authentication state and user data.

Before you can use the SDK, you'll need to obtain an App Key from the [Rownd Dashboard](https://app.rownd.io).

```typescript
import { RowndProvider } from "@rownd/react-native";

// ...

export default function Root() {
  return (
      <RowndProvider appKey="<your app key>">
        <App />
      </RowndProvider>
  );
}
```

Later on within your app's components, you can use the Rownd hook to access the Rownd browser API:

```typescript
import { View, Text } from 'react-native';
import { useRownd } from '@rownd/react';

export default function MyProtectedComponent(props) {
  const { is_authenticated, user, requestSignIn, getAccessToken } = useRownd();

  // You can also request a sign in without a user pressing a button
  // by calling requestSignIn() from a useEffect callback.
  // useEffect(() => {
  //   if (!is_authenticated) {
  //     requestSignIn();
  //   }
  // }, [is_authenticated]);

  return (
    <View>
      {is_authenticated ? (
        <>
          <h1>Welcome {user.data.first_name}</h1>
          <button onClick={() => getAccessToken()}>Get access token</button>
        </>
      ) : (
        <>
          <Text>Please sign in to continue</Text>
          <Pressable onPress={() => requestSignIn()}>
            <Text>Sign in</Text>
          </Pressable>
        </>
      )}
    </View>
  );
}
```

### API reference

Most API methods are made available via the Rownd Provider and its associated `useRownd` React hook. Unless otherwise noted, we're assuming that you're using hooks.

**requestSignIn()**

Trigger the Rownd sign in dialog

```typescript
const { requestSignIn } = useRownd();

requestSignIn();
```

**signOut()**

Sign out the user and clear their profile, returning them to a completely unauthenticated state.

```typescript
const { signOut } = useRownd();
signOut();
```

**getAccessToken()**

Retrieves the active, valid access token for the current user.

```typescript
const { getAccessToken } = useRownd();

let accessToken = await getAccessToken();
```

**is\_authenticated**

Indicates whether the current user is signed in or not.

```typescript
const { is_authenticated } = useRownd();

return (
  <>
    {is_authenticated && <ProtectedRoute />}
    {!is_authenticated && <PublicRoute />}
  </>
);
```

**access\_token**

Represents the current access token for the user.

```typescript
const { access_token } = useRownd();

useEffect(() => {
    axios({
        method: 'post',
        url: '/api/sessions'
        headers: {
            authorization: `Bearer ${access_token}`
        }
    }).then(console.log);
}, [access_token]);
```

**user**

Represents information about the current user, specifically their profile information. In the example below, we use the existing data to display the current value of `first_name` in a form field, update a local copy of that data as the user changes it, and then save the changes to Rownd once the user submits the form.

```typescript
const { user } = useRownd();

return (
    <form onSubmit={() => user.set(profile)}>
        <Text>First name</Text>
            <TextInput
                value={user?.data?.first_name}
                onChangeText={}
            />
        <Pressable onPress={}>Save</button>
    </form>
);
```

**Merge data into the user profile**

```typescript
const { user } = useRownd();
user.set({
    first_name: 'Alice',
    last_name: 'Ranier'
});
```

Set a specific field in the user profile

```typescript
const { user } = useRownd();
user.setValue('first_name', 'Alice');
```
