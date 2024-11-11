import estilos from "./Card.module.css";
import Image from "next/image";

export default function Card({ nome, categoria, preco, descricao, imagem }) {
    return (

        <div className={estilos.card}>

            <div className={estilos.card_imagem}>
                <Image src={imagem} alt={nome}></Image>
            </div>

            <div className={estilos.container_card_texto}>
                <div className={estilos.card_texto}>
                    <h3>{nome}</h3>
                    <small>{categoria}</small>
                    <p>{descricao}</p>
                </div>
                <div className={estilos.card_preco}><span>R${preco}</span></div>
            </div>

        </div>
    )
}