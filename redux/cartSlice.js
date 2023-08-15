"use client"

import { createSlice } from "@reduxjs/toolkit";
import { ACTION_RESTORE } from "next/dist/client/components/router-reducer/router-reducer-types";
// import { toast } from "react-toastify";
// import React,{createContext} from "react";
const checkWindow = (action) => {
  return typeof window !== 'undefined' ? action : null;
};

export const isBrowser = () => {
  return typeof window !== 'undefined'
}

export const nextLocalStorage = ()=> {
  if (isBrowser()) {
    return window.localStorage
  }
}
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: checkWindow(localStorage.getItem("cartItems"))
    ? JSON.parse(checkWindow(localStorage.getItem("cartItems")))
    : [],
  
    cartTotalQuantity: 0,
    total: 0,
    shippingAddress: 
    localStorage.getItem("shippingAddy")
      ? JSON.parse(localStorage.getItem("shippingAddy"))
      :
       {},
    paymentMethod: 
    localStorage.getItem("payMode") ||
     "", 
    isLoading: false,
  },

  reducers: {
    addToCart: (state, action) => {
      const it = action.payload;
// console.log(`item id: ${it._id}`)
      const existItem = state.cartItem.find((prod) => prod._id === it._id);
      // const existItem='guy'
      // console.log(it._id)
      if (existItem) {
        state.cartItem = state.cartItem.map((item) => {
          if (item._id === existItem._id) {
            return {...existItem,quantity:existItem.quantity + 1};
          }
          return item;
        });
   
      } else {
        state.cartItem = [...state.cartItem, {...it}];
     
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },


    removeFromCart: (state, action) => {
      const id = action.payload;
      const newCart = state.cartItem.filter((items) => items._id !== id);
      state.cartItem = newCart;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
      // toast.error(" product removed from cart", {
      //   position: "top-left",
      // });
    },

    incrementQuantity:(state,action) => {
      const it = action.payload;
      const itemPresent = state.cartItem.find((item) => item._id === it._id);
      if (itemPresent) {
        state.cartItem = state.cartItem.map((item) => {
          if (item._id === itemPresent._id) {
            return {...itemPresent,quantity:it.quantity};
          }
          return item;
        });
   
      } else {
        state.cartItem = [...state.cartItem, {...it}];
     
      }
       localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
  },
  decrementQuantity:(state,action) => {
      const itemPresent = state.cartItem.find((item) => item.id === action.payload.id);
    
     
      if(itemPresent.quantity === 1){
        itemPresent.quantity = 0;
        const removeItem = state.cartItem.filter((item) => item.id !== action.payload.id);
        state.cartItem = removeItem;
    }else{
      state.cartItem = state.cartItem.map((item) => {
        if (item.id === itemPresent.id) {
            return {...itemPresent,quantity:itemPresent.quantity - 1};
          }
        
        return item;
      });
        
    }
    localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
  },
  cleanCart:(state) => {
      state.cartItem = [];
  },
    getTotals: (state, action) => {
      let tot= state.cartItem.reduce(
        (acc, curr) => {
          let tot = curr.quantity * curr.price;
          acc+= tot;
          return acc;
        },
       0
      );

      tot = parseFloat(tot.toFixed(2));
      return {
        ...state,
        total:tot,
      };
    },
    saveShippingAddy: (state, action) => {
      return { ...state, shippingAddress: action.payload };
    },
    savePayment: (state, action) => {
      return { ...state, paymentMethod: action.payload };
    },
  },
});

        

export const getCartItems = (state) => state.cart.cartItem;
 
export const {
  addToCart,
  removeFromCart,
  getTotals,
  saveShippingAddy,
  savePayment,
  saveShippingAddySuc,
  clearCart,
  incrementQuantity,
  decrementQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
