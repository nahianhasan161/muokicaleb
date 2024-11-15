import * as React from "react";
import { cn } from "../../lib/utills";

export interface IImageHeadingH1Props {
  title: string;
  imageUrl: string;
  className?: string;
}

export default function ImageHeadingH1(props: IImageHeadingH1Props) {
  return (
    /* sm:text-[142px] */
    <h1
      className={cn(
        `fontfam-bigShoulders font-bold relative uppercase 
     xl:text-[192px] lg:text-[150px] md:text-[118px]  sm:text-[92px] text-[66px]   
     bg-clip-text text-transparent bg-center bg-no-repeat bg-contain bg-custom-size
     whitespace-nowrap 2xl:px-[15rem] 2xl:text-[288px]
    
    `,
        props.className
      )}
      style={{ backgroundImage: `url(${props.imageUrl})` }}
    >
      {props.title}
    </h1>
  );
}
