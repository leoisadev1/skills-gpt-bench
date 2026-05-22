"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionClient() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-reveal]").forEach((element, index) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            delay: index * 0.035,
            scrollTrigger: {
              trigger: element,
              start: "top 88%"
            }
          }
        );
      });

      gsap.utils.toArray("[data-image-scale]").forEach((element) => {
        gsap.fromTo(
          element,
          { scale: 0.88, autoAlpha: 0.72 },
          {
            scale: 1,
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top 92%",
              end: "bottom 35%",
              scrub: true
            }
          }
        );
      });

      gsap.utils.toArray("[data-scrub-group]").forEach((group) => {
        const words = group.querySelectorAll("[data-scrub-word]");
        gsap.fromTo(
          words,
          { opacity: 0.16, y: 14 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            ease: "none",
            scrollTrigger: {
              trigger: group,
              start: "top 82%",
              end: "bottom 48%",
              scrub: true
            }
          }
        );
      });

      gsap.utils.toArray("[data-stack-card]").forEach((element, index) => {
        gsap.fromTo(
          element,
          { y: 54 + index * 8, scale: 0.96 },
          {
            y: 0,
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              end: "top 54%",
              scrub: true
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
