import React from "react";

export interface RangeItemProps {
  score: number;
  label: string;
}
const RangeItem = ({ score, label }: RangeItemProps) => {
  const maxScore = 5;

  const getColorIndicator = (index: Number) => {
    return index < score ? "bg-color-primary" : "bg-zinc-200 dark:bg-zinc-700";
  };

  return (
    <div className="flex flex-row items-center mt-2">
      <p className="font-semibold dark:text-white">{label}</p>
      <div className="flex-1 mx-2 border-b border-dashed border-zinc-400 dark:border-zinc-500" />
      <div className="inline-flex">
        {Array.from(Array(maxScore).keys()).map((item, index) => (
          <div
            key={index}
            className={`h-4 w-4 rounded-full mr-1 ${getColorIndicator(index)}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RangeItem;
