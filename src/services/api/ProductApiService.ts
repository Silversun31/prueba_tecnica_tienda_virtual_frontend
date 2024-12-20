import BaseApiService from "@/services/api/BaseApiService";
import {ApiProductGetAllResponse, ApiProductGetCategoriesResponse} from "@/models/api/ProductApiService";

export class ProductApiService extends BaseApiService {
    protected readonly SERVICE_URL: string = '/products';

    async getAll() {
        const resource = this.SERVICE_URL
        return await this.connect<ApiProductGetAllResponse>(resource, 'get')
    }

    async getCategories() {
        const resource = `${this.SERVICE_URL}/categories`
        return await this.connect<ApiProductGetCategoriesResponse>(resource, 'get')
    }
}

export default function useProductApiService() {
    return new ProductApiService()
}