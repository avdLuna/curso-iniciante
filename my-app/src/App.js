import React from 'react';
import './App.css';
import Tabela from './Tabela'

function App() {

  const autores = [
    {
      "autor":"Amanda",
      "livro":"Backend",
      "preco": 10,
    },
    {
      "autor":"Joao",
      "livro":"PHP",
      "preco": 1000,
    },
    {
      "autor": "Fernando",
      "livro": "React",
      "preco":50
    }
  ]

  return (
    <div className="App">
      <Tabela autores = { autores } />
    </div>
  );
}

export default App;
