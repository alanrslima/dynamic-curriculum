import React from "react";
import Card, { CardProps } from "../Card/Card";

interface SectionItemProps {
  title: string;
  subTitle: string;
  topics: string[];
}
interface SectionListProps {
  card: CardProps;
  sections: SectionItemProps[];
}
const SectionList = ({ card, sections }: SectionListProps) => {
  return (
    <Card {...card}>
      {sections.map((section, index) => (
        <section key={index} className="mt-6">
          <h2 className="text-2xl font-semibold text-color-primary">
            {section.title}
          </h2>
          <h3 className="dark:text-white text-sm mt-1">{section.subTitle}</h3>
          {section.topics.map((topic) => (
            <p
              key={topic}
              className="text-zinc-500 text-sm mt-2 dark:text-zinc-400"
            >
              {topic}
            </p>
          ))}
        </section>
      ))}
    </Card>
  );
};

export default SectionList;
