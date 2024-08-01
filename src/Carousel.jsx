import React, { useState } from "react";
import { Slide, ThankYouCard, Indicators, Arrow } from "./controllers/carousel";
import "./Carousel.css";

export const Carousel = ({ data, thankYouImage }) => {
    const [slide, setSlide] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const nextSlide = () => {
        if (slide === data.length) { // Fix off-by-one error
            setSlide(0);
        } else {
            setSlide(slide + 1);
        }
        setShowAnswer(false);

        console.log(slide);
    };



    const prevSlide = () => {
        if (slide > 0) {
            setSlide(slide - 1);
        } else {
            setSlide(data.length - 1); // Optionally loop back to the last slide
        }
        setShowAnswer(false);
    };

    const handleCardClick = () => {
        setShowAnswer(!showAnswer);
    };

    const handlePlayAgain = () => {
        setSlide(0);
        // setShowAnswer(false); // Ensure the answer is hidden
        console.log(slide);
    };

    return (
        <div className="carousel-container">
            <Arrow direction="left" onClick={prevSlide} isDisabled={slide === 0} />
            <div className="carousel" onClick={handleCardClick} >
                {slide < data.length ? (
                    data.map((item, idx) => (
                        <Slide
                            key={idx}
                            src={showAnswer && slide === idx ? item.answerSrc : item.src}
                            isActive={slide === idx}
                            showAnswer={showAnswer && slide === idx}
                        />
                    ))
                ) : (
                    <ThankYouCard onPlayAgain={handlePlayAgain} thankYouImage={thankYouImage} />
                )}
            </div>
            {slide < data.length && (
                <Indicators
                    slides={data}
                    currentSlide={slide}
                    onSelectSlide={(idx) => {
                        setSlide(idx);
                        setShowAnswer(false);
                    }}
                />
            )}
            <Arrow direction="right" onClick={nextSlide} />
        </div>
    );
};
