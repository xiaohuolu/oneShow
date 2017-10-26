// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import utils from './utils';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import VueResource from 'vue-resource';
var VueCookie = require('vue-cookie');
// Tell Vue to use the plugin


let Hub = new Vue();
Vue.config.productionTip = false
Vue.prototype.utils = utils;
Vue.prototype.routes = router.options.routes;

Vue.use(VueCookie);
Vue.use(Mint);
Vue.use(VueResource);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
