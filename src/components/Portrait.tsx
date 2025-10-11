import { useState, useRef } from "react";

const Portrait = () => {
  const [imageNumber, setImageNumber] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;

    const xPercent = x / rect.width;

    const photoNumber = Math.floor(Math.max(0, xPercent) * 12);
    setImageNumber(photoNumber);
  };

  const getImageSrc = () => {
    return `/portrait/pixel-${imageNumber}.jpeg`;
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[256px] w-[232px] shrink-0 cursor-pointer overflow-hidden border-2 border-skin-accent"
      onMouseMove={handleMouseMove}
    >
      <img
        src={getImageSrc()}
        alt="Leo Wang"
        className="absolute left-1/2 top-0 min-w-[256px] -translate-x-1/2 transition-all duration-200"
        style={{
          imageRendering: "crisp-edges",
        }}
        draggable="false"
      />
    </div>
  );
};

export default Portrait;
