import React from "react";
import { Provider } from "react-redux";
import store from "../config/appStore";

export const StoreProvider = ({ children }: React.PropsWithChildren) => {
    return <Provider store={store}>
        {children}
    </Provider>
};