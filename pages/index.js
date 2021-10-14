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
        </div>
    )

    function incContador() {
        setContador(contador+1)
    }
}

module.exports = Home;