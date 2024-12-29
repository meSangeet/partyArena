import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";

import PlusSvg from "../../assets/svg/PlusSvg";

export const Gradient = () => {
  return (
    <>
      <div className="relative z-1 h-6 mx-2.5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8 animate-gradient-move" />
      <div className="relative z-1 h-6 mx-6 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20 animate-gradient-move" />
    </>
  );
};

export const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 pointer-events-none xl:block" />
      <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />
      <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </>
  );
};

const Rings = ({ borderGradient }) => {
  return (
    <>
      {["65.875rem", "51.375rem", "36.125rem", "23.125rem"].map((size, index) => (
        <div
          key={index}
          className={`absolute top-1/2 left-1/2 w-${size} aspect-square border ${borderGradient} rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse`}
        />
      ))}
    </>
  );
};

export const BackgroundCircles = ({ parallaxRef, borderGradient = "border-gradient-to-r from-blue-500 via-purple-500 to-pink-500/50" }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
      <Rings borderGradient={borderGradient} />

      {/* Moving background colored circle balls */}
      <MouseParallax strength={0.1} parallaxContainerRef={parallaxRef}>
        {[46, -56, 54, -65, -85, 70].map((angle, index) => (
          <div
            key={index}
            className={`absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[${angle}deg]`}
          >
            <div
              className={`w-${index + 2} h-${index + 2} ${
                index % 2 === 0 ? "bg-gradient-to-b from-[#DD734F] to-[#1A1A32]" : "bg-gradient-to-b from-[#88E5BE] to-[#1A1A32]"
              } rounded-full transition-transform duration-700 ease-out ${
                mounted ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-50"
              }`}
            />
          </div>
        ))}
      </MouseParallax>
    </div>
  );
};
