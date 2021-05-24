import axios from 'axios';

const API_URL = 'http://localhost:10000/';

class PiggybankService {
    async getMyPiggybanks(user) {
        return await axios
        .get(API_URL + user._id + '/piggybanks')
        .then(response => {
            return response.data
        })
    }
}

export default new PiggybankService();