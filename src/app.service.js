import axios from 'axios'

//  https://github.com/typicode/jsonplaceholder#how-to
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

//  get the photo albums for user of with user id == 1
const appService = {
  getBrands () {
    return new Promise((resolve) => {
      axios.get('/albums/1/photos', {responseType: 'json'})
        .then(response => {
          console.log(response.data)
          resolve(response.data)
        })
    })
  },
  getFlavors () {
    return new Promise((resolve) => {
      axios.get('/users/1/posts', {responseType: 'json'})
        .then((response) => {
          console.log(response.data)
          resolve(response.data)
        })
    })
  }
}

export default appService
