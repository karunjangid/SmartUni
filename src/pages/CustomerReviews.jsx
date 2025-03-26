import React from "react";
import "./Extra.css"; // Updated CSS file for styles
import Image1 from "../assets/Cr1.png";
import Image2 from "../assets/Cr3.png";
import Image3 from "../assets/Tm1.png";

// Import Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Pagination styles
import { Pagination } from "swiper/modules";


const CustomerReviews = () => {
  const reviews = [
    { name: "Ritik Sharma", feedback: "Smart University Management has transformed our operations!", image: Image1 },
    { name: "Maria Smith", feedback: "The advanced options helped us navigate challenges effortlessly.", image: Image2 },
    { name: "John Doe", feedback: "A futuristic solution with seamless functionality. Highly recommend!", image: Image3 },
  ];

  return (
    <section className="reviews-section">
      <h1 className="reviews-header">Customer Reviews</h1>
      {/* Swiper Container */}
      <Swiper
  slidesPerView={1}
  spaceBetween={20}
  pagination={{ clickable: true }}
  modules={[Pagination]} // Use the updated Pagination import
  className="reviews-swiper"
>

        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="review-card">
              <div className="review-image-container">
                <img src={review.image} alt={`${review.name}`} className="review-image" />
              </div>
              <h3 className="review-name">{review.name}</h3>
              <p className="review-feedback">{review.feedback}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CustomerReviews;
