"use-client"

import {store} from "./store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";
const Providers = ({ children }) => {
//   return (
//     <Provider store={store}>{children}</Provider>
//   )
return <Provider store={store}>
    <ToastContainer/>
    <SessionProvider>{children}</SessionProvider>
    </Provider>;

}

export default Providers 