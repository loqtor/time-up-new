// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

/**
 * Custom global components
 */
import List from '@/components/base/List';
import Item from '@/components/base/Item';

Vue.component('list', List);
Vue.component('item', Item);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
});
