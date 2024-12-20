import React, {createContext} from "react";
import useProductApiService, {ProductApiService} from "@/services/api/ProductApiService";
import useNotificationService, {NotificationService} from "@/services/Notification";


export const ApiServicesContext = createContext<{
    ProductApiService: ProductApiService,
    NotificationService: NotificationService,
}>({
    ProductApiService: ProductApiService,
    NotificationService: NotificationService,
})

export function ApiServicesContextProvider({children}: {
    children?: React.ReactNode
}) {
    const ProductApiSrv = useProductApiService()
    const NotificationSrv = useNotificationService()

    return (
        <ApiServicesContext.Provider
            value={{
                ProductApiService: ProductApiSrv,
                NotificationService: NotificationSrv,
            }}>
            {children}
        </ApiServicesContext.Provider>
    );
}