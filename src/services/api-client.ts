import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'be25cbacd62243149fb0ce3c31c2321f'
    }
})