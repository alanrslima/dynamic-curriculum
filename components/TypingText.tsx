import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

type TypingTextProps = {
  title: string;
  textStyles?: string;
};

export const TypingText = ({ title, textStyles }: TypingTextProps) => (
  <motion.p
    className={`font-normal text-[14px] text-white ${textStyles}`}
    variants={textContainer}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);
