import Image from "next/image";
import React from "react";
import Card, { CardProps } from "../Card/Card";

interface ItemProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
  flags?: string[];
}

interface SectionItemsProps {
  card?: CardProps;
  items: ItemProps[];
}
const SectionItems = ({ card, items }: SectionItemsProps) => {
  return (
    <Card {...card}>
      {items.map((item, index) => (
        <a
          href={item.link}
          target="_blank"
          key={index}
          className="bg-zinc-100 flex transition-opacity hover:opacity-50 dark:bg-zinc-800 cursor-pointer p-3 rounded-lg mt-4"
          rel="noreferrer"
        >
          {item.image && (
            <div className="mr-3 items-center flex">
              <Image
                src={item.image}
                alt={item.title}
                height={50}
                width={50}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          )}
          <div className="w-full">
            <h6 className="font-semibold text-md dark:text-white">
              {item.title}
            </h6>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 ">
              {item.description}
            </p>
            {item.flags && (
              <div className="inline-flex flex-wrap">
                {item.flags?.map((flag) => (
                  <div
                    className="bg-color-primary mt-2 mr-2 rounded-md px-2"
                    key={flag}
                  >
                    <span className="text-white dar:text-black text-sm">
                      {flag}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </a>
      ))}
    </Card>
  );
};

export default SectionItems;
