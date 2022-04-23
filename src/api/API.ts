import axios from 'axios'

export const API = axios.create({
  baseURL: '',
})

API.defaults.headers.common = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Content-Type': 'application/json',
}
