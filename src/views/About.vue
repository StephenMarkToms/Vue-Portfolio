

<template>

  <transition 
        v-on:enter="enter" 
        v-on:leave="leave"
        v-bind:css="false"
        appear
      >
        <template id="page">

          <div class="about page">
            <img alt="Vue logo" src="../assets/logo.png">
            <h2>About Page</h2>
          </div>

        </template>
      
  </transition>


</template>

<script>

export default {
	name: "about",
	data() {
    return {
      enterAnimation: 'enter'
    }
	},
	created() {
			this.enterAnimation = this.$route.params.enterAnimation;
	},
  methods: {
		enter: function enter(el, done) {



			console.log('entering animation!!! ' + this.enterAnimation);


			var tl = new TimelineMax({
				onComplete: done });


			tl.set(el, {
				x: window.innerWidth * 1.5,
				scale: 0.8,
				transformOrigin: '50% 50%' });


			tl.to(el, 0.5, {
				x: 0,
				ease: Power4.easeOut });


			tl.to(el, 1, {
				scale: 1,
				ease: Power4.easeOut });

		},
		leave: function leave(el, done) {
			TweenMax.fromTo(el, 1, {
				autoAlpha: 1 },
			{
				autoAlpha: 0,
				ease: Power4.easeOut,
				onComplete: done });
      } 
    }
};
</script>
