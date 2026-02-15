"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollTrail() {
  const pathRef = useRef<SVGPathElement>(null);
  const [topOffset, setTopOffset] = useState(0);

  useEffect(() => {
    const setStartPosition = () => {
      const startElement = document.getElementById("trail-start");
      if (!startElement) return;

      const rect = startElement.getBoundingClientRect();
      const scrollY = window.scrollY;

      // Start slightly below button center
      setTopOffset(rect.top + scrollY + rect.height);
    };

    setStartPosition();
    window.addEventListener("resize", setStartPosition);

    return () => window.removeEventListener("resize", setStartPosition);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const path = pathRef.current;
      if (!path) return;

      const pathLength = path.getTotalLength();
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollTop = window.scrollY;
      const scrollPercent = scrollTop / scrollHeight;

      // Keep dotted pattern
      path.style.strokeDasharray = "8 8";

      // Animate reveal
      path.style.strokeDashoffset = String(
        pathLength - pathLength * scrollPercent,
      );
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <svg
      className="absolute left-1/2 -translate-x-1/2 h-[2500px] w-[400px] pointer-events-none z-0"
      style={{ top: `${topOffset}px` }}
      viewBox="0 0 400 2500"
      fill="none"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="trailGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#011179" />
          <stop offset="100%" stopColor="#19d402" />
        </linearGradient>
      </defs>

      <path
        ref={pathRef}
        d="
        M200 0
        C 350 300, 50 600, 200 900
        C 350 1200, 50 1500, 200 1800
        C 350 2100, 50 2400, 200 2700
      "
        stroke="url(#trailGradient)"
        strokeWidth="2.5"
        strokeDasharray="8 8"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}
