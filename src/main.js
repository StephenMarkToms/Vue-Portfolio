/* eslint-disable */
require('intersection-observer');


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



function renderImage (url, scale = 0.3) {
  let img = new Image()
 
  img.onload = () => {
    const style = `
      display: block !important;
      margin: 10px 0;
      font-size: ${img.height * scale}px;
      padding: ${Math.floor(img.height * scale/2)}px ${Math.floor(img.width * scale/2)}px;
      background: url(${url});
      background-size: ${img.width * scale}px ${img.height * scale}px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    `
    console.log('%c', style)
  }
 
  img.src = url
}
 
console.image = renderImage

const avatar_url = 'https://avatars3.githubusercontent.com/u/USER_ID'
 
console.image(avatar_url)