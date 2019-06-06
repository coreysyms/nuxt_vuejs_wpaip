<template>
    <nav>
        <ul>
            <li class="logo"><nuxt-link to="/" style="text-decoration:none;"><strong style="font-size:225%;">&lt;/&gt;</strong></nuxt-link></li>
            <template v-for="navitem in nav[0]">
            <li v-bind:key="navitem.ID">
                
                <nuxt-link :to="removeHost(navitem.url)">{{ navitem.title }}</nuxt-link>
                <ul v-if="childNavItems(navitem.ID)" v-bind:key="'child_set' + navitem.menu_item_parent">
                
                    <template v-for="navchilditem in childNavItems(navitem.ID)">
                    <li v-bind:key="'child_' + navchilditem.ID">
                       
                        <nuxt-link :to="removeHost(navchilditem.url)">{{ navchilditem.title }}</nuxt-link>
                         <ul v-if="childNavItems(navchilditem.ID)" v-bind:key="'grandchild_set' + navchilditem.menu_item_parent">
                            
                            <li v-for="navgrandchilditem in childNavItems(navchilditem.ID)" v-bind:key="'grandchild_' + navgrandchilditem.ID">
                                <nuxt-link :to="removeHost(navgrandchilditem.url)">{{ navgrandchilditem.title }}</nuxt-link>
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

<script>
//3 levels of nav is supported
//home is a give me

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
            return '/' + url.match(/\/\/[^\/]+\/([^\.]+)/)[1];
        }
    },
    computed: {
    ...mapState({
      nav: state => state.headerNav
    })
  }
}
</script>


