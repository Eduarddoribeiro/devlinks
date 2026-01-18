import { useEffect, useState } from 'react';
import { CommitIcon } from '@radix-ui/react-icons'; 

interface RepoEvent {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
  payload: {
    commits?: Array<{ message: string }>;
  };
}

export function AtividadeGithub() {
  const [events, setEvents] = useState<RepoEvent[]>([]);
  const username = "Eduarddoribeiro"; 

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/events/public`)
      .then(res => res.json())
      .then(data => {

        const pushEvents = data.filter((e: RepoEvent) => e.type === "PushEvent").slice(0, 3);
        setEvents(pushEvents);
      })
      .catch(err => console.error("Erro ao buscar GitHub:", err));
  }, []);

  return (
   <div className="mt-12 w-full max-w-2xl mx-auto p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
  <h3 className="text-xl font-extrabold text-slate-900 mb-6 flex items-center gap-2">
    <CommitIcon className="text-brand-blue w-5 h-5" /> Atividade Recente no GitHub
  </h3>
  
  <div className="space-y-5">
    {events.map(event => (
      <div 
        key={event.id} 
        className="group text-sm text-slate-600 border-l-4 border-slate-100 hover:border-brand-blue pl-4 transition-all duration-300"
      >
        <p className="font-bold text-slate-800 group-hover:text-brand-blue transition-colors">
          {event.payload.commits?.[0]?.message || "Novo commit"}
        </p>
        <p className="text-xs text-slate-500 mt-1">
          no repositório <span className="text-brand-blue font-semibold">{event.repo.name.replace(`${username}/`, '')}</span>
        </p>
        <span className="text-[10px] text-slate-400 uppercase tracking-widest mt-2 block">
           {new Date(event.created_at).toLocaleDateString('pt-BR')}
        </span>
      </div>
    ))}
  </div>
</div>
  );
}

export default AtividadeGithub;