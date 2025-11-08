import "app/Mensagem.css"

export function Mensagem({horaDoDia, usuario }) {
  return (
    <div>
      <h1>{horaDoDia}, {usuario}!! </h1>
    </div>
  );
}

export function MensagemFinal() {
  return (
    <>
      <Mensagem horaDoDia="Bom dia" usuario="José Hermes" />
      <br />
      <Mensagem horaDoDia="Boa Tarde" usuario="Pedro Soares" />
      <br />
      <Mensagem horaDoDia="Boa Noite" usuario="Ana Paula" />
      
    </>
  );
}
