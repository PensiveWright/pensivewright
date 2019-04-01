import axios from 'axios'

export default() => {
  return axios.create({
    //baseURL: 'http://www.pensivewright.com/serv'
    baseURL: 'http://localhost:8081'
  })
}
