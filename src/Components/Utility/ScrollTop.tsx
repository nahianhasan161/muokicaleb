import { useLayoutEffect, useEffect } from "react";
import { useLocation } from "react-router-dom";

export interface IScrollTopProps {}
export default function ScrollTop(props: IScrollTopProps) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
