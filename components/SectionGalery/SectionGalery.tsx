import React from "react";
import Card from "../Card/Card";

interface SectionGaleryProps {
  title?: string;
}
const SectionGalery = ({ title }: SectionGaleryProps) => {
  const galery = [1, 2, 3, 4, 5];

  return (
    <Card title={title}>
      <div className="grid grid-cols-2 gap-4">
        {galery.map((item) => (
          <div
            key={item}
            className="cursor-pointer aspect-square rounded-lg bg-zinc-100 dark:bg-zinc-800 "
          >
            <div className="bg-red-500 h-full w-full rounded-lg opacity-0 hover:opacity-60 transition-opacity">
              <p>Legenda da galeria</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SectionGalery;
