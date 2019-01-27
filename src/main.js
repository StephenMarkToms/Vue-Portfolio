/* eslint-disable */
require('intersection-observer');


import Vue from "vue";
import VueProgressBar from 'vue-progressbar';
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import 'bootstrap/dist/js/bootstrap'
import 'bootstrap';


import 'console.image';

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



 
var svgbiz = '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" fill="none" stroke="#000" stroke-linecap="round" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="b"><animate id="a" attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite"/><animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="a.begin"/></path><path id="c"><animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="a.begin+1s"/><animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="a.begin+1s"/></path><path id="d"><animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="a.begin+2s"/><animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="a.begin+2s"/></path><path id="e"><animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="a.begin+3s"/><animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="a.begin+3s"/></path><path id="f"><animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="a.begin+4s"/><animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="a.begin+4s"/></path><path id="g"><animate attributeName="d" values="m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0" dur="6s" repeatCount="indefinite" begin="a.begin+5s"/><animate attributeName="stroke-width" values="0;4;4;4;0" dur="6s" repeatCount="indefinite" begin="a.begin+5s"/></path></defs><use xlink:href="#b"/><use xlink:href="#b" transform="rotate(60 160 160)"/><use xlink:href="#b" transform="rotate(120 160 160)"/><use xlink:href="#b" transform="rotate(180 160 160)"/><use xlink:href="#b" transform="rotate(240 160 160)"/><use xlink:href="#b" transform="rotate(300 160 160)"/><use xlink:href="#c" transform="rotate(30 160 160)"/><use xlink:href="#c" transform="rotate(90 160 160)"/><use xlink:href="#c" transform="rotate(150 160 160)"/><use xlink:href="#c" transform="rotate(210 160 160)"/><use xlink:href="#c" transform="rotate(270 160 160)"/><use xlink:href="#c" transform="rotate(330 160 160)"/><use xlink:href="#d"/><use xlink:href="#d" transform="rotate(60 160 160)"/><use xlink:href="#d" transform="rotate(120 160 160)"/><use xlink:href="#d" transform="rotate(180 160 160)"/><use xlink:href="#d" transform="rotate(240 160 160)"/><use xlink:href="#d" transform="rotate(300 160 160)"/><use xlink:href="#e" transform="rotate(30 160 160)"/><use xlink:href="#e" transform="rotate(90 160 160)"/><use xlink:href="#e" transform="rotate(150 160 160)"/><use xlink:href="#e" transform="rotate(210 160 160)"/><use xlink:href="#e" transform="rotate(270 160 160)"/><use xlink:href="#e" transform="rotate(330 160 160)"/><use xlink:href="#f"/><use xlink:href="#f" transform="rotate(60 160 160)"/><use xlink:href="#f" transform="rotate(120 160 160)"/><use xlink:href="#f" transform="rotate(180 160 160)"/><use xlink:href="#f" transform="rotate(240 160 160)"/><use xlink:href="#f" transform="rotate(300 160 160)"/><use xlink:href="#g" transform="rotate(30 160 160)"/><use xlink:href="#g" transform="rotate(90 160 160)"/><use xlink:href="#g" transform="rotate(150 160 160)"/><use xlink:href="#g" transform="rotate(210 160 160)"/><use xlink:href="#g" transform="rotate(270 160 160)"/><use xlink:href="#g" transform="rotate(330 160 160)"/></svg>';
var cssbiz = 'background: url(\'data:image/svg+xml;utf8,' + svgbiz + '\') left top no-repeat; font-size: 260px;';
console.log('%c     ', cssbiz);