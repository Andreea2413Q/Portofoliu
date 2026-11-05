
"use client";

import { useEffect, useState } from "react";

const messages = [
  "console.log(Hello, World!)",
  "Software",
  "Frontend Development",
  "Web Development",
  "UI/UX Design",
];

export default function TypingText() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = messages[index];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(current.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % messages.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <p className="
      text-yellow-500
      tracking-[2px]
      sm:tracking-[3px]
      md:tracking-[4px]
      text-sm
      sm:text-base
      md:text-xl
      font-medium
    ">
      {text}
      <span className="animate-pulse">|</span>
    </p>
  );
}
