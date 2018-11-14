

<template>

  <transition 
        v-on:enter="enter" 
        v-on:leave="leave"
        v-bind:css="false"
        appear
      >
        <template id="page">

          <div class="home page">
            <img alt="Vue logo" src="../assets/logo.png">
            <h2>Home Page</h2>
          </div>

        </template>
      
  </transition>


</template>

<script>

export default {
  name: "home",
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

      } 
    }
};
</script>
