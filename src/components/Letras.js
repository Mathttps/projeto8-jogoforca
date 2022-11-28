import { useState } from "react";
import styled from "styled-components";

const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function Letra({letra, palavraSelecionada, chances, setChances, letras, setLetras}) {
    

    const [desativar, setDesativar] = useState(false);

    function comparar() {
        const i = palavraSelecionada.indexOf(letra);
        setDesativar(true);

        if (i === -1) {
            setChances(chances - 1)
        } else {
            const indiceLetras = [];    

            palavraSelecionada.forEach((m, i) => {
                if (m === letra) {
                    indiceLetras.push(i)
                }
            })
        }
    }

    return (
        <ContainerLetra>
            {letra}
        </ContainerLetra>
    )
}

export default function Letras({palavraSelecionada, chances, setChances, letras, setLetras}) {

    return (
        <>
        {alfabeto.map((letra) => (
            <Letra key={letra} letra={letra} palavraSelecionada={palavraSelecionada} chances={chances} setChances={setChances} letras={letras} setLetras={setLetras}/>
        ))}
        </>
    )
}

const ContainerLetra = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 29px;
    height: 30px;
    background-color: gray;
    color: black;
    border-radius: 3px;
    text-transform: uppercase;
    font-weight: bold;
    margin-top: 5px;
`