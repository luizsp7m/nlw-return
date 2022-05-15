import { useEffect, useState } from "react";
import { Presentation } from "../components/Presentation";
import { Project } from "../components/Project";
import { Skills } from "../components/Skills";
import { Widget } from "../components/Widget";

const PROJECTS = {
  PLANETS_FACT: {
    name: "Planets Fact",
    image: "images/planets-fact.png",
    deploy: "https://interactive-comments-nine.vercel.app/",
    type: "web",
  },

  PORTFOLIO: {
    name: "Portfólio",
    image: "images/portfolio.jpg",
    deploy: "https://portfolio-luizsp7m.vercel.app/",
    type: "web",
  },

  IP_ADDRESS_TRACKER: {
    name: "IP Address Tracker",
    image: "images/tracker.png",
    deploy: "https://ip-address-tracker-chi-six.vercel.app/",
    type: "web",
  },

  MEDIAFY_MOBILE: {
    name: "Mediafy",
    image: "images/mediafy-mobile.png",
    deploy: "https://expo.dev/@luizs/mediafy-mobile",
    type: "mobile",
  },

  LOOPSTUDIOS: {
    name: "Loopstudios Landing Page",
    image: "images/loopstudios-landing-page.png",
    deploy: "https://cranky-jepsen-e924b5.netlify.app/",
    type: "web",
  },

  BLOGR: {
    name: "Blogr Landing Page",
    image: "images/blogr.png",
    deploy: "https://blogr-landing-page-livid.vercel.app/",
    type: "web",
  },
};

export function Home() {
  const [toggle, setToggle] = useState<"projects" | "skills">("projects");

  return (
    <div data-aos="fade-down" className="relative max-w-[768px] w-full mx-auto px-4 flex flex-col items-center">
      <Presentation />

      <div className="flex flex-wrap justify-center gap-2 bg-slate-200 p-3 rounded-lg dark:bg-slate-800">
        <button onClick={() => setToggle("projects")} className={`h-12 w-32 ${toggle === "projects" && "bg-slate-50 dark:bg-slate-700"} rounded-lg font-medium transition-colors hover:bg-slate-50 hover:dark:bg-slate-700`}>Projects</button>
        <button onClick={() => setToggle("skills")} className={`h-12 w-32 ${toggle === "skills" && "bg-slate-50 dark:bg-slate-700"} rounded-lg font-medium transition-colors hover:bg-slate-50 hover:dark:bg-slate-700`}>Skills</button>
      </div>

      {toggle === "projects" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-20">
          {Object.entries(PROJECTS).map(([key, value]) => (
            <Project key={key} project={value} />
          ))}
        </div>
      ) : (
        <Skills />
      )}

      <Widget />
    </div>
  );
}