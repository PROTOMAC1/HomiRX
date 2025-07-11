import React, { useRef } from "react";
import "./ShopPage.css";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import Hiddenpage from "../../Hiddenpage";
import shopImg1 from "./product-1.jpg";
import shopImg2 from "./product-2.jpg";
import shopImg3 from "./product-3.jpg";
import shopImg4 from "./product-4.jpg";
import shopImg5 from "./product-5.jpg";
import shopImg6 from "./product-6.jpg";
import { motion, useInView } from "framer-motion";

export default function ShopPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const shopCard = [
    {
      img: shopImg1,
      meta: "DESIGN, FILM & VIDEOS",
      title: "Block Ruffle Hem Plaid Print Color",
      price: "$800.00",
    },
    {
      img: shopImg2,
      meta: "DESIGN, LUXURY",
      title: "One Shoulder Cutout High Slit Maxi",
      price: "$800.00",
    },
    {
      img: shopImg3,
      meta: "LUXURY, TECHNOLOGY",
      title: "Solid Color Sleeveless Rushed Body",
      price: "$1000.00",
    },
    {
      img: shopImg4,
      meta: "LUXURY, TECHNOLOGY",
      title: "Spaghetti Strap High Open Back Maxi",
      price: "$900.00",
    },
    {
      img: shopImg5,
      meta: "DESIGN, LUXURY",
      title: "Thick Strap Square Neck Top Hem",
      price: "$800.00",
    },
    {
      img: shopImg6,
      meta: "DESIGN, FILM & VIDEOS",
      title: "Tropical Print Front Mini Night Dress",
      price: "$800.00",
    },
  ];
  return (
    <div>
      <Navbar />
      <Hiddenpage />
      <section className="shoppagemain">
        <div className="shop-header-row">
          <motion.div ref={ref}
                  initial={{ x: -100, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }} className="shop-results">Showing all 6 results</motion.div>
          <motion.div ref={ref}
                  initial={{ y: 100, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }} className="shop-sort">
            <select>
              <option>Default sorting</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </motion.div>
        </div>
        <motion.div ref={ref}
                  initial={{ y: 100, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 2, ease: [0.25, 0.46, 0.45, 0.94] }} className="shop-grid">
          {shopCard.map((items, i) => (
            <div key={i} className="shop-card">
              <img src={items.img} alt={`images-${i + 1}`} />
              <div className="shop-card-meta">{items.meta}</div>
              <div className="shop-card-title">{items.title}</div>
              <div className="shop-card-price">{items.price}</div>
            </div>
          ))}
        </motion.div>
      </section>
      <section className="shoppagefooter">
        <Footer />
      </section>
    </div>
  );
}
