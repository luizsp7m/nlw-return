import { House, User, Suitcase, Book, Phone, GithubLogo, LinkedinLogo, EnvelopeSimple } from "phosphor-react";

const navItems = {
  HOME: {
    title: "Início",
    icon: <House size={18} />
  },

  ABOUT: {
    title: "Sobre mim",
    icon: <User size={18} />
  },

  PROJECTS: {
    title: "Projetos",
    icon: <Suitcase size={18} />
  },

  TECHNOLOGIES: {
    title: "Tecnologias",
    icon: <Book size={18} />
  },

  CONTACT: {
    title: "Contato",
    icon: <Phone size={18} />
  },
};

const social = {
  GITHUB: {
    icon: <GithubLogo size={20} />
  },

  LINKEDIN: {
    icon: <LinkedinLogo size={20} />
  },

  MAIL: {
    icon: <EnvelopeSimple size={20} />
  },
}

export function Sidebar() {
  return (
    <div className="w-[20rem] rounded-xl bg-dark_secondary-500 fixed">
      <div className="flex flex-col gap-3 p-6">
        <img
          src="https://github.com/luizsp7m.png"
          alt="Avatar"
          className="h-16 w-16 rounded-full object-fill"
        />

        <h1 className="text-xl font-bold">
          Luiz Oliveira <span className="text-xl font-bold text-brand-500">.</span>
        </h1>

        <span className="text-xs uppercase">Web Developer</span>
      </div>

      <nav className="py-6 flex flex-col gap-6">
        {Object.entries(navItems).map(([key, value]) => (
          <a
            key={key}
            href=""
            className="flex items-center gap-3 px-6 border-l-4 border-l-transparent ease-linear duration-200 hover:translate-x-1 transition-transform"
          >
            {value.icon}
            <span>{value.title}</span>
          </a>
        ))}
      </nav>

      <div className="flex gap-6 p-6">
        { Object.entries(social).map(([key, value]) => (
          <a
            key={key}
            href=""
            className="flex items-center justify-center w-9 h-9 rounded-full bg-brand-500 transition-colors duration-200 ease-linear hover:bg-white hover:text-brand-500"
          >
            {value.icon}
          </a>
        )) }
      </div>
    </div>
  );
}