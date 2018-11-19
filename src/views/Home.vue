

<template>



  <transition 
        v-on:enter="enter" 
        v-on:leave="leave"
        v-bind:css="false"
        appear
      >
        <template id="page">
          <div class="home page">
            

            <div class="callout">
                <h1 id="line-1" class="text-white text-left" style="color: rgb(86, 86, 86) !important;">
                    The world doesn't just need another photographer videographer developer <span class="text-white">The world doesn't just need another</span> photographer videographer developer
                </h1>

                <h1 id="line-2" class="text-white text-left" style="color: rgb(86, 86, 86) !important;">
                    The world doesn't just need another photographer videographer developer The world doesn't just need another <span class="text-white">photographer videographer developer</span> The world doesn't just need another ph
                </h1>

                <h1 id="line-3" class="text-white text-left" style="color: rgb(86, 86, 86) !important;">
                    The world doesn't just need another photographer videographer developer The world doesn't just need another <span class="text-white">It needs a visionary</span> The world doesn't just need another photographer videographer developer
                </h1>             
            </div>

            <div class="container">
              
              <div class="row mt-5 callout-row">
                <div class="col-12 col-md-8 ml-2 mt-5">
                  


                </div>
              </div>
            </div>

           
            <div class="row mt-5">
              <div class="col">
                <button>Start</button>
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
          autoAlpha: 0
          },
        {
				autoAlpha: 1,
				scale: 1,
				transformOrigin: '50% 50%',
				ease: Power4.easeOut,
        onComplete: done });
        




       
       
          
        $('button').click( function(){
        
          //initial set
          TweenMax.set(
              $('#line-1'),
                {
                  x: "-50%",
                  scaleX: 1,
                  scaleY: 1,
                }
              );

          TweenMax.set(
              $('#line-2'),
                {
                  x: "-58.8%",
                  scaleX: 1,
                  scaleY: 1,
                }
              );

          TweenMax.set(
              $('#line-3'),
                {
                  x: "-54%",
                  scaleX: 1,
                  scaleY: 1,
                }
              );
    
          
        });


        //end custom




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
