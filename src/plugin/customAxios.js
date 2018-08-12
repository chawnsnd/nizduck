import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 3000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  },
  validateStatus: function (status) {
    if (status >= 200 && status < 300) return true
    if (status === 304) return true
    if (status === 401) return true
    return false
  }
})
