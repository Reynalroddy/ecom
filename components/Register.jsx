"use client"

import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { registerUser } from '../redux/supporters';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const reg= ()=>{
        console.log(email , password, name);
if(!email || !password || !name){
    toast.error(" fill all input.", {
        position: "top-left",
      });
      return;
}
let user={

    email , password, name
}
console.log(user)
registerUser(user,dispatch)
    }
  

  return (
    <div className='flex align-items-center justify-content-center pt-8'>
    <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6 ">
    <div className="text-center mb-5">
        {/* <img src="assets/images/blocks/logos/hyper.svg" alt="hyper" height={50} className="mb-3" /> */}
        <div className="text-900 text-3xl font-medium mb-3">Book it</div>
        <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
        <span className="text-600 font-medium line-height-3">Don't have an account?</span>
        <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
    </div>

    <div>
        <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
        <InputText type="text" className="w-full mb-3" onChange={(e)=>setEmail(e.target.value)} />

        <label htmlFor="name" className="block text-900 font-medium mb-2">Name</label>
        <InputText type="text" className="w-full mb-3" onChange={(e)=>setName(e.target.value)} />
        <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
        <InputText type="password" className="w-full mb-3" onChange={(e)=>setPassword(e.target.value)} />

        {/* <div className="flex align-items-center justify-content-between mb-6">
            <div className="flex align-items-center">
                <Checkbox id="rememberme" className="mr-2" checked={checked1} onChange={(e) => setChecked1(e.checked)} />
                <label htmlFor="rememberme">Remember me</label>
            </div>
            <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
        </div> */}

        <Button label="Create user" icon="pi pi-user" className="w-full" onClick={reg} />
    </div>
</div>
  </div>
  )
}

export default Register