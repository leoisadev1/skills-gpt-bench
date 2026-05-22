"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function MotionLayer() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;
    let context;

    async function boot() {
      const gsapModule = await import("gsap");
      const scrollModule = await import("gsap/ScrollTrigger");
      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollModule.ScrollTrigger;

      if (cancelled) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);
      context = gsap.context(() => {
        const revealEls = gsap.utils.toArray("[data-reveal]");
        gsap.set(revealEls, { autoAlpha: 0, y: 24 });
        revealEls.forEach((el, index) => {
          gsap.to(el, {
            autoAlpha: 1,
            y: 0,
            duration: 0.82,
            delay: (index % 4) * 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true
            }
          });
        });

        gsap.utils.toArray("[data-scale]").forEach((el) => {
          gsap.fromTo(
            el,
            { scale: 0.92, autoAlpha: 0.72 },
            {
              scale: 1,
              autoAlpha: 1,
              ease: "none",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                end: "bottom 18%",
                scrub: true
              }
            }
          );
        });

        const wordGroups = gsap.utils.toArray("[data-words]");
        wordGroups.forEach((group) => {
          const words = group.querySelectorAll("[data-word]");
          gsap.fromTo(
            words,
            { opacity: 0.18, y: 10 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.055,
              ease: "none",
              scrollTrigger: {
                trigger: group,
                start: "top 78%",
                end: "bottom 44%",
                scrub: true
              }
            }
          );
        });
      });
    }

    boot();

    return () => {
      cancelled = true;
      context?.revert();
    };
  }, [pathname]);

  return null;
}
