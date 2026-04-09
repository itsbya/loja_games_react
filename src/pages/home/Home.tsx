function home() {
  return (
    <section
      className="bg-transparent flex justify-center"
    >
      <article
        className="container grid grid-cols-1 md:grid-cols-2 text-white"
      >
        <div
          className="flex flex-col justify-center items-center gap-4  py-4"
        >
          <h2
            className="text-4xl font-bold"
          >
            Bem-vindo à geekStore!
          </h2>

          <p
            className="text-xl"
          >
            O seu mundo gamer começa aqui
          </p>

          <div
            className="flex justify-around gap-4 "
          >
            <button className="bg-linear-to-r from-purple-950 via-purple-800 to-purple-700 py-2 px-4 rounded-md text-white hover:brightness-125 transition">
                Novo Produto
            </button>
          </div>
        </div>

        <figure
          className="flex justify-center"
        >
          <img
            src="https://ik.imagekit.io/o02kjfcyy/assets%20-%20loja%20de%20games/img-loja-games.png"
            alt="Imagem Página Home"
            className="w-2/3"
          />
        </figure>
      </article>
    </section>
  );
}

export default home;