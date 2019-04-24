import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: 'https://www.pensivewright.com/serv'
    //baseURL: 'http://localhost:8081'
  })
}
