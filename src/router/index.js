import Vue from 'vue';
import Router from 'vue-router';
import DashboardRoutes from '@/components/dashboard/Routes';
import WorkoutRoutes from '@/components/workout/Routes';

Vue.use(Router)

/**
 * If I just put an array here, this fails.
 * Not sure why, but the concat seemed to work fine.
 */
export default new Router({
  routes: DashboardRoutes.concat(WorkoutRoutes)
})
