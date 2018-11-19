

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
                <h1 id="line-1" class="text-left" style="color: rgb(86, 86, 86) !important;">
                   <span class="remove-text">
                     The world doesn't just need another photographer videographer developer The world doesn't just need another photographer videographer developer The world doesn't just need another photographer videographer developer 
                   </span>
                     <span class="keep-text">The world doesn't just need another</span>
                     <span class="remove-text">
                        photographer videographer developer
                     </span>

                </h1>

                <h1 id="line-2" class="text-white text-left" style="color: rgb(86, 86, 86) !important;">
                   <span class="remove-text">
                     e world doesn't just need another 
                   </span>
                    <span class="keep-text">photographer videographer developer</span>
                    <span class="remove-text">
                     The world doesn't just need another photographer videographer developer The world doesn't just need another photographer videographer developer The world doesn't just need another photographer videographer developer 
                    </span>
                </h1>

                <h1 id="line-3" class="text-white text-left" style="color: rgb(86, 86, 86) !important;">
                    <span class="text-white">It needs a visionary</span>
                </h1>             
            </div>

            <div id="home-content" class="container">
              
              <div class="row mt-5">
                <div class="col-12 ml-2 mt-5">
                  

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
          autoAlpha: 0
          },
        {
				autoAlpha: 1,
				scale: 1,
				transformOrigin: '50% 50%',
				ease: Power4.easeOut,
        onComplete: done });
        

      animateCallout();


       
       
          
        function animateCallout(){
        
          //initial set
          TweenMax.set(
              $('#line-1'),
                {
                  x: "-5%",
                  scaleX: 2,
                  scaleY: 2,
                  margin: "50 0 0 50",
                }
              );

          TweenMax.set(
              $('#line-2'),
                {
                  x: "-70%",
                  scaleX: 2,
                  scaleY: 2,
                  margin: "50 0 0 50",
                }
              );
    
          //end
          TweenMax.to(
              $('#line-1'),
              2.5,
                {
                  x: "-75%",
                  scaleX: 1,
                  scaleY: 1,
                  ease: Power2.easeOut,
                  margin: "0 0 0 50",
                }
              );

          TweenMax.to(
              $('#line-2'),
              2.5,
                {
                  x: "-11.2%",
                  scaleX: 1,
                  scaleY: 1,
                  ease: Power2.easeOut,
                  margin: "0 0 0 50",
                }
              );

          TweenMax.to(
              $('.remove-text'),
              .75,
                {
                  delay: 2,
                  alpha: 0,
                  ease: Power2.easeOut,
                }
              );

          TweenMax.to(
              $('.keep-text'), .5,
                {
                  delay: 1.5,
                  css:{color:"white"},
                  ease: Power4.easeInOut
                }
              );
          
          TweenMax.to(
              $('.keep-text'), 3,
                {
                  delay: 3,
                  css:{color:"rgb(86, 86, 86)"},
                  ease: Power4.easeInOut
                }
              );

          var tl = new TimelineLite, 
          mySplitText = new SplitText("#line-3", {type:"words,chars"}), 
          chars = mySplitText.chars; //an array of all the divs that wrap each character

          TweenLite.set("#line-3", {perspective:400});

          tl.staggerFrom(chars, 1.5, {delay: 3, opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50",  ease:Back.easeOut}, 0.01, "+=0");


          
        }


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
