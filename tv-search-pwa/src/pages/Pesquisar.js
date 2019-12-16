import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import SeriesService from '../services/SeriesService';
import './Pesquisar.scss';

import Logo from '../img/logo.png'
import imgDefault from '../img/imgDefault.png';
import loading from '../img/loading.gif';

export default class Pesquisar extends Component {
    constructor() {
        super();

        this.state = {
            series: [],
            carregando: false,
            textoPesquisa: ''
        }

        this.service = new SeriesService();
    }

    pesquisar = event => {
        const consulta = event.target.value;
        this.setState({ carregando: true, textoPesquisa: consulta, series: [] });
        this.service
            .pesquisar(consulta)
            .then(resposta => this.setState({
                series : resposta.data,
                carregando: false,
            }))
            .catch(erro => {
                console.log(erro);
                this.setState({ carregando: false });
            });
    }
    render() {
        
        const { series, textoPesquisa } = this.state;
        const listaSeries = series.map(serie => {
            let imagem = imgDefault;
            if(serie.show.image && serie.show.image.medium){
                imagem = serie.show.image.medium;
            }
            return (
                <div className="serie" key={serie.show.id}>
                    <Link to={ { pathname:`/serie/${serie.show.id}`, state: { serie, imagem }  }}>
                        <img src={imagem} alt="Cartaz da série"/>
                    </Link>
                    <Link to={ { pathname:`/serie/${serie.show.id}`, state: { serie, imagem }  }}>
                        <span>{serie.show.name}</span>
                    </Link>
                </div>
            )
        }); 
        
        const naoTemResultadoParaExibir = listaSeries.length === 0;
        const usuarioEstaPesquisando = textoPesquisa.length > 0;

        return (
            <div>
                <Header enderecoPaginaAnterior="/" logo={Logo} titulo="TV-Search" />
                
                <div id="areaPesquisa">
                    <input
                        value={this.state.textoPesquisa} 
                        id="campoPesquisa"
                        placeholder="Digite o nome da série" 
                        onChange={this.pesquisar} 
                        type="text" 
                        name="" 
                    />
                </div>
                {
                    this.state.carregando&&

                   <div id="areaLoading">
                       <img id="loading" src={loading}  alt="" />
                   </div>                                     
                }

                <div id="areaResultados">
                    {
                        (naoTemResultadoParaExibir && usuarioEstaPesquisando) &&
                        <span className="mensagemNaoEncontrado">Nenhuma série encontrada</span>
                    }
                    {listaSeries}
                </div>
            </div>
        )
    }
}
