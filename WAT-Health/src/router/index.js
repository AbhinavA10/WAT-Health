import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Dashboard from "@/components/Dashboard";
import buddy from "@/components/buddy"
import Newsfeed from "@/components/Newsfeed";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard/:id',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/buddy/:id',
      name: 'buddy',
      component: buddy
    },
    {
      path: '/newsfeed/:id',
      name: 'Newsfeed',
      component: Newsfeed
    }
  ]
})
