import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../../graphql/generated";
import Logo from "../components/Logo";

export function Subscribe() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      },
    });

    navigate("/event");
  }

  return (
    <div className="flex flex-col min-h-screen items-center bg-blur bg-cover bg-no-repeat">
      <main className="sm:block md:flex md:flex-1 p-12 md:p-24 gap-20 justify-between">
        <div className="max-w-[624px]">
          <Logo />
          <h1 className="my-8 text-[2.5rem] leading-tight">
            Construa uma <span className="text-blue-300 font-bold">aplicação completa</span>, do zero, com{" "}
            <span className="text-blue-300 font-bold">React JS</span>
          </h1>
          <p className="mb-8">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para
            acessar as melhores oportunidades do mercado.
          </p>
        </div>
        <div className="bg-gray-700 border border-gray-500 p-5 max-h-[320px] min-w-[391px] flex flex-col">
          <strong className="text-2xl mb-5">Inscreva-se gratuitamente</strong>
          <form className="w-full flex flex-col" onSubmit={handleSubscribe}>
            <input
              type="text"
              className="bg-gray-900 p-3 mb-2 rounded-md outline-none"
              placeholder="Seu nome completo"
              onChange={(event) => setName(event?.target.value)}
            />
            <input
              type="text"
              className="bg-gray-900 p-3 mb-4 rounded-md outline-none"
              placeholder="Digite seu email"
              onChange={(event) => setEmail(event?.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-green-500 hover:bg-green-700  transition-colors uppercase p-4 rounded-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </main>
      <img src="/src/assets/code-mockup.png" className="mt-10" alt="" />
    </div>
  );
}
