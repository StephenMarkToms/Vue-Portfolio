<template>
  <div id="app">

      <div class="container">

          

          <!-- page -->
          <router-view/>

          <!-- set progressbar -->
          <vue-progress-bar></vue-progress-bar>

          <div class="fixed-wash"></div>
          <div class="fixed-wash"></div>
          <div class="fixed-wash"></div>
          <div class="fixed-wash"></div>
          <div class="fixed-wash"></div>

      </div>
          
  
  </div>
</template>


<style>

#app {
  text-align: center;
  color: #2c3e50;
  /* background-color: #171717; */
  overflow-x: hidden;
}


.page {
  position: absolute;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}


.fixed-wash {
  background: #ffbd00;
  visibility: auto;
  cursor: pointer;
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  position: fixed;
  overflow-y: scroll;
}



</style>



<script>
      







export default {
  

  mounted () {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish()


    TweenMax.from($('.navbar-brand'), .75, {delay: 2.75, x: "-=100", alpha: 0, ease: Power4.easeOut});

    TweenMax.from($('.navbar-nav'), .75, {delay: 2.75, x: "+=100", alpha: 0, ease: Power4.easeOut});

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