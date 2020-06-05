import React, {Component} from 'react';


class Formulario extends Component {
    constructor(props){
        super(props);

        this.stateInicial = {
            nome:''
        }

        this.state = this.stateInicial;

    }
    
    submitFormulario = () => {
        this.props.escutadorDeSubmit(this.state);
        this.setState(this.stateInicial);
    }

    escutadorDeInput = event => {
    const {name, value} = event.target;

    this.setState(
        {
        [name]: value
        }
    );
    console.log(name, value);
    }

    render() {
        const {nome} = this.state;
        
        return (
            <form>
                <label htmlFor="nome">Nome</label>
                <input value = {nome} onChange = {this.escutadorDeInput} id="nome" type="text" name="nome"></input>
                <button className="btn waves-effect waves-light" type="button" onClick = {this.submitFormulario}>Salvar
                <i className="material-icons right">send</i>
                </button>
        
                {/* <button type="button" onClick={this.submitFormulario}>Salvar</button> */}
            </form>
        )
    }
}

export default Formulario;