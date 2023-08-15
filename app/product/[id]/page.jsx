import React from 'react'
import ProductDetail from '../../../components/ProductDetail'
import axios from 'axios';
import { cookies } from "next/headers";
const getProductDetails = async (id) => {
    const nextCookies = cookies();

    const nextAuthSessionToken = nextCookies.get("next-auth.session-token");
    const { data } = await axios.get(`${process.env.API_URL}/products/${id}`,
    {
        headers: {
          Cookie: `next-auth.session-token=${nextAuthSessionToken?.value}`,
        },
      });
    return data?.product;
  };
const ProductPage = async({ params }) => {
    
    const product = await getProductDetails(params.id);
console.log(product)
    return <ProductDetail product={product} />;
}

export default ProductPage;