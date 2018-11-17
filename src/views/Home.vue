

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

                  <div class="callout">
                    <div class="wrapper">
                      <h1 class="text-white text-left" style="color: rgb(86, 86, 86) !important;">
                        <b>
                          The world doesn't just need another photographer videographer developer
                        </b>
                      </h1>
                    </div>
                  </div>

                  <div class="callout">
                    <div class="wrapper">
                      <h1 class="text-white text-left">
                        <b>
                          It needs an innovative thinker to bring a vision to life
                        </b>
                      </h1>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <!-- <div class="container">
              <div class="wrapper">
                <p>This is a fairly short sentence.</p>
              </div>
            </div>

            <div class="container">
              <div class="wrapper">
                <p>This is a much longer short sentence to illustrate that they are moving at the same "rate".</p>
              </div>
            </div> -->
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
        




       
        var r = 200;
        var adjustJank = 4; 

        $('.callout h1').each( function(){
          var obj = $(this);
          var d = obj.width();
          obj.clone().appendTo( obj.parent() ); 
          obj.parent().parent().width( d );

          
          var t = d/r;
          
          $('button').click( function(){
          
            TweenMax.to( 
                obj.parent(), 
                t,  // our calculated time
                {
                scaleX: 2,
                scaleY: 2,
                margin: 50,
                x: -1000, 
                ease: Power3.easeInOut
                }
            );
            
          });

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
