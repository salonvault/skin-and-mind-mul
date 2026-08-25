"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ScrollZoomProps = {
  children: ReactNode;
  className?: string;
  scale?: number;
  start?: string;
  end?: string;
};

export default function ScrollZoom({
  children,
  className = "",
  scale = 1.025,
  start = "top 85%",
  end = "bottom 15%",
}: ScrollZoomProps) {
  const zoomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const element = zoomRef.current;
    if (!element) return;

    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        element,
        { scale: 1 },
        {
          scale,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start,
            end,
            scrub: 1.5,
            invalidateOnRefresh: true,
          },
        },
      );
    });

    return () => media.revert();
  }, [end, scale, start]);

  return (
    <div ref={zoomRef} className={`${className} origin-center will-change-transform`}>
      {children}
    </div>
  );
}
