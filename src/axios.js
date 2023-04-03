
import axios from 'axios';

const instance = axios.create({
    vaseURL: 'https://us-central1-clone-c61ac.cloudfunctions.net/api'
    // 'http://127.0.0.1:5001/clone-c61ac/us-central1/api'
})

export default instance;

