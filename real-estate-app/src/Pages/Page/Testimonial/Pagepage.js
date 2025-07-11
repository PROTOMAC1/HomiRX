import React, { useRef } from "react";
import Navbar from "../../../components/Navbar";
import Hiddenpage from "../../Hiddenpage";
import Prof from "./prof.jpg";
import { FaStar } from "react-icons/fa";
import "./Pagepage.css";
import Footer from "../../../components/Footer";
import { motion, useInView } from "framer-motion";

export default function Pagepage() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const testimonialCard = [
    {
      img: Prof,
      name: "Christine Eve",
      dec: "Founder & CEO",
      star: <FaStar style={{ color: "orange" }} />,
      text: "Duis rhoncus orci utedn metus rhoncus, non is dictum purus bibendum. Suspendisse id orci sit amet justo interdum hendrerit sagittis.",
    },
    {
      img: Prof,
      name: "Christine Eve",
      dec: "Founder & CEO",
      star: <FaStar style={{ color: "orange" }} />,
      text: "Duis rhoncus orci utedn metus rhoncus, non is dictum purus bibendum. Suspendisse id orci sit amet justo interdum hendrerit sagittis.",
    },
    {
      img: Prof,
      name: "Christine Eve",
      dec: "Founder & CEO",
      star: <FaStar style={{ color: "orange" }} />,
      text: "Duis rhoncus orci utedn metus rhoncus, non is dictum purus bibendum. Suspendisse id orci sit amet justo interdum hendrerit sagittis.",
    },
    {
      img: Prof,
      name: "Christine Eve",
      dec: "Founder & CEO",
      star: <FaStar style={{ color: "orange" }} />,
      text: "Duis rhoncus orci utedn metus rhoncus, non is dictum purus bibendum. Suspendisse id orci sit amet justo interdum hendrerit sagittis.",
    },
  ];

  return (
    <div>
      <Navbar />
      <Hiddenpage />
      <section>
        <div className="header">
          <div className="testimonials-page">
            <motion.p ref={ref}
                  initial={{ x: -100, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, ease: 'easeOut' }}>Testimonials</motion.p>
            <motion.h1>What Our Clients Say?</motion.h1>
          </div>
          <div className="cards-div">
            <div className="cards">
              {testimonialCard.map((items, i) => (
                <div className="item" key={i}>
                  <div className="item-content">
                    <div className="testimonials-img">
                      <img src={items.img} alt="" />
                    </div>
                    <div className="testimonials-info">
                      <p>{items.name}</p>
                      <p>{items.dec}</p>
                      <div>
                        {[...Array(5)].map((_, index) => (
                          <span key={index}>{items.star}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-text">{items.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="pagepagefooter">
        <Footer />
      </section>
    </div>
  );
}
