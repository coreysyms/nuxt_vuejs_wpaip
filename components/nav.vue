<template>
    <nav>
        <ul>
            <template v-for="navitem in nav[0]">
            <li v-bind:key="navitem.ID">
                
                <a :href="removeHost(navitem.url)">{{ navitem.title }}</a>
                <ul v-if="childNavItems(navitem.ID)" v-bind:key="'child_set' + navitem.menu_item_parent">
                
                    <template v-for="navchilditem in childNavItems(navitem.ID)">
                    <li v-bind:key="'child_' + navchilditem.ID">
                       
                        <a :href="removeHost(navchilditem.url)">{{ navchilditem.title }}</a>
                         <ul v-if="childNavItems(navchilditem.ID)" v-bind:key="'grandchild_set' + navchilditem.menu_item_parent">
                            
                            <li v-for="navgrandchilditem in childNavItems(navchilditem.ID)" v-bind:key="'grandchild_' + navgrandchilditem.ID">
                                <a :href="removeHost(navgrandchilditem.url)">{{ navgrandchilditem.title }}</a>
                            </li>
                        </ul>
                    </li>
                    </template>
                </ul>
            </li>
            </template>
        </ul>
    </nav>
</template>


<style>
    html { scroll-behavior: smooth; }
    nav { position:relative; top: 0; left: 0; width: 100%; background-color: lightblue; padding: 0.5rem 1rem; }
    nav ul { list-style: none; position: relative; padding: 0; }
    nav > ul { display: flex; justify-content: space-evenly; }

    nav ul li { position: relative; }
    nav > ul > li:before { content:'\2014'; position:absolute; left:-10px; transform: translateX(-100%); }
    nav > ul > li > ul { margin-left:0.5rem; }
    nav > ul > li > ul > li:before { content:'\2013'; position:absolute; left:-10px; transform: translateX(-100%); }
    nav > ul > li > ul > li > ul { margin-left:1rem; }
    nav > ul > li > ul > li > ul > li:before { content:'-'; position:absolute; left:-10px; transform: translateX(-100%); }

    @media (min-height: 25rem) {
        nav ul { position:-webkit-sticky; position: sticky; }
    }
</style>

<script>
//3 levels of nav is supported

import { mapState } from 'vuex';

export default {
    name:'navbar',
    data () {
        return {
            parentMenuId: 0
       }
    },
    methods: {
        childNavItems: function(id) {
            return this.nav[id];
        },
        removeHost: function(url) {
            return url.match(/\/\/[^\/]+\/([^\.]+)/)[1];
        }
    },
    computed: {
    ...mapState({
      nav: state => state.headerNav,
      baseURL: state => state.apiBaseURL
    })
  }
}
</script>


