import axios from 'axios';


//maybe I want to run an array map here on the store pageData, to get the page, if it doesn't exsist, then
//maybe I should call out specificly?
//or just let it bomb to 404?

export default function ({ route, store, error }) {
      var slug = (route.path === '/' ? 'home' : route.path)
      return axios.get(store.state.apiBaseURL + 'pages?slug=' + slug)
      .then((res) => {
            if (res.status === 200 && res.data.length >= 1) {
                  store.commit('set_pages', res.data[0]);
            } else {
                  //if the api connects but there is no actual content 404
                  error({ statusCode: 404, message: 'Connection OK: But Page Not Found'})
            }
      })
      .catch((e) => {
            //server connection errors here
            error({ statusCode: 500, message: 'Connection Error' })
      })
}