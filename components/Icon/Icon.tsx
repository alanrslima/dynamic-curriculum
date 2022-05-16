import React from "react";
import { IconBaseProps } from "react-icons";

import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoIosAt,
  IoMdCall,
  IoMdPin,
} from "react-icons/io";

export type IconNameType = "linkedin" | "github" | "email" | "call" | "pin";

interface IconProps extends IconBaseProps {
  name: IconNameType;
  size?: number;
  color?: string;
}
const Icon = ({ name, ...rest }: IconProps) => {
  switch (name) {
    case "linkedin":
      return <IoLogoLinkedin {...rest} />;
    case "github":
      return <IoLogoGithub {...rest} />;
    case "email":
      return <IoIosAt {...rest} />;
    case "call":
      return <IoMdCall {...rest} />;
    case "pin":
      return <IoMdPin {...rest} />;
    default:
      return null;
  }
};

export default Icon;
