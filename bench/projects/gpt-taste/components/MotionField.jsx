"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionField() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.utils.toArray("[data-gsap-image]").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0.45, scale: 0.82, filter: "contrast(0.92) saturate(0.75)" },
          {
            opacity: 1,
            scale: 1,
            filter: "contrast(1.14) saturate(1)",
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              end: "bottom 18%",
              scrub: true,
            },
          },
        );
      });

      gsap.utils.toArray("[data-stack-card]").forEach((element, index) => {
        gsap.fromTo(
          element,
          { y: 92 + index * 18, rotate: index % 2 === 0 ? -2 : 2, opacity: 0.32 },
          {
            y: 0,
            rotate: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 92%",
              end: "top 42%",
              scrub: true,
            },
          },
        );
      });

      gsap.utils.toArray("[data-reveal-words]").forEach((element) => {
        const words = element.textContent?.trim().split(/\s+/) ?? [];
        element.setAttribute("aria-label", words.join(" "));
        element.innerHTML = words.map((word) => `<span>${word}</span>`).join(" ");
        gsap.fromTo(
          element.querySelectorAll("span"),
          { opacity: 0.12, y: 12 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.04,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              end: "bottom 42%",
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
