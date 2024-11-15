import * as React from "react";

export interface IDecorationLeftBar1Props {
  imageUrl: string;
}

export default function DecorationLeftBar1(props: IDecorationLeftBar1Props) {
  return (
    <>
      <img
        className="absolute top-[11rem] sm:top-[22rem] md:top-[20rem] lg:top-[29rem] xl:top-[32rem] 
          w-[70px] md:w-[150px] 2xl:top-[63rem]"
        src={props.imageUrl}
        alt="barIcon"
      />
    </>
  );
}
