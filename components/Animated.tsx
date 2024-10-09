"use client";
import { useInView } from "framer-motion";
import React, { CSSProperties, ReactNode, useRef } from "react";

const Animated = ({
  children,
  additionalStyle,
  delay,
}: {
  children: ReactNode;
  additionalStyle?: CSSProperties;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translate(10px, 60px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.6s ease-out",
        transitionDelay: `${delay ?? 0}s`,
        height: "100%",
        width: "100%",
        ...additionalStyle,
      }}
    >
      {children}
    </div>
  );
};

export default Animated;
