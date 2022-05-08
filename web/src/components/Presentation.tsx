import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { RiDownloadLine } from "react-icons/ri";

const SOCIAL = {
  GITHUB: {
    icon: <FaGithub size={20} />,
    link: "https://github.com/luizsp7m"
  },

  LINKEDIN: {
    icon: <FaLinkedinIn size={20} />,
    link: "https://www.linkedin.com/in/luiz-oliveira-08/"
  },

  EMAIL: {
    icon: <FaEnvelope size={20} />,
    link: "mailto:luizoliveira2808@gmail.com"
  },
};

const ACHIEVEMENTS = {
  YEARS_EXPERIENCE: {
    amount: 4,
    title: "Years of work",
  },

  NUMBER_PROJECTS: {
    amount: 40,
    title: "Completed projects",
  },

  SATISFIED_CUSTOMERS: {
    amount: 34,
    title: "Satisfied customers",
  },
};

export function Presentation() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 my-20">
      <div className="w-40 h-40 flex justify-center items-center rounded-full bg-slate-200">
        <img
          src="https://github.com/luizsp7m.png"
          alt="Luiz"
          className="w-36 h-36 object-cover rounded-full"
        />
      </div>

      <div className="flex flex-col items-center gap-2">
        <h1 className="font-bold text-2xl">Luiz Oliveira</h1>
        <span className="font-normal text-md text-slate-300">Web developer</span>
      </div>

      <div className="flex items-center gap-4">
        {Object.entries(SOCIAL).map(([key, value]) => (
          <a
            key={key}
            href={value.link}
            target="_blank"
            className="h-10 w-10 rounded-md flex items-center justify-center bg-slate-200 text-slate-100"
          >
            {value.icon}
          </a>
        ))}
      </div>

      <div className="flex items-center my-4 gap-16">
        {Object.entries(ACHIEVEMENTS).map(([key, value]) => (
          <div className="flex flex-col items-center gap-2 w-[4rem] text-center">
            <h5 className="font-bold text-lg">{value.amount}</h5>
            <span className="text-slate-300">{value.title}</span>
          </div>
        ))}
      </div>

      <button className="flex items-center justify-center gap-3 py-4 px-8 rounded bg-sky-500 text-slate-100">Download CV <RiDownloadLine size={20} /></button>
    </div>
  );
}