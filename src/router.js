import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import StudioEleven from "./views/Studio-Eleven.vue";
import CallieTomblin from "./views/Callie-Tomblin.vue";
import JakeRivers from "./views/Jake-Rivers.vue";
import JoppaView from "./views/Joppa-View.vue";
import EMC from "./views/EMC.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import Thanks from "./views/Thanks.vue";


Vue.use(Router);



export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        progress: {
          func: [
            {call: 'color', modifier: 'temp', argument: '#ffb000'},
            {call: 'fail', modifier: 'temp', argument: '#6e0000'},
            {call: 'location', modifier: 'temp', argument: 'top'},
            {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
          ]
        }
      },
      props:{
        animation: 'home-animation'
      }
    },
    {
      path: "/studio-eleven",
      name: "studio-eleven",
      component: StudioEleven,
      meta: {
        progress: {
          func: [
            {call: 'color', modifier: 'temp', argument: '#ffb000'},
            {call: 'fail', modifier: 'temp', argument: '#6e0000'},
            {call: 'location', modifier: 'temp', argument: 'top'},
            {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
          ]
        }
      },
      props:{
        animation: 'home-animation'
      }
    },
    {
      path: "/callie-tomblin",
      name: "callie-tomblin",
      component: CallieTomblin,
      meta: {
        progress: {
          func: [
            {call: 'color', modifier: 'temp', argument: '#ffb000'},
            {call: 'fail', modifier: 'temp', argument: '#6e0000'},
            {call: 'location', modifier: 'temp', argument: 'top'},
            {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
          ]
        }
      },
      props:{
        animation: 'home-animation'
      }
    },
    {
      path: "/jake-rivers",
      name: "jake-rivers",
      component: JakeRivers,
      meta: {
        progress: {
          func: [
            {call: 'color', modifier: 'temp', argument: '#ffb000'},
            {call: 'fail', modifier: 'temp', argument: '#6e0000'},
            {call: 'location', modifier: 'temp', argument: 'top'},
            {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
          ]
        }
      },
      props:{
        animation: 'home-animation'
      }
    },
    {
      path: "/joppa-view",
      name: "joppa-view",
      component: JoppaView,
      meta: {
        progress: {
          func: [
            {call: 'color', modifier: 'temp', argument: '#ffb000'},
            {call: 'fail', modifier: 'temp', argument: '#6e0000'},
            {call: 'location', modifier: 'temp', argument: 'top'},
            {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
          ]
        }
      },
      props:{
        animation: 'home-animation'
      }
    },
    {
      path: "/emc",
      name: "emc",
      component: EMC,
      meta: {
        progress: {
          func: [
            {call: 'color', modifier: 'temp', argument: '#ffb000'},
            {call: 'fail', modifier: 'temp', argument: '#6e0000'},
            {call: 'location', modifier: 'temp', argument: 'top'},
            {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
          ]
        }
      },
      props:{
        animation: 'home-animation'
      }
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        progress: {
          func: [
            {call: 'color', modifier: 'temp', argument: '#ffb000'},
            {call: 'fail', modifier: 'temp', argument: '#6e0000'},
            {call: 'location', modifier: 'temp', argument: 'top'},
            {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
          ]
        }
      }
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
      meta: {
        progress: {
          func: [
            {call: 'color', modifier: 'temp', argument: '#ffb000'},
            {call: 'fail', modifier: 'temp', argument: '#6e0000'},
            {call: 'location', modifier: 'temp', argument: 'top'},
            {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
          ]
        }
      }
    },
    {
      path: "/thanks",
      name: "thanks",
      component: Thanks,
      meta: {
        progress: {
          func: [
            {call: 'color', modifier: 'temp', argument: '#ffb000'},
            {call: 'fail', modifier: 'temp', argument: '#6e0000'},
            {call: 'location', modifier: 'temp', argument: 'top'},
            {call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
          ]
        }
      }
    }
  ]
});
