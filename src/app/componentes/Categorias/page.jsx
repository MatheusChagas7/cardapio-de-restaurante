'use client';
import { useState } from "react";
import estilos from "./Categorias.module.css";
import Image from "next/image";
import { buscaCategoria, retornaCardapio } from "@/app/servico";

import iconeEntrada from "/public/entrada.png"
import iconeMassa from "/public/massa.png"
import iconeCarne from "/public/carne.png"
import iconeBebidas from "/public/bebidas.png"
import iconeSalada from "/public/salada.png"
import iconeSobremesa from "/public/sobremesa.png"

export default function Categorias({setPratos, estadoCategoria, setestadoCategoria, setpaginaAtual}){

    const [botaoAtivo, setBotaoAtivo] = useState(null);
    
    const estiloBotaoAtivo = estilos.botao_categorias_ativo;
    const estiloBotao = estilos.botao_categorias
    


    function handleBuscaCategoria(categoria, idBotao){

        if(estadoCategoria){

            setestadoCategoria(!estadoCategoria);
            setPratos(retornaCardapio());
            setBotaoAtivo(null);
        }else{
            
            setestadoCategoria(!estadoCategoria);
            setPratos(buscaCategoria(categoria));
            setBotaoAtivo(idBotao)
        }

        setpaginaAtual(1);

      }

    return(
        <section className={estilos.container_categorias}>

            <button className={botaoAtivo === 1 ? estiloBotaoAtivo : estiloBotao} onClick={ () => handleBuscaCategoria("Entradas", 1) } value="Entradas">
                <Image className={estilos.icone_categoria} src={iconeEntrada} alt="Ícone entradas"></Image>
                <span className={estilos.nome_categoria}>Entradas</span>
            </button>

            <button className={botaoAtivo === 2 ? estiloBotaoAtivo : estiloBotao} onClick={ () => handleBuscaCategoria("Massas", 2) } value="Massas">
                <Image className={estilos.icone_categoria} src={iconeMassa} alt="Ícone massas"></Image>
                <span className={estilos.nome_categoria}>Massas</span>
            </button>

            <button className={botaoAtivo === 3 ? estiloBotaoAtivo : estiloBotao} onClick={ () => handleBuscaCategoria("Carnes", 3) } value="Carnes">
                <Image className={estilos.icone_categoria} src={iconeCarne} alt="Ícone carnes"></Image>
                <span className={estilos.nome_categoria}>Carnes</span>
            </button>
            
            <button className={botaoAtivo === 4 ? estiloBotaoAtivo : estiloBotao} onClick={ () => handleBuscaCategoria("Bebidas", 4) } value="Bebidas">
                <Image className={estilos.icone_categoria} src={iconeBebidas} alt="Ícone bebidas"></Image>
                <span className={estilos.nome_categoria}>Bebibdas</span>
            </button>

            <button className={botaoAtivo === 5 ? estiloBotaoAtivo : estiloBotao} onClick={ () => handleBuscaCategoria("Saladas", 5) } value="Saladas">
                <Image className={estilos.icone_categoria} src={iconeSalada} alt="Ícone saladas"></Image>
                <span className={estilos.nome_categoria}>Saladas</span>
            </button>
            
            <button className={botaoAtivo === 6 ? estiloBotaoAtivo : estiloBotao} onClick={ () => handleBuscaCategoria("Sobremesas", 6) } value="Sobremesas">
                <Image className={estilos.icone_categoria} src={iconeSobremesa}  alt="Ícone sobremesas"></Image>
                <span className={estilos.nome_categoria}>Sobremesas</span>
            </button>

        </section>
    )
}