import * as React from "react";
import { footer_content } from "../../Content/FooterContent";
import SubmitButton from "../Button/SubmitButton";
import { useTheme } from "next-themes";
export interface ISubscriptionFormProps {}

export default function SubscriptionForm(props: ISubscriptionFormProps) {
  const { theme } = useTheme();
  return (
    <>
      <section
        className="pt-[20px] pb-[25px] pl-[18px] pr-[26px] 
        lg:px-.5 2xl:px-[3rem]
         bg-slate-lite rounded-xl
         flex flex-col sm:flex-row sm:items-center
         gap-[26px] dark:bg-black-dark_400/60 dark:rounded-[31px]
         "
      >
        <div className="space-y-[17px] flex-1">
          <h1
            className="flex items-baseline 
                 gap-1 sm:max-w-[300px] min-w-[300px] 2xl:max-w-[500px]
                 font-bold fontfam-spaceGrotesk
                sm:relative
                "
          >
            {/* TODO:Adjust gradient text color */}
            {/* bg-gradient-to-r from-indigo-primary to-[#01CAFF] */}
            <span
              className={`
                    text-transparent bg-clip-text text-xl sm:text-[34px] 
                    sm:leading-[41px] 2xl:text-4xl  tracking-[-0.2px]
                    ${
                      theme === "dark"
                        ? "footer_heading_bg_gradient"
                        : "bg-gradient-to-r from-indigo-primary to-[#01CAFF]"
                    }
                    `}
            >
              {footer_content.card_heading}
            </span>

            {/* TODO:Align icon next to text fixed */}

            <img
              className="sm:absolute sm:right-[90px] md:right-[100px] 2xl:-right-5 sm:bottom-1 2xl:w-[50px] 2xl:h-[50px]"
              src="/icons/celebrate_icon.svg"
              alt="celebrate_icon"
              height={28}
              width={28}
            />
          </h1>

          <p className="dark:text-slate-primary max-w-[30rem] 2xl:text-2xl">
            {footer_content.card_description}
          </p>
        </div>
        <form
          className="
                    flex-1 max-w-[40rem]
                "
        >
          <span className="relative flex  ">
            <input
              type="text"
              placeholder="Enter Your Email"
              name="emailInput"
              className="border pl-4 pr-[90px] md:pr-[120px] lg:pr-[120px] xl:pr-[168px] 
              py-[14px] md:py-5 w-full rounded-full  2xl:py-6 2xl:text-2xl
              dark:bg-white dark:shadow-dark_input 
              dark:text-[#111]
              "
            />
            <SubmitButton btnText="Submit" />
          </span>
        </form>
      </section>
    </>
  );
}
