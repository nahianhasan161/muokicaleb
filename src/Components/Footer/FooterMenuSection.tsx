import FooterMenu from "./FooterMenu";

import { footer_content } from "../../Content/FooterContent";

export interface IFooterMenuSectionProps {}

export default function FooterMenuSection(props: IFooterMenuSectionProps) {
  return (
    <>
      <div
        className="flex flex-col sm:flex-row justify-between 
        sm:justify-normal gap-[26px] sm:gap-0
       w-[50%] sm:w-full py-[100px]
        "
      >
        <span className="sm:flex-1">
          <img
            src="/images/simple-mobile-logo.svg"
            alt="logo"
            className="sm:w-[49px] sm:h-[34px] 2xl:h-[64px] 2xl:w-[64px]"
          />
        </span>
        <div className="flex items-center justify-between  leading-6 sm:flex-1 2xl:text-2xl">
          <FooterMenu lists={footer_content.list1} />
          <FooterMenu lists={footer_content.list2} />
        </div>
      </div>
    </>
  );
}
