import "app/Mensagem.css"

export function Message({Hour, Name }) {
  return (
    <div>
      <h1>{Hour}, {Name}. </h1>
    </div>
  );
}

export function Messagefinal() {
  return (
    <>
      <Message Hour="Bom dia" Name="José Hermes" />
    </>
  );
}
