"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function BlueprintHero() {
  const houseRef = useRef<SVGSVGElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!houseRef.current) return;

    const ctx = gsap.context(() => {
      const paths = houseRef.current!.querySelectorAll("path");

      // Hide all lines initially
      paths.forEach((path) => {
        const length = path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
      });

      // Initial states
      gsap.set(titleRef.current, {
        opacity: 0,
        y: 40,
      });

      gsap.set(buttonRef.current, {
        opacity: 0,
        scale: 0.8,
      });

      const tl = gsap.timeline();

      // Draw blueprint slowly
      tl.to(paths, {
        strokeDashoffset: 0,
        duration: 2,
        stagger: 0.35,
        ease: "power1.inOut",
      })

        // Text
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=2"
        )

        // Button
        .to(
          buttonRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.6"
        );

      // Continuous glow
      gsap.to(paths, {
        stroke: "#ffffff",
        filter:
          "drop-shadow(0 0 8px rgba(255,255,255,.8)) drop-shadow(0 0 20px rgba(255,255,255,.5))",
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      });
    }, houseRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="min-h-screen bg-[#07111f] opacity-90 flex items-center px-20 overflow-hidden">
      {/* LEFT */}
      <div className="w-1/2 text-white ml-25">
        <h1
          ref={titleRef}
          className="text-6xl font-semibold leading-tight"
        >
          Build Your Path
          <br />
          To Your Dream Home
        </h1>

        <p className="mt-6 text-gray-300 text-xl">
          Smart mortgage solutions designed around your future.
        </p>

        <button
          ref={buttonRef}
          className="mt-8 px-8 py-4 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
        >
          Get Started
        </button>
      </div>

      {/* RIGHT */}
      <div className="w-1/2 flex justify-center items-center">
        <svg
          ref={houseRef}
          width="500"
          height="500"
          viewBox="0 0 500 500"
          fill="none"
        >
          <defs>
            <filter
              id="glow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Roof */}
          <path
            d="M100 220 L250 80 L400 220"
            stroke="white"
            strokeWidth="3"
            filter="url(#glow)"
          />

          {/* Left Wall */}
          <path
            d="M130 220 V400"
            stroke="white"
            strokeWidth="3"
            filter="url(#glow)"
          />

          {/* Right Wall */}
          <path
            d="M370 220 V400"
            stroke="white"
            strokeWidth="3"
            filter="url(#glow)"
          />

          {/* Bottom */}
          <path
            d="M130 400 H370"
            stroke="white"
            strokeWidth="3"
            filter="url(#glow)"
          />

          {/* Door */}
          <path
            d="M220 400 V290 H280 V400"
            stroke="white"
            strokeWidth="3"
            filter="url(#glow)"
          />

          {/* Left Window */}
          <path
            d="M160 260 H200 V300 H160 Z"
            stroke="white"
            strokeWidth="3"
            filter="url(#glow)"
          />

          {/* Right Window */}
          <path
            d="M300 260 H340 V300 H300 Z"
            stroke="white"
            strokeWidth="3"
            filter="url(#glow)"
          />
        </svg>
      </div>
    </section>
  );
}