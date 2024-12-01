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
    <div className="mx-auto max-w-7xl px-4 mt-16 sm:px-6 lg:px-8 mb-16">
      <h1 className="text-4xl font-extrabold text-[#66FCF1] text-center mb-4 md:mb-8">
        <Typewriter
          text="Welcome to Robodex Systems ! ! !"
          delay={100}
          infinite={true}
        />
      </h1>
      <p className="text-xl whitespace-pre-line mx-auto max-w-5xl p-4 md:p-6 lg:p-8 border-4 border-white rounded-3xl">
        At Robodex Systems, we are dedicated to transforming education and
        workspaces with innovative solutions and advanced technology. Our
        mission is to empower students, educators, and professionals with tools
        to foster creativity and excellence. From establishing Atal Tinkering
        Labs and Robotics & AI Labs to supplying specialized lab equipment for
        Physics, Chemistry, and Mathematics, we strive to make STEM education
        accessible and engaging. <br />
        <br />
        Our solutions are designed to inspire curiosity, enabling learners to
        explore and innovate in an ever-evolving world. We also specialize in
        creating ergonomic and efficient environments with our range of
        laboratory, school, and office furniture. Our designs enhance comfort
        and functionality, ensuring productivity for students and professionals
        alike. Our computer lab setups and computer education programs further
        bridge the digital divide, equipping individuals with essential digital
        skills for a technology-driven future. <br />
        <br /> We take pride in delivering customized solutions that meet the
        unique needs of educational institutions and corporate spaces. Our
        commitment to innovation extends to specialized technologies like 3D
        printing and imaging solutions. These cutting-edge tools enable
        industries and individuals to bring ideas to life with precision and
        creativity. Whether it’s prototyping, enhancing learning experiences, or
        streamlining workflows, our products and services are tailored to exceed
        expectations. At Robodex Systems, we aim to build lasting partnerships
        and drive progress through innovation and quality. Together, let’s shape
        a future defined by learning, creativity, and success.
      </p>

      <br />
    </div>
  );
}
