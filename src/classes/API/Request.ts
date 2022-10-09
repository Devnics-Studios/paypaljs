import Axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export default class Request {

    private Axios: AxiosInstance;
    private url: string;

    constructor() {
        this.Axios = Axios.create();
    }

    configure(token: string, url: string) {
        this.Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        this.url = url;
        return this;
    }

    post(url: string, data?: any, config?: AxiosRequestConfig<any>) {
       return this.Axios.post(`${this.url}${url}`, data, config);
    }

    get(url: string, config?: AxiosRequestConfig<any>) {
        return this.Axios.post(url, config);
     }
}