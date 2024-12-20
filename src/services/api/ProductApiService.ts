import BaseApiService from "@/services/api/BaseApiService";
import {
    ApiProductGetAllResponse,
    ApiProductGetByIdResponse,
    ApiProductGetCategoriesResponse
} from "@/models/api/ProductApiService";

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

    async getById(id: number) {
        const resource = `${this.SERVICE_URL}/${id}`
        return await this.connect<ApiProductGetByIdResponse>(resource, 'get')
    }
}

export default function useProductApiService() {
    return new ProductApiService()
}