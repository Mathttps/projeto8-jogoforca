import styled from "styled-components";

export default function Chute() {
    return (
        <Chutar>
            <p>Já sei a palavra!</p>
            <input type="text" ></input>
            <button>Chutar</button>
        </Chutar>
    )
}

const Chutar = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    font-size: 18px;
    margin-top: 25px;

    p { 
    margin-top: 10px;
    margin-rigth: 30px;
    width: 120px;
    height: 30px;
    }

    input {
    height: 30px;
    padding-left: 10px;
    }

    button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    width: 80px;
    height: 30px;
    border-radius: 6px;
    background-color: #CEE3F7;
    border: 1px solid #6496ED;
    color: #0B3862;
    font-weight: 500;
    cursor: pointer;
    }
`