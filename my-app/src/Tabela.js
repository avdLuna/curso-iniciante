import React, { Component } from 'react';

const THead = () => {
    return (
        <thead>
            <tr>
                <td>Nome</td>

            </tr>
        </thead>
    );
}

const TBody = props => {
    // map, filter, reduce
    const novaLinha = props.filmes.map((filmes, index) => {
        return (
            <tr key={index}>
                <td>{filmes.nome}</td>
                <td> <button onClick = {(index) => {props.removeAutor()}}>Remover</button> </td>
            </tr>
        );
    });

    return (
        <tbody>
            {novaLinha}
        </tbody>
    );
}


class Tabela extends Component {

    render() {
        const { filmes, removeAutor } = this.props;
        console.log(filmes);
        return (
            <table>
                <THead />
                <TBody filmes={filmes} removeAutor = {removeAutor} />
            </table>
        );
    }

}

export default Tabela;