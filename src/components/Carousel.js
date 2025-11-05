"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Carousel.module.css';

const Carousel = () => {
  const slides = [
    { id: 1, src: '/homehero.png', alt: 'Home Hero' },
    { id: 2, src: '/Aboutus.jpg', alt: 'About Us' },
    { id: 3, src: '/services-1.png', alt: 'Services 1' },
    { id: 4, src: '/services-2.png', alt: 'Services 2' },
    { id: 5, src: '/Ourstory.jpg', alt: 'Our Story' }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselWrapper}>
        <div 
          className={styles.carouselTrack}
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            width: `${slides.length * 100}%`
          }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className={styles.carouselSlide}>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="100vw"
                style={{ 
                  objectFit: 'contain',
                  objectPosition: 'center'
                }}
                priority={slide.id === 1}
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.carouselIndicators}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;