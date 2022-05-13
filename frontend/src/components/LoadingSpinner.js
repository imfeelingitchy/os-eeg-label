import React from "react";
import "../styles/spinner.css";

const LoadingSpinner = () => {
    return (
        <div className="spinner-container" style={{width: '80%', aspectRatio: '16/9'}}>
            <div className="loading-spinner">
            </div>
        </div>
    );
}

export default LoadingSpinner;