import React, { Component } from 'react';

import Logo from '../Img/logo256.png';

import Config from '../Config/Config';
import Header from '../Components/Header';

import './Pesquisar.scss';

export default class Pesquisar extends Component {
    constructor(){
        super();

        this.state = {
            resultadosTitulo: [],
            resultadosDescricao: [],
            pesquisa: '',
        }
        this.service = new Config();
        this.aoBuscar = this.aoBuscar.bind(this);
    }
    aoAlterar = (event) => {
        const pesquisa = event.target.value;
        this.setState({ pesquisa })
    }

    async aoBuscar(){
        const pesquisa = this.state.pesquisa;
        const resultados = await this.service.pesquisar(pesquisa);
        this.setState({ resultadosTitulo: resultados.data[1], resultadosDescricao: resultados.data[2] });
        console.log(this.state.resultadosTitulo, this.state.resultadosDescricao); 
    }

    render() {
        let cont = 0;
        const resulTitulo = this.state.resultadosTitulo.map(titulo => {
            return(
                <span key={cont++}> {titulo} </span>
            );
        })

        const resulDescricao = this.state.resultadosDescricao.map(descricao => {
            return(
                <span key={cont++}> {descricao} </span>
            );
        })
        return (
            <div>
                <Header pagAnterior="/" logo={Logo} titulo="WikiPaulo's" />
                <div className="pesquisa">
                    <input className="campo-pesquisa" onChange={this.aoAlterar}  type="text" name="pesquisa" value={this.state.pesquisa} />
                    <button className="button pulse" onClick={this.aoBuscar}>Buscar</button>
                </div>
                <div className="resultados">
                    <div className="resultado-titulo">
                        {resulTitulo}
                    </div>
                    <div className="resultado-descricao">
                        {resulDescricao}
                    </div>
                </div>
            </div>
        )
    }
}
