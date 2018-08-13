/* eslint-disable */

import axios from '../plugin/customAxios.js';

export default {
    data: {
      didLogin: false,
      me: {}
    },
    login(data) {
      return new Promise((resolve, reject) => {
        axios
          .post('/user/login', data)
          .then(res => {
            if (res.data.success) {
              this.didLogin = true;
              this.me = res.data.user;
              resolve(res);
            } else reject(new Error(res.data.message));
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    logout() {
      return new Promise((resolve, reject) => {
        axios
          .post('/user/logout')
          .then(res => {
            if (res.data.success) {
              this.didLogin = false;
              this.me = {};
              resolve();
              location.href = '/';
            } else reject(new Error(res.data.message));
          })
      });
    }
  }
  