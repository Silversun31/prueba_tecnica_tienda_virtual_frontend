import React, {createContext} from "react";
import useProductApiService, {ProductApiService} from "@/services/api/ProductApiService";


export const ApiServicesContext = createContext({
    ProductApiService: new ProductApiService(),
})

export function ApiServicesContextProvider({children}: {
    children?: React.ReactNode
}) {
    const ProductApiSrv = useProductApiService()

    return (
        <ApiServicesContext.Provider
            value={{
                ProductApiService: ProductApiSrv,
            }}>
            {children}
        </ApiServicesContext.Provider>
    );
}