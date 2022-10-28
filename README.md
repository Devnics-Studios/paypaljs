# PayPalJS
Unofficial v2 wrapper for the PayPal API.

# Getting Started
<pre>
const paypal = new PayPal({
    clientId: "",
    clientSecret: "",
    mode: "SANDBOX",
});

paypal.authenticate((newPayPalInstance) => {
})
</pre>
The newPayPalInstance has to be used for following requests.

# Invoicing
Methods Available:
<pre>
    paypal.Invoicing.createDraftInvoice(data)
    paypal.Invoicing.sendInvoice(invoiceId, data)
</pre>

# Contributing
Create a pull request on GitHub.