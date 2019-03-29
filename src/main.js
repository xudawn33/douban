// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'swiper/dist/css/swiper.css'
import axios from 'axios'

Vue.config.productionTip = false;
Vue.prototype.$http=axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
var supportsOrientationChange = 'onorientationchange' in window ? 'orientationchange' : 'resize';
var clientWidth = document.documentElement.clientWidth;
var timer;
function setRem() {
  clientWidth = document.documentElement.clientWidth;
  var nowPX = clientWidth / 375 * 100;
  document.documentElement.style.fontSize = nowPX + 'px';
}
clientWidth !== 375 && setRem();
window.addEventListener(supportsOrientationChange, function () {
  clearTimeout(timer);
  timer = setTimeout(function () {
    setRem();
  }, 300);
}, false);

