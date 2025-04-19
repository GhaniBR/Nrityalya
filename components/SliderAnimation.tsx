import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image:
      "https://www.natyasutraonline.com/uploads/category/banner_img/Bharatanatyam/rajasree-warrier-banner.webp",
    title: "Graceful Beginnings",
    description:
      "Learn the foundational postures and movements of Bharatnatyam.",
  },
  {
    id: 2,
    image:
      "https://www.natyasutraonline.com/uploads/category/banner_img/Bharatanatyam/rema-vaidhyananthan-banner.webp",
    title: "Expressions & Mudras",
    description:
      "Master the art of hand gestures and expressions in storytelling.",
  },
  {
    id: 3,
    image:
      "https://www.natyasutraonline.com/uploads/category/banner_img/Bharatanatyam/savitha-sasthry-banner.jpg",
    title: "Adavus - The Core Steps",
    description: "Understand rhythmic footwork and structured sequences.",
  },
];

const SliderAnimation: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Function to go to a specific slide by index
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-slide functionality using useEffect
  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    // Cleanup the interval when the component unmounts
    return () => clearInterval(autoSlideInterval);
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-10 relative overflow-hidden">
      {/* Carousel Wrapper */}
      <div className="relative h-56 md:h-96">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-all duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 rounded-lg" />
            <div className="absolute bottom-5 left-5 bg-orange-600 text-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{slide.title}</h3>
              <p className="text-sm">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Dots */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full bg-white/50 ${
              index === currentIndex ? "bg-orange-500" : "hover:bg-orange-300"
            }`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      {/* Custom Slider Controls (Prev/Next) */}
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 6 10"
            fill="none"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
          <svg
            className="w-4 h-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 6 10"
            fill="none"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default SliderAnimation;
