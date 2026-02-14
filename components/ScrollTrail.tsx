"use client";

import { useEffect, useRef } from "react";

export default function ScrollTrail() {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const path = pathRef.current;
      if (!path) return;

      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollTop = window.scrollY;

      const scrollPercent = scrollTop / scrollHeight;

      const pathLength = path.getTotalLength();

      path.style.strokeDashoffset = String(
        pathLength - pathLength * scrollPercent
      );
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <svg
      className="absolute top-[60vh] left-1/2 -translate-x-1/2 h-[3000px] w-[400px] pointer-events-none z-0"
      viewBox="0 0 400 3000"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        ref={pathRef}
        d="
          M200 0
          C 350 300, 50 600, 200 900
          C 350 1200, 50 1500, 200 1800
          C 350 2100, 50 2400, 200 2700
        "
        stroke="#191970"
        strokeWidth="2"
        strokeDasharray="8 8"
      />
    </svg>
  );
}