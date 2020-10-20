import Vue from 'vue'
import Router from 'vue-router'
import ListDetail from "@/components/ListDetail";
import NavMenu from "../components/NavMenu";
import OpterList from "../components/OpterList";

Vue.use(Router)

export default new Router({
  base:'/dist',
  routes: [
    {
      path: '/',
      name: 'opterList',
      component: OpterList
    },
    {
      path: "/nav",
      name: 'nav',
      component: NavMenu
    },
    {
      path: '/opterList',
      name: 'opterList',
      component: OpterList
    },
    {
      path: '/listDetail',
      name: 'listDetail',
      component: ListDetail
    }



  ]
})
