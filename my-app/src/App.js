import React, {Component, Fragment} from 'react';
import './App.css';
import Tabela from './Tabela';
import Formulario from './Formulario';


class App extends Component {



  componentDidMount() {
    fetch('http://localhost:8080/filmes')
      .then(response => response.json())
      .then(data => this.setState( {filmes: data.filmes }));
      
  }

  


  escutadorDeSubmit = filme => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filme)
    };
    fetch('http://localhost:8080/filmes', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({
        filmes: [...this.state.filmes, filme]
      }));
    
  }


  removeAutor = index => {  
    const {filmes} = this.state;
    
    this.setState(
      {
        filmes: filmes.filter((filme, posAtual) => {
            return posAtual !== index;
          
        }),
      }
    );
  }
  state = {
    // autores: [
    //   {
    //     "autor":"Amanda",
    //     "livro":"Backend",
    //     "preco": 10,
    //   },
    //   {
    //     "autor":"Joao",
    //     "livro":"PHP",
    //     "preco": 1000,
    //   },
    //   {
    //     "autor": "Fernando",
    //     "livro": "React",
    //     "preco":50
    //   }
    // ],
    filmes: []
  }

  render () {
    return (
        <Fragment>
        <Tabela filmes = {this.state.filmes} removeAutor = {this.removeAutor} />
        <Formulario escutadorDeSubmit = {this.escutadorDeSubmit}/>
        </Fragment>
    );
  }
  
}

export default App;
