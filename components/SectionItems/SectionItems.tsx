import React from "react";
import Card, { CardProps } from "../Card/Card";

interface ItemProps {
  title: string;
  description: string;
  image?: string;
}

interface SectionItemsProps {
  card?: CardProps;
  items: ItemProps[];
}
const SectionItems = ({ card, items }: SectionItemsProps) => {
  return (
    <Card {...card}>
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-zinc-100 transition-opacity hover:opacity-50 dark:bg-zinc-800 cursor-pointer p-3 rounded-lg mt-4"
        >
          <h6 className="font-semibold text-md dark:text-white">
            {item.title}
          </h6>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 ">
            {item.description}
          </p>
        </div>
      ))}
    </Card>
  );
};

export default SectionItems;
