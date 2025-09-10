// src/hooks/useHashScroll.js
import { useEffect } from "react";

const useHashScroll = () => {
  useEffect(() => {
    const smoothScrollTo = (element, duration = 800) => {
      const start = window.pageYOffset;
      const target = element.getBoundingClientRect().top;
      const startTime = performance.now();

      const ease = (t) =>
        t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; // easeInOutCubic

      const animateScroll = (currentTime) => {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easedProgress = ease(progress);

        window.scrollTo(0, start + target * easedProgress);

        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    };

    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          // Optional: Add navbar offset
          const offset = 80; // Height of your navbar
          const top =
            element.getBoundingClientRect().top + window.pageYOffset - offset;

          // Cancel any current scroll
          window.scrollTo({ top: 0, behavior: "auto" });

          // Use custom animation
          smoothScrollTo(element, 800); // 800ms duration
        }
      }
    };

    // Run on load
    handleHashScroll();

    // Run on hash change (e.g., navbar click)
    window.addEventListener("hashchange", handleHashScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, []);
};

export default useHashScroll;
