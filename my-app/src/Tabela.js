import React, { Component } from 'react';

const THead = () => {
    return (
        <thead>
            <tr>
                <td>Autor</td>
                <td>Livro</td>
                <td>Preco</td>

            </tr>
        </thead>
    );
}

const TBody = props => {
    // map, filter, reduce
    const novaLinha = props.autores.map((autor, index) => {
        return (
            <tr>
                <td>{autor.autor}</td>
                <td>{autor.livro}</td>
                <td>{autor.preco}</td>
                <td> <button>Remover</button> </td>
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
        const { autores } = this.props;
        console.log(autores);
        return (
            <table>
                <THead />
                <TBody autores={autores} />
            </table>
        );
    }

}

export default Tabela;