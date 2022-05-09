import { BsPatchCheck } from "react-icons/bs";

const SKILLS = {
  FRONTEND: [{
    name: "HTML",
    level: "Intermediate",
  }, {
    name: "CSS",
    level: "Intermediate",
  }, {
    name: "Javascript",
    level: "Intermediate",
  }, {
    name: "React",
    level: "Intermediate",
  }, {
    name: "Next.js",
    level: "Intermediate",
  }, {
    name: "TailwindCSS",
    level: "Basic",
  }],

  BACKEND: [{
    name: "NodeJS",
    level: "Intermediate",
  }, {
    name: "Express",
    level: "Basic",
  }, {
    name: "MongoDB",
    level: "Basic",
  }, {
    name: "Firebase",
    level: "Intermediate",
  }],
}

interface TechnologyProps {
  name: string;
  level: "Basic" | "Intermediate" | "Advanced";
}

export function Skills() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-28 mt-10 mb-20">
      <div className="">
        <h5 className="font-medium text-slate-400 text-center mb-8 dark:text-slate-50">Frontend Developer</h5>

        <div className="grid grid-cols-2 gap-8 justify-items-center">
          <div className="flex flex-col gap-6">
            <Technology name="HTML" level="Advanced" />
            <Technology name="CSS" level="Advanced" />
            <Technology name="Javascript" level="Intermediate" />
          </div>

          <div className="flex flex-col gap-6">
            <Technology name="React" level="Intermediate" />
            <Technology name="Next.js" level="Intermediate" />
            <Technology name="TailwindCSS" level="Basic" />
          </div>
        </div>
      </div>

      <div className="">
        <h5 className="font-medium text-slate-400 text-center mb-8 dark:text-slate-50">Backend Developer</h5>

        <div className="grid grid-cols-2 gap-8 justify-items-center">
          <div className="flex flex-col gap-6">
            <Technology name="NodeJS" level="Intermediate" />
            <Technology name="Express" level="Intermediate" />
            <Technology name="MongoDB" level="Basic" />
          </div>

          <div className="flex flex-col gap-6">
            <Technology name="Firebase" level="Intermediate" />
            <Technology name="MySQL" level="Intermediate" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Technology({ name, level }: TechnologyProps) {
  return (
    <div className="flex items-start gap-4">
      <BsPatchCheck size={20} className="mt-[2px] text-sky-400" />

      <div>
        <h5 className="font-medium text-slate-400 dark:text-slate-50">{name}</h5>
        <span className="text-slate-300">{level}</span>
      </div>
    </div>
  );
}