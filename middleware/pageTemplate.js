import axios from 'axios';

//this fires before every route
export default function ({ route, store, error }) {

      //lets see if we have a match to the store of pages
      //we most likely will since we are pulling and storing 50 site pages
      var slug = (route.path === '/' ? 'home' : route.path);
      var isMatch = store.state.pages.filter(function(page) {
            return page.slug === slug.replace(/\//g, '');
      });

      if (isMatch.length === 0) {
            //if there is no match on the store, go out and hit the api
            //if that is a fail, we will 404
            return axios.get(store.state.apiBaseURL + 'pages?slug=' + slug)
            .then((res) => {
                  if (res.status === 200 && res.data.length >= 1) {
                        store.commit('set_page', res.data[0]);
                  } else {
                        //if the api connects but there is no actual content 404
                        error({ statusCode: 404, message: 'Connection OK: But Page Not Found'})
                  }
            })
            .catch((e) => {
                  //server connection errors here
                  error({ statusCode: 500, message: 'Connection Error' })
            });
      } else {
            //return the store value to the page
            store.commit('set_page', isMatch[0]);
      }
}