import React, { useEffect, useState } from "react";
import "./CauldronAnimation.css";
import cauldronImage from "../assets/cauldron.png" // ✅ Make sure you have this image in /src/assets/

const CauldronAnimation = ({ colors }) => {
  const [bubbles, setBubbles] = useState([]);

  // Generate floating bubbles
  useEffect(() => {
    const newBubbles = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      size: 8 + Math.random() * 8,
    }));
    setBubbles(newBubbles);
  }, []);

  const mainColor = colors[0] || "#9b59b6"; // fallback color

  return (
    <div className="cauldron-container">
      <div className="mixing-text" style={{ color: mainColor }}>
        ✨ Mixing your potion...
      </div>

      {/* Cauldron */}
      <div className="cauldron">
        <img src={cauldronImage} alt="Cauldron" className="cauldron-img" />
        <div
          className="liquid"
          style={{
            background: mainColor,
          }}
        ></div>

        {/* Floating bubbles */}
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="bubble"
            style={{
              left: `${bubble.left}%`,
              animationDelay: `${bubble.delay}s`,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              backgroundColor: mainColor,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CauldronAnimation;