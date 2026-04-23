"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

export default function SpotlightCursor() {
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const x = useSpring(mouseX, { stiffness: 60, damping: 18, mass: 0.5 });
  const y = useSpring(mouseY, { stiffness: 60, damping: 18, mass: 0.5 });

  const background = useMotionTemplate`radial-gradient(700px circle at ${x}px ${y}px, rgba(232,23,77,0.18), transparent 60%)`;

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-20"
      style={{ background }}
    />
  );
}
