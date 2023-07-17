import axios from "axios";


const client = axios.create({
    baseURL : "https://attendly-api.onrender.com/api"
});

export default client;