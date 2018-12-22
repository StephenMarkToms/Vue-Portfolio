/* eslint-disable */

import Vue from "vue";
import VueProgressBar from 'vue-progressbar';
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import 'bootstrap/dist/js/bootstrap'
import 'bootstrap';

// import plugins individually - require exports-loader
import 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/tooltip'

// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/scss/bootstrap.scss'

//import GreenSock
import 'gsap/TweenMax'

import './assets/vendor/SplitText.min.js'

//fonts
import './scss/fonts.scss'

//global styles
import './scss/main.scss'

import VueObserveVisibility from 'vue-observe-visibility'
Vue.use(VueObserveVisibility)



// jquery
global.$ = $;

const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}

Vue.use(VueProgressBar, options);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
