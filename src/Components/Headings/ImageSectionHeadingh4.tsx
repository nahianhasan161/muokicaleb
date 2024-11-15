import * as React from "react";
import ImageHeadingH4 from "./ImageHeadingH4";
import { cn } from "../../lib/utills";

export interface IImageSectionHeadingH4Props {
  title: string;
  imageUrl?: string;
  className?: string;
  imageClassName?: string;
}

export default function ImageSectionHeadingH4(
  props: IImageSectionHeadingH4Props
) {
  const defaultImage = "/TextBackground/work.png";
  return (
    <div className={cn("flex items-center mb-6 2xl:mb-14", props.className)}>
      <img
        src="/icons/bow.png"
        alt="side_img_1"
        width={24}
        height={24}
        className="w-[14px] h-[87px] sm:w-[24px] sm:h-[149px] 2xl:w-10 2xl:h-48"
      />
      <ImageHeadingH4
        title={props.title}
        imageUrl={props.imageUrl ? props.imageUrl : defaultImage}
        className={props.imageClassName}
      />
    </div>
  );
}
