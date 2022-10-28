export interface Invoice {
    detail: InvoiceDetail;
    additional_recipients?: EmailAddress[];
    amount?: AmountSummaryDetail;
    configuration?: Configuration;
    due_amount?: Money;
    gratuity?: Money;
    id?: string;
    invoicer?: InvoicerInfo;
    items?: Item[];
    links?: LinkDescription[];
    parent_id?: string;
    payments?: Payment;
    primary_recipients?: RecipientInfo[];
    refunds?: Refunds;
    status?: InvoiceStatus;
}

export type InvoiceStatus = "DRAFT" | "SENT" | "SCHEDULED" | "PAID" | "MARKED_AS_PAID" | "CANCELLED" |"REFUNDED" | "PARTIALLY_PAID" | "PARTIALLY_REFUNDED" | "MARKED_AS_REFUNDED" | "UNPAID" | "PAYMENT_PENDING"

export interface RefundDetail {
    method?: PaymentMethod;
    amount?: Money;
    refund_date?: string;
    refund_id?: string;
    type?: "PAYPAL" | "EXTERNAL";
}

export interface Refunds {
    refund_amount?: Money;
    transactions?: RefundDetail[]
}

export interface RecipientInfo {
    billing_info?: BillingInfo;    
    shipping_info?: ContactInformation;
}

export interface BillingInfo {
    additional_info?: string;
    email_address?: string;
    language?: string;
    phones?: PhoneDetail[];
}

export interface Payment {
    paid_amount?: Money;
    transactions?: PaymentDetail[];
}

export type PaymentMethod = "BANK_TRANSFER" | "CASH" | "CHECK" | "CREDIT_CARD" | "DEBIT_CARD" | "PAYPAL" | "WIRE_TRANSFER" | "OTHER";

export interface PaymentDetail {
    method: PaymentMethod;
    amount?: Money;
    note?: string;
    payment_date?: string;
    payment_id?: string;
    shipping_info?: ContactInformation;
}

export interface ContactInformation {
    business_name?: string;
    address?: AddressPortable;
    name?: Name;
}

export interface AddressPortable {
    country_code: string;
    address_details?: AddressDetails;
    address_line_1?: string;
    address_line_2?: string;
    address_line_3?: string;
    admin_area_1?: string;
    admin_area_2?: string;
    admin_area_3?: string;
    admin_area_4?: string;
    postal_code?: string;
}

export interface AddressDetails {
    building_name?: string;
    delivery_service?: string
    street_name?: string;
    street_number?: string;
    street_type?: string;
    sub_building?: string;
}

export interface Name {
    full_name?: string;
    given_name?: string;
    middle_name?: string;
    prefix?: string;
    suffix?: string;
    surname?: string
}

export interface LinkDescription {
    href: string;
    rel: string;
    method?: LinkMethod;
}

export type LinkMethod = "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "CONNECT" | "OPTIONS" | "PATCH"

export interface Item {
    name: string;
    quantity: string;
    unit_amount: Money;
    discount?: Discount;
    id?: string;
    item_date?: string;
    tax?: Tax;
    unit_of_measure?: UnitOfMeasure;
}

export type UnitOfMeasure = "QUANTITY" | "HOURS" | "AMOUNT";

export interface InvoicerInfo {
    additional_notes?: string;
    email_address?: string;
    logo_url?: string;
    phones?: PhoneDetail[]
    tax_id?: string;
    website?: string;
}

export interface PhoneDetail {
    country_code: string;
    national_number: string;
    extension_number?: string;
    phone_type?: PhoneType;
}

export type PhoneType = "FAX" | "HOME" | "MOBILE" | "OTHER" | "PAGER";

export interface Configuration {
    allow_tip?: boolean;
    partial_payment?: PartialPayment;
    tax_calculated_after_discount?: boolean;
    tax_inclusive?: boolean;
    template_id?: string;
}

export interface PartialPayment {
    allow_partial_payment?: boolean;
    minimum_amount_due?: Money;
}

export interface InvoiceDetail {
    currency_code: string;
    attachments?: FileReference[]
    memo?: string;
    note?: string;
    reference?: string;
    terms_and_conditions?: string;
    invoice_date?: string;
    invoice_number?: string;
    metadeta?: Metadata;
    payment_term?: InvoicePaymentTerm;
}

export interface FileReference {
    content_type?: string;
    create_time?: string;
    id?: string;
    reference_url?: string;
    size?: string;
}

export interface Metadata {
    create_time?: string;
    created_by?: string;
    last_update_timestring?: string;
    last_updated_by?: string;
    cancel_time?: string;
    cancelled_by?: string;
    created_by_flow?: string;
    first_sent_time?: string;
    invoicer_view_url?: string;
    last_sent_by?: string;
    last_sent_time?: string;
    recipient_view_url?: string
}

export interface InvoicePaymentTerm {
    term_type?: string;
    due_date?: string;
}

export interface EmailAddress {
    email_address: string;
}

export interface AmountSummaryDetail {
    breakdown?: AmountWithBreakdown;
    currency_code?: string;
    value?: string;
}

export interface AmountWithBreakdown {
    custom?: CustomAmount;
    discount?: AggregatedDiscount;
    item_total?: Money;
    shipping?: ShippingCost;
    tax_total?: Money;
}

export interface CustomAmount {
    label: string;
    amount?: Money;
}

export interface AggregatedDiscount {
    invoice_discount?: Discount;
    item_discount?: Money;
}

export interface Discount {
    amount?: Money;
    percent?: string;
}

export interface ShippingCost {
    amount?: Money;
    tax?: Tax;
}

export interface Tax {
    name: string;
    percent: string;
    amount?: Money;
}

export interface Money {
    currency_code: string;
    value: string;
}