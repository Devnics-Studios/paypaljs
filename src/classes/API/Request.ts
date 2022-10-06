import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export default class Request {

    private Axios: AxiosInstance;

    constructor() {
        this.Axios = Axios.create();
    }

    configure(token: string) {
        this.Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return this;
    }

    post(url: string, data?: any, config?: AxiosRequestConfig<any>) {
       return this.Axios.post(url, data, config);
    }

    get(url: string, config?: AxiosRequestConfig<any>) {
        return this.Axios.post(url, config);
     }
}