import React, { useState, useEffect } from "react";
import "./App.css";
const brain = require("brain.js");

function App() {
  const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

  const trainingData = [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] },
  ];

  net.train(trainingData);

  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [arrayValores, setArrayValores] = useState([0,0]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    async function prevResult() {
      setArrayValores([valor1, valor2]);
      setResult(net.run(arrayValores));
    }
    prevResult();
  }, [valor1, valor2]);

  return (
    <div className="descobridor">
      <h1>Descobridor de número</h1>
      <p>
        Este programa adivinha qual é o resultado da combinação de 2 números
        utilizando machine learning
      </p>
      <p>
        Ele foi treinado com os seguintes dados: 0,0 é 0; 0,1 é 1; 1,0 é 1; e
        1,1 é 0
      </p>
      <div className="inputs">
        <input
          placeholder="Primeiro valor"
          type="number"
          max="1"
          min="0"
          value={valor1}
          onChange={(e) => setValor1(parseInt(e.target.value))}
        />
        <input
          placeholder="Segundo valor"
          type="number"
          max="1"
          min="0"
          value={valor2}
          onChange={(e) => setValor2(parseInt(e.target.value))}
        />
      </div>
      <h2>{Math.round(1 - result)}</h2>
    </div>
  );
}

export default App;
