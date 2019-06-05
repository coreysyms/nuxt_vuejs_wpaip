import axios from 'axios';

export const state = () => ({
  apiBaseURL: 'http://35.231.46.205/wp-json/wp/v2/',
  headerNav: null,
  footerNav: null,
  pages: null
})

export const mutations = {
  set_headerNav (store, data) {
    var groups = data.reduce(function (r, a) {
        r[a.menu_item_parent] = r[a.menu_item_parent] || [];
        r[a.menu_item_parent].push(a);
        return r;
    }, Object.create(null));
    store.headerNav = groups;
  },
  set_footerNav (store, data) {
    store.footerNav = data;
  },
  set_pages (store, data) {
    store.pages = data;
  }
}

export const actions = {
  //main nav should be gotten once and first hence nuxtServerInit
  //and any other single request items should also go here

  //perhaps grab all pages data here? and just reference in your middleware
  async nuxtServerInit ({ commit }, { store }) {
    await axios.get(store.state.apiBaseURL + 'initroutes/navigation')
    .then((res) => {
      commit('set_headerNav', res.data.headerNav);
      commit('set_footerNav', res.data.footerNav);
    })
  }
}