import React, { useState } from "react";
import { IoChevronBackCircle, IoChevronForwardCircleSharp } from "react-icons/io5"; // Importing the new icons
import "./Carousel.css";

export const Carousel = ({ data }) => {
    const [slide, setSlide] = useState(0); // State to keep track of the current slide
    const [showAnswer, setShowAnswer] = useState(false); // State to track if the answer is shown

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1); // Function to go to the next slide
        setShowAnswer(false); // Reset answer display when changing slide
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1); // Function to go to the previous slide
        setShowAnswer(false); // Reset answer display when changing slide
    };

    const handleCardClick = () => {
        setShowAnswer(!showAnswer); // Toggle answer display on card click
    };

    return (
        <div className="carousel-container"> {/* Container for the entire carousel */}
            <IoChevronBackCircle onClick={prevSlide} className="arrow arrow-left" /> {/* Updated left arrow */}
            <div className="carousel" onClick={handleCardClick}> {/* Image container */}
                {data.map((item, idx) => (
                    <img
                        src={showAnswer && slide === idx ? item.answerSrc : item.src}
                        alt={item.alt}
                        key={idx}
                        className={slide === idx ? "slide" : "slide slide-hidden"}
                    />
                ))}
                <div className="counter"> {/* Counter display */}
                    {slide + 1} / {data.length} {/* Current slide number / Total slides */}
                </div>
            </div>
            <IoChevronForwardCircleSharp onClick={nextSlide} className="arrow arrow-right" /> {/* Updated right arrow */}
            <span className="indicators"> {/* Container for the indicators */}
                {data.map((_, idx) => (
                    <button
                        key={idx}
                        className={slide === idx ? "indicator indicator-active" : "indicator indicator-inactive"} // Highlight active indicator
                        onClick={() => {
                            setSlide(idx);
                            setShowAnswer(false); // Reset answer display when changing slide
                        }}
                    ></button>
                ))}
            </span>
        </div>
    );
};
