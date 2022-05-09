import { AiOutlineLink } from "react-icons/ai";

interface Props {
  project: {
    name: string;
    image: string;
    deploy: string;
    type: string;
  }
}

export function Project({ project }: Props) {
  return (
    <div className="relative overflow-hidden rounded-xl group w-full">
      <img
        src={project.image}
        alt="Imagem do projeto"
        className="h-[250px] object-cover"
      />

      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-20 dark:bg-opacity-40 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 cursor-pointer">
        <div className="absolute bottom-1 opacity-0 transition-all group-hover:bottom-4 group-hover:opacity-100">
          <span className="text-slate-50 capitalize">{project.type}</span>
          <h1 className="text-slate-50 font-bold mb-4">{project.name}</h1>

          <a
            href={project.deploy}
            target="_blank"
            className="h-10 w-10 rounded-lg flex justify-center items-center bg-sky-400 hover:bg-sky-500"
          >
            <AiOutlineLink
              size={20}
              className="text-slate-50"
            />
          </a>
        </div>
      </div>
    </div>
  );
}