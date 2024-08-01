import React from "react";

export const Indicators = ({ slides, currentSlide, onSelectSlide }) => {
    return (
        <span className="indicators">
            <div className="counter">
                {currentSlide + 1} / {slides.length}
            </div>
            {slides.map((_, idx) => (
                <button
                    key={idx}
                    className={currentSlide === idx ? "indicator indicator-active" : "indicator indicator-inactive"}
                    onClick={() => onSelectSlide(idx)}
                ></button>
            ))}
        </span>
    );
};
