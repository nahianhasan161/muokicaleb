import clsx from "clsx";
import * as React from "react";

export interface ISubmitButtonProps {
  btnText: string;
  className?: string;
}

export default function SubmitButton(props: ISubmitButtonProps) {
  return (
    <button
      className={clsx(
        "btn btn-submit absolute right-2  lg:right-[-20px] xl:right-[-24px] bottom-1/2 translate-y-1/2",
        props.className
      )}
    >
      {props.btnText}
    </button>
  );
}
