import { Container } from "react-bootstrap";
import Header from "../layout/Header";
import Carousel from 'react-bootstrap/Carousel';
import Slider from "../layout/Slider";
import Fruits from "../categories/Fruits";
import Staples from "../categories/Staples";
// import Vegitable from "../categories/Vegitable";
import Lowerheader from "../layout/Footer";
import Snacks from "../categories/Snacks";
import { Suspense, lazy, useState } from "react";
import Footer from "../layout/Footer";
const Vegita = lazy(() => import("../categories/Vegitable"))

export default function index() {

  return (
    <>
      <Header />
      <Slider />

      <div>

        <Suspense fallback={<div>Loading ....</div>}>
         <Vegita/>

        </Suspense>
      </div>
      {/* <Vegitable /> */}
      <Fruits />
      <Staples />
      <Snacks />
      <Footer/>
      
    </>

  );
}

