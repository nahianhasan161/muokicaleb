import * as React from "react";
import ImageSectionHeadingH4 from "../../Components/Headings/ImageSectionHeadingh4";
import PostContent from "../../Components/Sections/PostContent";
import { About_Content } from "../../Content/AboutContent";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export interface ISkillsSectionProps {}

export default function SkillsSection(props: ISkillsSectionProps) {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const scrollToId = queryParams.get("scrollTo");
  console.log(queryParams);
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
    <section className="" id="skills">
      <ImageSectionHeadingH4 title="Skills" className="mb-0" />
      {About_Content.skills_Articals.map((artical, index) => (
        <PostContent
          index={index}
          title={artical.title}
          dateFrom={artical.from}
          dateTo={artical.to}
          description={artical.description}
          image={artical.image}
          categoryTitle={artical.categoryTitle}
          downloadBtnLink={artical.downloadBtnLink}
          varient="primary"
        />
      ))}
    </section>
  );
}
