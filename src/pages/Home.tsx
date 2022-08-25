import Logo from "../components/Logo";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="sm:block md:flex md:flex-1 p-12 md:p-24 gap-20 justify-between">
        <div className="max-w-[624px]">
          <Logo />
          <h1 className="my-8 text-[2.5rem] leading-normal">
            Construa uma <span className="text-blue-300 font-bold">aplicação completa</span>, do zero, com{" "}
            <span className="text-blue-300 font-bold">React JS</span>
          </h1>
          <p className="mb-8">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para
            acessar as melhores oportunidades do mercado.
          </p>
        </div>
        <div className="bg-gray-700 border border-gray-600 p-5 max-h-[320px] min-w-[391px] flex flex-col">
          <strong className="text-2xl mb-5">Inscreva-se gratuitamente</strong>

          <input type="text" className="bg-gray-900 p-3 mb-2 rounded-md outline-none" placeholder="Seu nome completo" />
          <input type="text" className="bg-gray-900 p-3 mb-4 rounded-md outline-none" placeholder="Digite seu email" />
          <button className="bg-green-500 uppercase p-4 rounded-sm font-bold">Garantir minha vaga</button>
        </div>
      </main>
    </div>
  );
}