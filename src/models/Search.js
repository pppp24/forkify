import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        // axios is the exact equivalent of the fetch() method, but difference is it is compatible across all browsers in comparison to fetch
        // axios also automatically converts the response back to readable JSON
        // and has better error handling
        try {
        const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
        this.result = res.data.recipes;
        } catch(error) {
            alert(error);
        }
    }
}