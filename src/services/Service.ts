import axios from "axios";

// Cria uma nova instância do Axios
const api = axios.create({
  baseURL: 'https://lojagames-nest.onrender.com'
})


export const buscarCategoria = async (url: string, header: Object) => { 
    const resposta = await api.get(url, header)
    return resposta.data
}

export const cadastrarCategoria = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}

export const atualizarCategoria = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
}


export const deletarCategoria = async (url: string, header: Object) => {
    await api.delete(url, header)
}