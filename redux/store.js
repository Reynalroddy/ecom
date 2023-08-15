// "use client"

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
export function makeStore() {
    return configureStore({
      reducer: {
        cart: cartReducer,
        user: userReducer
      },
    });
  }
  
  export const store = makeStore();
// export const configureStore({
//     reducer: {
//     //   header: headerReducer,
//     //   product: productReducer,
//       cart: cartReducer,
//     //   user: userReducer,
//     //   order: orderReducer,
//     //   orderDet: orderDetailReducer,
//     //   summary: summaryReducer,
//     },
//   });