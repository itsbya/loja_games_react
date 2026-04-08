
import { Link, useNavigate } from "react-router-dom"



function Navbar() {

    // Objeto responsável por redirecionar o usuário para uma outra rota
    const navigate = useNavigate();

    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-indigo-900 text-white'>
            
                <div className="container flex justify-between text-lg mx-8">

                     <Link to="/home">
                        <img src='../assets/logo-loja-games.png'
                        alt="Logo Home"
                        className="w-2/3"
                    />
                    </Link>
                    
                    <Link to="/home" className="text-2xl font-bold">
                        LOJA DE GAMES
                    </Link>

                    <div className='flex gap-4'>
                        Produtos
                        <Link to='/categoria' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar categorias</Link>
                         <div
                className="flex justify-center"
                >
                    <img src='../assets/user.png'
                        alt="Imagem User Home"
                        className="w-2/3"
                    />
                </div>
                 <div
                className="flex justify-center"
                >
                    <img src='../assets/shopping-cart.png'
                        alt="Carrinho de compras Home"
                        className="w-2/3"
                    />
                </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar