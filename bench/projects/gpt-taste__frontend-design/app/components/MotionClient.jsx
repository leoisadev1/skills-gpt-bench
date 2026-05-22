"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function MotionClient() {
  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.utils.toArray(".gsap-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 38, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 84%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray(".media-zoom").forEach((element) => {
        gsap.fromTo(
          element,
          { scale: 0.86, opacity: 0.38, filter: "brightness(0.58)" },
          {
            scale: 1,
            opacity: 1,
            filter: "brightness(1)",
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top 92%",
              end: "bottom 24%",
              scrub: true,
            },
          },
        );
      });

      gsap.utils.toArray(".scrub-copy").forEach((block) => {
        const words = block.querySelectorAll(".reveal-word");
        gsap.fromTo(
          words,
          { opacity: 0.12 },
          {
            opacity: 1,
            stagger: 0.025,
            ease: "none",
            scrollTrigger: {
              trigger: block,
              start: "top 82%",
              end: "bottom 48%",
              scrub: true,
            },
          },
        );
      });

      gsap.utils.toArray(".stack-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { y: 80 + index * 14, opacity: 0.45 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              end: "top 42%",
              scrub: true,
            },
          },
        );
      });
    });

    return () => context.revert();
  }, []);

  return null;
}
