import { useState } from 'react';

function Home() {
    return (
        <div>
            <h1>Luciano é o Cara!</h1>
            <Contador />
        </div> 
    )
}

function Contador() {
    const [contador, setContador] = useState(1);
    return (
        <div>
            <div>{contador}</div>
            <button onClick={incContador}>Incrementar</button>
            <button onClick={Resultado}>Resultado</button>
        </div>
    )

    function incContador() {
        setContador(contador+1)
    }

    function Resultado() {
        return (
            <div>
                <h2>Quantas vezes Luciano Comeu Ricardo: </h2>
                <h3>{contador}</h3>
            </div>
        )
    }
}

module.exports = Home;