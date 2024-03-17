import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const productData = [
  {
    img: '/produk1.png',
    title: 'Product 1',
    price: '$100',
  },
  {
    img: '/produk2.png',
    title: 'Product 2',
    price: '$150',
  },
  {
    img: '/produk2.png',
    title: 'Product 3',
    price: '$200',
  },
  {
    img: '/produk2.png',
    title: 'Product 4',
    price: '$120',
  },
  { 
    img: '/produk2.png',
    title: 'Product 5',
    price: '$180',
  },
];

const ServiceSlider = () => {
  return (
    <div className="max-w-[600px] max-h-[300px]">
      <Splide
        options={{
          type: "loop",
          perPage: 3,
          perMove: 1,
          gap: "1rem",
          pagination: false,
          breakpoints: {
            768: {
              perPage: 2,
            },
            576: {
              perPage: 1,
            },
          },
        }}
      >
        {productData.map((product, index) => (
          <SplideSlide key={index}>
            <div
              className="product-item"
              style={{ textAlign: "center", marginBottom: "1rem" }}
            >
              <img src={product.img} alt={product.title} style={{ maxWidth: "100%" }} />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ServiceSlider;
