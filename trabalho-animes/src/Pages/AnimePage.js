import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import { Link } from 'react-router-dom';

import './AnimePage.scss';
import back from '../img/back2.png';

export default class AnimePage extends Component {
    constructor(props) {
      super(props);

      this.state = {
          anime: this.props.location.state.listaAnime,
          rating: this.props.location.state.listaAnime.score,
      }
    }

    componentDidMount() {
        console.log(this.props.location.state.listaAnime);
        console.log(this.state.rating / 2 );
    }
  render() {
    return (
        <div>
          <div className="animePageNav">
            <Link to="/"><img src={back} alt="Voltar"/></Link>
          </div>
          <div className="animePageTop">
            <img src={this.state.anime.image_url} alt=""/>
          </div>
          <div className="animePageTitle">
            <h1>{this.state.anime.title}</h1>
          </div>
          <div className="animePageRating">
            <StarRatings rating={this.state.rating / 2} starRatedColor="rgb(120,170,194)" numberOfStars={5} starDimension='45px' starSpacing='2' />
          </div>
          <div className="animePageMid">
            <span>Episódios: {this.state.anime.episodes}</span>
            <span>Tipo: {this.state.anime.type}</span>
          </div>
          <div className="animePageDescription">
            <p>Descrição: {this.state.anime.synopsis}</p>
          </div>
        </div>
    );
  }
}
