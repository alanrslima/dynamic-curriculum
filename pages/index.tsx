import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Profile from "../components/Profile/Profile";
import SectionGalery from "../components/SectionGalery/SectionGalery";
import SectionItems from "../components/SectionItems/SectionItems";
import SectionList from "../components/SectionList/SectionList";
import SectionRange from "../components/SectionRange/SectionRange";
import { ProfileService } from "../services/profile/profile";
import { ProfileProps } from "../types/profile";

interface HomeProps {
  profile: ProfileProps;
}

const Home: NextPage<HomeProps> = ({ profile }) => {
  return (
    <div className="container mx-auto pb-6 lg: grid lg:grid-cols-4 lg:gap-5 ">
      <Head>
        <title>Corrículo de Alan Lima</title>
        <meta name="description" content="Generated by Alan Lima" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Profile {...profile} />
      </div>

      <div className="col-span-2">
        <SectionList
          card={{ title: "Experiências" }}
          sections={profile.experiences.map((item) => ({
            title: item.position,
            subTitle: item.company,
            topics: item.activities,
          }))}
        />
        <SectionRange
          ranges={profile.skills.map((skill) => ({
            label: skill.name,
            score: skill.pontuation,
          }))}
        />
        <SectionList
          card={{ title: "Educação" }}
          sections={profile.educations.map((item) => ({
            title: item.position,
            subTitle: item.company,
            topics: item.activities,
          }))}
        />
      </div>

      <div>
        <SectionItems
          card={{
            title: "Projetos",
            subTitle: "Participações em projetos profissionais",
          }}
          items={profile.professionalProjects}
        />
        <SectionGalery
          galery={profile.certificates}
          card={{ title: "Certificados" }}
        />
        <SectionItems
          card={{ title: "Estudos", subTitle: "Projetos pessoais e de estudo" }}
          items={profile.personalProjects}
        />
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const profile = await ProfileService.get();

  return {
    props: { profile },
    revalidate: 60 * 60 * 4,
  };
};
