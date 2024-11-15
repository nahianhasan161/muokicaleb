import { useEffect } from "react";

import ImageSectionHeadingH4 from "../../Components/Headings/ImageSectionHeadingh4";
import { OpenSource_Content } from "../../Content/OpenSource";
import ContributionSection from "./ContributionSection";
import HeadingSeciton from "../Home/HeadingSection";

import DecorationRightBar1 from "../../Components/DecorationBar/DecorationRightBar1";
import { useLocation } from "react-router-dom";

export interface IOpenSourceProps {}

export default function OpenSource(props: IOpenSourceProps) {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const scrollToId = queryParams.get("scrollTo");
  useEffect(() => {
    if (scrollToId) {
      const elementToScrollTo = document.getElementById(scrollToId);
      console.log(elementToScrollTo);
      if (elementToScrollTo) {
        elementToScrollTo.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [scrollToId]);
  return (
    <div className="">
      <div>
        <HeadingSeciton
          largeTitle1={OpenSource_Content.landing.headerTitle1}
          largeTitle2={OpenSource_Content.landing.headerTitle2}
          textBg1={OpenSource_Content.landing.headerTitleBg1}
          textBg2={OpenSource_Content.landing.headerTitleBg2}
          smallTitle2={OpenSource_Content.landing.smallTitle2}
          noSection1={true}
        />

        <DecorationRightBar1
          imageUrl="/bgBar/openSourceBar.svg"
          varient="primary"
        />
      </div>
      <section className="container-mx mt-[-15rem]">
        <ImageSectionHeadingH4 title="Contributions" className="mb-0" />
        <div className="mt-[52px] md:mt-[80px]" id="opensource">
          {OpenSource_Content.contributions.map((contribution, index) => (
            <div key={index}>
              <ContributionSection
                title={contribution.title}
                postedAt={contribution.posted_at}
                link={contribution.link}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
