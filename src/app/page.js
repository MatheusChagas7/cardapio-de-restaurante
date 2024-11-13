'use client';
import { useState } from "react";
import estilos from "./page.module.css";
import Image from "next/image";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";


import Categorias from "./componentes/Categorias/page";
import CampoDeBusca from "./componentes/CampoDeBusca/page";
import Card from "./componentes/Card/page";


import { retornaCardapio } from "./servico";

export default function Home() {

  const [pratos, setPratos] = useState(retornaCardapio);
  const [paginaAtual, setpaginaAtual] = useState(1);
  const pratosPorPaginas = 10;
  const totalDePaginas = Math.ceil(pratos.length / pratosPorPaginas);

  const indiceInicio = (paginaAtual - 1) * pratosPorPaginas;
  const indiceFim = (indiceInicio + pratosPorPaginas);
  const pratosExibidos = pratos.slice(indiceInicio, indiceFim);


  const mudaPagina = (pagina) => {
    setpaginaAtual(pagina);
  }

  return (
    <div className={estilos.pagina}>
      <header>
        <div className={estilos.container_topo}>
          <div className={estilos.topo_texto}>
            <h1>RESTAURANT</h1>
            <p>
              De pratos classicos a criações surpreendentes
              nosso cardápio é um requinte de sabores refinados.
            </p>
          </div>
        </div>
      </header>
      <main className={estilos.main}>

        <Categorias setPratos={setPratos} />

        <CampoDeBusca setPratos={setPratos} />
        <h2>Cardápio</h2>
        <div className={estilos.container_cardapio}>
          {pratosExibidos.map((prato) =>
            <Card
              key={prato.id}
              nome={prato.nome}
              categoria={prato.categoria}
              preco={prato.preco.toFixed(2)}
              descricao={prato.descricao}
              imagem={prato.imagem}
            />
          )}
        </div>
        {/* Controles de Paginação */}
        <div className={estilos.paginacao}>

          <button
            onClick={() => mudaPagina(paginaAtual - 1)}
            disabled={paginaAtual === 1}>
            <FaArrowCircleLeft />
          </button>

          <span>{`Página ${paginaAtual} de ${totalDePaginas}`}</span>

          <button
            onClick={() => mudaPagina(paginaAtual + 1)}
            disabled={paginaAtual === totalDePaginas}>
            <FaArrowCircleRight />
          </button>

        </div>
      </main>
    </div>
  );
}
