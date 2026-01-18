import { ArrowTopRightIcon } from "@radix-ui/react-icons";

interface CardProjetoProps {
  titulo: string;
  descricao: string;
  link: string;
  tecnologias: string[];
}

export function CardProjeto({ titulo, descricao, link, tecnologias }: CardProjetoProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="group relative block p-6 bg-white border border-slate-200 rounded-2xl hover:border-brand-blue transition-all duration-300 shadow-sm hover:shadow-xl"
    >
      <div className="flex justify-between items-start gap-4">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors leading-tight">
          {titulo}
        </h3>

        <ArrowTopRightIcon
          className="w-5 h-5 text-slate-300 group-hover:text-brand-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0"
        />
      </div>

      <p className="mt-2 text-slate-600 font-normal leading-relaxed">
        {descricao}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tecnologias.map(tech => (
          <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </a>
  )
}