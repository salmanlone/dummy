import axios from "axios";


// axios.defaults.baseURL = 'https://www.monster.com/';
// axios.defaults.headers = { "Content-Type": contentType }

class ApiService {

    static Post(requestUrl, data, headers) {
        return axios.post(requestUrl, data, { headers: headers })
            .then(response => {
                return response;
            })
            .catch(error => {
                console.log('error :: ', error);
                return error;
            });
    }

    static Get(requestUrl) {
        return axios.get(requestUrl)
            .then(response => {
                return response;
            })
            .catch(error => {
                console.log('error :: ', error);
                return error;
            });
    }

}

export default ApiService;
