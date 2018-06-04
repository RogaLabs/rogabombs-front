import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import Matches from '@/components/matches/Matches';
import Players from '@/components/players/Players';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/players',
      name: 'Players',
      component: Players,
    },
    {
      path: '/matches',
      name: 'Matches',
      component: Matches,
    },
  ],
});
