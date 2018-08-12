/* eslint-disable */

import axios from '../plugin/customAxios.js';

export default {
    data: {
      didLogin: false,
      me: {}
    },
  
    init() {
      return new Promise((resolve, reject) => {
        axios
          .get('/user/me')
          .then(res => {
            if (res.data.success) {
              this.data.didLogin = true;
              this.data.me = res.data.me;
            } else {
              this.data.didLogin = false;
              this.data.me = {};
            }
            resolve(this.data.me);
          })
          .catch(err => {
            reject(err);
          })
      });
  
    },
  
    me() {
      return new Promise((resolve, reject) => {
        axios
          .get('/user/me')
          .then(res => {
            if (res.data.success) {
              this.data.didLogin = true;
              this.data.me = res.data.me;
            } else {
              this.data.didLogin = false;
              this.data.me = {};
            }
            resolve(this.data.me);
          })
          .catch(err => {
            reject(err);
          })
      });
  
    },
  
    hasAuth(auth) {
      try {
        if (auth.toUpperCase() === 'LOGIN') return this.data.didLogin;
        if (this.data.me.auth_scope.includes('ADMIN')) return true;
        return this.data.me.auth_scope.includes(auth.toUpperCase());
      } catch (err) {
        return false;
      }
    },
  
    isAdmin() {
      return this.hasAuth('ADMIN');
    },
  
    login(data) {
      return new Promise((resolve, reject) => {
        axios
          .post('/user/login', data)
          .then(res => {
            if (res.data.success) {
              this.init()
                .then(me => {
                  resolve();
                });
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
              this.init();
              resolve();
              location.href = '/';
            }
          })
      });
    }
  }
  