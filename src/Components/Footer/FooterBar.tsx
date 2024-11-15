import * as React from "react";

export interface IFooterBarProps {}

export default function FooterBar(props: IFooterBarProps) {
  return (
    <>
      <div
        className="w-full flex justify-between items-center
     border-t  pt-3 sm:pt-[56px] sm:pb-[30px] 2xl:text-2xl
    "
      >
        <p className="text-indigo-primary font-bold max-w-[5rem] sm:max-w-none">
          Designed by the swimming pool
        </p>
        <p
          className="flex flex-col sm:flex-row text-slate-primary
       
       "
        >
          <span> All rights reserved. </span>
          <span>© Caleb Muoki 2023</span>
        </p>
      </div>
    </>
  );
}
