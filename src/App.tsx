"use client";
import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { cn } from "./lib/utills";
import { useTheme } from "next-themes";
import ScrollTop from "./Components/Utility/ScrollTop";

function App() {
  const location = useLocation();

  const { theme } = useTheme();
  const getRouteProperties = () => {
    // here i am change wehn
    switch (location.pathname) {
      case "/about":
        return {
          backgroundImage:
            theme === "dark"
              ? "url('/images/dark/about_landing_bg.svg')"
              : "url('/backgroundImage/aboutHeadingBg.svg')",

          className:
            "2xl:h-[1740px] xl:h-[1000px] lg:h-[900px] md:h-[700px] sm:h-[630px] h-[400px]",
        };
      case "/opensource":
        return {
          backgroundImage:
            theme === "dark"
              ? "url('/images/dark/open_source_landing_bg.svg')"
              : "url('/backgroundImage/opensourceHeadingBg.svg')",

          className:
            "2xl:h-[1740px] xl:h-[1000px] lg:h-[900px] md:h-[700px] sm:h-[630px] h-[400px]",
        };
      case "/articles":
        return {
          backgroundImage:
            theme === "dark"
              ? "url('/images/dark/articles_landing_bg.svg')"
              : "url('/backgroundImage/articalesHeadingBg.svg')",

          className:
            "2xl:h-[1740px] xl:h-[1000px] lg:h-[900px] md:h-[700px] sm:h-[630px] h-[400px]",
        };
      default:
        return {
          backgroundImage:
            theme === "dark"
              ? "url('/images/dark/home_landing_bg.svg')"
              : "url('/backgroundImage/BG.svg')",

          className:
            "2xl:h-[2400px] xl:h-[1440px] lg:h-[1370px] md:h-[1650px] sm:h-[1180px] h-[950px]",
          footerClassName:
            " xl:mt-[-5rem] lg:mt-[-10rem] md:mt-[-15rem] sm:mt-[-15rem] mt-0",
        };
    }
  };

  const { backgroundImage, className, footerClassName } = getRouteProperties();

  const containerStyle = {
    backgroundImage: backgroundImage,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  console.log("theme:" + theme);
  return (
    <>
      <div
        className={cn(
          "xl:h-[1800px] lg:h-[900px] md:h-[700px] sm:h-[630px] h-[410px] ",

          className
        )}
        style={containerStyle}
      >
        <Navbar />
        <ScrollTop />
        <Outlet />
        <Footer className={footerClassName} />
      </div>
    </>
  );
}

export default App;
