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
        Welcome to{" "}
        <Typewriter text="Robodex Systems ! ! !" delay={100} infinite={true} />
      </h1>
      <div className="text-xl whitespace-pre-line mx-auto max-w-5xl p-4 md:p-6 lg:p-8 border-4 border-white rounded-3xl bg-black">
        <h2 className="text-2xl font-extrabold mb-2 text-[#45A29E]">
          About Robodex Systems
        </h2>
        <p>
          At Robodex Systems, we are pioneers in providing cutting-edge
          solutions in educational technology, laboratory equipment, and
          furniture. With an unwavering commitment to excellence, we specialize
          in delivering a{" "}
          <span className="font-extrabold text-[#66FCF1]">
            diverse range of high-quality products
          </span>{" "}
          tailored to enhance the learning experience across schools,
          universities, and institutions. Our product offerings, including Atal
          Tinkering Labs, Robotics and AI Labs, and advanced Physics and
          Chemistry Lab Equipment, are designed to empower students and
          educators alike.
        </p>
        <br />
        <br />
        <h2 className="text-2xl font-extrabold mb-2 text-[#45A29E]">
          Our Comprehensive Product range
        </h2>
        <p>
          Since our inception, Robodex Systems has been focused on offering a
          wide variety of innovative lab setups and educational tools. We
          provide{" "}
          <span className="font-extrabold text-[#66FCF1]">
            well-structured solutions
          </span>{" "}
          such as 3D printers, computer education programs, and specialized
          school furniture. Our goal is to create environments where learning
          and creativity can flourish. Whether it&apos;s through interactive
          STEM labs or ergonomic classroom furniture, we ensure that our
          products meet international standards while encouraging the spirit of
          innovation in the classroom.{" "}
        </p>
        <br />
        <br />
        <h2 className="text-2xl font-extrabold mb-2 text-[#45A29E]">
          Our Commitment to Quality and Innovation
        </h2>
        <p>
          Our core mission is to provide{" "}
          <span className="font-extrabold text-[#66FCF1]">
            affordable, durable, and state-of-the-art solutions
          </span>{" "}
          that foster an ideal learning atmosphere. Robodex Systems is dedicated
          to offering highly customizable laboratory equipment, including
          computer labs, office furniture, and more, that help create modern,
          functional spaces for both students and educators. We also cater to a
          wide range of industries, including imaging solutions, and laboratory
          furniture for schools and offices. With an extensive array of
          products, Robodex Systems remains at the forefront of the educational
          technology revolution, creating tools that inspire and engage the next
          generation of learners.{" "}
        </p>
        <br />
        <br />
        <h2 className="text-2xl font-extrabold mb-2 text-[#45A29E]">
          Why Choose Robodex Systems?
        </h2>
        <p>
          Choose Robodex Systems for unmatched quality, advanced educational
          solutions, and reliable service.
        </p>
        <h3 className="font-extrabold text-[#66FCF1]">
          Let us be your trusted partner in transforming the future of
          education.
        </h3>
      </div>

      <br />
    </div>
  );
}
