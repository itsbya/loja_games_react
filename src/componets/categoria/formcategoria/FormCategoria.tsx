import {useEffect, useState, type ChangeEvent, type SyntheticEvent} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PacmanLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { buscar, atualizar, cadastrar } from "../../../services/Service";

function FormCategoria() {
  // Objeto responsável por redirecionar o usuario para uma outra rota
  const navigate = useNavigate();

  // Estado para controlar o Loader(animação de carregamento)
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Estado que irá receber todos os categorias persistidos no Backend
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const { id } = useParams<{ id: string }>();

  async function buscarCategoriaPorId(id: string) {
    try {
      await buscar(`categorias/${id}`, setCategoria);
    } catch (error: any) {
      alert("erro ao buscar categoria");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarCategoriaPorId(id);
    }
  }, [id]);

  // Função de atuaiização do estado categoria
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categorias");
  }

  async function gerarNovaCategoria(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar("/categorias", categoria, setCategoria);
        alert("O categoria foi atualizado com sucesso!");
      } catch (error: any) {
        alert(" Erro ao cadastrar o categoria.");
      }
    }

    try {
      await cadastrar("/categorias", categoria, setCategoria);
      alert("O categoria foi cadastrado com sucesso!");
    } catch (error: any) {
      alert(" Erro ao cadastrar o categoria.");
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastrar" : "Editar"} Categoria
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição do Categoria</label>
          <input
            type="text"
            placeholder="Descreva aqui seu categoria"
            name="descricao"
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.tipo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="rounded text-slate-100 bg-indigo-400 
                    hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
          type="submit"
        >
          {isLoading ? (
            <PacmanLoader color="#ffffff" size={24} />
          ) : (
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;