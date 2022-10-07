import { InvoiceAdditionalRecipient, InvoiceAttachment, InvoiceMetaData, InvoicePaymentTerm, InvoiceStatus } from "./InvoiceTypes";

export default interface InvoiceRequestData {
    detail: {
        currency_code: string;
        attachments?: InvoiceAttachment[], 
        memo?: string;
        note?: string;
        reference?: string;
        terms_and_conditions?: string;
        invoice_date?: string;
        invoice_number?: string;
        metadeta?: InvoiceMetaData,
        payment_term?: InvoicePaymentTerm
    },
    additional_recipients?: InvoiceAdditionalRecipient[],
    amount?: {
        breakdown?: {
            custom?: {},
            discount?: {},
            item_total?: {},
            shipping?: {},
            tax_total?: {}
        },
        currency_code?: string;
        value?: string;
    },
    configuration?: {},
    due_amount?: {},
    gratuity?: {},
    id?: {},
    invoicer?: {},
    items?: [],
    links?: [],
    parent_id?: string,
    payments?: {},
    primary_recipients?: {},
    refunds?: {},
    status?: InvoiceStatus
}