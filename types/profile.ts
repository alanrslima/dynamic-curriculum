import { AddressProps } from "./address";
import { CertificateProps } from "./certificate";
import { ProjectProps } from "./project";
import { SkillProps } from "./skill";

export interface ProfileProps {
  name: string;
  profession: string;
  about: string;
  address: AddressProps;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  skills: SkillProps[];
  personalProjects: ProjectProps[];
  professionalProjects: ProjectProps[];
  certificates: CertificateProps[];
}
