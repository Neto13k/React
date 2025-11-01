import "app/Mensagem.css"
import { useState, useEffect } from "react";

export function Person({ Name }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Message">
      <h1>Olá, {Name}! Seja bem-vindo(a).</h1>
      <h2>Atualmente são {time.toLocaleTimeString()}.</h2>
    </div>
  );
}

export function Message() {
  return (
    <>
      <Person Name="José Hermes" />
    </>
  );
}
