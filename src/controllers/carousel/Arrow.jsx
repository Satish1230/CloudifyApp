import React from "react";
import { IoChevronBackCircle, IoChevronForwardCircleSharp } from "react-icons/io5";

export const Arrow = ({ direction, onClick, isDisabled }) => {
    const ArrowIcon = direction === "left" ? IoChevronBackCircle : IoChevronForwardCircleSharp;
    return (
        <ArrowIcon
            onClick={isDisabled ? null : onClick}
            className={`arrow arrow-${direction} ${isDisabled ? "inactive" : ""}`}
        />
    );
};
