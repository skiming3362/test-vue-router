/*
* @Author: skiming
* @Date:   2017-07-16 22:00:55
* @Last Modified by:   skiming
* @Last Modified time: 2017-07-22 18:54:52
*/

import './test.css';

import Vue from 'vue';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

import App from './component/App.vue';

import index from './component/index.vue';
import User from './component/user.vue';
import User2 from './component/user2.vue';
import UserProfile from './component/user-profile.vue';
import UserHome from './component/user-home.vue';

Vue.use(VueRouter);
Vue.use(ElementUI);

const routes = [
    { path: '/foo', alias: '/bar', component: index, name: 'index' },
    { 
        path: '/user/:id/post/:post_id', 
        components: {
            default: User,
            a: User2
        },
        props: {
            default: true,
            a: false
        },
        name: 'user',
        children: [
            {
                path: 'profile/:profile_id',
                component: UserProfile
            },
            {
                path: '',
                component: UserHome,
                beforeEnter: (to, from, next) => {
                    console.log('this is only called in route UserHome');
                    next();
                }
            },
        ]
    },
    { path: '/', redirect: '/foo' }
];

const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
});

router.beforeEach((to, from, next) => {
    console.log('to: ');
    console.log(to);
    next();
});

router.afterEach(route => {
    console.log('afterEach called');
    console.log(route);
});

const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');