/*
* @Author: skiming
* @Date:   2017-07-16 22:00:55
* @Last Modified by:   skiming
* @Last Modified time: 2017-07-19 01:46:07
*/

import './test.css';

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import index from './index.vue';
import hello from './hello.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/foo', component: index },
    { path: '/bar', component: hello }
];

const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
});

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');