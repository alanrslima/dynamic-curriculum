import React from "react";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center">
      <motion.div
        variants={staggerContainer(null, null)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="flex items-center flex-col">
          <div className="flex items-center flex-col">
            <motion.img
              variants={fadeIn("up", "tween", 0.2, 1)}
              src="/images/me.png"
              alt="me"
              width={400}
              height={400}
              className="z-0 mb-[-80px]"
            />
            <motion.p
              variants={textVariant(1)}
              className="text-2xl mb-4 md:text-3xl font-bold z-2 relative uppercase text-white"
            >
              Alan Lima
            </motion.p>
            <motion.h1
              variants={textVariant(1.1)}
              className="text-5xl md:text-8xl lg:text-9xl drop-shadow-[0_4px_30px_rgba(255,255,255,0.7)] font-bold uppercase text-white"
            >
              Full Stack
            </motion.h1>
            <motion.h1
              variants={textVariant(1.2)}
              className="text-5xl md:text-8xl lg:text-9xl  drop-shadow-[0_4px_30px_rgba(255,255,255,0.7)] font-bold uppercase text-white"
            >
              Developer
            </motion.h1>
            <motion.div
              variants={fadeIn("up", "tween", 1.2, 1.2)}
              className="bg-white flex justify-center w-full mt-14  h-1"
            >
              <a href="#about" className="mt-12">
                <Image
                  src="/images/arrow-down.svg"
                  alt="arrow-down"
                  width={40}
                  height={40}
                />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
