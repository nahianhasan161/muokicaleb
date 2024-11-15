import React from "react";
import HeadingSeciton from "../Home/HeadingSection";
/* import logo from './logo.svg'; */

import SkillsSection from "./SkillsSection";
import VolunteerWorkSection from "./VolunteerWorkSection";
import { About_Content } from "../../Content/AboutContent";
import DecorationLeftBar1 from "../../Components/DecorationBar/DecorationLeftBar1";

function About() {
  return (
    <div className="">
      <div className="relative">
        <HeadingSeciton
          largeTitle1={About_Content.landing.headerTitle1}
          largeTitle2={About_Content.landing.headerTitle2}
          textBg1={About_Content.landing.headerTitleBg1}
          textBg2={About_Content.landing.headerTitleBg2}
          smallTitle1={About_Content.landing.smallTitle1}
          smallTitle2={About_Content.landing.smallTitle2}
        />

        <DecorationLeftBar1 imageUrl="/bgBar/aboutBar.svg" />
      </div>
      <div className="container-mx mt-[-14rem]">
        <SkillsSection />
      </div>

      <VolunteerWorkSection />
    </div>
  );
}

export default About;
