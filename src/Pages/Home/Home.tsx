import React from "react";
import HeadingSeciton from "./HeadingSection";
import AboutSection from "./AboutSection";
import { ExperienceSection } from "./ExperienceSection";
import ValuePrincipleTable from "./ValuePrincipleSection";
import CareerTimeline from "./CareerTimeline";
import { Home_Content } from "../../Content/HomeContent";
/* import logo from './logo.svg'; */

function Home() {
  return (
    <main className="overflow-x-hidden ">
      <div className="mx-[17px] md:mx-0">
        <HeadingSeciton
          largeTitle1={Home_Content.landing.headerTitle1}
          largeTitle2={Home_Content.landing.headerTitle2}
          textBg1={Home_Content.landing.headerTitleBg1}
          textBg2={Home_Content.landing.headerTitleBg2}
          smallTitle1={Home_Content.landing.smallTitle1}
          smallTitle2={Home_Content.landing.smallTitle2}
          className="pb-0 sm:pb-0 md:pb-0"
        />
      </div>
      <div className="mx-[17px] md:ml-0">
        <AboutSection />
      </div>
      <div className="mx-0 ">
        <ExperienceSection />
      </div>

      <div className="sm:mx-[117px] lg:pl-[140px] mx-[17px] ">
        <ValuePrincipleTable />
      </div>

      <div
        className="bg-[url('/public/backgroundImage/career_timeline_bg.svg')] dark:bg-[url('/public/images/dark/career_timeline_bg.svg')] bg-no-repeat bg-cover 
      xl:pb-[30rem] lg:pb-[38rem] md:pb-[45rem] sm:pb-[30rem] pb-[20rem]
      "
      >
        <CareerTimeline />
      </div>
    </main>
  );
}

export default Home;
