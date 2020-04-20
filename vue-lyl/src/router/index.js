import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../views/index.vue"),
    children:[
      {
        path: '/taskCenter',
        name: 'taskCenter',
        component: () => import(/* webpackChunkName: "about" */ '../views/taskCenter.vue')
      },
    ]
  },
];

const router = new VueRouter({
  routes
});

export default router;
