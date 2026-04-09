
import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

function Footer() {

  let data = new Date().getFullYear()

  return (
    <>
      <div className="flex justify-center bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container flex flex-col items-center py-4 ">
          <p className="text-xs font-bold">
            © {data} geekStore — Desenvolvido por Ana Beatriz Carvalho
          </p>
          <p className="text-xs">Acesse minhas Redes Sociais</p>
          <div className='flex gap-2'>  
    <a href="https://www.linkedin.com/in/ana-beatriz-carvalho-esmaile/" target="_blank">  
        <LinkedinLogoIcon size={29} />  
    </a>    
    <a href="https://github.com/itsbya" target="_blank">  
        <GithubLogoIcon size={29} />  
    </a>  
</div>  
        </div>
      </div>
    </>
  )
}
export default Footer