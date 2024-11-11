'use client';
import { useState } from "react";
import estilos from "./page.module.css";

import Categorias from "./componentes/Categorias/page";
import CampoDeBusca from "./componentes/CampoDeBusca/page";
import Card from "./componentes/Card/page";

import { retornaCardapio } from "./servico";

export default function Home() {

  const [pratos, setPratos] = useState(retornaCardapio)

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

        <Categorias setPratos={setPratos}/>

        <CampoDeBusca setPratos={setPratos}/>
        <h2>Cardápio</h2>
        <div className={estilos.container_cardapio}>
          {pratos.map((prato) =>
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
      </main>
    </div>
  );
}
