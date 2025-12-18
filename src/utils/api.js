import axios from 'axios'

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  withCredentials: true,
})

/* Interceptors for authentication */

api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const original = err.config
    console.log(original)
    if (
      err.response?.status === 401 &&
      original.url !== '/auth/token/refresh/'
    ) {
      await api.post('/auth/token/refresh/')
      return api(original)
    }
    return Promise.reject(err)
  },
)

export default api
