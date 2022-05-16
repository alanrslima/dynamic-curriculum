import React from "react";
import Card from "../Card/Card";

const SectionList = () => {
  const sections = [1, 2, 3, 4, 5];

  return (
    <Card title="Experiências">
      {sections.map((section) => (
        <section key={section} className="mt-6">
          <h2 className="text-2xl font-semibold text-color-primary">
            Front end developer
          </h2>
          <h3 className="dark:text-white font-bold">Nome da empresa</h3>
          <p className="dark:text-zinc-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis, consectetur atque tempore aperiam quis aspernatur
            voluptate eos reprehenderit cumque et dolorum nam! Neque nulla
            quidem consequatur iste officiis et est.
          </p>
        </section>
      ))}
    </Card>
  );
};

export default SectionList;
