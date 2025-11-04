import type { Route } from "./+types/home";
import { Messagefinal } from"app/Components/Mensagem"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mensagem Personalizada" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Messagefinal />;
}
