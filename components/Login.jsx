"use client"

import React, { useState,useEffect } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import { registerUser } from '../redux/supporters';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { signIn } from "next-auth/react";
import { useRouter,useSearchParams } from "next/navigation";
import Link from 'next/link';
import { parseCallbackUrl } from '../helpers/helpers';
const Login = () => {
    const params = useSearchParams();
    const callBackUrl = params.get("callbackUrl");
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const dispatch = useDispatch();

    const reg= async ()=>{
        console.log(email , password);
if(!email || !password ){
    toast.error(" fill all input.", {
        position: "top-left",
      });
      return;
}

const data = await signIn("credentials", {
    email,
    password,
    callbackUrl: callBackUrl ? parseCallbackUrl(callBackUrl) : "/",
  });

  if (data?.error) {
    toast.error(`${data?.error}`, {
        position: "top-left",
      });
  }

  if (data?.ok) {
    toast.success(`login success.redirecting...`, {
        position: "top-left",
      });
      setTimeout(()=>{
        
        router.push("/");
      },1900)
    
  }

// console.log(data)
    }

  return (
    <div className='flex align-items-center justify-content-center pt-8'>
    <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6 ">
    <div className="text-center mb-5">
        {/* <img src="assets/images/blocks/logos/hyper.svg" alt="hyper" height={50} className="mb-3" /> */}
        <div className="text-900 text-3xl font-medium mb-3">Book it</div>
        <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        <span className="text-600 font-medium line-height-3">Don't have an account?</span>
        <Link href='/register' className="no-underline font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create account today!</Link>
    </div>

    <div>
        <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
        <InputText type="text" className="w-full mb-3" onChange={(e)=>setEmail(e.target.value)} />

        <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
        <InputText type="password" className="w-full mb-3" onChange={(e)=>setPassword(e.target.value)} />

        {/* <div className="flex align-items-center justify-content-between mb-6">
            <div className="flex align-items-center">
                <Checkbox id="rememberme" className="mr-2" checked={checked1} onChange={(e) => setChecked1(e.checked)} />
                <label htmlFor="rememberme">Remember me</label>
            </div>
            <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
        </div> */}

        <Button label="Login" icon="pi pi-user" className="w-full" onClick={reg} />
    </div>
</div>
  </div>
  )
}

export default Login