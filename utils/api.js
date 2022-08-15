/* eslint-disable import/no-anonymous-default-export */
import Axios from 'axios'
import { API_ENDPOINT } from './endpoint'

export default {
  getAll: async function () {
    const response = await Axios.get(API_ENDPOINT)
    return response.data
  },
}
