import axios from 'axios';

export const state = () => ({
  apiBaseURL: 'http://35.231.46.205',
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
  async nuxtServerInit ({ commit }) {
    const res = await axios.get('http://35.231.46.205/wp-json/wp/v2/pages?slug=about-us');
    commit('set_mainNav', res.data[0]);
  },

  //"get" the requested endpoint
  async get({ commit }, endpoint) {
    await axios.get('http://35.231.46.205/wp-json/wp/v2/' + endpoint)
    .then((res) => {
      if (res.status === 200) {
        commit('set_pageData', res.data[0])
      }
    })
  }
}