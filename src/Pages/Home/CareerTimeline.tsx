import * as React from "react";
import ImageSectionHeadingH4 from "../../Components/Headings/ImageSectionHeadingh4";
import { About_Content } from "../../Content/AboutContent";
import PostContent from "../../Components/Sections/PostContent";
import CVButton from "../../Components/Button/CVButton";
import ArticleSection from "../Articles/ArticleSection";

import { Home_Content } from "../../Content/HomeContent";
import DecorationBarLeft2 from "../../Components/DecorationBar/DecorationBarLeft2";
import { Link } from "react-router-dom";
import { createSlug } from "../../lib/utills";

export interface ICareerTimelineProps {}

export default function CareerTimeline(props: ICareerTimelineProps) {
  const featurePost = Home_Content.career_timeline.posts.Feature;
  return (
    <section className="flex pt-[10rem] container-px   relative">
      {/* decoration bar */}
      <DecorationBarLeft2 image="/bgBar/homeLeftBar.svg" />
      {/*end decoration bar */}

      <div className="hidden md:block md:w-1/2">
        <ImageSectionHeadingH4
          imageUrl="/TextBackground/darkSectionbackground.png"
          title="Career Timeline"
          className="max-w-[10rem]  hidden sm:flex"
        />
        <Link to={`/articles?scrollTo=${createSlug(featurePost.title)}`}>
          <ArticleSection
            title={featurePost.title}
            description={featurePost.description}
            link={featurePost.link}
            imgUrl={featurePost.image_url}
            categoryName={featurePost.categoryName}
            varient="primary"
          />
        </Link>
      </div>
      <div
        className="bg-no-repeat bg-contain md:w-1/2 sm:pt-[6rem] 2xl:pb-[57%]"
        style={{ backgroundImage: `url('/images/career_line.svg')` }}
      >
        <ImageSectionHeadingH4
          title="Career Timeline"
          className="max-w-[10rem]  sm:hidden"
        />
        {About_Content.skills_Articals.slice(0, 2).map((artical, index) => (
          <Link key={index} to={`/about?scrollTo=${createSlug(artical.title)}`}>
            <PostContent
              title={artical.title}
              dateFrom={artical.from}
              dateTo={artical.to}
              image={artical.image}
              description={artical.description}
              categoryTitle={artical.categoryTitle}
              varient="secondary"
            />
          </Link>
        ))}
        <div>
          <img
            src="/images/long_pointing_arrow.svg"
            alt="cv_arrow"
            className="w-[55%]"
          />
          <span className="flex justify-center">
            <CVButton
              btnText="Download CV"
              link={Home_Content.downloadCVLink}
            />
          </span>
        </div>
      </div>
      {/* section */}
    </section>
  );
}
