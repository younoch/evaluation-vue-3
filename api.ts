// src/api.js
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default {
  getPosts() {
    return apiClient.get('/posts')
  }
}
