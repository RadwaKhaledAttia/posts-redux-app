/* eslint-disable import/no-anonymous-default-export */
import Axios from 'axios'

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts'

export default {
  getAll: async function () {
    const response = await Axios.get(API_ENDPOINT)
    return response.data
  },
}
