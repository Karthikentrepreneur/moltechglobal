import React, { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Optional: start hidden (default true) */
  initiallyHidden?: boolean;
  /** Optional: intersection threshold (default 0.15) */
  threshold?: number;
};

const ScrollAnimation: React.FC<Props> = ({
  children,
  className = "",
  initiallyHidden = true,
  threshold = 0.15,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(!initiallyHidden);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // Once visible, we can stop observing
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={[
        "transition-all duration-700 ease-out will-change-transform",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
