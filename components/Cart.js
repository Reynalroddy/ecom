"use client"
import React,{useEffect} from 'react'
import { Button } from 'primereact/button'
import { useDispatch,useSelector } from 'react-redux';
import { increasecart } from '../redux/supporters';
// import { removeFromCart } from '../redux/cartSlice';
import Image from 'next/image';
import { InputNumber } from 'primereact/inputnumber';
import { removeFromCart,getTotals } from '../redux/cartSlice';
import Link from 'next/link';
const Cart = () => {


    const { cartItem,total } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const amountWithoutTax = cartItem?.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      );
    
      const taxAmount = (amountWithoutTax * 0.15).toFixed(2);
    
      const totalAmount = (Number(amountWithoutTax) + Number(taxAmount)).toFixed(2);
    
  return (
    <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
    <div className="flex flex-column align-items-center mb-6">
        <div className="text-900 text-4xl mb-4 font-medium">Your cart total is ${totalAmount}</div>
        <p className="text-600 font-medium text-xl mt-0 mb-4">NO FREE SHIPPING AND RETURN</p>
     <Link href='/checkout' className='no-underline'>
     <Button label="Check Out" />
     </Link>  
    </div>
    <ul className="list-none p-0 m-0">

        {cartItem.map((item,i)=>{


return  <li className="flex flex-column md:flex-row py-6 border-top-1 border-bottom-1 surface-border md:align-items-center" key={i}>
{/* <img src="assets/images/blocks/ecommerce/shoppingcart/shopping-cart-2-1.png" className="w-12rem flex-shrink-0 mx-auto md:mx-0" /> */}
<Image src={
      item?.images[0]
        ? item?.images[0].url
        : "/images/default.png"
    } width='280' height='280' className=" flex-shrink-0 mx-auto md:mx-0"/>
<div className="flex-auto py-5 md:pl-5">
    <div className="flex flex-wrap align-items-start sm:align-items-center sm:flex-row sm:justify-content-between surface-border pb-6">
        <div className="w-full sm:w-6 flex flex-column">
            <span className="text-900 text-xl font-medium mb-3">{item?.name}</span>
            <span className="text-600">Medium</span>
        </div>
        <div className="w-full sm:w-6 flex align-items-start justify-content-between mt-3 sm:mt-0">
            <div>
            <InputNumber showButtons buttonLayout="horizontal" min="0" inputClassName="w-3rem text-center" value={item?.quantity} onChange={(e) => increasecart(dispatch,item,e.value)}
        decrementButtonClassName="p-button-text" incrementButtonClassName="p-button-text" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
            </div>
            <div className="flex flex-column sm:align-items-end">
                <span className="text-900 text-xl font-medium mb-2 sm:mb-3">${item?.price} per item</span>
                <a  onClick={()=>{
                    dispatch(removeFromCart(item._id))
                }} className="cursor-pointer text-pink-500 font-medium text-sm hover:text-pink-600 transition-colors transition-duration-300" tabIndex="0">Remove</a>
            </div>
        </div>
    </div>
    <div className="flex flex-column">
        <span className="inline-flex align-items-center mb-3">
            <i className="pi pi-envelope text-600 mr-2"></i>
            <span className="text-600 mr-2">Order today.</span>
        </span>
        <span className="inline-flex align-items-center mb-3">
            <i className="pi pi-send text-600 mr-2"></i>
            <span className="text-600 mr-2">Delivery by <span className="font-bold">Dec 23.</span></span>
        </span>
        <span className="flex align-items-center">
            <i className="pi pi-exclamation-triangle text-600 mr-2"></i>
            <span className="text-600">Only 8 Available.</span>
        </span>
    </div>
</div>
</li>
        })}
      
       
        </ul>
    </div>
  )
}

export default Cart