"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBg() {
  const [init, setInit] = useState(false);

  // Initialize tsParticles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 120,
      particles: {
        color: {
          value: "#ffffff", // Snowflake color
        },
        move: {
          direction: MoveDirection.bottom, // Snowflakes fall downwards
          enable: true,
          outModes: {
            default: OutMode.out, // Particles reappear at the top when they exit the canvas
          },
          speed: 2, // Adjust speed for slower snowflake fall
        },
        number: {
          density: {
            enable: true,
            area: 800, // Adjust density area for better spread
          },
          value: 200, // Number of snowflakes
        },
        opacity: {
          value: { min: 0.3, max: 0.8 }, // Random opacity for a natural look
        },
        shape: {
          type: "circle", // Snowflakes are circular
        },
        size: {
          value: { min: 1, max: 4 }, // Varying snowflake sizes
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
}
