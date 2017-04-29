import Dashboard from '@/components/dashboard/Dashboard';

export default [{
  path: '/',
  redirect: {
    name: 'dashboard'
  }
},
{
  path: '/dashboard',
  name: 'dashboard',
  component: Dashboard
}];
