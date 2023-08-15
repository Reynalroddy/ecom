
"use client"
import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";
import { InputMask } from "primereact/inputmask";
import { classNames } from "primereact/utils";
import { InputNumber } from "primereact/inputnumber";
import { Password } from "primereact/password";

import { Divider } from "primereact/divider";
import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { saveShippingAddy,savePayment } from "../redux/cartSlice";
import { toast } from 'react-toastify';

const Checkout = () => {

    const { cartItem,total,shippingAddress,paymentMethod } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const amountWithoutTax = cartItem?.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      );
    
      const taxAmount = (amountWithoutTax * 0.15).toFixed(2);
    
      const totalAmount = (Number(amountWithoutTax) + Number(taxAmount)).toFixed(2);
    const [selectedValue, setSelectedValue] = useState("");
    const [selectedValue2, setSelectedValue2] = useState(paymentMethod || 'cash');


    const [fullName, setFullName] = useState(shippingAddress.fullName || "");
    const [address, setAddress] = useState(shippingAddress.address || "");
    const [city, setCity] = useState(shippingAddress.city || "");
    const [country, setCountry] = useState(shippingAddress.country || "");
    const [postalCode, setPostalCode] = useState(
      shippingAddress.postalCode || ""
    );


    const [checked1, setChecked1] = useState(true);

    // const addy = { fullName, address, city, postalCode, country };

    const handleShipSubmit = () => {
        const addy = { fullName, address, city, postalCode, country };
      dispatch(saveShippingAddy(addy));
      localStorage.setItem("shippingAddy", JSON.stringify(addy));
      toast.success(`saved.`, {
        position: "top-left",
      });
    //   navigate("/payment");
    };

    const handlePaySubmit = () => {
      
      dispatch(savePayment(selectedValue2));
      localStorage.setItem("payMode", JSON.stringify(selectedValue2));
      toast.success(`saved.`, {
        position: "top-left",
      });
    //   navigate("/payment");
    };

    const quantities1 = [1, 1, 1];

    // const quantities2 = [1, 1];

    // const card2 = "**** **** **** 1235";

    const address1 = "Jacob Obrechtstraat 5, 1071 KC Amsterdam The Netherlands";

    const address2 = "Jacob Obrechtstraat 6, 1071 KC Amsterdam The Netherlands";

    // const [selectedAddress, setSelectedAddress] = useState(address1);

    const ccRegex = RegExp(/[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/);

    const cvcRegex = RegExp(/^[0-9]{3,4}$/);

    const expRegex = RegExp(/[0-9]{2}\/[0-9]{2}$/);
    console.log(cartItem)
  return (
  <div className="surface-ground px-4 py-8 md:px-6 lg:px-8">
    <div className="grid -mr-3 -ml-3">
        <div className="col-12 lg:col-8 p-4">
            <div className="surface-card grid formgrid p-fluid border-round shadow-2 p-4">
              
                <div className="col-12 mt-4 lg:mt-0 mb-4">
                    <div className="text-900 font-medium text-xl">Shipping</div>
                </div>
                <div className="col-12 field mb-0">
                    <label htmlFor="country2" className="text-900 font-medium mb-3">Country</label>
                    <input inputid="country2" type="text" className="p-inputtext w-full mb-3" value={country} onChange={(e)=>setCountry(e.target.value)} />
                </div>
                <div className="col-12 lg:col-6 field mb-0">
                    <label htmlFor="name2" className="text-900 font-medium mb-3">Name</label>
                    <input inputid="name2" type="text" className="p-inputtext w-full mb-3"  value={fullName} onChange={(e)=>setFullName(e.target.value)} />
                </div>
                {/* <div className="col-12 lg:col-6 field mb-0">
                    <label htmlFor="surname2" className="text-900 font-medium mb-3">Surname</label>
                    <input inputid="surname2" type="text" className="p-inputtext w-full mb-3" />
                </div> */}
                <div className="col-12 field mb-0">
                    <label htmlFor="address3" className="text-900 font-medium mb-3">Apartment, Suite, etc.</label>
                    <input inputid="address3" type="text" className="p-inputtext w-full mb-3" value={address} onChange={(e)=>setAddress(e.target.value)}  />
                </div>
                <div className="col-12 lg:col-6 field mb-0">
                    <label htmlFor="pc2" className="text-900 font-medium mb-3">Postal Code</label>
                    <input inputid="pc2" type="text" className="p-inputtext w-full mb-3" value={postalCode} onChange={(e)=>setPostalCode(e.target.value)} />
                </div>
                <div className="col-12 lg:col-6 field mb-0">
                    <label htmlFor="city2" className="text-900 font-medium mb-3">City</label>
                    <input inputid="city2" type="text" className="p-inputtext w-full mb-3" value={city} onChange={(e)=>setCity(e.target.value)} />
                </div>
                <div className="col-12 lg:col-6 field mb-0">
                     <Button className="p-button-primary w-full mt-3" label="save shipping" onClick={handleShipSubmit} />
                </div>
                <Divider className="w-full px-2 mb-3" />
                {/* <div className="text-900 font-medium text-xl mt-4 lg:mt-0 mb-4 px-2">Shipping Method</div> */}
                {/* <div className="col-12 flex flex-column lg:flex-row field">
                    <div onClick={() => setSelectedValue('UPS')} className={classNames('flex justify-content-between p-3 border-round border-1 surface-border w-full mr-3 hover:border-primary cursor-pointer', { 'border-primary surface-50': selectedValue === 'UPS' })}>
                        <div className="mr-3 lg:mr-0">
                            <div className="text-900 font-bold mb-2">UPS</div>
                            <span className="text-600">Delivery: Tomorrow</span>
                        </div>
                        <div className="flex justify-content-between align-items-center">
                            <span className="text-primary mr-2 font-medium">$9.00</span>
                            <RadioButton name="ups" value="UPS" onChange={(e) => setSelectedValue(e.value)} checked={selectedValue === 'UPS'} />
                        </div>
                    </div>
                    <div onClick={() => setSelectedValue('FedEx')} className={classNames('flex justify-content-between p-3 mt-3 lg:mt-0 border-round border-1 surface-border w-full hover:border-primary cursor-pointer', { 'border-primary surface-50': selectedValue === 'FedEx' })}>
                        <div className="mr-3 lg:mr-0">
                            <div className="text-900 font-bold mb-2">FedEx</div>
                            <span className="text-600">Delivery: Next Week</span>
                        </div>
                        <div className="flex justify-content-between align-items-center">
                            <span className="text-primary mr-2 font-medium">$1.00</span>
                            <RadioButton name="fedex" value="FedEx" onChange={(e) => setSelectedValue(e.value)} checked={selectedValue === 'FedEx'} />
                        </div>
                    </div>
                </div> */}
                {/* <Divider className="w-full px-2 mb-3" /> */}
                <div className="text-900 font-medium text-xl mt-4 lg:mt-0 mb-4 px-2">Payment</div>
                <div className="col-12 mb-4">
                
                    <div onClick={() => setSelectedValue2('creditcard')} className={classNames('p-3 border-x-1 surface-border', { 'border-primary surface-50': selectedValue2 === 'creditcard' })}>
                        <RadioButton name="creditCard" value="creditcard" onChange={(e) => setSelectedValue2(e.value)} id="creditCard" checked={selectedValue2 === 'creditcard'} />
                        <label htmlFor="creditCard" className="text-900 ml-3">Credit Card</label>
                    </div>
                    <div onClick={() => setSelectedValue2('cash')} className={classNames('p-3 border-1 border-round-bottom surface-border', { 'border-primary surface-50': selectedValue2 === 'cash' })}>
                        <RadioButton name="cash" value="cash" onChange={(e) => setSelectedValue2(e.value)} id="bank" checked={selectedValue2 === 'cash'} />
                        <label htmlFor="cash" className="text-900 ml-3">cash</label>
                    </div>

                    <div className="col-12 lg:col-6 field mb-0">
                     <Button className="p-button-primary w-full mt-3" label="save shipping" onClick={handlePaySubmit} />
                </div>
                </div>
               
            </div>
        </div>
        <div className="col-12 lg:col-4 p-4">
            <div className="surface-card border-round shadow-2 p-5">
                <div className="flex justify-content-between align-items-center border-bottom-1 pb-3 surface-border">
                    <span className="text-900 font-medium text-lg lg:text-xl"><i className="pi pi-shopping-cart text-xl mr-2"></i>Your Order ({cartItem.length})</span>
                    <a tabIndex="0" className="text-600 font-medium cursor-pointer hover:text-primary">Edit Cart</a>
                </div>
                {
                    cartItem.map((item,i)=>{
return   <div className="flex flex-column lg:flex-row flex-wrap lg:align-items-center py-3 my-3 border-bottom-1 surface-border" key={i}>
{/* <img src="assets/images/blocks/ecommerce/checkoutform/checkoutform-1-1.png" className="w-8rem h-8rem flex-shrink-0 mb-3" /> */}
<Image src={
      item?.images[0]
        ? item?.images[0].url
        : "/images/default.png"
    } width='130' height='130' className=" flex-shrink-0 mb-3"/>
<div className="flex-auto lg:ml-3">
    <div className="flex align-items-center justify-content-between mb-3">
        <span className="text-900 font-medium">{item?.name}</span>
        <span className="text-900 font-bold">${item?.price} (x{item?.quantity})</span>
    </div>
   
   
</div>
</div>

                    })
              

}
                <div className="py-2 mt-3 border-bottom-1 surface-border">
                    <div className="flex justify-content-between align-items-center mb-3">
                        <span className="text-900">Subtotal</span>
                        <span className="text-900">${amountWithoutTax}</span>
                    </div>
                    <div className="flex justify-content-between align-items-center mb-3">
                        <span className="text-900">Tax</span>
                        <span className="text-900">{taxAmount}</span>
                    </div>
                    <div className="flex justify-content-between align-items-center mb-3">
                        <span className="text-900">Total</span>
                        <span className="text-900 font-bold">${totalAmount}</span>
                    </div>
                </div>
              
                <Button className="p-button-primary w-full mt-3" label="Place Order" />
            </div>
        </div>
    </div>
</div>
  )
}

export default Checkout;