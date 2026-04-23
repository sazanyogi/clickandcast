"use client";

import { useEffect, useState, useRef } from "react";

const CHARS = "!@#$%^&*()_+-=[]{}|;:<>?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

interface Props {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number; // ms before starting
  speed?: number; // ms per frame
}

export default function ScrambleText({ text, className, style, delay = 0, speed = 28 }: Props) {
  const [displayed, setDisplayed] = useState(text);
  const started = useRef(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      started.current = true;
      let frame = 0;
      const totalFrames = text.length * 4;

      const interval = setInterval(() => {
        setDisplayed(
          text
            .split("")
            .map((char, i) => {
              if (char === " " || char === "\n") return char;
              if (i < Math.floor(frame / 4)) return char;
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );
        frame++;
        if (frame > totalFrames) {
          clearInterval(interval);
          setDisplayed(text);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, speed]);

  return (
    <span className={className} style={style}>
      {displayed}
    </span>
  );
}
