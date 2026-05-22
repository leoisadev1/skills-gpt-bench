"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionFrame() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.utils.toArray(".motion-rise").forEach((element, index) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 36 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            delay: Math.min(index * 0.06, 0.24),
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
            },
          },
        );
      });

      gsap.utils.toArray(".motion-scale").forEach((element) => {
        gsap.fromTo(
          element,
          { scale: 0.88, autoAlpha: 0.45 },
          {
            scale: 1,
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: {
              trigger: element,
              start: "top 92%",
              end: "bottom 18%",
              scrub: true,
            },
          },
        );
      });

      gsap.utils.toArray(".stack-card").forEach((element, index) => {
        gsap.to(element, {
          y: index * -18,
          scale: 1 - index * 0.025,
          scrollTrigger: {
            trigger: element,
            start: "top 70%",
            end: "top 22%",
            scrub: true,
          },
        });
      });

      gsap.utils.toArray(".scrub-word").forEach((element, index) => {
        gsap.fromTo(
          element,
          { opacity: 0.16 },
          {
            opacity: 1,
            scrollTrigger: {
              trigger: element.parentElement,
              start: `top+=${index * 8} 74%`,
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
