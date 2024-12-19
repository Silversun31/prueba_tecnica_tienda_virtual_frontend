import axios, {AxiosResponse} from "axios";
import {API_URL} from "../../../app.config";

export default class BaseApiService {
    private readonly BASE_URL: string = API_URL;


    private encrypt(data: string): string {
        return data;
    }

    private async connect(resource: string, method: 'post' = 'post', data: any): Promise<AxiosResponse<any>> {
        return await axios.post(`${this.BASE_URL}${resource}`, JSON.stringify(data), {
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            }
        });
    }

}