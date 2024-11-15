import ContentCard from "../../Components/Card/ContentCard";

import ImageSectionHeadingH4 from "../../Components/Headings/ImageSectionHeadingh4";
import { Home_Content } from "../../Content/HomeContent";

export interface IExperienceSectionProps {}

export function ExperienceSection(props: IExperienceSectionProps) {
  return (
    <section className="mt-16">
      <div className="sm:mx-[117px] lg:pl-[140px] ">
        <ImageSectionHeadingH4 title={Home_Content.experience.sectionTitle} />
      </div>

      {Home_Content.experience.content.map((skill, index) => (
        <div
          key={index}
          className={`${
            index === 0 ? "bg-slate-lite dark:bg-black-dark_700 " : ""
          } px-[17px] sm:px-0 `}
        >
          <ContentCard
            title={skill.title}
            description={skill.description}
            btnText={skill.btnText}
            btnLink={skill.btnLink}
            btnVariant={skill.btnVariant}
            isFirst={index === 0}
            image={skill.image}
            headingclassName="max-w-none"
            className="sm:mx-[117px] lg:pl-[140px] sm:gap-[4rem]"
          />
        </div>
      ))}
    </section>
  );
}
