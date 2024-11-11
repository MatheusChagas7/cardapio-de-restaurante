'use client';
import estilos from "./CampoDeBusca.module.css";
import { retornaCardapio, filtraTextoBusca } from "@/app/servico";

export default function CampoDeBusca({setPratos}){

    function handleFiltraTextoBusca(texto){
       setPratos(texto.length >= 3 ? filtraTextoBusca(texto) : retornaCardapio());
    }

    return(
        <div className={estilos.cotainer_pesquisa}>
            <input type="text" className={estilos.barra_pesquisa} onChange={(event) => handleFiltraTextoBusca(event.target.value)} placeholder="Pesquise aqui um dos pratos do nosso cardápio"/>
        </div>
    )
}