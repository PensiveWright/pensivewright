import Api from '@/services/Api'

console.log(Api());
export default {
  fetchPosts () {
    return Api().get('posts')
  }
}
