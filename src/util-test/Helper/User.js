import axios from 'axios';

class User {
  static all() {
    return axios.get('/user').then(res => res);
  }
}

export default User;