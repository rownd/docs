# Google Cloud Platform requirements

#### Prerequisites

Rownd leverages the power of the Google Cloud Platform to configure the automated sync between Rownd and the Firebase Realtime Database instance. As such, there are prerequisites that Rownd requires prior to setting up a new integration.

**Billing Account**

The GCP Project where your Realtime Database instance resides must have an associated billing account enabled. Go [here](https://cloud.google.com/billing/docs/how-to/manage-billing-account) for help establishing a billing account.

**Permissions**

Rownd will request access to your GCP account via OAuth 2.0 scopes during the authentication step. You must have and provide sufficient permissions to satisfy Rownds's request. See the \[Access Requirements]\(\{{< ref "\_index.md#access-requirements" >\}}) section below for a full list of permissions that Rownd needs.

#### Access Requirements

Rownd will need the following Google Cloud Platform permissions to create and run the Cloud Functions that alert Rownd of changes in your Firebase Realtime Database instance

| Permission Scope                                   | Reason                                                                            |
| -------------------------------------------------- | --------------------------------------------------------------------------------- |
| https://www.googleapis.com/auth/firebase.database  | Access to the Firebase Realtime Database API                                      |
| https://www.googleapis.com/auth/cloud-platform     | Creating a Rownd Service Account, Listing Projects, and Listing Project resources |
| https://www.googleapis.com/auth/iam                | Assigning IAM access policies and membership for the Rownd Service Account        |
| https://www.googleapis.com/auth/service.management | Enabling API Services in the Project                                              |
