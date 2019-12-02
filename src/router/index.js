import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import EventShow from '../views/EventShow.vue';
import EventList from '../views/EventList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/events',
    name: 'events-list',
    component: EventList,
  },
  {
    path: '/events/:id',
    name: 'event-show',
    component: EventShow,
    props: true,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
