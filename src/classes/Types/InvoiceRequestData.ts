import { InvoiceAdditionalRecipient, InvoiceAttachment, InvoiceItem, InvoiceMetaData, InvoicePaymentTerm, InvoiceStatus } from "./InvoiceTypes";
import { Discount, Money, PhoneDetail } from "./PayPalTypes";

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
            custom?: {
                label?: string;
                amount?: Money;
            },
            discount?: {
                invoice_discount?: Discount;
                item_discount?: Discount;
            },
            item_total?: Money;
            shipping?: {
                amount?: Money;
                tax?: {
                    name: string;
                    percent: string;
                    amount?: Money;
                }
            };
            tax_total?: Money;
        };
        currency_code?: string;
        value?: string;
    },
    configuration?: {
        allow_tip?: boolean;
        partial_payment?: {
            allow_partial_payment?: boolean;
            minimum_amount_due?: Money;
        };
        tax_calculated_after_discount?: boolean;
        tax_inclusive?: boolean;
        template_id?: string;
    };
    due_amount?: Money;
    gratuity?: Money;
    id?: string;
    invoicer?: {
        additional_notes?: string;
        email_address?: string;
        logo_url?: string;
        phones?: PhoneDetail[];
        tax_id?: string;
        website?: string;
    },
    items?: InvoiceItem[],
    links?: [],
    parent_id?: string,
    payments?: {},
    primary_recipients?: {},
    refunds?: {},
    status?: InvoiceStatus
}