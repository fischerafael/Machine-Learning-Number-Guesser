import React, { useState } from 'react'

import * as brain from 'brain.js'
//const brain = require("brain.js");

function Teste() {
    const [trainValues, setTrainValues] = useState([{ input: [0, 0], output: [0] },])

    const [number1, setNumber1] = useState([])
    const [number2, setNumber2] = useState([])
    const [eResult, setEresult] = useState([0,0]) 

    const [prev1, setPrev1] = useState([])
    const [prev2, setPrev2] = useState([])
    
    const [resultado, setResultado] = useState([])
    
    //const net = new brain.NeuralNetwork({ hiddenLayers: [3] });      
    //net.train(trainValues); 
   
    //useEffect(()=>{setResultado(net.run([1,0]))},[trainValues])  

    function predictValue(e) {
        e.preventDefault()
        console.log(trainValues) 
        const net = new brain.NeuralNetwork({ hiddenLayers: [3] });        
        console.log(prev1, prev2)
        net.train(trainValues);
        //setResultado(net.run([parseInt(prev1),parseInt(prev2)]))
        setResultado(net.run([prev1,prev2]))
    }
             
    function addTrainValue(e) {
        e.preventDefault()
        setTrainValues([...trainValues, { input: [parseInt(number1), parseInt(number2)], output: [parseInt(eResult)] }])               
    }

    return (
        <div>
            <h1>Treino</h1>
            <input type="number" max="1" min="0" placeholder="Número 1" value={number1} onChange={e => setNumber1(e.target.value)}/>
            <input type="number" max="1" min="0" placeholder="Número 2" value={number2} onChange={e => setNumber2(e.target.value)}/>
            <input type="number" max="1" min="0" placeholder="Resultado Esperado" value={eResult} onChange={e => setEresult(e.target.value)}/>
            <button onClick={addTrainValue}>Adicionar</button>            
            <h1>{resultado}</h1>
            <ul>
                {trainValues.map(input => <li>Input: {input.input} Output: {input.output}</li>)}
            </ul>        
            <h1>Prever</h1> 
            <input type="number" max="1" min="0" placeholder="Prever 1" value={prev1} onChange={e => setPrev1(e.target.value)}/> 
            <input type="number" max="1" min="0" placeholder="Prever 2" value={prev2} onChange={e => setPrev2(e.target.value)}/>  
            <button onClick={predictValue}>Prever</button> 
        </div>
    )
}

export default Teste
