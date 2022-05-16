import Image from "next/image";
import React from "react";
import Card, { CardProps } from "../Card/Card";

interface GaleryItemProps {
  title: string;
  image: string;
  file?: string;
}
interface SectionGaleryProps {
  card?: CardProps;
  galery: GaleryItemProps[];
}

const SectionGalery = ({ card, galery }: SectionGaleryProps) => {
  return (
    <Card {...card}>
      <div className="grid grid-cols-2 gap-4">
        {galery.map((item, index) => (
          <a
            key={index}
            href={item.file}
            target="_blank"
            className="cursor-pointer relative aspect-square rounded-lg bg-zinc-100 dark:bg-zinc-800 "
            rel="noreferrer"
          >
            <Image
              src={item.image}
              alt={item.title}
              layout="responsive"
              objectFit="cover"
              className="rounded-lg"
              width={50}
              height={50}
            />
            <div className="bg-gradient-to-b from-transparent to-black/[.60]  p-2 flex items-end absolute top-0 left-0 right-0 bottom-0 rounded-lg opacity-100 md:opacity-0 hover:opacity-100 transition-opacity">
              <p className="text-md md:text-sm font-semibold text-white">
                {item.title}
              </p>
            </div>
          </a>
        ))}
      </div>
    </Card>
  );
};

export default SectionGalery;
