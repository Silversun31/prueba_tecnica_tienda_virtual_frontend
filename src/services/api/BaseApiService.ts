import axios, {AxiosResponse} from "axios";
import {API_URL} from "../../../app.config";

export default class BaseApiService {
    protected readonly BASE_URL: string = API_URL;


    protected encrypt(data: string): string {
        return data;
    }

    protected async connect<T>(resource: string, method: 'get' | 'post' | 'put' | 'delete' | 'patch' = 'post', data?: any): Promise<AxiosResponse<T>> {
        const config = {
            method,
            url: `${this.BASE_URL}${resource}`,
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(this.encrypt(data))
        };
        return axios(config);
    }

}