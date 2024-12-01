"use client";
import React, { useState, useEffect } from "react";

export default function Home() {
  const Typewriter = ({
    text,
    delay,
    infinite,
  }: {
    text: string;
    delay: number;
    infinite: boolean;
  }) => {
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    // Typing logic goes here
    useEffect(() => {
      let timeout: ReturnType<typeof setTimeout>;

      if (currentIndex <= text.length) {
        timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, delay);
      } else if (infinite) {
        // ADD THIS CHECK
        setCurrentIndex(0);
        setCurrentText("");
      }

      return () => clearTimeout(timeout);
    }, [currentIndex, delay, infinite, text]);

    return <span>{currentText}</span>;
  };

  return (
    <div className="mx-auto max-w-7xl px-4 mt-16 sm:px-6 lg:px-8 mb-16 text-center">
      <h1 className="text-4xl font-extrabold text-[#66FCF1]">
        <Typewriter
          text="Welcome to Robodex Systems ! ! !"
          delay={100}
          infinite={true}
        />
      </h1>

      <br />
    </div>
  );
}
