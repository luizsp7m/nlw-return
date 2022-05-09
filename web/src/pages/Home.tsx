import { Presentation } from "../components/Presentation";
import { Project } from "../components/Project";
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
  return (
    <div className="relative max-w-[768px] w-full mx-auto px-4 flex flex-col items-center">
      <Presentation />

      <div className="flex flex-wrap justify-center gap-2 bg-slate-200 p-3 rounded-lg">
        <button className="h-12 w-32 bg-slate-50 rounded-lg font-medium transition-colors hover:bg-slate-50">Projects</button>
        <button className="h-12 w-32 bg-slate-200 rounded-lg font-medium transition-colors hover:bg-slate-50">Skill</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-20">
        {Object.entries(PROJECTS).map(([key, value]) => (
          <Project key={key} project={value} />
        ))}
      </div>

      <Widget />
    </div>
  );
}