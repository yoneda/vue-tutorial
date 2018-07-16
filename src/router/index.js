import Vue from 'vue'
import Router from 'vue-router'
import Top from '../components/Top.vue'
import Mail from '../components/Mail.vue'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/top',
      name: 'Top',
      component: Top,
    },
    {
      path: '/mail',
      name: 'Mail',
      component: Mail,
    },
    {
      path: '/',
      redirect: '/top'
    },
  ]
})
