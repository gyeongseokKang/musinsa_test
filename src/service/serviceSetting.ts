import axios, { AxiosRequestConfig } from 'axios'

export let serviceOnOff = true

export const SERVER_URL = 'https://static.msscdn.net/musinsaUI/homework'

export function sleep(m: number) {
  return new Promise((r) => setTimeout(r, m))
}

export const publicHeaders = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
}

export const PublicApi = axios.create({
  baseURL: SERVER_URL,
  timeout: 1000000,
  params: {},
  headers: publicHeaders,
})
