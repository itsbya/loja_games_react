

import { UserIcon, ShoppingCartIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";


function Navbar() {

  // Objeto responsável por redirecionar o usuario para uma outra rota
  const navigate = useNavigate();

 
  return (
    <>
      <header className="w-full bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex justify-center">
  <div className="max-w-7xl w-full px-6 py-4 flex items-center justify-between ">

    <Link to="/home" className="flex items-center gap-2">
      <img
        src="https://ik.imagekit.io/o02kjfcyy/assets%20-%20loja%20de%20games/logo-loja-games.png"
        alt="Logo"
        className="w-10"
      />
      <span className="text-lg font-bold whitespace-nowrap">
        geekStore
      </span>
    </Link>

    <div className="flex items-center bg-white rounded-md overflow-hidden w-100.5">
      <input
        type="text"
        placeholder="Buscar jogos..."
        className="w-full px-3 py-1.5 text-black outline-none"
      />
      <button className="bg-linear-to-r from-purple-950 via-purple-800 to-purple-700 px-3 py-1.5 hover:brightness-125 transition ">
        <MagnifyingGlassIcon size={24} color="#ffffff" />
      </button>
    </div>

    <div className="flex items-center gap-6">

      <nav className="flex items-center gap-4 text-sm ">
        <Link to="#">Produtos</Link>
        <Link to="/categorias">Categorias</Link>
        <Link to="#">Cadastrar Categoria</Link>
      </nav>

      <div className="h-6 w-px bg-white/20"></div>

      <div className="flex items-center gap-4">
        <UserIcon size={22} />

        <div className="relative">
          <ShoppingCartIcon size={22} />
          <span className="absolute -top-2 -right-2 bg-linear-to-r from-purple-950 via-purple-800 to-purple-700 text-[10px] px-1.5 py-0.5 rounded-full">
            0
          </span>
        </div>
      </div>

    </div>
  </div>
</header>
    </>
  );
}

export default Navbar;