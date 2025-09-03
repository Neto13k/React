import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mensagem boas vindas" },
    { name: "Boas vindas", content: "Bem vindo React Router!" },
  ];
}

export default function Home() {
  return (
    <main>
      <div>
        <h1>Olá, seja bem-vindo ao curso de React da Stackx!</h1>
      </div>
      <div>
        <p>🌱 Estudar hoje é plantar a semente do amanhã.🚀</p>
      </div>
    </main>
  );
}
