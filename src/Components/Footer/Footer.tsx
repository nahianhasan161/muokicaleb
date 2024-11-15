import * as React from "react";

import FooterBar from "./FooterBar";
import SubscriptionForm from "./SubscriptionForm";
import FooterMenuSection from "./FooterMenuSection";
import { cn } from "../../lib/utills";

export interface IFooterProps {
  className?: string;
}

export default function Footer(props: IFooterProps) {
  return (
    <footer
      className={cn(
        "mx-[17px]  lg:mx-[217px] sm:mt-[125px] space-y-[33px] sm:space-y-0 text-black/60 text-[10px] sm:text-xs sm:text-[15px] ",
        props.className
      )}
    >
      {/* form card */}
      <SubscriptionForm />
      <section className="py-[33px] sm:pb-[80px] space-y-[26px] sm:space-y-0">
        <FooterMenuSection />
        <FooterBar />
      </section>
    </footer>
  );
}
