import React from "react";

export interface CardProps {
  children?: React.ReactNode;
  title?: string;
  subTitle?: string;
}
const Card = ({ children, title, subTitle }: CardProps) => {
  return (
    <section className="bg-white mt-5 dark:bg-zinc-900 shadow-md rounded-2xl p-6">
      <div className="mb-6">
        {title ? (
          <h1 className="dark:text-white font-semibold">{title}</h1>
        ) : null}
        {subTitle ? (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{subTitle}</p>
        ) : null}
      </div>

      {children}
    </section>
  );
};

export default Card;
