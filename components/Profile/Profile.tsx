import Image from "next/image";
import React from "react";
import { ProfileProps } from "../../types/profile";
import Card from "../Card/Card";
import Icon, { IconNameType } from "../Icon/Icon";

interface LinkItemProps {
  link?: string;
  label: string;
  iconName: IconNameType;
}
const LinkItem = ({ label, link, iconName }: LinkItemProps) => {
  return (
    <a
      target="_blank"
      className="inline-flex mt-2 items-center text-sm"
      href={link}
      rel="noreferrer"
    >
      <Icon
        className="mr-2"
        color="var(--color-primary)"
        name={iconName}
        size={22}
      />
      {label}
    </a>
  );
};

const Profile = (props: ProfileProps) => {
  return (
    <Card>
      <div className="flex flex-col items-center">
        <div className="rounded-full h-40 aspect-square bg-gradient-to-r p-[6px] from-[#B8E0D2] to-[#2D9CDB]">
          <Image
            src="/images/profile.jpeg"
            width={100}
            height={100}
            layout="responsive"
            alt="profile"
            className="rounded-full"
          />
        </div>
        <h1 className="text-black mt-6 font-bold text-center dark:text-white text-3xl">
          {props.name}
        </h1>
        <h2 className="text-black mt-1 text-center dark:text-white">
          {props.profession}
        </h2>
        <p className="text-center mt-4 text-sm dark:text-zinc-400">
          {props.about}
        </p>

        <div className="flex flex-col mt-10	dark:text-white font-semibold">
          <LinkItem
            label="linkedin.com/in/alan-lima-3ab807127/"
            iconName="linkedin"
            link="https://www.linkedin.com/in/alan-lima-3ab807127/"
          />
          <LinkItem
            label="github.com/alanrslima"
            iconName="github"
            link="https://github.com/alanrslima"
          />
          <LinkItem
            label="alanronison.lima@gmail.com"
            link="mailto:alanronison.lima@gmail.com?subject=Gostariamos de te contratar! =)"
            iconName="email"
          />
          <LinkItem
            label="(61) 99835-3009"
            link="tel:61998353009"
            iconName="call"
          />
          <LinkItem
            label=" Goiânia - GO"
            link="https://www.google.com.br/maps/place/Goi%C3%A2nia,+State+of+Goi%C3%A1s/@-16.6958288,-49.4443513,11z/data=!3m1!4b1!4m5!3m4!1s0x935ef6bd58d80867:0xef692bad20d2678e!8m2!3d-16.6868912!4d-49.2647943"
            iconName="pin"
          />
        </div>
      </div>
    </Card>
  );
};

export default Profile;
