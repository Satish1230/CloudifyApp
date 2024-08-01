import React from "react";

export const Slide = ({ src, isActive, showAnswer }) => {
    return (
        <img
            src={src}
            className={`${isActive ? "slide" : "slide slide-hidden"} ${showAnswer ? "flipped" : ""}`}
            alt="Slide"
        />
    );
};
