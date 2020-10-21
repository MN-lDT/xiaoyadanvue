import Vue from 'vue'
import Router from 'vue-router'
import ListDetail from "../components/ListDetail";
import NavMenu from "../components/NavMenu";
import OpterList from "../components/OpterList";
import UserList from "../components/UserList";
import LoginIndex from "../components/LoginIndex";
import HomePage from "../components/HomePage";

Vue.use(Router)

export default new Router({
  base:'/dist',
  routes: [
    {
      path: '/opterList',
      name: 'opterList',
      component: OpterList
    },
    {
      path: "/nav",
      name: 'nav',
      component: NavMenu
    },
    {
      path: '/',
      name: 'loginIndex',
      component: LoginIndex
    },
    {
      path: '/listDetail',
      name: 'listDetail',
      component: ListDetail
    },
    {
      path: '/userList',
      name: 'userList',
      component: UserList
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage
    }
  ]
})
