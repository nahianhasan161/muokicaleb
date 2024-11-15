import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeadingSeciton from "../Home/HeadingSection";

import ImageSectionHeadingH4 from "../../Components/Headings/ImageSectionHeadingh4";
import ArticleSection from "./ArticleSection";
import { Articles_Content } from "../../Content/ArticlesContent";
import DecorationLeftBar1 from "../../Components/DecorationBar/DecorationLeftBar1";

export interface IArticlesProps {}
export default function Articles(props: IArticlesProps) {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const scrollToId = queryParams.get("scrollTo");
  console.log(queryParams);
  useEffect(() => {
    if (scrollToId) {
      const elementToScrollTo = document.getElementById(scrollToId);
      console.log(elementToScrollTo);
      if (elementToScrollTo) {
        elementToScrollTo.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [scrollToId]);

  return (
    <div className="">
      <div className="relative">
        <HeadingSeciton
          largeTitle1={Articles_Content.landing.headerTitle1}
          largeTitle2={Articles_Content.landing.headerTitle2}
          textBg1={Articles_Content.landing.headerTitleBg1}
          textBg2={Articles_Content.landing.headerTitleBg2}
          smallTitle2={Articles_Content.landing.smallTitle2}
          noSection1={true}
          className="pb-[5rem] md:pb-[10rem]"
        />

        <DecorationLeftBar1 imageUrl="/bgBar/articalsBar.svg" />
      </div>
      <section className="container-mx ">
        <ImageSectionHeadingH4 title="Articles" className="mb-0" />
        <div id="articles">
          {Articles_Content.articles.map((article, index) => (
            <span key={index}>
              <ArticleSection
                title={article.title}
                description={article.description}
                imgUrl={article.image}
                link={article.Link}
              />
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
