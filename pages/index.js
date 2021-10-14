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
    var [contador, setContador] = useState(1);
    var [Res, setRes] = useState((
        <div>
        </div>
        ));

    return (
        <div>
            <div>{contador}</div>
            <button onClick={incContador}>Incrementar</button>
            <p>Clique para saber o resultado:</p>
            <p></p>
            <button onClick={Resultado}>Resultado</button>
            <div>{Res}</div>
        </div>
    )

    function incContador() {
        setContador(contador+1)
    }

    function Resultado() {
        setRes(
            <div>
                <div><h1>Resultado: </h1></div>
                <h2>Valor do contador: {contador}</h2>
            </div>
        )
    }
   
}

module.exports = Home;