import * as React from "react";

import ImageSectionHeadingH4 from "../../Components/Headings/ImageSectionHeadingh4";
import { Home_Content } from "../../Content/HomeContent";
import TableBorderList from "../../Components/Table/TableBorderList";

export interface IValuePrincipleTableProps {}

export default function ValuePrincipleTable(props: IValuePrincipleTableProps) {
  const tableData = Home_Content.principals.table;
  return (
    <section className="mt-[38px]  ">
      <div className="flex justify-between flex-col lg:flex-row gap-[44px]">
        <div className="xl:w-1/2">
          <ImageSectionHeadingH4
            title={Home_Content.principals.sectionTitle}
            imageUrl={Home_Content.principals.sectionBgImage}
            className="mb-0"
          />
          <p className="text-xs 2xl:text-2xl sm:text-base leading-7 text-slate-primary mr-[4rem]  ">
            {Home_Content.principals.content.description.at(0)}
            <br />
            <br />
            {Home_Content.principals.content.description.at(1)}
          </p>
        </div>

        {/* <img
          className="lg:w-1/2 dark:hidden 2xl:w-[40%]"
          src="/icons/borderRounded.svg"
          alt="principals_table"
        /> */}
        <div className="lg:w-1/2 bg-slate-lite-sm dark:bg-black-dark_600 dark:border-[#161B22] rounded-[23px]  table-border  ">
          <ul className=" my-[48px]">
            {tableData.map((table, index) => (
              <li
                key={index}
                className="   flex justify-center align-items-center 
             whitespace-nowrap  
            "
              >
                <TableBorderList
                  title={table.title}
                  icon={table.icon}
                  containerClassName={(function () {
                    switch (index) {
                      case 0:
                        return "ml-[5rem] opacity-40";
                      case 1:
                        return " opacity-60";
                      case 2:
                        return " ml-[3rem]";
                      case 3:
                        return " ml-[6.5rem] opacity-60 ";
                      case 4:
                        return "opacity-40";

                      default:
                        return "";
                    }
                  })()}
                />
              </li>
            ))}
            {/*  <li
              className="   flex justify-center align-items-center 
             whitespace-nowrap  
            "
            >
              <TableBorderList
                title="People are the biggest value"
                icon="/icons/table_icon1.png"
                containerClassName="ml-[5rem] opacity-40 "
              />
            </li>
            <li
              className="   flex justify-center align-items-center 
             whitespace-nowrap  
            "
            >
              <TableBorderList
                title="Flexibility is a superpower"
                icon="/icons/table_icon2.png"
              />
            </li>
            <li
              className="   flex justify-center align-items-center 
             whitespace-nowrap  
            "
            >
              <TableBorderList
                title="Do your best or don’t start"
                icon="/icons/table_icon3.png"
                containerClassName="ml-[3rem]"
              />
            </li>
            <li
              className="   flex justify-center align-items-center 
             whitespace-nowrap  ml-[6rem]
            "
            >
              <TableBorderList
                title="Good communication always"
                icon="/icons/table_icon4.png"
                containerClassName="ml-3 opacity-60"
              />
            </li>
            <li
              className="   flex justify-center align-items-center 
             whitespace-nowrap  
            "
            >
              <TableBorderList
                title="Work in a joyful space"
                icon="/icons/table_icon5.png"
                containerClassName="opacity-40"
              />
            </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
}
