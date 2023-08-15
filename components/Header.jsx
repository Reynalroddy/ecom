
"use client"

import React, { useRef, useState,useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { StyleClass } from 'primereact/styleclass';
import { Ripple } from 'primereact/ripple';
import Image from 'next/image';
import Link from 'next/link';
import {Button} from "primereact/button"
import Search from './Search';
import { useDispatch, useSelector } from 'react-redux';
import { signOut, useSession } from "next-auth/react";
import { setUser } from '../redux/userSlice';
// import { InputText } from 'primereact/inputtext';
const Header = () => {
// const {} = useSelector;
const logoutHandler = () => {
    signOut();
  };
const dispatch = useDispatch();
const { cartItem } = useSelector((state) => state.cart);
const { userInfo } = useSelector((state) => state.user);
const [value,setValue] = useState('')
    const btnRef28 = useRef(null);
    const btnRef29 = useRef(null);
    const btnRef30 = useRef(null);


    const { data } = useSession();

    console.log(data);
  
    useEffect(() => {
        // const { data } = useSession();
      if (data) {
        dispatch(setUser(data?.user));
      }
    }, [data]);
  return (
    <div className="surface-overlay  flex relative lg:static justify-content-between" style={{ minHeight: '60px' }}>
                    <StyleClass nodeRef={btnRef28} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                        <a ref={btnRef28} className="p-ripple cursor-pointer inline-flex align-items-center px-3 lg:hidden text-700">
                            <i className="pi pi-bars text-2xl"></i>
                        </a>
                    </StyleClass>
                    <div className="hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
                        <ul className="flex list-none p-0 m-0 flex-column lg:flex-row">
                            <li className="h-full">
                                <Link href={'/'} className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 lg:border-left-none lg:border-bottom-2 border-blue-500 transition-colors transition-duration-150 py-3 lg:py-0 px-3 no-underline">
                                    <span className="pi pi-home mr-2"></span>
                                    <span className="font-medium">Home</span>
                                    <Ripple />
                                </Link>
                            </li>
                            <li className="h-full">
                                <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-500 transition-colors transition-duration-150 py-3 lg:py-0 px-3">
                                    <span className="pi pi-users mr-2"></span>
                                    <span className="font-medium">Customers</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="h-full">
                                <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-500 transition-colors transition-duration-150 py-3 lg:py-0 px-3">
                                    <span className="pi pi-calendar mr-2"></span>
                                    <span className="font-medium">Calendar</span>
                                    <Ripple />
                                </a>
                            </li>
                            <li className="h-full">
                                <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-500 transition-colors transition-duration-150 py-3 lg:py-0 px-3">
                                    <span className="pi pi-home mr-2"></span>
                                    <span className="font-medium">Stats</span>
                                    <Ripple />
                                </a>
                            </li>
                        </ul>
                    </div>

<Search/>
                    <StyleClass nodeRef={btnRef29} selector="@next" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
                        <a ref={btnRef29} className="p-ripple cursor-pointer inline-flex align-items-center px-3 lg:hidden text-700">
                            <i className="pi pi-ellipsis-v text-xl"></i>
                        </a>
                    </StyleClass>
                    <div className="hidden lg:flex lg:justify-content-end absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none">
                        <ul className="flex list-none p-0 m-0 flex-column lg:flex-row">
                            <li className="h-full relative">
                            <Link href='/cart'className="no-underline p-ripple cursor-pointer h-full inline-flex align-items-center text-600 py-3 lg:py-0 px-3 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-500 transition-colors transition-duration-150">
                                    <span className="pi pi-shopping-cart mr-2 lg:mr-0">({cartItem.length})</span>
                                    <span className="font-medium inline lg:hidden">basket</span>
                                    <Ripple />
                                </Link>
                            </li>

                            {
                                !userInfo?
                            <li className="h-full">
                                <Link href='/login' className="p-ripple no-underline cursor-pointer h-full inline-flex align-items-center text-600 py-3 lg:py-0 px-3 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-500 transition-colors transition-duration-150">
                                    {/* <span className="pi pi-inbox mr-2 lg:mr-0"></span> */}
                                    <span className="font-medium inline ">Login</span>
                                    <Ripple />
                                </Link>
                            </li>
                           :
                            <li className="h-full relative">
                                <StyleClass nodeRef={btnRef30} selector="@next" enterClassName="hidden" enterActiveClassName="scalein" leaveToClassName="hidden" leaveActiveClassName="fadeout" hideOnOutsideClick>
                                    <a ref={btnRef30} className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 py-3 lg:py-0 px-3 border-left-2 lg:border-left-none lg:border-bottom-2 border-transparent hover:border-500 transition-colors transition-duration-150">
                                       <Image src='/images/default.png' width='28' height='28'/>
                                       
                                        {/* <img src="assets/images/blocks/avatars/circle/avatar-f-1.png" className="lg:mr-0" style={{ width: '28px', height: '28px' }} /> */}
                                        <span className="mx-2 font-medium text-900">{userInfo?.name}</span>
                                        <i className="pi pi-angle-down"></i>
                                        <Ripple />
                                    </a>
                                </StyleClass>
                                <div className="hidden static lg:absolute w-full surface-overlay left-0 top-100 z-1 shadow-none lg:shadow-2 origin-top border-round pl-3 lg:pl-0">
                                    <ul className="list-none p-0 m-0">
                                        <li>
                                            <Link href='/me' className="p-ripple cursor-pointer h-full no-underline inline-flex align-items-center text-600 border-left-2 border-transparent hover:border-500 transition-colors transition-duration-150 p-3">
                                                <span className="pi pi-user mr-2"></span>
                                                <span className="font-medium">Profile</span>
                                                <Ripple />
                                            </Link>
                                        </li>
                                        <li>
                                            <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 border-transparent hover:border-500 transition-colors transition-duration-150 p-3">
                                                <span className="pi pi-cog mr-2"></span>
                                                <span className="font-medium">Settings</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li onClick={logoutHandler}>
                                            <a className="p-ripple cursor-pointer h-full inline-flex align-items-center text-600 border-left-2 border-transparent hover:border-500 transition-colors transition-duration-150 p-3">
                                                <span className="pi pi-sign-out mr-2"></span>
                                                <span className="font-medium">Sign Out</span>
                                                <Ripple />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
}
                        </ul>
                    </div>
                </div>
  )
}

export default Header