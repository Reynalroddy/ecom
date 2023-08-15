
import React from 'react'
import { Button } from 'primereact/button'; 
import axios from 'axios';
import ListProducts from '../components/ListProducts';
import Product from '../components/Product';
import queryString from "query-string"
import Test from '../components/Test';
const getProducts = async (searchParams) => {
  const urlParams = {
    query: searchParams.query || "",
    page: searchParams.page || 1,
     category :searchParams.category || "all",
  price : searchParams.price|| "all",
   
  sort :searchParams.sort || "latest",
   rating : searchParams.rating || "all"
  };

  const searchQuery = queryString.stringify(urlParams)

  const { data } = await axios.get(`${process.env.API_URL}/products?${searchQuery}`);
  return data;
};

const HomePage = async ({ searchParams }) => {
  const productsData = await getProducts(searchParams);
// const {count} =await getProducts(searchParams);
  return <ListProducts data={productsData.data} count={productsData.count} limit={productsData.limit} />;
  // return <Test />;
  // return  <Product/>
};

export default HomePage;

// export default HomePage;