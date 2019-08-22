import axios from 'axios';

export const state = (store) => ({
  apiBaseURL: 'this should be the base of the api endpoint IE http://XYXYXY/wp-json/wp/v2/',
  contentBaseURL: 'this should be the human readable url to content if you like',
  pageMeta: { 
      description: 'meta default description',
      title: 'meta default site title',
      shareImage: 'absolute path to default share image'
  },
  headerNav: null,
  footerNav: null,
  pages: null,
  page: null
})

export const mutations = {
  set_headerNav (store, data) {
    //since WP returns a single dimention array
    //children are at the same "level" as parents
    //so we need to group the array into object arrays
    //id'ed by the parent menu id and match on that in the template
    var groups = data.reduce(function (r, a) {
        r[a.menu_item_parent] = r[a.menu_item_parent] || [];
        r[a.menu_item_parent].push(a);
        return r;
    }, Object.create(null));
    store.headerNav = groups;
  },
  set_footerNav (store, data) {
    //since WP returns a single dimention array
    //children are at the same "level" as parents
    //so we need to group the array into object arrays
    //id'ed by the parent menu id and match on that in the template
    var groups = data.reduce(function (r, a) {
        r[a.menu_item_parent] = r[a.menu_item_parent] || [];
        r[a.menu_item_parent].push(a);
        return r;
    }, Object.create(null));
    store.footerNav = groups;
  },
  set_pages (store, data) {
    store.pages = data;
  },
  set_page (store, data) {
    store.page = data;
  }
}

export const actions = {
  //grab the main nav from a custom api endpoint on WP
  //this returns a 2 object array with header nav and footer nav as the default menus
  //there of course can me more menus if needed
  async nuxtServerInit ({ commit }, { store }) {
    let [navigation, pagesData] = await Promise.all([
          axios.get(store.state.apiBaseURL + 'initroutes/navigation'),
          axios.get(store.state.apiBaseURL + 'pages?per_page=50'),
    ]);
    commit('set_headerNav', navigation.data.headerNav);
    commit('set_footerNav', navigation.data.footerNav);
    commit('set_pages', pagesData.data);
  }
}
