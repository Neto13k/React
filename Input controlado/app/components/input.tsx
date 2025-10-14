import React, { useState } from 'react';
import "app/Mensagem.css"

export function Mensagem(){
    const [Mensagemvalue, SetMensagemvalue] = useState('')

    const Alteração =  (event) =>{
        SetMensagemvalue(event.target.value);
    };
    
    return(
        <form>
        <input type="text"id='input1' placeholder="Digite aqui sua mensagem"
         value={Mensagemvalue} onChange={Alteração}/> 
         <p>O que esta sendo digitado: {Mensagemvalue}</p> 
         </form>   
)

}