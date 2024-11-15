import * as React from "react";

import CVButton from "../../Components/Button/CVButton";
export interface IContributionSectionProps {
  title: string;
  postedAt: string;
  link?: string;
}

export default function ContributionSection(props: IContributionSectionProps) {
  return (
    <>
      <div
        className="my-[15px] sm:my-[25px] py-[17px] sm:pt-[42px] 
          flex items-start sm:items-center justify-between sm:border-b sm:overflow border-black-500/35  dark:border-b dark:border-slate-deep/40
          "
      >
        <span>
          <h4
            className="text-content-heading
            "
          >
            {props.title}
          </h4>
          <small
            className="sm:mb-[9px] sm:mt-[17px] 
            text-xxs sm:text-xl text-slate-primary sm:text-slate-secondary font-semibold sm:leading-[44px]
            "
          >
            {props.postedAt}
          </small>
        </span>
        <CVButton btnText="Visit link" link={props.link} />
      </div>
    </>
  );
}
