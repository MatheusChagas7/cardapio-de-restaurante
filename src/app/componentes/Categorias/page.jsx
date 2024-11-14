'use client';
import estilos from "./Categorias.module.css";
import Image from "next/image";
import { buscaCategoria } from "@/app/servico";

import iconeEntrada from "/public/entrada.png"
import iconeMassa from "/public/massa.png"
import iconeCarne from "/public/carne.png"
import iconeBebidas from "/public/bebidas.png"
import iconeSalada from "/public/salada.png"
import iconeSobremesa from "/public/sobremesa.png"

export default function Categorias({setPratos, setpaginaAtual}){

    function handleBuscaCategoria(categoria){

        setPratos(buscaCategoria(categoria));

        setpaginaAtual(1);

      }

    return(
        <section className={estilos.container_categorias}>

            <button className={estilos.botao_categorias} onClick={ () => handleBuscaCategoria("Entradas") } value="Entradas">
                <Image src={iconeEntrada} alt="Ícone entradas"></Image>
                <span>Entradas</span>
            </button>

            <button className={estilos.botao_categorias} onClick={ () => handleBuscaCategoria("Massas") } value="Massas">
                <Image src={iconeMassa} alt="Ícone massas"></Image>
                <span>Massas</span>
            </button>

            <button className={estilos.botao_categorias} onClick={ () => handleBuscaCategoria("Carnes") } value="Carnes">
                <Image src={iconeCarne} alt="Ícone carnes"></Image>
                <span>Carnes</span>
            </button>
            
            <button className={estilos.botao_categorias} onClick={ () => handleBuscaCategoria("Bebidas") } value="Bebidas">
                <Image src={iconeBebidas} alt="Ícone bebidas"></Image>
                <span>Bebibdas</span>
            </button>

            <button className={estilos.botao_categorias} onClick={ () => handleBuscaCategoria("Saladas") } value="Saladas">
                <Image src={iconeSalada} alt="Ícone saladas"></Image>
                <span>Saladas</span>
            </button>
            
            <button className={estilos.botao_categorias} onClick={ () => handleBuscaCategoria("Sobremesas") } value="Sobremesas">
                <Image src={iconeSobremesa}  alt="Ícone sobremesas"></Image>
                <span>Sobremesas</span>
            </button>

        </section>
    )
}