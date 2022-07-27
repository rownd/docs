# 🚀 Getting started

Deploying Rownd should be a relatively straightforward process. It typically involves a few steps:

* Select the initial user profile fields in the Rownd dashboard
* Deploy the Rownd snippet to your websites
* (optional) Add the Rownd SDK to front-end and back end apps/servers

{% hint style="info" %}
By deploying Rownd to your main website, blog, docs, etc, you can begin onboarding users even before having an app. For example, if you're creating a waitlist for your product, Rownd can manage the sign-up process. You can even leverage Rownd to gradually on-ramp users to your app once it's ready for beta testers.
{% endhint %}

### Select initial user profile fields

1. Open the Rownd dashboard
2. Create your first application if prompted and select or create the desired profile fields:\
   ![](<../.gitbook/assets/image (2) (1).png>)
3. After the app is created, a Javascript code snippet will be generated. Click the copy button to store it in your clipboard.

### Deploy the Rownd snippet to your websites

After copying the code snippet, you'll need to add it to your website(s). Most website builder software or content management systems (CMS) have an option to embed "custom HTML" or "custom code" in your site's pages. We usually recommend placing the snippet just before the closing `</body>` tag.

Here are links to instructions for a few popular hosting providers. See our [Javascript SDK reference ](../sdk-reference/web/javascript-browser.md)for more details.

* [Netlify](https://docs.netlify.com/site-deploys/post-processing/snippet-injection/)
* [Webflow](https://university.webflow.com/lesson/custom-code-in-the-head-and-body-tags)
* [Weebly](https://www.weebly.com/app/help/us/en/topics/descriptions-and-keywords) (see the section on "footer code")
* [Wix](https://support.wix.com/en/article/wix-editor-adding-code-to-your-site#embed-custom-code)
* [Squarespace](https://support.squarespace.com/hc/en-us/articles/205815908)

### Add the Rownd SDK to front-end and back-end apps/servers

If you have front-end web apps built using common frameworks like React, Vue, Angular, etc, you'll want to use our specific [web SDKs](broken-reference) for those codebases. Our SDKs provide tight integrations to your user experience so users can seamlessly transition from one part of your product to the next—personalization included.

Additionally, if you're deploying back-end code to servers or are using a serverless platform like Lambda or Vercel to implement custom logic, you'll likely need to accept and validate Rownd authentication tokens. Leverage our selection of [back-end SDKs](broken-reference) to easily handle this use case.

### Getting help

The Rownd team is on call to answer questions, provide guidance, and help you every step of the way! [Get in touch](https://rownd.io/contact) if you need assistance for any reason.
