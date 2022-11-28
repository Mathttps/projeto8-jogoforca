import { useEffect, useState } from "react";
import styled from "styled-components";
import palavras from "../palavras";
import Letras from "./Letras";
import Chute from "./Chute";
import forca0 from "../assets/forca0.png";

export default function Jogo() {
    const sortearPalavras = palavras;
    const [chances, setchances] = useState(0);
    const [palavraSelecionada, setpalavraSelecionada] = useState([]);
    const [letras, setLetras] = useState([]);
    const [inicio, setInicio] = useState(false);

    function iniciarJogo() {
        setpalavraSelecionada(arrayPalavra);
        setLetras(Array(arrayPalavra.length).fill("_ "));
        setInicio(true);
    }

    sortearPalavras.sort(sorte)
    function sorte() {
        return Math.random() - 0.5;
    }

    const palavra = sortearPalavras.slice(0, 1).toString();
    const arrayPalavra = palavra;


    return (
        <Pagina>
            <h2>Jogo da forca</h2>
            <Forca>
                <img src={forca0} alt="forca" />
            </Forca>
            <Botao onClick={iniciarJogo}>
                <p>Escolher Palavra</p>
            </Botao>
            <Palavra>
                <span>{letras}</span>
            </Palavra>
            <DivLetras>
                <Letras palavraSelecionada={palavraSelecionada} letras={letras} setLetras={setLetras} inicio={inicio} setInicio={setInicio} />
            </DivLetras>
            <Chute />
        </Pagina>
    )
}

const Pagina = styled.div`
    width: 640px;
    height: 600px;
    margin: 0 auto;
    margin-top: 20px;
    position: relative;
    
    h2 {
        font-size: 35px;
        font-weight: bold;
        color: black;
        text-align: center;
    }
`

const Forca = styled.div`
    img {
        width: 350px;
        margin-rigth: 10px;
    }
`
const Palavra = styled.div`
    font-weight: bold;
    font-size: 40px;
    position: absolute;
    right: 45px;
    bottom: 200px;
`

const DivLetras = styled.div`
    margin: 0 auto;
    width: 75%;
    height: 78px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 6px;
    margin-top: 20px;
`

const Botao = styled.button`
    width: 150px;
    height: 50px;
    font-size: 15px;
    background-color: #27AE60;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border: 0px;
    font-weight: bold;
    position: absolute;
    right: 30px;
    top: 75px;
    cursor: pointer;
`

