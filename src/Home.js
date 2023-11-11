import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./components/Banner";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import ServicesSection from "./components/ServicesSection";
import Contact from "./components/ContactUs";
// import { Flip } from 'react-toastify';

const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    setProducts(data.data);
  }, [data]);
  return (
    <div>
      <Banner />
      <ServicesSection/>
      <Products products={products} show={3}/>
      <Testimonials/>
      <Contact />
    </div>
  );
};

export default Home;
