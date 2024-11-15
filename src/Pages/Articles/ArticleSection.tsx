import * as React from "react";
import CVButton from "../../Components/Button/CVButton";
import { cn, createSlug } from "../../lib/utills";

export interface IArticleSectionProps {
  title: string;
  description: string;
  imgUrl: string;
  categoryName?: string;
  link?: string;
  varient?: "default" | "primary";
}

export default function ArticleSection(props: IArticleSectionProps) {
  return (
    <div
      className={cn(
        "flex justify-between sm:gap-3 md:gap-[64px]  lg:gap-[77px] py-[20px] sm:py-[40px] sm:my-5 bg-white dark:bg-transparent sm:border-b border-black/35 dark:border-b-[0.4px] dark:border-slate-deep/40  ",
        { "dark:sm:border-none bg-transparent": props.varient === "primary" }
      )}
      id={createSlug(props.title)}
    >
      <div className="order-none sm:order-2 2xl:max-w-[60rem] mr-auto ">
        <h6
          className="uppercase hidden sm:block
         tracking-[3.15px] text-blue-lite text-base 2xl:text-xl
          font-semibold dark:text-white
        "
        >
          {props.categoryName ? props.categoryName : "TUTORIAL"}
        </h6>{" "}
        <h3 className="text-content-heading mb-[9px] dark:text-[28px] 2xl:text-6xl dark:2xl:text-5xl">
          {props.title}
        </h3>{" "}
        {props.varient === "primary" && (
          <img
            className="rounded-[21px] border border-[#ABB5C5]
      w-[112px] h-[90px] sm:w-[70%] sm:h-[190px] sm:my-[6px] 2xl:w-[30rem] 2xl:h-[18rem] 
      "
            src={props.imgUrl}
            alt="article_image"
          />
        )}
        <p
          className="hidden sm:block mb-[19px]
        text-slate-pure sm:text-base dark:text-slate-primary max-w-[50rem] 2xl:text-2xl
        "
        >
          {props.description}
        </p>
        {props.varient !== "primary" && (
          <CVButton btnText="Read more" link={props.link} />
        )}
      </div>

      {props.varient !== "primary" && (
        <img
          className="rounded-[21px] border border-[#ABB5C5]
      w-[112px] h-[90px] sm:w-[273px] sm:h-[190px] sm:my-[6px] sm:ml-[84] 2xl:w-[30rem] 2xl:h-[18rem] 
      "
          src={props.imgUrl}
          alt="article_image"
        />
      )}
    </div>
  );
}
