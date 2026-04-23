"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  strength?: number;
  as?: "a" | "button" | "div";
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  onMouseEnter?: (e: React.MouseEvent<HTMLElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLElement>) => void;
}

export default function MagneticButton({
  children,
  className,
  style,
  strength = 0.35,
  as = "div",
  href,
  target,
  rel,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 150, damping: 15, mass: 0.1 });
  const y = useSpring(rawY, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rawX.set((e.clientX - rect.left - rect.width / 2) * strength);
    rawY.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    rawX.set(0);
    rawY.set(0);
    onMouseLeave?.(e);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    onMouseEnter?.(e);
  };

  const Tag = motion[as] as typeof motion.div;

  return (
    <Tag
      // @ts-expect-error motion polymorphic ref
      ref={ref}
      style={{ x, y, ...style }}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      {...(as === "a" ? { href, target, rel } : {})}
    >
      {children}
    </Tag>
  );
}
