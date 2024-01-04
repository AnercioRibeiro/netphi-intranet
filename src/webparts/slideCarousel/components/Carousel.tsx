import React, { useState, useEffect } from 'react';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative">
      <img
        src={images[currentImageIndex]}
        alt="carousel"
        className="w-full h-92 object-cover"
      />
      <button
        onClick={handlePrevClick}
        className="absolute top-1/2 left-0 transform -translate-y-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white hover:text-gray-300 transition-colors duration-300"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 19a9 9 0 100-18 9 9 0 000 18zm0-1.5a7.5 7.5 0 110-15 7.5 7.5 0 010 15zm-.75-6.25a.75.75 0 011.5 0v2.5l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06L9.25 13.25v-2.5z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        onClick={handleNextClick}
        className="absolute top-1/2 right-0 transform -translate-y-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-white hover:text-gray-300 transition-colors duration-300"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 19a9 9 0 100-18 9 9 0 000 18zm0-1.5a7.5 7.5 0 110-15 7.5 7.5 0 010 15zm-.75-6.25a.75.75 0 011.5 0v2.5l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06L9.25 13.25v-2.5z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="absolute bottom-0 left-0 w-full flex justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 mx-2 rounded-full ${
              currentImageIndex === index ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-50 p-4">
        <p className="text-white text-sm">
          {images[currentImageIndex].split('/').pop()}
        </p>
      </div>
    </div>
  );
};

export default Carousel;
