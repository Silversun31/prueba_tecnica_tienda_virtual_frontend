"use client";

import React from 'react';
import {ApiServicesContextProvider} from "@/core/context/ApiService/ApiServicesContext";

const Providers = ({
                       children,
                   }: {
    children: React.ReactNode
}) => {

    return (
        <ApiServicesContextProvider>
            {children}
        </ApiServicesContextProvider>
    )
}

export default Providers;