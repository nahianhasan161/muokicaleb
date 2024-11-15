import React, { useEffect, useState } from "react";
import { cn, getGMTOffset, getTimeInSelectedTimezone } from "../../lib/utills";
import ImageHeadingH1 from "../../Components/Headings/ImageHeadingH1";

type smallTitleType = {
  title: string;
  subTitle: string;
  timeZone?: string;
};
type smallTitleType2 = {
  timeZone: string;
};

export interface IHeadingSecitonProps {
  largeTitle1: string;
  largeTitle2: string;
  textBg1: string;
  textBg2: string;

  noSection1?: boolean;
  className?: string;
  smallTitle1?: smallTitleType;
  smallTitle2?: smallTitleType2;
}

export default function HeadingSeciton(props: IHeadingSecitonProps) {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    // Function to update the current time
    const updateCurrentTime = () => {
      const time = getTimeInSelectedTimezone(
        props.smallTitle2?.timeZone as string
      );
      setCurrentTime(time);
    };

    // Update the current time initially
    updateCurrentTime();

    // Set up an interval to update the time every minute (60,000 milliseconds)
    const intervalId = setInterval(() => {
      updateCurrentTime();
    }, 60000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [props.smallTitle2?.timeZone]);

  return (
    <section
      className={cn(
        " pb-[20rem] md:pb-[25rem]   bg-no-repeat bg-contain bg-top",
        props.className
      )}
    >
      <div
        className="xl:mx-[300px] lg:mx-[217px]  
    md:mx-[128px] sm:mx-[80px] mx-17 "
      >
        <div className="flex items-start sm:items-center gap-5  relative ">
          <ImageHeadingH1 imageUrl={props.textBg1} title={props.largeTitle1} />
          <div className="flex gap-[35px] lg:gap-[148px] dark:text-slate-primary">
            {!props.noSection1 && (
              <div className="hidden md:block">
                <h6 className="text-xs 2xl:text-xl">
                  {props.smallTitle1 ? props.smallTitle1.title : "Former MLops"}
                </h6>
                <h6 className="text-xs 2xl:text-xl ">
                  {props.smallTitle1 ? props.smallTitle1.subTitle : "Engineer"}
                </h6>
              </div>
            )}
            <div className="sm:mt-0 mt-5">
              <h6 className="text-xs 2xl:text-xl">
                {`My local Time ${currentTime}`}
              </h6>
              <h6 className="text-xs 2xl:text-xl">
                {`GMT (${getGMTOffset(props.smallTitle2?.timeZone as string)})`}
              </h6>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center -mt-8 sm:-mt-12 md:-mt-14 lg:md:-mt-[4.5rem] xl:-mt-[6.6rem] 2xl:-mt-[10.3rem]">
          <img
            className="w-7 h-7 sm:w-[68px] sm:h-[68px]"
            src="/icons/down-arrow-040970-d-7-svg.svg"
            alt="down_arrow"
            width={64}
            height={64}
          />
          <ImageHeadingH1 imageUrl={props.textBg2} title={props.largeTitle2} />
        </div>
      </div>
    </section>
  );
}
