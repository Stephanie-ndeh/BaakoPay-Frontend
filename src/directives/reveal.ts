import type { Directive } from "vue";

const OBSERVER_OPTIONS: IntersectionObserverInit = {
  threshold: 0.12,
  rootMargin: "0px 0px -8% 0px",
};

export interface RevealOptions {
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
}

export type RevealValue = number | RevealOptions | undefined;

export const vReveal: Directive<HTMLElement, RevealValue> = {
  mounted(el, binding) {
    const value = binding.value;
    const delay = typeof value === "number" ? value : value?.delay;
    const direction = typeof value === "object" ? value.direction : undefined;
    const duration = typeof value === "object" ? value.duration : undefined;

    el.classList.add("reveal");
    if (direction && direction !== "up")
      el.classList.add(`reveal-${direction}`);
    if (delay) el.style.transitionDelay = `${delay}ms`;
    if (duration) el.style.transitionDuration = `${duration}ms`;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add("reveal-visible");
        observer.disconnect();
      }
    }, OBSERVER_OPTIONS);

    observer.observe(el);
  },
};
