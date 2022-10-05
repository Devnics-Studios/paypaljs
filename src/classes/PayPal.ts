import axios from "axios";

export default class PayPal {

    private options: PayPalOptions;
    private url = "https://api-m.paypal.com/";
    private token: string = null;

    constructor(options: PayPalOptions) {
        this.options = options;
        this.url = options.mode == "LIVE" ? this.url : "https://api-m.sandbox.paypal.com/";
    }

    async authenticate() {
        this.refreshToken().then(isAuthenticated => {
            if (isAuthenticated) return;
            throw new Error("Failed to authenticate, PayPal credentials invalid.");
        })
    }

    private async refreshToken(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            let target = this.url + "/v1/oauth2/token";

            axios({
                url: target,
                method: "get",
                auth: {
                    username: this.options.clientId,
                    password: this.options.clientSecret
                },
                data: "grant_type=client_credentials"
            })
                .then(res => {
                    this.token = res.data["access_token"];
                    resolve(true)
                })
                .catch(() => {
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