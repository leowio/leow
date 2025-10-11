import React, { useState, useRef } from "react";

const Portrait = () => {
  const [imageNumber, setImageNumber] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;

    const xPercent = x / rect.width;

    const photoNumber = Math.floor(Math.max(0, xPercent) * 12);
    setImageNumber(photoNumber);
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[256px] w-[232px] shrink-0 cursor-pointer overflow-hidden border-2 border-skin-accent"
      onMouseMove={handleMouseMove}
    >
      {Array.from({ length: 12 }, (_, index) => (
        <img
          key={index}
          src={`/portrait/pixel-${index}.jpeg`}
          alt="Leo Wang"
          className="absolute left-1/2 top-0 min-w-[256px] -translate-x-1/2"
          style={{
            imageRendering: "crisp-edges",
            zIndex: index === imageNumber ? 10 : 1,
          }}
          draggable="false"
        />
      ))}
    </div>
  );
};

export default Portrait;
