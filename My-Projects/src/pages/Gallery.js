import React, { useState, useEffect } from "react";
import "../pages/Gallery.css";

const Gallery = () => {
  const images = [
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1019/600/400",
    "https://picsum.photos/id/1020/600/400",
    "https://picsum.photos/id/1021/600/400",
    "https://picsum.photos/id/1022/600/400",
    "https://picsum.photos/id/1023/600/400",
    "https://picsum.photos/id/1024/600/400",
  ];

  const [current, setCurrent] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Responsive cardsToShow
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 576) {
        setCardsToShow(1);
      } else if (window.innerWidth < 992) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);

    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev + cardsToShow >= images.length ? 0 : prev + cardsToShow
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length, cardsToShow]);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev + cardsToShow >= images.length ? 0 : prev + cardsToShow
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev - cardsToShow < 0 ? images.length - cardsToShow : prev - cardsToShow
    );
  };

  return (
    <div className="gallery-container">
      <button className="prev-btn" onClick={prevSlide}>❮</button>
      <div className="gallery-slide">
        {images.slice(current, current + cardsToShow).map((img, index) => (
          <div className="gallery-card" key={index}>
            <img src={img} alt={`slide-${index}`} className="gallery-img" />
            <div className="card-content">
              <h3>Image {current + index + 1}</h3>
              <p>This is a description for image {current + index + 1}.</p>
            </div>
          </div>
        ))}
      </div>
      <button className="next-btn" onClick={nextSlide}>❯</button>
    </div>
  );
};

export default Gallery;
