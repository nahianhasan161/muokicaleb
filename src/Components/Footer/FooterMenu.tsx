import * as React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { cn } from "../../lib/utills";
/* import { footer_content } from '../../Content/LandingContent'; */
type MenuItem = {
  id: number;
  title: string;
  link?: string;
};
export interface IFooterMenuProps {
  lists: MenuItem[];
}

export default function FooterMenu(props: IFooterMenuProps) {
  const location = useLocation();
  return (
    <>
      <ul className="space-y-[10px] dark:text-slate-primary">
        {props.lists.map((item, index) => (
          <Link to={item.link as string} key={index}>
            <li
              className={cn({
                "font-bold text-black text-[15px] 2xl:text-2xl dark:text-slate-deep":
                  location.pathname === item.link || !item.link,
              })}
            >
              {item.title}
            </li>
          </Link>
        ))}
        {/*  <li className='font-bold text-black
    text-[15px] '
    >
        Home
        </li>
    <li>About</li>
    <li>Open Source</li>
    <li>Articles</li> */}
      </ul>
    </>
  );
}
