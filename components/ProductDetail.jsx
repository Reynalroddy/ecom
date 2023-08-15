
"use client"
import React, { useState } from 'react';
import { classNames } from 'primereact/utils';
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { TabPanel } from 'primereact/tabview';
import { TabView } from 'primereact/tabview';
import { Rating } from 'primereact/rating';
// import { BreadCrumb } from 'primereact/breadcrumb';
import BreadCrumbs from './BreadCrumbs';
import { useDispatch,useSelector } from 'react-redux';
import { increasecart } from '../redux/supporters';
import Link from 'next/link';
const ProductDetail = ({product}) => {
    const [quantity1, setQuantity1] = useState(1);
    const [quantity2, setQuantity2] = useState(1);
    // const [selectedImageIndex1, setSelectedImageIndex1] = useState(0);
    const [selectedImageIndex2, setSelectedImageIndex2] = useState(0);
    const inStock = product?.stock>=1;
    const { cartItem } = useSelector((state) => state.cart);
    const existItem = cartItem.find((prod) => product._id === prod._id);
  console.log(existItem);
  const dispatch = useDispatch();
  
  return (
    <div className="surface-section px-4 py-8 md:px-6 lg:px-8">
       
         <BreadCrumbs it ={[{ label: `${product?.name.substring(0,100)}`}]}/>
    <div className="grid mb-7 mt-4">
        <div className="col-12 lg:col-6">
            <div className="flex">
                <div className="flex flex-column w-2 justify-content-between">
                    {
                       product?.images?.map((image, i) => {
                            return <img src={image.url} key={i}
                                className={classNames('w-full cursor-pointer border-2 border-round border-transparent transition-colors transition-duration-150', { 'border-primary': selectedImageIndex2 === i })}
                                onClick={() => setSelectedImageIndex2(i)} />
                        })
                    }
                </div>
                <div className="pl-3 w-10">
                    <img src={`${product?.images[selectedImageIndex2].url}`} className="w-full" />
                </div>
            </div>
        </div>
        <div className="col-12 lg:col-6 py-3 lg:pl-6">
            <div className="flex align-items-center text-xl font-medium text-900 mb-4">{product?.name}</div>
            <div className="flex align-items-center justify-content-between mb-5">
                <span className="text-900 font-medium text-3xl block">${product?.price}</span>
                <div className="flex align-items-center">
                <Rating value={product?.ratings} readOnly cancel={false} className='mr-2' />
                    <span className="text-sm"><b className="text-900 mr-1">24</b> <span className="text-500"></span>reviews</span>
                </div>
            </div>

            

          

            <div className="font-bold text-900 mb-3">Quantity</div>
            <div className="flex flex-column sm:flex-row sm:align-items-center sm:justify-content-between">
                <InputNumber showButtons buttonLayout="horizontal" min="0" inputClassName="w-3rem text-center" value={existItem?.quantity || 0} onChange={(e) => increasecart(dispatch,product,e.value)}
                    decrementButtonClassName="p-button-text" incrementButtonClassName="p-button-text" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" />
                <div className="flex align-items-center flex-1 mt-3 sm:mt-0 ml-0 sm:ml-5">
                   <Link className='no-underline' href='/cart'>
                   <Button label="VIEW CART" className="flex-1 mr-5 bg-red-500 border-0" />
                   </Link>
                    {/* <Button label="VIEW CART" className="flex-1 mr-5 bg-red-500 border-0" /> */}
                    {/* <i className={classNames('pi text-2xl cursor-pointer', { 'pi-heart text-600': !liked1, 'pi-heart-fill text-orange-500': liked1 })} onClick={() => setLiked1(prevState => !prevState)}></i> */}
                </div>
            </div>
        </div>
    </div>

    <TabView>
        <TabPanel header="Details">
            <div className="text-900 font-medium text-3xl mb-4 mt-2">Product Details</div>
            <p className="line-height-3 text-700 p-0 mx-0 mt-0 mb-4">{product?.description}</p>

            <div className="grid">
                <div className="col-12 lg:col-4">
                    <span className="text-900 block font-medium mb-3">Highlights</span>
                    <ul className="py-0 pl-3 m-0 text-700 mb-3">
                        <li className="mb-2">Vulputate sapien nec.</li>
                        <li className="mb-2">Purus gravida quis blandit.</li>
                        <li className="mb-2">Nisi quis eleifend quam adipiscing.</li>
                        <li>Imperdiet proin fermentum.</li>
                    </ul>
                </div>
                <div className="col-12 lg:col-4">
                    <span className="text-900 block font-medium mb-3"> Fits</span>
                    <ul className="list-none p-0 m-0 text-700 mb-4">
                        <li className="mb-3"><span className="font-medium">Category:</span> {product?.category}.</li>
                        <li className="mb-3"><span className="font-medium">Seller:</span> {product?.seller}.</li>
                        <li><span className="font-medium">Stock:</span> {inStock?'in stock':'out of stock'}.</li>
                    </ul>
                </div>
                <div className="col-12 lg:col-4">
                    <span className="text-900 block font-medium mb-3">Material & Care</span>
                    <ul className="p-0 m-0 text-700 flex flex-wrap flex-column xl:flex-row">
                        <li className="flex align-items-center white-space-nowrap w-10rem block mr-2 mb-3">
                            <i className="pi pi-sun mr-2"></i>
                            <span>Not dryer safe</span>
                        </li>
                        <li className="flex align-items-center white-space-nowrap w-10rem block mb-3">
                            <i className="pi pi-times-circle mr-2"></i>
                            <span>No chemical wash</span>
                        </li>
                        <li className="flex align-items-center white-space-nowrap w-10rem block mb-3 mr-2">
                            <i className="pi pi-sliders-h mr-2"></i>
                            <span>Iron medium heat</span>
                        </li>
                        <li className="flex align-items-center white-space-nowrap w-10rem block mb-3">
                            <i className="pi pi-minus-circle mr-2"></i>
                            <span>Dry flat</span>
                        </li>
                    </ul>
                </div>
            </div>
        </TabPanel>
        <TabPanel header="Reviews">
            <div className="text-900 font-medium text-3xl mb-4 mt-2">Customer Reviews</div>
            <ul className="list-none p-0 m-0">
                <li className="pb-5 border-bottom-1 surface-border">
                    <span>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-gray-500"></i>
                    </span>
                    <div className="text-900 font-medium text-xl my-3">Absolute Perfection!</div>
                    <p className="mx-0 mt-0 mb-3 text-700 line-height-3">Blandit libero volutpat sed cras ornare arcu dui vivamus. Arcu dictum varius duis at consectetur lorem donec massa. Imperdiet proin fermentum leo vel orci porta non. Porttitor rhoncus dolor purus non.</p>
                    <span className="text-600 font-medium">Darlene Robertson, 2 days ago</span>
                </li>
                <li className="py-5 border-bottom-1 surface-border">
                    <span>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500 mr-1"></i>
                        <i className="pi pi-star-fill text-yellow-500"></i>
                    </span>
                    <div className="text-900 font-medium text-xl my-3">Classy</div>
                    <p className="mx-0 mt-0 mb-3 text-700 line-height-3">Venenatis cras sed felis eget. Proin nibh nisl condimentum id venenatis a condimentum.</p>
                    <span className="text-600 font-medium">Kristin Watson, 2 days ago</span>
                </li>
            </ul>
        </TabPanel>
        <TabPanel header="Shipping">
            <div className="text-900 font-medium text-3xl mb-4 mt-2">Shipping Placeholder</div>
            <p className="line-height-3 text-700 p-0 mx-0 mt-0 mb-4">Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Justo donec enim diam vulputate ut pharetra. Tempus egestas sed sed risus.
                Feugiat sed lectus vestibulum mattis. Tristique nulla aliquet enim tortor at auctor urna nunc. Habitant morbi tristique senectus et. Facilisi nullam vehicula ipsum.</p>

            <div className="grid">
                <div className="col-12 md:col-6">
                    <span className="text-900 block font-medium mb-3">Shipping Costs</span>
                    <ul className="py-0 pl-3 m-0 text-700 mb-3">
                        <li className="mb-2">Japan - JPY 2,500.</li>
                        <li className="mb-2">Europe – EUR 10</li>
                        <li className="mb-2">Switzerland – CHF 10</li>
                        <li className="mb-2">Canada – CAD 25</li>
                        <li className="mb-2">USA – USD 20</li>
                        <li className="mb-2">Australia – AUD 30</li>
                        <li className="mb-2">United Kingdom – GBP 10</li>
                    </ul>
                </div>
                <div className="col-12 md:col-6">
                    <span className="text-900 block font-medium mb-3">Return Policy</span>
                    <p className="line-height-3 text-700 p-0 m-0">Pharetra et ultrices neque ornare aenean euismod elementum nisi. Diam phasellus vestibulum lorem sed. Mattis molestie a iaculis at. </p>
                </div>
            </div>
        </TabPanel>
    </TabView>
</div>
  )
}

export default ProductDetail