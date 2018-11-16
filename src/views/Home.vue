

<template>



  <transition 
        v-on:enter="enter" 
        v-on:leave="leave"
        v-bind:css="false"
        appear
      >
        <template id="page">
          <div class="home page">
            
            <div class="container">
              <div class="row mt-5">

                <div class="col-7 ml-2 mt-5">

                  <h1 class="text-white text-left" style="color: rgb(86, 86, 86) !important;">
                    <b>
                      The world doesn't just need another photographer videographer developer
                    </b>
                  </h1>
                  <h1 class="text-white text-left">
                    <b>
                      It needs an innovative thinker to bring a vision to life
                    </b>
                  </h1>

                </div>
              </div>
            </div>


          </div>
        </template>
      
  </transition>


</template>

<script>


export default {
  name: "home",
  data() {
    return {
      animation: 'enter'
    }
  },
  

  methods: {

    setNewAnimation: function (){

      this.animation = 'none';

      //alert("leaving " + this.animation);

      //this.$router.push('about');

    },


		enter: function enter(el, done) {

      console.log("entering " + this.animation);

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
      
        //console.log("leaving " + this.animation);


        if(this.animation == 'none'){
          
          console.log("leaving NONE");
          TweenMax.fromTo(el, 1, {
				autoAlpha: 0,
				scale: 1.5 },
        {
          autoAlpha: 1,
          scale: 1,
          transformOrigin: '50% 50%',
          ease: Power4.easeOut,
          onComplete: done });

        }else{

          console.log("leaving Slide");
          
          
          TweenMax.fromTo(el, 1, {
				autoAlpha: 1 },
			{
				autoAlpha: 0,
				ease: Power4.easeOut,
				onComplete: done });



        }

        






        } 








    }
};


</script>
