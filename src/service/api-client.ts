import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f741037d356c4ce2a1f37350dfb66090'
    }
})