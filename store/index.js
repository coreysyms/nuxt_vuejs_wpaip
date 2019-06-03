import axios from 'axios';

export const state = () => ({
  apiBaseURL: 'http://35.231.46.205/wp-json/wp/v2/',
  mainNav: null,
  pageData: null
})

export const mutations = {
  set_mainNav (store, data) {
    store.mainNav = data
  },
  set_pageData (store, data) {
    store.pageData = data
  }
}

export const actions = {
  //main nav should be gotten once and first hence nuxtServerInit
  //and any other single request items should also go here

  //perhaps grab all pages data here? and just reference in your middleware
  async nuxtServerInit ({ commit }) {
    await axios.get('http://35.231.46.205/wp-json/wp/v2/pages?slug=about-us')
    .then((res) => {
      commit('set_mainNav', res.data[0]);
    })
  }
}