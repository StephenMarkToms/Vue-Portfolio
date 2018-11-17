<template>
  <div id="app">

      <div class="container">

        <nav class="navbar navbar-expand-lg navbar-dark">
          <router-link class="navbar-brand" to="/">smt.</router-link>
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link mx-2" href="#">works</a>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link mx-2" to="/about">about</router-link>
                </li>
                <li class="nav-item">
                  <a class="nav-link mx-2" href="#">contact</a>
                </li>
              </ul>
          </nav>

          

          <!-- page -->
          <router-view/>

          <!-- set progressbar -->
          <vue-progress-bar></vue-progress-bar>

      </div>
          
  
  </div>
</template>


<style>

#app {
  text-align: center;
  color: #2c3e50;
  background-color: #171717;
}


.page {
  position: absolute;
  left: 0;
  top: 100px;
  width: 100vw;
  height: 100vh;
}

</style>



<script>


export default {
  mounted () {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish()
  },
  created () {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start()
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        // parse meta tags
        this.$Progress.parseMeta(meta)
      }
      //  start the progress bar
      this.$Progress.start()
      //  continue to next page
      next()
    })
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish()
    })
  },
  name: "app",
  template: '#page',
	methods: {
		enter: function enter(el, done) {
			TweenMax.fromTo(el, 1, {
				autoAlpha: 0,
				scale: 1.5 },
			{
				autoAlpha: 1,
				scale: 1,
				transformOrigin: '50% 50%',
				ease: Power4.easeOut,
				onComplete: done });

		},
		leave: function leave(el, done) {
			TweenMax.fromTo(el, 1, {
				autoAlpha: 1,
				scale: 1 },
			{
				autoAlpha: 0,
				scale: 0.8,
				ease: Power4.easeOut,
				onComplete: done });

		} }
};



</script>