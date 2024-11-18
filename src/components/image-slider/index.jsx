import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  async function fetchImage(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImages(data);
      }
    } catch (error) {
      setError("Unable to fetch images");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") {
      fetchImage(url);
    }
  }, [url]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [images]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading images! Please wait...</p>
      </div>
    );
  }

  function handlePrevious() {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  }

  function handleNext() {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative flex justify-center items-center w-[800px] h-[550px]">
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="absolute left-4 w-8 h-8 text-white filter drop-shadow-md cursor-pointer"
        />
        {images && images.length > 0 ? (
          images.map((singleImageItem, index) => (
            <img
              className={`rounded-md shadow-md w-full h-full transition-opacity duration-500 ${
                currentSlide === index ? "opacity-100" : "hidden"
              }`}
              src={singleImageItem.download_url}
              alt={singleImageItem.url}
              key={singleImageItem.id}
            />
          ))
        ) : (
          <div>
            <p>No Images to Display</p>
          </div>
        )}
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="absolute right-4 w-8 h-8 text-white filter drop-shadow-md cursor-pointer"
        />
        <div className="flex absolute bottom-4 space-x-2">
          {images.map((_, index) => (
            <button
              className={`w-4 h-4 rounded-full cursor-pointer ${
                currentSlide === index ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
