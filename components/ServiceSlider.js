import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const productData = [
  {
    img: '/produk1.png',
    title: 'Product 1',
    price: 'Rp.600,000',
  },
  {
    img: '/produk2.png',
    title: 'Product 2',
    price: 'Rp.600,000',
  },
  {
    img: '/produk2.png',
    title: 'Product 3',
    price: 'Rp.600,000',
  },
  {
    img: '/produk2.png',
    title: 'Product 4',
    price: 'Rp.600,000',
  },
  { 
    img: '/produk2.png',
    title: 'Product 5',
    price: 'Rp.600,000',
  },
];
const ServiceSlider = () => {
  return (
    
    <div className="max-w-full overflow-hidden">
    <Splide
      options={{
        type: "loop",
        perPage: 2,
        perMove: 1,
        // gap: "1rem",
        pagination: true,
      }}
    >
      {productData.map((product, index) => (
        <SplideSlide key={index}>
          <div className="text-center">
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-auto max-w-full lg:max-w-none" // Added lg:max-w-none
              style={{ maxWidth: "400px", width: "100%" }} // Added inline style for responsiveness
            />
            <h3 className="text-lg">{product.title}</h3>
            <p className="text-sm">{product.price}</p>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  </div>
  
  
  );
};

export default ServiceSlider;
