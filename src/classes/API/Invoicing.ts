import PayPal from "../PayPal";

export default class Invoicing {

    private paypal: PayPal;

    constructor(paypal: PayPal) {
        this.paypal = paypal;
    }
    
}