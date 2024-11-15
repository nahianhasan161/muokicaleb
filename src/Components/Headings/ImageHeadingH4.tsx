import * as React from "react";
import { cn } from "../../lib/utills";

export interface IImageHeadingH4Props {
  title: string;
  imageUrl: string;
  className?: string;
}

export default function ImageHeadingH4(props: IImageHeadingH4Props) {
  const image = `url(${props.imageUrl})`;
  return (
    <h4
      className={cn(
        `fontfam-bigShoulders font-bold
    text-3xl bg-clip-text text-transparent
     bg-center bg-no-repeat bg-cover 2xl:text-6xl 2xl:py-4
    
    `,
        props.className
      )}
      style={{ backgroundImage: image }}
    >
      {props.title}
    </h4>
  );
}
