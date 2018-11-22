

<template>



  <transition 
        v-on:enter="enter" 
        v-on:leave="leave"
        v-bind:css="false"
        appear
      >
        <template id="page">
          <div class="home page">
            

            

            <div id="home-content mt-5" class="container">
              
              <div class="row mt-5 mx-auto">
                <div class="col-12 col-lg-8 mt-5">
                  
                  <h1 class="quote text-left text-white mb-0">
                      The world doesn't just need another photographer videographer developer 
                  </h1>

                  <h1 class="quote text-left" style="color: rgb(86, 86, 86) !important;">
                      <span class="text-white">It needs a </span> <span id="ending">visionary</span>
                  </h1>  

                  <CaseStudy name="Studio Eleven" thumbnail="studio-eleven"></CaseStudy>

                  

                  <!-- <div class="tile-1">
                    <img class="img-fluid" src="../assets/case-study-1.jpg" >
                  </div>  -->

                </div>
              </div>

            </div>

           
            



          </div>
        </template>
      
  </transition>


</template>

<script>
import CaseStudy from '../components/CaseStudy.vue';

export default {
  components: {
      CaseStudy
  },
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


       function pos(){

         console.log("frag pos: " + $('#frag').x);

       }
       
          
        function animateCallout(){
        
          pos();

          TweenMax.to('#frag', 3, {delay: 4, x: "+15", y: "-30", ease: Power4.easeIn, onComplete: pos() } );
          
          var mySplitText = new SplitText(".quote", {type:"lines"}),
          t2 = new TimelineLite();


          t2.staggerFrom(mySplitText.lines, 0.75, {delay: 2, opacity:0, cycle:{x:[100, -100], ease:Power4.easeOut}}, 0.2)


          
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
