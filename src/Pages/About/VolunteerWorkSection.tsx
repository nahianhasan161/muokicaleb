import * as React from "react";
import ImageSectionHeadingH4 from "../../Components/Headings/ImageSectionHeadingh4";
import { About_Content } from "../../Content/AboutContent";
import PostContent from "../../Components/Sections/PostContent";

export interface IVolunteerWorkSectionProps {}

export default function VolunteerWorkSection(
  props: IVolunteerWorkSectionProps
) {
  return (
    <section className="dark:bg-black-dark_400 container-px py-10 ">
      <ImageSectionHeadingH4 title="Volunteer Work" className="mb-0" />
      {About_Content.volunteer_Articals.map((artical, index) => (
        <div key={index}>
          <PostContent
            title={artical.title}
            dateFrom={artical.from}
            dateTo={artical.to}
            description={artical.description}
          />
        </div>
      ))}
    </section>
  );
}
