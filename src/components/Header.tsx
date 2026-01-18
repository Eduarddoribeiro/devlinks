import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

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
                Desenvolvedor Fullstack | JavaScript | TypeScript | React | Node.js | SQL
            </p>

            <div className="flex gap-4 mt-3">
                <a 
                    href="https://github.com/Eduarddoribeiro" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-slate-500 hover:text-brand-blue transition-colors duration-300"
                    title="GitHub"
                >
                    <GitHubLogoIcon className="w-8 h-8" /> 
                </a>
                <a 
                    href="https://www.linkedin.com/in/eduardoribeirodefraga/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-slate-500 hover:text-brand-blue transition-colors duration-300"
                    title="LinkedIn"
                >
                    <LinkedInLogoIcon className="w-8 h-8" />
                </a>
            </div>
        </header>
    )
}

export default Header;