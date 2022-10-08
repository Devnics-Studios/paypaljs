export type Money = {
    currency_code?: string;
    value?: string;
}

export type Discount = {
    amount?: string;
    percent?: string;
}

export type PhoneDetail = {
    country_code: string;
    national_number: string;
    extension_number?: string;
    phone_type?: string;
}