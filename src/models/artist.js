/* eslint-disable */

import axios from "../plugin/customAxios.js";

export default {
  data: {
    current: {}
  },
  fetchArtist(data) {
      return new Promise((resolve, reject) => {
        axios
        .get('/artist', {params: {en_name: data}})
        .then(res => {
            if (res.data.success){
                this.current = res.data.artist;
                resolve(this.current)
            } else { reject(new Error(res.data.message)) }
        })
        .catch(err => {
            reject(err);
        });
    });
  }
};
