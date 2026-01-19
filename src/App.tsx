import Header from './components/Header'
import { CardProjeto } from './components/CardProjeto'
import { listaProjetos } from './data/projetos'
import { AtividadeGithub } from './components/AtividadeGithub'
import SobreMim from './components/SobreMim'

function App() {
 
  return (
    <>
      <div className="min-h-screen bg-slate-100 flex flex-col items-center py-12">
      <Header />
      <SobreMim />

      <section className='w-full max-w-2xl px-4 mt-12 flex flex-col gap-6'>
       <h2 className="text-slate-900 text-xl font-bold border-l-4 border-brand-blue pl-3">
          Projetos em Destaque
        </h2>
        
      {listaProjetos.map((projeto) => (
          <CardProjeto 
            key={projeto.id}
            titulo={projeto.titulo}
            descricao={projeto.descricao}
            link={projeto.link}
            tecnologias={projeto.tecnologias}
          />
        ))}

        <AtividadeGithub />
      </section>
    </div>
    </>
  )
}

export default App
