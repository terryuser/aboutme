import { FC } from "react";
import { Helmet } from "react-helmet";

import GlobalContextProvider from "./context/GlobalContext";
import { Header, Intro, Skills, Projects } from "@components/index";

import logo from "./logo.svg";

const App: FC = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Terry Lau - Frontend Developer</title>
        <link rel="icon" href="/aboutme/favicon.ico" />
        <link rel="canonical" href="https://terryuser.github.io/aboutme" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalContextProvider>
        <Header />
        <div className="main-content">
          <Intro />
          <Skills />
          <Projects />
        </div>
      </GlobalContextProvider>
    </>
  );
};

export default App;
