
import { Link } from 'react-router-dom'
import type Categoria from '../../../models/Categoria'

interface CardCategoriaProps{
    Categoria: Categoria
}


function CardCategoria({Categoria}: CardCategoriaProps) {
  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
        <header className='py-2 px-6 bg-slate-800 text-white font-bold text-2xl'>Categoria</header>
        <p className='p-8 text-3xl bg-slate-200 h-full'>{Categoria.tipo}</p>

        <div className='flex'>
            <Link to={`/editarCategoria/${Categoria.id}`}
            className='w-full text-slate-100 bg-teal-400 hover:bg-teal-800 flex items-center justify-center py-2'>
                <button>Editar</button>
            </Link>

            <Link to={`/deletarCategoria/${Categoria.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center'>
            <button>Deletar</button>
            </Link>
        </div>
        </div>
  )
}

export default CardCategoria