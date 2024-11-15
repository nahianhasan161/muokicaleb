import * as React from "react";
import { btnVarientType } from "../../lib/types";
import { Link } from "react-router-dom";

export interface IActionButtonProps {
  btnVariant?: btnVarientType;
  btnText: string;
  btnIcon?: string;
  btnLink?: string;
}

export default function ActionButton(props: IActionButtonProps) {
  const defaultPrimaryIcon = "/icons/arrow.svg";
  const defaultSecondaryIcon = "/icons/arrow_secondary.svg";
  return (
    <>
      <Link to={props.btnLink as string}>
        <button
          className={`btn ${
            props.btnVariant
              ? props.btnVariant === "secondary"
                ? "btn-secondary"
                : "btn-primary"
              : "btn-primary"
          }`}
        >
          {props.btnText}

          {/*  <ArrowIcon className='bg-red-500'/> */}
          {(props.btnVariant === "primary" ||
            props.btnVariant === undefined) && (
            <img
              className="2xl:w-5 "
              src={defaultPrimaryIcon}
              alt="arrow_icon"
              width={11}
              height={7.5}
            />
          )}
          {props.btnVariant === "secondary" && (
            <img
              className="2xl:w-5 "
              src={props.btnIcon ? props.btnIcon : defaultSecondaryIcon}
              alt="arrow_icon"
              width={11}
              height={7.5}
            />
          )}
        </button>
      </Link>
    </>
  );
}
