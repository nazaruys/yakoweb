import { CaretLeftIcon, CaretRightIcon } from '@phosphor-icons/react';
import React, { useEffect, useRef, useState } from 'react';

function WebsiteSlides({ icon, typeWebsite, imagesList }) {
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const isAnimatingRef = useRef(false);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);
  const autoplayRef = useRef(null);

  const images = [
    imagesList[imagesList.length - 1], // Clone last
    ...imagesList,
    imagesList[0], // Clone first
  ];

  const stopAutoplay = () => {
		if (autoplayRef.current) {
			clearInterval(autoplayRef.current);
			autoplayRef.current = null;
		}
	};

	const handlePrevButtonPress = () => {
		stopAutoplay();
		handlePrev();
	}

	const handleNextButtonPress = () => {
		stopAutoplay();
		handleNext();
	}

	const handleNext = () => {
		if (isAnimatingRef.current) return;
		setIsAnimating(true);
		isAnimatingRef.current = true;
		setTransition(true);
		setIndex((prev) => prev + 1);
	};

	const handlePrev = () => {
		if (isAnimatingRef.current) return;
		setIsAnimating(true);
		isAnimatingRef.current = true;
		setTransition(true);
		setIndex((prev) => prev - 1);
	};

  useEffect(() => {
    const slider = sliderRef.current;
    const handleTransitionEnd = () => {
      setIsAnimating(false);
      isAnimatingRef.current = false;
      if (index === images.length - 1) {
        setTransition(false);
        setIndex(1);
      } else if (index === 0) {
        setTransition(false);
        setIndex(images.length - 2);
      }
    };
    slider.addEventListener('transitionend', handleTransitionEnd);
    return () => slider.removeEventListener('transitionend', handleTransitionEnd);
  }, [index, images.length]);

  // Intersection Observer to start/stop autoplay when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!autoplayRef.current) {
            autoplayRef.current = setInterval(() => {
              if (!isAnimatingRef.current) {
                handleNext();
              }
            }, 4000);
          }
        } else {
          if (autoplayRef.current) {
            clearInterval(autoplayRef.current);
            autoplayRef.current = null;
          }
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-[500px]">
      {/* Top-left label */}
      <div className="absolute -top-11 left-0 gap-x-2 w-fit flex flex-row justify-center items-center px-3 py-2 bg-SecondaryBackground rounded-xl border-[0.3px] border-dark/20">
        {icon}
        <span className="text-dark text-[13px] font-medium">{typeWebsite}</span>
      </div>

      {/* Top-right buttons */}
      <div className="flex flex-row absolute -top-11 right-0 gap-x-2">
        <button
          onClick={handlePrevButtonPress}
          disabled={isAnimating}
          className="cursor-pointer w-fit flex flex-row justify-center items-center p-2 bg-SecondaryBackground rounded-xl shadow-[0_0_12px_rgba(0,0,0,0.10)] hover:shadow-[0_0_12px_rgba(0,0,0,0.20)] transition-shadow duration-300"
        >
          <CaretLeftIcon size={18} className="text-black" />
        </button>
        <button
          onClick={handleNextButtonPress}
          disabled={isAnimating}
          className="cursor-pointer w-fit flex flex-row justify-center items-center p-2 bg-SecondaryBackground rounded-xl shadow-[0_0_12px_rgba(0,0,0,0.10)] hover:shadow-[0_0_12px_rgba(0,0,0,0.20)] transition-shadow duration-300"
        >
          <CaretRightIcon size={18} className="text-black" />
        </button>
      </div>

      {/* Image slider */}
      <div className="w-full h-[260px] overflow-hidden rounded-xl relative">
        <div
          ref={sliderRef}
          className={`flex ${transition ? 'transition-transform duration-500 ease-in-out' : ''}`}
          style={{
            transform: `translateX(-${index * 500}px)`,
          }}
        >
          {images.map((src, i) => (
            <div key={i} className="w-[500px] h-[260px] flex-shrink-0">
              <img src={src} alt={`Slide ${i}`} className="w-full h-full object-cover select-none" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WebsiteSlides;
