# Firebase - Realtime Database

The Firebase Realtime Database integration lets you sync personal information between Rownd and a single Firebase Realtime Database (RTDB) instance. When configured, PII stored inside of an RTDB instance will be discoverable and manageable by the data owners. All of this is done by leveraging Google Cloud Functions and the Rownd platform.

Check out the Google Cloud [prerequisites](google-cloud-platform-requirements.md) to ensure your GCP account and Project are ready for the Rownd Integration.

### Creating the integration

1. From the **Integrations** tab in the sidebar, click on the **Add Integration** button.
2.  Choose the **Firebase - Realtime Database** connector from the Connector Catalog


3.  Enter a name for your new Integration.



After you've entered a descriptive name, click **Next**

1. Authenticate with Google Cloud

Click the **Begin authenticate** button and log in to your Google Account.



Firebase Realtime Database runs on Google Cloud. Rownd leverages the Google Cloud Platform to receive Realtime Database updates. Rownd will need permission to read Google Cloud Projects, read and write Firebase resources, and create Cloud Functions (among other things.) For a full list of access that Rownd needs, click [here](google-cloud-platform-requirements.md#access-requirements).



Grant Rownd the access into your Google Account, and then click the **Next** button when authentication is complete.

1. Firebase Settings

Select the Google Cloud Project, Firebase Application, and Firebase Database where you'd like to enable Rownd.

When done, click **Next**

1. Database Settings

In the **Database Settings** step, you will provide Rownd with information about where and how personal information is stored within your Firebase Realtime Database.

The RTDB structure is essentially a large JSON object. You will specify the JSON path to where the personal information exists. If PII is stored in multiple places within the database, you can add multiple paths to the configuration.

### **Defining User Data Locations**

Each entry in the User Data Locations list has three fields; `Path`, `Foreign Key`, and `Reference`.

* `Path` (required) - The database location where PII is stored. The value is a JSON path like `/path/to/data`

For each unique `Path` that you provide, Rownd will create a Google Cloud Function configured to send updates to Rownd whenever data under that path changes. As you construct this list of paths, consider all database locations where PII is stored.

{% hint style="info" %}
The `Path` can include the wildcard character `'*'` if the PII is stored nested beneath an arbitrary or unique field (like an ID).\
\
For instance, PII could be stored at `/users/user123/profile` or `/users/user456/profile`. In such a case, you could define the path with the wildcard character to match both paths: `/users/*/profile`.&#x20;
{% endhint %}

{% hint style="warning" %}
The wildcard character `'*'` can only be used once within a path.
{% endhint %}

* `Foreign Key` - The field name within the database document, or path variable, whose value references another location in the database

This value can have two forms:

**Object Field**

The `Foreign Key` can reference a field within the database object. For instance, if the document at `/addresses` looks like:

```
{
  "userId": "user123",
  "street": "1983 Wolfpack Ln",
  "city": "Raleigh",
  "state": "NC",
  "zip": "27609"
}
```

A valid `Foreign Key` would be `"userId"`. The resolved value would be `"user123"`.

**Path Variable**

The `Foreign Key` can reference a path variable. For instance, if the `Path` is `/addresses/{userId}`, the `Foreign Key` can be `{userId}`. Rownd will interpret the value of the foreign key as its matched value in a resolved path. (e.g. a resolved path of `/addresses/user123` would yield a foreign key value of `"user123"`)

{% hint style="info" %}
By convention, `Foreign Keys` defined with surrounding curly braces `{}` will be interpreted as path variables. `Foreign Keys` without curly braces will be assumed document field names.
{% endhint %}

* `Reference` - A database location where the Foreign Key's resolved value can be used to retrieve additional PII. `Reference` is only used in combination with a `Foreign Key`.

This value will always be a JSON path and include the `Foreign Key` within it surrounded by curly braces `{}`. For instance, if `Foreign Key` is `"userId"`, then the path could look something like `"/users/{userId}/profile"`

For more examples of defining user data locations, see the [examples section](examples-defining-user-data-locations.md).

1. Create the Integration

Once you're satisfied with the database configuration, click on **Create** to create your Integration.

Creation will take a couple of minutes. Rownd is busy creating and configuring resources within your GCP Project. While you wait, feel free to track the progress in the Integrations table by hovering over the Integration's status.

**After Creation**

**Database Indexes**

Depending on the configured paths in step #5 (**Database Settings**), Rownd may require certain indexes within your Realtime Database Rules. Rownd will show you the expected database indexes in the confirmation screen after you create your new Integration.



Transfer those indexes into your database rules via the Firebase UI&#x20;

Find out more about how to create Realtime Database rules [here](https://firebase.google.com/docs/database/security/indexing-data).

**Attach your Integration to a Rownd Application**

After creating your Integration, you must attach it to an existing Rownd application.

1.  From the Integrations table, click the overflow icon on your new Integration and select **Attach to application**


2.  Choose the application from the selector and click **Next**


3. Map data between the Rownd application and your new Integration

You will see a list of all fields that exist in your chosen application's schema. Enter the name of the corresponding field within your Firebase Realtime Database.

For instance, you could have a field in your Rownd application field called `first_name` and a corresponding field in your Realtime Database called `firstName`. Enter `firstName` into the input box next to `first_name`.

{% hint style="info" %}
A mapping for the `email` field is required. Rownd uses this field to identify and search for users.
{% endhint %}

{% hint style="info" %}
Rownd can only manage fields for which you have provided a mapping. Therefore, define as many mappings as possible to get the greatest value from Rownd.
{% endhint %}

Once you finish mapping fields, click **Save**
