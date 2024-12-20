import React, {createContext} from "react";
import useProductApiService, {ProductApiService} from "@/services/api/ProductApiService";

const ProductApiSrvInit = useProductApiService()

export const ApiServicesContext = createContext<{
    ProductApiService: ProductApiService,
}>({ProductApiService: ProductApiSrvInit})

export function ApiServicesContextProvider({children}: {
    children?: React.ReactNode
}) {
    return (
        <ApiServicesContext.Provider
            value={{
                ProductApiService: ProductApiSrvInit
            }}>
            {children}
        </ApiServicesContext.Provider>
    );
}