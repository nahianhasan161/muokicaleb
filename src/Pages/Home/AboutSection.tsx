import * as React from "react";

import ImageHeadingH4 from "../../Components/Headings/ImageHeadingH4";
import DecorationRightBar1 from "../../Components/DecorationBar/DecorationRightBar1";
import { Home_Content } from "../../Content/HomeContent";
import { Link } from "react-router-dom";

export interface IAboutSectionProps {}

export default function AboutSection(props: IAboutSectionProps) {
  return (
    <div className="relative ">
      <section className="w-full grid lg:grid-cols-12 grid-cols-1  lg:gap-[88px]   ">
        <div className="grid grid-cols-12 col-span-7 gap-1 order-2 lg:order-none">
          {/*  width: 343.617px;
height: 379.087px;
transform: rotate(-178deg); */}
          {Home_Content.about.galary.map((image, index) => (
            <img
              key={index}
              src={image.imageUrl}
              alt={"gallery_img_" + index}
              width={image.width}
              height={image.height}
              className={`${index === 2 || index === 0 ? "mt-auto" : ""}
              ${index === 3 ? "col-start-4" : ""}
             col-span-4 rounded-xl w-full`}
            />
          ))}
        </div>

        <div
          className="  col-span-5 flex flex-col justify-center 
        pb-2 md:px-[117px] lg:pl-[0px]  2xl:mr-10

        
        "
        >
          {/* Description  */}
          <ImageHeadingH4
            title={Home_Content.about.content.title}
            imageUrl={Home_Content.about.content.titleImage}
          />
          <p className="para-1 py-4 max-w-none 2xl:text-2xl">
            {Home_Content.about.content.description.at(0)}

            <br />
            <br />
            {Home_Content.about.content.description.at(1)}
          </p>
          <span className="flex gap-6 items-center ">
            <Link to={Home_Content.Social.x}>
              <img
                src="/icons/x.svg"
                alt="xIcon"
                width={24}
                height={24}
                className="2xl:w-[40px] 2xl:h-[40px]"
              />
            </Link>
            <Link to={Home_Content.Social.github}>
              <img
                src="/icons/github.svg"
                alt="xIcon"
                width={24}
                height={24}
                className="2xl:w-[40px] 2xl:h-[40px]"
              />
            </Link>
            <Link to={Home_Content.Social.linkedIn}>
              <img
                src="/icons/linkedin.svg"
                alt="xIcon"
                width={24}
                height={24}
                className="2xl:w-[40px] 2xl:h-[40px]"
              />
            </Link>
          </span>
        </div>
      </section>
      <DecorationRightBar1 varient="default" imageUrl="/bgBar/homeBar.svg" />
    </div>
  );
}
