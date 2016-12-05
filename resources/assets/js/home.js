import Vue from 'vue'
import Home from './Home.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


Vue.use(VueRouter)

Vue.use(VueResource)

/* eslint-disable no-new */

var router = new VueRouter({
    history: true,
    root: '/'
})


router.map({
    '': {
        component: require('./components/Index.vue')
    },
})

router.alias({
})

router.start(Home, 'body')
