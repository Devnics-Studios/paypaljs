import PayPal from "../PayPal";
import InvoiceRequestData from "../Types/InvoiceRequestData";

export default class Invoicing {

    private paypal: PayPal;

    constructor(paypal: PayPal) {
        this.paypal = paypal;
    }
    
    createDraftInvoice(data: InvoiceRequestData) {
        return new Promise((resolve, reject) => {
            this.paypal.Request.post("/v2/invoicing/invoices", data)
            .then(res => {
                resolve(res.data as InvoiceRequestData);
            })
            .catch(err => {
                reject(err);
            })
        })
    }

    sendInvoice(data: InvoiceRequestData) {
        
    }
}