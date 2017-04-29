import Workout from '@/components/workout/Workout';
import Create from '@/components/workout/Create';
import Edit from '@/components/workout/Edit';
import Details from '@/components/workout/Details';

export default [{
  path: '/workout',
  name: 'workout',
  component: Workout,
  children: [{
    path: 'create',
    name: 'workout-create',
    component: Create
  }, {
    path: 'edit/:id',
    name: 'workout-edit',
    component: Edit,
    props: true
  }, {
    path: 'details/:id',
    name: 'workout-details',
    component: Details,
    props: true
  }]
}];