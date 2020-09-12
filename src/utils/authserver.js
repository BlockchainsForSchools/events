import axios from "axios";

const authserver = axios.create({
    baseURL: process.env.REACT_APP_AUTH_URL
});

authserver.defaults.withCredentials = true;

export default authserver;