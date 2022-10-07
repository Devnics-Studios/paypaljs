import PayPal from "../PayPal";
import InvoiceRequestData from "../Types/InvoiceRequestData";

export default class Invoicing {

    private paypal: PayPal;

    constructor(paypal: PayPal) {
        this.paypal = paypal;
    }
    
    create(data: InvoiceRequestData) {

    }
}