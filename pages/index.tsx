import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Profile from "../components/Profile/Profile";
import SectionGalery from "../components/SectionGalery/SectionGalery";
import SectionItems from "../components/SectionItems/SectionItems";
import SectionList from "../components/SectionList/SectionList";
import SectionRange from "../components/SectionRange/SectionRange";
import { ProfileService } from "../services/profile/profile";
import { ProfileProps } from "../types/profile";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Skills } from "../sections/Skills";

interface HomeProps {
  profile: ProfileProps;
}

const Home: NextPage<HomeProps> = ({ profile }) => {
  return (
    <div className="bg-gradient-to-b from-[#3A3353] to-[#010505] overflow-hidden">
      <div className="relative overflow-hidden">
        <Hero />
        <div className="gradient-01 absolute z-0" />
        <About />
        <Skills />
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const profile = ProfileService.get();

  return {
    props: { profile },
    revalidate: 60 * 60 * 4,
  };
};
