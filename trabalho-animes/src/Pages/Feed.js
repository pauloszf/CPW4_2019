import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AnimeService from '../Services/AnimeService';
import iconSearch from '../img/icon-search.png';
import './Feed.scss';

export default class Feed extends Component {
    constructor(){
      super();
      
      this.state = {
        animesList: [],
        nome: '', 
      }

      this.service = new AnimeService();
      this.aoBuscar = this.aoBuscar.bind(this);
    }

    aoAlterar = (event) => {
      const nome = event.target.value;
      this.setState({ nome })
    }

    async aoBuscar(){
      const anime = this.state.nome;
      const animesList = await this.service.listaAnimes(anime);
      this.setState({ animesList: animesList.results });
      console.log(this.state.animesList); 
    }
  render() {
    const lista = this.state.animesList.map(listaAnime => (
      <div className='animes' key={listaAnime.mal_id}>
        <div className='animeBox'>
          <img src={listaAnime.image_url} alt={listaAnime.title} />
          <div className='animeTitle'>
            <Link style={{ textDecoration: 'none' }} to={{ pathname: '/anime/'+listaAnime.mal_id, state:{listaAnime}}}> <span className="animeLink">{listaAnime.title}</span> </Link>
          </div>
        </div>
      </div>
    ));
    
    return (
        <div>
          <div className='search'>
            <input className="search-txt" type="text" onChange={this.aoAlterar} name="nome" value={this.state.nome} required />
            <button className="search-button" onClick={this.aoBuscar}><img src={iconSearch} alt="Busca"/></button>
          </div>
          <div>
            {lista}
          </div>
            
        </div>
    );
  }
}
