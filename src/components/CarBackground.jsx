// src/components/CarBackground.jsx
import React from "react";

const CarBackground = () => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 10,
          left: 10,
          color: "red",
          backgroundColor: "yellow",
          padding: "10px",
          fontWeight: "bold",
          zIndex: 9999,
        }}
      >
        🚨 CAR BACKGROUND IS RENDERING!
      </div>

      {/* Use public video for testing */}
      <div className="bg-moving-cars">
        <video autoPlay loop muted playsInline>
          <source
            src="https://cdn.videvo.net/videvo_files/video/free/2017-08/small_watermarked/170726_A-116_4k_007_preview.webm"
            type="video/webm"
          />
          <source
            src="https://cdn.videvo.net/videvo_files/video/free/2017-08/small_watermarked/170726_A-116_4k_007_preview.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="bg-overlay"></div>
    </>
  );
};

export default CarBackground;
