import PayPal from "../PayPal";
import { Invoice } from "../Types/Types";

export default class Invoicing {

    private paypal: PayPal;

    constructor(paypal: PayPal) {
        this.paypal = paypal;
    }

    createDraftInvoice(invoice: Invoice) {
        return new Promise<Invoice>((resolve, reject) => {
            this.paypal.Request.post("/v2/invoicing/invoices", invoice)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err);
            })
        })
    }

    sendInvoice(invoice: Invoice) {
        
    }
    
}