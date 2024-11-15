import * as React from "react";

export interface IDecorationBarLeft2Props {
  image: string;
}

export default function DecorationBarLeft2(props: IDecorationBarLeft2Props) {
  return (
    <div
      className="absolute  left-0 
     md:top-[-4rem]  top-[-2rem] "
    >
      <img
        className="w-[70px] md:w-[150px]"
        src={props.image}
        alt="decoration_bar"
      />
    </div>
  );
}
