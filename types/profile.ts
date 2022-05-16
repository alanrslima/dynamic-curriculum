import { AddressProps } from "./address";
import { CertificateProps } from "./certificate";
import { ExperienceProps } from "./experience";
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
  experiences: ExperienceProps[];
  personalProjects: ProjectProps[];
  professionalProjects: ProjectProps[];
  certificates: CertificateProps[];
  educations: ExperienceProps[];
}
