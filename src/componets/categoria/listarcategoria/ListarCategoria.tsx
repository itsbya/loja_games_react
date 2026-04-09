
import CardCategoria from "../cardcategoria/CardCategoria";
import {  useEffect, useState } from "react";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import { PacmanLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

function ListarCategorias() {
  // Objeto responsável por redirecionar o usuario para uma outra rota
  const navigate = useNavigate();

  // Estado para controlar o Loader(animação de carregamento)
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Estado que irá receber todos os Categorias persistidos no Backend
  const [Categorias, setCategorias] = useState<Categoria[]>([]);

  // Cria um useEffect para inicializar a função buscarCategorias
  useEffect(() => {
    buscarCategorias();
  }, [Categorias.length]);

  // Função para buscar todos os Categorias no backend
  async function buscarCategorias() {
    try {
      setIsLoading(true);

      await buscar("/categorias", setCategorias);
    } catch (error: any) {
        alert("Erro ao buscar as Categorias")
    } finally {
      setIsLoading(false);
    }
  }

 

  return (
    <>
      {isLoading && (
        <div className="flex justify-center w-full my-8">
          <PacmanLoader color="#312e81" size={32} />
        </div>
      )}

      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">

          {!isLoading && Categorias.length === 0 && (
            <span className="text-3xl text-center my-8">
              Nenhum Categoria foi encontrado!
            </span>
          )}

          <div
            className="grid grid-cols-1 md:grid-cols-2 
                        lg:grid-cols-3 gap-8"
          >
            {Categorias.map((Categoria) => (
              <CardCategoria key={Categoria.id} Categoria={Categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListarCategorias;