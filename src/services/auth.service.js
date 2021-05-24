import axios from 'axios';

const API_URL = 'http://localhost:10000/auth/';

class AuthService {
    async login(user) {
        return await axios
        .post(API_URL + 'login', {
            email: user.email,
            password: user.password
        })
        .then(response => {
            return response.data
        })
    }
    async tokenVerify() {
        return await axios
        .get(API_URL + 'token')
        .then(response => {
            return response.data
        })
    }
}


export default new AuthService();
