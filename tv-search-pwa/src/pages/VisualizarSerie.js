import React, { Component } from 'react'

import Header from '../components/Header';
import './VisualizarSerie.scss';

import Logo from '../img/paginaAnterior.png';


export default class VisualizarSerie extends Component {
    render() {

        const { serie, imagem } = this.props.location.state;
        const dados = serie.show;

        let generos = dados.genres[0];
        const quantidadeGeneros = dados.genres.length;
        if(quantidadeGeneros > 1) {
            for(let i = 1; i < quantidadeGeneros; i++) {
                generos += `, ${dados.genres[i]}`;
            } 
            }else {
                generos = 'Não informado';
        }

        const titulo = dados.name;
        const lingua = dados.language ? dados.language : 'Não informada';
        const { status } = dados;
        const canalTV = dados.network ? dados.network.name : '';
        const canalWeb = dados.webChannel ? dados.webChannel.name : '';
        const regex = /(<([^>]+)>)/ig;
        const sinopse = dados.summary ? dados.summary.replace(regex, '') : 'Não informada';
        
        return (
            <div>
                <Header enderecoPaginaAnterior="/" logo={Logo} titulo="Visualizar série" />    
                <div id="areaCartaz">
                    <img src={ imagem } alt="Cartaz"/>
                </div>

                <div id="areaDadosSerie">
                    <h2> { titulo } </h2>

                    <span className="nomeCampo">Gênero:</span>
                    <span> { generos } </span>

                    <br/>
                    
                    <span className="nomeCampo">Língua: </span>
                    <span> { lingua } </span>
                    
                    <br/>

                    {
                        canalTV&&
                        <div>
                            <span className="nomeCampo">Canal de TV: </span>
                            <span> { canalTV } </span>   
                            <br/>                     
                        </div>
                    }
                    
                    {
                        canalWeb&&
                        <div>
                            <span className="className">Streaming: </span>
                            <span> { canalWeb } </span>
                            <br/>
                        </div>
                    }
                    
                    <span className="nomeCampo">Status: </span>
                    <span> { status } </span>
                    
                    <br/>
                    
                    <span className="nomeCampo">Sinopse: </span>
                    <div id="sinopse"> { sinopse } </div>
                </div>            
            </div>
        )
    }
}
