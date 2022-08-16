/* eslint-disable import/no-anonymous-default-export */
import Axios from 'axios'
import { API_ENDPOINT } from './endpoint'

export default {
  getAll: async function () {
    const response = await Axios.get(API_ENDPOINT)
    return response.data
  },
  EditPost: async function ({ data, id }) {
    const response = await Axios({
      method: 'put',
      url: `${API_ENDPOINT}/${id}`,
      data: {
        ...data,
      },
    })
    return response.data
  },
  DeletePost: async function ({ id }) {
    const response = await Axios({
      method: 'delete',
      url: `${API_ENDPOINT}/${id}`,
    })
    return id
  },
}
