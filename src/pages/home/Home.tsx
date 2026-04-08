
function Home() {
    return (
        <div
           className="bg-indigo-900 flex justify-center"
        >
            <div 
             className="container grid grid-cols-2 text-white"
            >
                <div 
              className="flex flex-col justify-center items-center "
                >
                        <h2 
                      className="text-5xl font-bold"
                        >Seja Bem Vinde!
                        </h2>
                        <p
                       className="text-xl"
                        >
                        Aqui você encontra os melhores Games!
                        </p>

                        <div
                       className="flex justify-around gap-4"
                        >
                            <div
                            className="rounded border-white border-solid border-2 py-2 px-4"
                            >
                                Nova Produto
                            </div>
                        </div>

                </div>

                <div
                className="flex justify-center"
                >
                    <img src="src\assets\img-loja-games.png"
                        alt="Imagem Página Home"
                        className="w-2/3"
                    />
                </div>

            </div>

        </div>
    )
}

export default Home