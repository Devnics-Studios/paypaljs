export type InvoiceStatus = "DRAFT" | "SENT" | "SCHEDULED" | "PAID" | "MARKED_AS_PAID" | "CANCELLED" | "REFUNDED" | "PARTIALLY_PAID" | "PARTIALLY_REFUNDED" | "MARKED_AS_REFUNDED" | "UNPAID" | "PAYMENT_PENDING"

export type InvoiceAttachment = {
    content_type?: string;
    create_time?: string;
    id?: string;
    reference_url?: string;
    size?: string;
}

export type InvoiceMetaData = {
    create_time?: string;
    created_by?: string;
    last_update_time?: string;
    last_updated_by?: string;
    cancel_time?: string;
    cancelled_by?: string;
    created_by_flow?: string;
    first_sent_time?: string;
    invoicer_view_url?: string;
    last_sent_by?: string;
    last_sent_time?: string;
    recipient_view_url?: string;
}

export type InvoicePaymentTerm = {
    term_type?: string;
    due_date?: string;
}

export type InvoiceAdditionalRecipient = {
    email_address?: string;
}[]