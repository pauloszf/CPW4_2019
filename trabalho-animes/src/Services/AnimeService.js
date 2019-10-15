import axios from 'axios';

export default class AnimeService{
    constructor() {
        this.animesList = [];
        this.api = axios.create({
            baseURL: 'https://api.jikan.moe/v3/search/anime?q='
        });
    }

    async listaAnimes(animes) {
        let lista = await this.api.get(`${animes}`);
        this.animesList = lista.data;
        return this.animesList;
    }
}