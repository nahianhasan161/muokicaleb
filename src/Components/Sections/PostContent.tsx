import * as React from "react";
import CVButton from "../Button/CVButton";
import { cn, createSlug } from "../../lib/utills";

export interface IPostContentProps {
  categoryTitle?: string;
  title: string;
  dateFrom?: string;
  dateTo?: string;
  image?: string;
  description: Array<string> | string | undefined;
  downloadBtnLink?: string;
  index?: string | number;

  varient?: "default" | "primary" | "secondary";
}

export default function PostContent(props: IPostContentProps) {
  return (
    <div
      className="flex items-start mb-3"
      key={props.index}
      id={createSlug(props.title)}
    >
      {/*pointing arrow  */}
      <img
        className={cn(
          "w-[10%] sm:w-[20%] mr-[-3%] sm:mr-[-6%] 2xl:mr-[-5%] sm:mt-[11rem] mt-[7rem] ",
          {
            hidden: props.varient !== "secondary",
          }
        )}
        src="/images/pointing_arrow.svg"
        alt="arrow_img"
      />
      <div
        className={cn(
          "flex flex-col sm:flex-row gap-[13px] py-[35px] sm:py-[56] sm:border-b border-black/35 dark:bg-inherit dark:border-slate-deep/40 dark:border-b-[.4px] 2xl:w-full",
          {
            "sm:flex-col w-[95%]  border border-slate-border bg-slate-bg-content shadow-border rounded-lg pl-4 pr-[18px] pt-[20px] pb-[24px] sm:pl-[29px] sm:pr-[56px] sm:pt-[42px] sm:pb-[52px] mb-[28px] dark:bg-black-dark_600 dark:shadow-card_glass dark:border-b":
              props.varient === "secondary",
          },
          { "sm:dark:border-none": props.index === 0 }
        )}
      >
        {/* main content */}
        <div className="flex-1 flex flex-col justify-between ">
          <div className="2xl:max-w-[40rem]">
            {/*   prettier-ignore */}
            <span
              className={cn("hidden  gap-[10px] items-center", {
                "flex": props.varient === "primary" || "secondary",
              })}
            >
              {props.image && (
                <span className="h-6 w-6 sm:w-[48px] sm:h-[48px]">
                  <img
                    src={props.image}
                    alt="devops_logo"
                    className="  rounded-full p-1 border"
                  />
                </span>
              )}
              {props.categoryTitle && (
                <h2
                  className=" text-xs sm:text-xl 2xl:text-2xl leading-[24px] sm:leading[44px]
            text-slate-secondary 
            "
                >
                 
                  {props.categoryTitle}
                  {/* {props.categoryTitle ? props.categoryTitle : "DevOps Engineer"} */}
                </h2>
              )}
            </span>
            {/* } */}
            <span className="">
              {/* dark:text-slate-deep */}
              <h4
                className={cn(
                  " text-[23px] sm:text-[48px] 2xl:text-6xl  text-indigo-primary font-bold sm:font-medium leading-[23px] sm:leading-[44px] tracking-[-0.4px] sm:tracking-[-2px] pt-2 rounded-[38px]",
                  {
                    " text-black-primary dark:text-slate-deep font-bold sm:text-2xl text-xs tracking-[-0.4px] leading-[28px] fontfam-spaceGrotesk ":
                      props.varient === "secondary",
                  }
                )}
              >
                {props.title}
                {props.varient === "secondary" && (
                  <span>
                    | {props.dateFrom} to {props.dateTo}
                  </span>
                )}
              </h4>
              {props.dateFrom && props.dateTo && (
                <small
                  className={cn(
                    "text-xxs 2xl:text-2xl sm:text-xl text-slate-secondary dark:text-slate-primary  font-semibold  sm:leading-[44px]",
                    { hidden: props.varient === "secondary" }
                  )}
                >
                  {props.dateFrom} to {props.dateTo}
                </small>
              )}
            </span>
          </div>

          {props.varient === "primary" && props.downloadBtnLink && (
            <div className="hidden sm:block 2xl:mt-4">
              <CVButton btnText="Download CV" link={props.downloadBtnLink} />
            </div>
          )}
        </div>
        <div
          className={cn(
            "flex-1 text-xxs 2xl:text-2xl leading-[17px] text-slate-primary sm:text-[22px] sm:leading-[32px]",
            {
              " text-xxs sm:text-base dark:text-slate-primary":
                props.varient === "secondary",
            }
          )}
        >
          {props.varient === "primary" || props.varient === "secondary" ? (
            <ul className="space-y-1 sm:space-y-2 list-disc pl-4 ">
              {(props.description as string[]).map((content, index) => (
                <li key={index}>{content}</li>
              ))}
            </ul>
          ) : (
            <p>{props.description}</p>
          )}

          {props.downloadBtnLink && (
            <div className="pt-6 sm:hidden block">
              <CVButton btnText="Download CV" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
