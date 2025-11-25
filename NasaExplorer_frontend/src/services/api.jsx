import axios from 'axios'

const BASE = import.meta.env.VITE_API_BASE || 'http://localhost:9090/api/v1/apod'


const apiClient = axios.create({
  baseURL: BASE,
  timeout: 5000, 
})

// Export API methods
export const api = {
  today() {
    return apiClient.get('/today').then(res => res.data)
  },
  byDate(dateStr) {
    return apiClient.get('', { params: { date: dateStr } }).then(res => res.data)
  },
  recent(days = 9) {
    return apiClient.get('/recent', { params: { days } }).then(res => res.data)
  }
}
