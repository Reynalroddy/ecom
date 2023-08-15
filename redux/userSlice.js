import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: 
    // localStorage.getItem("user")
    //   ? JSON.parse(localStorage.getItem("user"))
    //   :
       null,
    // token: localStorage.getItem("token"),

    isLoading: false,
    error: false,
  },

  reducers: {
    registerStart: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    registerSuccess: (state, action) => {
      return {
        ...state,
        isLoading: false,
       error:false
      };
    },
    registerFailure: (state) => {
      return {
        ...state,
        isLoading: false,
        error:true
      };
    },
 

    setUser:  (state, action) => {
        return {
          ...state,
          userInfo: action.payload,
        };
      },

    logout: (state) => {
      return {
        ...state,
        userInfo: null,
        token: null,

        isLoading: false,
      };
    },
    updateUserStart: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    updateUserSuccess: (state, action) => {
      return {
        ...state,
        isLoading: false,
       
      };
    },
    updateUserFailure: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    },
  },
});

export const {
  registerStart,
  registerSuccess,
  registerFailure,
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  setUser,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} = userSlice.actions;

export default userSlice.reducer;