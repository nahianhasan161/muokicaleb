import * as React from "react";
import { cn } from "../../lib/utills";
import ActionButton from "../Button/ActionButton";
import { btnVarientType } from "../../lib/types";

export interface IContentCardProps {
  title: string;
  description: string;
  btnText: string;
  btnVariant: string;
  className: string;
  isFirst?: boolean;
  headingclassName?: string;
  image?: string;
  btnLink?: string;
}

export default function ContentCard(props: IContentCardProps) {
  return (
    <div
      className={cn(
        "py-[25px] flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-black/35 dark:border-slate-deep/40 group",
        { "border-none": props.isFirst },
        props.className
      )}
    >
      <div className="flex relative flex-col sm:flex-row sm:items-center w-full">
        <h1
          className={cn(
            "fontfam-spaceGrotesk 2xl:text-5xl  text-2xl sm:text-[30px] font-medium leading-[44px] tracking-[-2px] max-w-[10rem] sm:max-w-[15rem] 2xl:max-w-[60rem] mb-3 sm:mb-0 ",
            props.headingclassName
          )}
        >
          {props.title}
        </h1>
        {/* image */}
        {props.image && (
          <div className="  ">
            <img
              src={props.image}
              alt="bg_image"
              className="absolute rounded-xl scale-0 xl:group-hover:scale-100 lg:group-hover:scale-50 duration-500 ease-in-out transition-all -top-32 xl:right-[28%] lg:-right-[34%] 2xl:right-[28%] xl:translate-x-1/2 rotate-[3deg]  h-[300px] 2xl:h-[400px]"
            />
          </div>
        )}
      </div>
      <div className="md:w-[80%] 2xl:w-[77%]">
        <p
          className="
        text-xs sm:text-base 2xl:text-2xl leading-7 text-slate-primary 
         sm:max-w-[460px] 2xl:max-w-[800px]
        py-3"
        >
          {props.description}
        </p>

        <ActionButton
          btnText={props.btnText!}
          btnLink={props.btnLink}
          btnVariant={props.btnVariant as btnVarientType}
        />
      </div>
    </div>
  );
}
