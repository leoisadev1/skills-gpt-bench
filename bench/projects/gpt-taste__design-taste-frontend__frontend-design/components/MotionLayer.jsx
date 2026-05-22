"use client";

import { useEffect } from "react";

export function MotionLayer() {
  useEffect(() => {
    let cleanup;
    let disposed = false;

    async function mountAnimations() {
      const gsapModule = await import("gsap");
      const scrollModule = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollModule.ScrollTrigger;

      if (disposed) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);
      const context = gsap.context(() => {
        gsap.utils.toArray("[data-reveal]").forEach((element, index) => {
          gsap.fromTo(
            element,
            { autoAlpha: 0, y: 26, scale: 0.985 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.9,
              ease: "power3.out",
              delay: (index % 4) * 0.04,
              scrollTrigger: {
                trigger: element,
                start: "top 88%",
                once: true
              }
            }
          );
        });

        gsap.utils.toArray("[data-stack-card]").forEach((element, index) => {
          gsap.fromTo(
            element,
            { y: 60 + index * 12, rotate: index % 2 === 0 ? -1.2 : 1.2 },
            {
              y: 0,
              rotate: 0,
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "top 35%",
                scrub: true
              }
            }
          );
        });

        gsap.utils.toArray("[data-image-pulse]").forEach((element) => {
          gsap.fromTo(
            element,
            { scale: 0.92, opacity: 0.72 },
            {
              scale: 1,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: element,
                start: "top 92%",
                end: "bottom 38%",
                scrub: true
              }
            }
          );
        });
      });

      cleanup = () => context.revert();
    }

    mountAnimations();

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return null;
}
