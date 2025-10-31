import "app/Card.css"

export function Card({ Citizen = { Name: "José Hermes", Profession: "Desenvolvedor de Software", City: "Maceió/AL" } }) {

   return (
        <div className="card">
            <h2>Nome: {Citizen.Name}</h2>
            <p>Profissão: {Citizen.Profession}</p>
            <p>Cidade: {Citizen.City}</p>
        </div>
    );
}
