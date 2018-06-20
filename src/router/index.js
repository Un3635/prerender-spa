import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history', // Hash不会带到服务器，路由信息会丢失
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/components/about')
    },
    {
      path: '/i',
      name: 'i',
      component: () => import('@/components/i')
    }
  ]
});
