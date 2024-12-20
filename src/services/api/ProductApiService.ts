import BaseApiService from "@/services/api/BaseApiService";
import {ApiProductGetAllResponse} from "@/models/api/ProductApiService";

export class ProductApiService extends BaseApiService {

    async getAll() {
        const resource = '/products'
        return await this.connect<ApiProductGetAllResponse>(resource, 'get')
    }
}

export default function useProductApiService() {
    return new ProductApiService()
}