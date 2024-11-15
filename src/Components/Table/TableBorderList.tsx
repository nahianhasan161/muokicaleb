import * as React from "react";
import { cn } from "../../lib/utills";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { useState } from "react";

export interface ITableBorderListProps {
  title: string;
  icon: string;
  containerClassName?: string;
}

export default function TableBorderList(props: ITableBorderListProps) {
  const [roundedBorder, setRoundedBorder] = useState(
    "/icons/borderRounded.svg"
  );

  const { theme } = useTheme();
  useEffect(() => {
    if (theme === "dark") {
      setRoundedBorder("/icons/borderRoundedDark.svg");
    } else {
      setRoundedBorder("/icons/borderRounded.svg");
    }
  }, [theme]);
  /* const roundedBorderDesktop = "/icons/border_rounded_desktop.svg"; */
  return (
    <span
      /* bg-[length:60%] */

      className={cn(
        ` bg-no-repeat border-shadow text-xs sm:text-base bg-center flex items-center gap-3 pl-10 pr-10 lg:pr-[5.5rem] xl:pr-10  py-6 bg-[length:90%] 2xl:px-[4rem] 2xl:text-xl 2xl:my-6  `,
        props.containerClassName
      )}
      style={{
        backgroundImage: `url(${roundedBorder})`,
      }}
      /* backgroundSize: `65%`, */
    >
      <img src={props.icon} alt="icon" className="w-[1rem] sm:w-auto " />
      {props.title}
    </span>
  );
}
