
"use client" 
import React ,{useState,useEffect}from 'react'
import { Button } from 'primereact/button'; 
import Image from "next/image";
import { Ripple } from 'primereact/ripple';
import { Rating } from 'primereact/rating';
import Link from 'next/link';
import { addcart } from '../redux/supporters';
import { useDispatch,useSelector } from 'react-redux';
// impoort useDispatch
const Prooduct = ({item}) => {

  
  const [value, setValue] = useState(null);
  const [show, setShow] = useState(true);
  const dispatch = useDispatch()
  const { cartItem } = useSelector((state) => state.cart);
  const existItem = cartItem.find((prod) => item._id === prod._id);
// console.log(existItem);

  return   <div className="col-12 md:col-6 lg:col-4 mb-3 lg:mb-0">
  <div className="p-2">
      <div className="relative">
      <Image
     src={
      item?.images[0]
        ? item?.images[0].url
        : "/images/default.png"
    }
    alt="product anme" className="" height="250" width="250"
    />
          {/* <img src="assets/images/blocks/ecommerce/productlist/product-list-1-1.png" className="w-full" /> */}
         
         {
          !existItem &&
          <button type="text" className="p-ripple p-link w-3rem h-3rem surface-0 hover:surface-200 border-circle shadow-2 inline-flex align-items-center justify-content-center absolute transition-colors transition-duration-300" style={{ top: '1rem', right: '1rem' }} onClick={()=>addcart(dispatch,item)}>
             
              {/* <i className="pi pi-heart text-2xl text-500"></i> */}
              <i className="pi pi-shopping-cart  text-2xl text-500"></i>
              <Ripple />
          </button>
}

      </div>
      <div className="flex align-items-center justify-content-between mt-3 mb-2">
      <Link
              href={`/product/${item?._id}`}
              className="no-underline "
            >
             <span className="text-900 font-medium text-xl"> {item?.name}</span> 
            </Link>
        
          <span className="text-900 text-xl ml-3">${item?.price}</span>
      </div>
      {/* <span className="text-600">Black</span> */}
      <Rating value={item?.ratings} readOnly cancel={false} className='mt-3' />
  </div>
</div>
}

export default Prooduct