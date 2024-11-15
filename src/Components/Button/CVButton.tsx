import * as React from "react";
import { Link } from "react-router-dom";

export interface ICVButtonProps {
  btnText: string;
  btnIcon?: string;
  link?: string;
}

export default function CVButton(props: ICVButtonProps) {
  const defaultIcon = "/icons/arrow.svg";
  return (
    <>
      <Link to={props.link as string}>
        <button className="btn btn-cv">
          {props.btnText}

          <img
            className="fill-white 2xl:w-6 2xl:h-6"
            src={props.btnIcon ? props.btnIcon : defaultIcon}
            alt="arrow_icon"
            width={11}
            height={7.5}
          />
        </button>
      </Link>
    </>
  );
}
