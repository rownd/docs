---
description: Run your own logic when data changes within Rownd
---

# Webhooks

Often, multiple sources can create or update profile and account information for your users. For example, sometimes your app might update profile fields for a user, but other times the user might update other information from their browser. In either case, some component of your system might need to know about those changes as they occur.

Rownd provides a webhook integration that can communicate with essentially any HTTP-based system, letting you know when new data is created or when existing data has changed.

### Setup

To enable one or more webhooks, you'll need to configure them through the [Rownd dashboard.](https://app.rownd.io)

1. From the menu, select **Integrations.**
2. Select the **Connector catalog** tab.
3. From the list of available connectors, click on the **Generic webhook** entry. The connector setup dialog will appear.
4. Enter a descriptive name for your webhook and click **Next**.
5. Select your desired **HTTP method** and enter the URL of your webhook. (If you're just testing, you might want to use something like [webhook.site](https://webhook.site))
6. Click **Create** to create the connection.

The dialog should indicate that the webhook was created successfully. Now that the connection exists, we need to attach it to an application, which will dispatch updates to the webhook as data changes occur.

1. Select the **Configured connections** tab at the top of the page.
2. Locate the webhook connection you just created and click the three-dots menu on the right-hand side of the row.
3. From the menu, select **Attach to application**. The **Attach connection** dialog will appear.
4. From the **Select an application** menu, select the application to which the connection should be attached. Click **Next**.
5. By default, the webhook will contain the field names as they appear within Rownd. If you want to change any field names, you may do so by typing the desired field name(s) into the **Map fields** page.
6. Click **Save.**

After a moment, the attached application should appear in the row next to the connection. Once this occurs, data updates should begin flowing through the webhook.

### Payload reference

Overall, the payload for the webhooks will be similar for creates, updates, and deletes; however the payload will always include a lookup value (such as email address or phone number) and meta indicating what triggered the webhook.

Below are example payloads of each type of trigger. The main payload fields will differ based on the fields you defined within Rownd.

Remember, the HTTP method will match the value configured during connector setup, regardless of the represented action.

#### Data created

```json
{
  "data":{
    "email":"jrose@acme.com",
    "first_name":"Juliet",
    "last_name":"Rose",
    "user_id":"0e223bd4-1324-49ff-b948-122eeaaa42d1"
  },
  "redacted":[],
  "meta":{
    "operation":"data_insert",
    "lookup_values":[
      {
        "field":"email",
        "value":"jrose@acme.com"
      }
    ]
  }
}
```

#### Data updated

```json
{
  "data": {
    "email": "jrose@acme.com",
    "first_name": "Juliet",
    "last_name": "Rose",
    "country": "United States",
    "user_id": "0e223bd4-1324-49ff-b948-122eeaaa42d1"
  },
  "redacted": [],
  "meta": {
    "operation": "data_update",
    "lookup_values": [
      {
        "field": "email",
        "value": "jrose@acme.com"
      }
    ]
  }
}
```

#### Data visibility changed

```json
{
  "data": {
    "email": "jrose@acme.com",
    "first_name": "Juliet",
    "last_name": "Rose",
    "country": "<<REDACTED>>",
    "user_id": "0e223bd4-1324-49ff-b948-122eeaaa42d1"
  },
  "redacted": ["country"],
  "meta": {
    "operation": "visibility_update",
    "lookup_values": [
      {
        "field": "email",
        "value": "jrose@acme.com"
      }
    ]
  }
}
```

#### Data deleted

```json
{
  "data": {
    "user_id": "0e223bd4-1324-49ff-b948-122eeaaa42d1"
  },
  "meta": {
    "operation": "delete",
    "lookup_values": [
      {
        "field": "email",
        "value": "jrose@acme.com"
      }
    ]
  }
}
```
