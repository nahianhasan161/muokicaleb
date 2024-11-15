import * as React from "react";

export interface IDecorationRightBar1Props {
  imageUrl: string;
  varient?: "default" | "primary";
}

export default function DecorationRightBar1(props: IDecorationRightBar1Props) {
  return (
    <div>
      {(!props.varient || props.varient === "default") && (
        <RightBar1 imageUrl={props.imageUrl} />
      )}
      {props.varient === "primary" && <RightBar2 imageUrl={props.imageUrl} />}
    </div>
  );
}
interface RightBar1Props {
  imageUrl: string;
}
function RightBar1(props: RightBar1Props) {
  return (
    <div
      className="absolute right-[-2rem] md:right-0 
   2xl:top-[79rem] xl:top-[35rem] lg:top-[32rem] md:top-[58rem] sm:top-[43rem] top-[33rem] "
    >
      <img
        className="w-[70px] md:w-[150px]"
        src={props.imageUrl}
        alt="decoration_bar"
      />
    </div>
  );
}
function RightBar2(props: RightBar1Props) {
  return (
    <>
      <img
        className="absolute right-0 top-[21rem] sm:top-[35rem] md:top-[37rem] lg:top-[49rem] 2xl:top-[103rem] xl:top-[55rem] 
            w-[70px] md:w-[150px]"
        src={props.imageUrl}
        alt="barIcon"
      />
    </>
  );
}
