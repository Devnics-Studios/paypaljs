import axios from "axios";
import Invoicing from "./API/Invoicing";
import Request from "./API/Request";

export default class PayPal {

    private options: PayPalOptions;
    private url = "https://api.paypal.com";
    
    private token: string = null;
    
    public Request: Request = null;
    public Invoicing: Invoicing = new Invoicing(this);

    constructor(options: PayPalOptions) {
        this.options = options;
        this.url = options.mode == "LIVE" ? this.url : "https://api-m.sandbox.paypal.com";
    }

    authenticate() {
        return new Promise<PayPal>((resolve, reject) => {
            this.refreshToken().then(isAuthenticated => {
                if (isAuthenticated) return resolve(this);
                reject(new Error("Failed to authenticate, PayPal credentials invalid."));
            })
        })
    }

    private async refreshToken(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            let target = this.url + "/v1/oauth2/token";

            axios({
                url: target,
                method: "post",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                auth: {
                    username: this.options.clientId,
                    password: this.options.clientSecret
                },
                data: {
                    grant_type: "client_credentials"
                }
            })
                .then(res => {
                    new Promise<null>((resolve, reject) => {
                        setTimeout(() => {
                            this.refreshToken();
                            resolve(null);
                        }, res.data["expires_in"])
                    })
                    this.token = res.data["access_token"];
                    this.Request = new Request().configure(this.token, this.url);
                    resolve(true)
                })
                .catch(err => {
                    resolve(false);
                })
        })
    }

    
}

interface PayPalOptions {
    clientId: string;
    clientSecret: string;
    mode: "LIVE" | "SANDBOX";
}