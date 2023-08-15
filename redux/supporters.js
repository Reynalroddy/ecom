import axios from "axios";
import { toast } from "react-toastify";
import { addToCart,incrementQuantity,removeFromCart } from "./cartSlice";
import { registerFailure, registerStart, registerSuccess,setUser,updateUserFailure,updateUserStart,updateUserSuccess } from "./userSlice";
// impoort toast
export const addcart = async (dispatch, p,qua) => {
    if(qua){
        let q = parseInt(qua);
        // let pr = parseInt(p.price);
        const it = {
          ...p,quantity:q,
        };
        dispatch(addToCart(it));
        // console.log(it)

    }

    else{
        let q = 1;
        // let pr = parseInt(p.price);
        const it = {
          ...p,quantity:q,
        };
        dispatch(addToCart(it));
        // console.log(it)
    }
  };  

  export const increasecart = async (dispatch, p,q) => {
   if(q==0){
    const it = {
        ...p
      };
      dispatch(removeFromCart(it._id));
      // console.log(it)
   }
   else{
        const it = {
          ...p,quantity:parseInt(q),
        };
        dispatch(incrementQuantity(it));
        // console.log(it)

    }
    }

    export const registerUser = async (User, dispatch) => {
        dispatch(registerStart());
        try {
            // ${process.env.API_URL}/products
          const res = await axios.post(`${process.env.API_URL}/auth/register`, User);
        //   const { user, token } = res.data;
          dispatch(registerSuccess());
          /*  showAlerts(dispatch, {
            type: "success",
            text: "user logged in successfully..redirecting..",
          }); */
          toast.success(" registered", {
            position: "top-left",
          });
        //   addUserToLocalStorage({ user, token });
        } catch (error) {
          console.log(error);
          dispatch(registerFailure());
          /*  showAlerts(dispatch, {
            type: "danger",
            text: error.response.data.msg,
          }); */
          toast.error(`${error?.response?.data?.message}`, {
            position: "top-left",
          });
        }
        // clearAlert(dispatch);
      };


      const loadUser = async (router,dispatch) => {
        try {
          
    
          const { data } = await axios.get("/api/auth/session?update");
    
          if (data?.user) {
            dispatch(setUser(data.user));
            console.log(data.user);
            router.push("/me");
          }
        } catch (error) {
          toast.error(`${error?.response?.data?.message}`, {
            position: "top-left",
          });
        }
      };


    export const updateUser = async (formData, dispatch,router) => {
      dispatch(updateUserStart());
      try {
          // ${process.env.API_URL}/products
        const res = await axios.put(`${process.env.API_URL}/auth/me/update`,  formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        const { user } = res.data;
        if(user){
          loadUser(router,dispatch)
          dispatch(updateUserSuccess());
          // console.log(user)
          toast.success("updated.", {
            position: "top-left",
          });
        }
       
     
      } catch (error) {
        console.log(error);
        dispatch(updateUserFailure());
        toast.error(`${error?.response?.data?.message}`, {
          position: "top-left",
        });
      }
      // clearAlert(dispatch);
    };

  
    export const updatePassword = async (currentPassword,newPassword, router) => {
      // dispatch(updateUserStart());
      try {
          // ${process.env.API_URL}/products
        const res = await axios.put(`${process.env.API_URL}/auth/me/update_password`, {
          currentPassword,
          newPassword
        });
        const { success } = res.data;
        if(success){
          console.log('worked');
          router.replace('/me')
          toast.success("updated password.", {
            position: "top-left",
          });
        }
       
     
      } catch (error) {
        console.log(error);
        // dispatch(updateUserFailure());
        toast.error(`${error?.response?.data?.message}`, {
          position: "top-left",
        });
      }
      // clearAlert(dispatch);
    };