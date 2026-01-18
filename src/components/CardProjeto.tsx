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
      className="group block p-6 bg-white border border-slate-200 rounded-2xl hover:border-brand-blue transition-all duration-300 shadow-sm hover:shadow-xl"
    >
      <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-blue transition-colors">
        {titulo}
      </h3>
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