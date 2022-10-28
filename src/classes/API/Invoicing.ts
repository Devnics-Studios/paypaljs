import PayPal from "../PayPal";
import { EmailAddress, Invoice, LinkDescription } from "../Types/Types";

export default class Invoicing {
  private paypal: PayPal;

  constructor(paypal: PayPal) {
    this.paypal = paypal;
  }

  createDraftInvoice(invoice: Invoice) {
    return new Promise<LinkDescription>((resolve, reject) => {
      this.paypal.Request.post("/v2/invoicing/invoices", invoice)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  sendInvoice(
    invoiceId: string,
    data: {
      additional_recipients?: EmailAddress[];
      note?: string;
      send_to_invoicer?: boolean;
      send_to_recipient?: boolean;
      subject?: string;
    }
  ) {
    return new Promise<LinkDescription[]>((resolve, reject) => {
      this.paypal.Request.post(`/v2/invoicing/invoices/${invoiceId}/send`, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
