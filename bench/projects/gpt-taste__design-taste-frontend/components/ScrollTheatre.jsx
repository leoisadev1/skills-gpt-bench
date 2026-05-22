"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollTheatre({ surface }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const context = gsap.context(() => {
      gsap.utils.toArray("[data-gsap-scale]").forEach((element) => {
        gsap.fromTo(
          element,
          { scale: 0.86, opacity: 0.38 },
          {
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              end: "bottom 18%",
              scrub: true
            }
          }
        );
      });

      gsap.utils.toArray("[data-gsap-stack]").forEach((element, index) => {
        gsap.fromTo(
          element,
          { y: 72 + index * 18, rotate: index % 2 === 0 ? -2 : 2, opacity: 0.42 },
          {
            y: 0,
            rotate: 0,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              end: "top 36%",
              scrub: true
            }
          }
        );
      });
    });

    return () => {
      context.revert();
    };
  }, [surface]);

  return null;
}
