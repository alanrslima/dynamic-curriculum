import React from "react";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "../components/TypingText";

export const About = () => {
  return (
    <section
      id="about"
      className="py-20 relative h-screen flex justify-center items-center"
    >
      <motion.div
        variants={staggerContainer(null, null)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="flex items-center flex-col">
          <TypingText title="| Sobre mim" textStyles="text-center" />
          <motion.p
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-[#C2CDDE] px-8 md:px-20 lg:px-36 mt-3 text-lg leading-loose md:text-2xl md:leading-loose text-center"
          >
            Sou um grande entusiasta do mundo da programação e estou sempre em
            busca de agregar conhecimentos e experiências que sejam relevantes
            para minha carreira.{" "}
            <span className="font-bold text-white">Dedicação</span> se enquadra
            como um dos meus principais adjetivos.{" "}
            <span className="font-bold text-white">
              Sempre ativo, atento aos detalhes
            </span>{" "}
            e criativo no ambiente de trabalho, me esforço para dar o melhor de
            mim nos projetos em que participo. O que me move é a possibilidade
            constante de{" "}
            <span className="font-bold text-white">
              adquirir mais conhecimentos
            </span>{" "}
            e <span className="font-bold text-white">compartilhá-los</span> em
            equipe. Tenho como Hobby o estudo de UI/UX e acho magnífico como
            layouts bem desenhados e interações bem definidas podem influenciar
            e engajar os usuários e alavancar as aplicações de software.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};
