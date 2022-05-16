import React from "react";
import Card from "../Card/Card";
import RangeItem, { RangeItemProps } from "../RangeItem/RangeItem";

interface SectionRangeProps {
  ranges: RangeItemProps[];
}
const SectionRange = ({ ranges }: SectionRangeProps) => {
  return (
    <Card title="Skills">
      <div className=" md:grid md:grid-cols-2 md:gap-x-6">
        {ranges.map((range, index) => (
          <RangeItem key={index} {...range} />
        ))}
      </div>
    </Card>
  );
};

export default SectionRange;
