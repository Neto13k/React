import { useForm } from "react-hook-form";

export function FormularioDados() {
  const { register, handleSubmit } = useForm();

  function onSubmit() {
    alert("Dados enviados com sucesso!");
  }

  return (
    <div>
      <p>Informe seus dados </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Digite seu nome"
          {...register("nome", { required: "Nome é obrigatório" })}
        />
        <br></br><br></br>

        <input
          type="email"
          placeholder="Digite seu e-mail"
          {...register("email", { required: "Email é obrigatório" })}
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
