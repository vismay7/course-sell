"use client";

import { useEffect, useRef } from "react";

export function useScrollAnimation() {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-animate-visible");
            entry.target.classList.remove("scroll-animate");
            observer.current?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,

        rootMargin: "0px 0px -50px 0px",
      }
    );

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.current?.observe(el));

    return () => {
      elements.forEach((el) => observer.current?.unobserve(el));
      observer.current?.disconnect();
    };
  }, []);
}
