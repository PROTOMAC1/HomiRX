// SlideInDiv.jsx
import React, { useRef, useEffect, useState } from 'react';
import './SlideInDivRight.css';

const SlideInDivRight = ({ children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // observer.disconnect(); // Remove after it's visible
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`slide-in-right ${isVisible ? 'show' : ''}`}>
      {children}
    </div>
  );
};

export default SlideInDivRight;
