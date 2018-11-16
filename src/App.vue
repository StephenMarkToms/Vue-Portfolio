<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

      <div class="container">

        <nav class="navbar navbar-expand-lg navbar-dark">
          <router-link class="navbar-brand" to="/">smt.</router-link>
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">works</a>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/about">about</router-link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">contact</a>
                </li>
              </ul>
          </nav>

          <!-- set progressbar -->
          <vue-progress-bar></vue-progress-bar>

          <!-- page -->
          <router-view/>

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