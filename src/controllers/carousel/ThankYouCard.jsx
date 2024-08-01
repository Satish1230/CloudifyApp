import React from "react";

export const ThankYouCard = ({ onPlayAgain, thankYouImage }) => {
    return (
        <div className="thankyou-card">
            <img src={thankYouImage} alt="Thank You" className="done" />
            <button className="play-again-button" onClick={onPlayAgain}>
                Play Again
            </button>
        </div>
    );
};
