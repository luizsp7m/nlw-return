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
    <div className="flex flex-col justify-center items-center gap-6 mt-20 mb-10">
      <div className="w-40 h-40 flex justify-center items-center rounded-full bg-slate-200">
        <img
          src="https://github.com/luizsp7m.png"
          alt="Foto"
          className="w-36 h-36 object-cover rounded-full"
        />
      </div>

      <div className="flex flex-col items-center gap-2">
        <h1 className="font-bold text-xl text-slate-500">Luiz Oliveira</h1>
        <span className="font-normal text-sm">Web developer</span>
      </div>

      <div className="flex items-center gap-4">
        {Object.entries(SOCIAL).map(([key, value]) => (
          <a
            key={key}
            href={value.link}
            target="_blank"
            className="h-10 w-10 rounded-md flex items-center justify-center bg-slate-200 text-slate-50 transition-colors duration-300 hover:bg-slate-300"
          >
            {value.icon}
          </a>
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center my-4 gap-16">
        {Object.entries(ACHIEVEMENTS).map(([key, value]) => (
          <div className="flex flex-col items-center gap-2 w-[4rem] text-center">
            <h5 className="font-bold text-lg text-slate-500">{value.amount}</h5>
            <span className="text-sm">{value.title}</span>
          </div>
        ))}
      </div>

      <button className="flex items-center justify-center gap-3 py-4 px-8 rounded bg-sky-400 text-slate-50 transition-colors hover:bg-sky-500">Download CV <RiDownloadLine size={20} /></button>
    </div>
  );
}