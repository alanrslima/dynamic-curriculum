import React from "react";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";
import Image from "next/image";
import { TitleText } from "../components/TitleText";
import { TypingText } from "../components/TypingText";
import { styles } from "../styles";

export const Skills = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <motion.div
        variants={staggerContainer(null, null)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className={`${styles.xPaddings} flex flex-col md:flex-row`}>
          <div>
            <TypingText title="Minhas skills" />
            <TitleText title={<>Quais são minhas habilidades?</>} />
          </div>
          <div>
            <motion.img
              variants={fadeIn("up", "tween", 0.2, 1)}
              src="/images/percentages.svg"
              alt="me"
              width={350}
              height={350}
              className="z-0 mb-[-80px]"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
