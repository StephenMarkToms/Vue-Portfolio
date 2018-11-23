

<template>



  <transition 
        v-on:enter="enter" 
        v-on:leave="leave"
        v-bind:css="false"
        appear
      >
        <template id="page">
          <div class="home page">
            

            

            <div id="home-content" class="page-container">
              
              <div class="row mt-2 mt-md-5 mb-4 mx-auto">
                <div class="col-12 px-0 px-md-auto col-lg-5 mt-5">
                  
                  <h1 class="quote text-left text-white mb-0 mt-lg-5">
                      A multidisciplinary Digital Designer based in York, PA. Creating brand identities, websites and visual experiences to help organizations innovate their business.
                  </h1>

                </div>
              </div>

              <div class="row mx-0 mt-md-5">
                <div class="col-12 px-0 mt-5 mx-0">

                  <div class="row mt-md-6 justify-content-between">

                    <CaseStudy class="my-5"
                        name="Studio Eleven" 
                        thumbnail="studio-eleven" 
                        title="Studio Eleven Hair Salon"
                        disc="Creating a brand identity and website refresh for an upcoming hair salon"
                        color="red"
                    ></CaseStudy>

                    <CaseStudy class="mt-6 my-md-auto"
                        name="Callie Tomblin" 
                        thumbnail="callie-tomblin" 
                        title="Callie Tomblin"
                        disc="Establishing a brand identity for a musician"
                    ></CaseStudy>

                  </div>

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


       
          
        function animateCallout(){
        
          TweenMax.from('body', 2, {delay: .5, backgroundColor:"#ffffff", ease: Power3.easeOut});

          TweenMax.to('#frag', 3, {delay: 4, x: "+15", y: "-30", ease: Power4.easeIn} );
          
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
