import axios from 'axios';

export default class SeriesService {
    constructor() {
        this.service = axios.create({
            baseURL: 'https://pt.wikipedia.org/w'
        });
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    }

    pesquisar(busca) {
        const consulta = `api.php?action=opensearch&origin=*&search=${busca}&format=json`;
        //Retorna a promise
        return this.service.get(consulta);
    }
}