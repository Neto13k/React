import type { Route } from "./+types/home";
import { Message } from"app/Components/Mensagem"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Mensagem Personalizada" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Message />;
}
