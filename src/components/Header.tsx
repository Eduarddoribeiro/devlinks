export function Header() {
    return (
        <header className="flex flex-col items-center gap-3">
            <img 
                src="https://media.licdn.com/dms/image/v2/D4D03AQEi6kM3PwKkNg/profile-displayphoto-scale_200_200/B4DZnPkINxKoAc-/0/1760123979732?e=1770249600&v=beta&t=kC9XSnGRa_AgEF6R7AzeLYRV9p__vjueuQoLupADAP0" 
                alt="Foto de Perfil de Eduardo Ribeiro - GitHub" 
                className="w-32 h-32 rounded-full border-4 border-brand-blue object-cover shadow-lg"
            />
            <h1 className="text-2xl font-extrabold text-slate-900">Eduardo Ribeiro</h1>
            <p className="text-slate-600 font-medium text-center px-4">
                Desenvolvedor Fullstack | JavaScript | TypeScript | React
            </p>
        </header>
    )
}

export default Header;