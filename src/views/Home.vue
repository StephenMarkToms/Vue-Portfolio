

<template>



  <transition 
        v-on:enter="enter" 
        v-on:leave="leave"
        v-bind:css="false"
        appear
      >
        <template id="page">
          <div class="home page">

        
            <Navigation></Navigation>

            

            <div id="home-content" class="page-container">
              
              <div class="row mt-2 mt-md-0 mb-2 mx-auto justify-content-between">

                <div class="col-12 px-0 px-md-0 col-lg-4 mt-5">
                  
                  <h1 class="hero text-left mb-0">
                    <span style="margin-bottom: 1em; font-size: 4.5em; font-weight: 600; font-family: sailec;">
                      Stephen
                    </span>
                  </h1>
                  <h1 class="hero text-left mb-0">
                    <span style="margin-bottom: 1em; font-size: 4.5em; font-weight: 600; font-family: sailec;">
                      Mark
                    </span>
                  </h1>
                  <h1 class="hero text-left mb-0">
                    <span style="margin-bottom: 1em; font-size: 4.5em; font-weight: 600; font-family: sailec;">
                      Toms
                    </span>
                  </h1>

                </div>

                <div class="col-12 px-0 col-md-6 col-xl-auto mt-5 mt-md-auto mb-4">
                  
                  

                  <h1 class="quote text-left text-white mb-0 mt-lg-3">
                      A multidisciplinary Digital Designer
                      <br>
                      based in York, PA. Creating brand
                      <br>
                      identities, websites and visual experiences  
                      <br>
                      to help organizations innovate their business.
                  </h1>

                </div>
              </div>

              <div class="row mx-0 mt-md-5">
                <div class="col-12 px-0 mt-5 mx-0">

                  <div class="row justify-content-between">

                    <div class="case-study px-0 col-md-5 col-12 mx-0 text-left">

                      <CaseStudy class="my-5"
                          name="Studio Eleven" 
                          thumbnail="studio-eleven" 
                          title="Studio Eleven Hair Salon"
                          disc="Creating a brand identity and website refresh for an upcoming hair salon"
                          color="red"
                      ></CaseStudy>
                    </div>

                    <div class="case-study px-0 col-md-6 col-12 mx-0 mt-2 text-left my-md-auto">
                      <CaseStudy class="mt-6 my-md-auto"
                          name="Callie Tomblin" 
                          thumbnail="callie-tomblin" 
                          title="Callie Tomblin"
                          disc="Establishing a brand identity for a musician"
                          color="#666324"
                      ></CaseStudy>
                    </div>

                  </div>

                </div>
              </div>

              <div class="row mx-0 mt-md-5">
                <div class="col-12 px-0 mt-5 mx-0">

                  <div class="row mt-md-10 justify-content-end">

                     <div class="case-study px-0 col-md-10 col-12 mx-0 mt-2 text-left">
                        <CaseStudy class="my-5"
                            name="Jake Matthew Rivers" 
                            thumbnail="jake" 
                            title="Jake Matthew Rivers"
                            disc="Creating a brand identity and website refresh for an upcoming hair salon"
                            color="blue"
                        ></CaseStudy>
                     </div>


                  </div>

                </div>
              </div>


              <div class="row mx-0 mt-md-5">
                <div class="col-12 px-0 mt-5 mx-0">

                  <div class="row mt-md-10 justify-content-between">

                     <div class="case-study px-0 col-md-5 my-auto col-12 mx-0 mt-2 text-left">
                        <CaseStudy class="my-5"
                            name="Joppa View Elementary School" 
                            thumbnail="jve" 
                            title="Joppa View Elementary School"
                            disc="Creating a brand identity and website refresh for an upcoming hair salon"
                            color="blue"
                        ></CaseStudy>
                     </div>

                     <div class="case-study px-0 col-md-6 col-12 mx-0 mt-2 text-left">
                        <CaseStudy class="my-5"
                            name="EMC Performing Arts" 
                            thumbnail="emc" 
                            title="Studio Eleven Hair Salon"
                            disc="Creating a brand identity and website refresh for an upcoming hair salon"
                            color="orange"
                        ></CaseStudy>
                     </div>


                  </div>

                </div>
              </div>



            </div>

           
            


            <Footer></Footer>
          </div>
        </template>
      
  </transition>


</template>

<script>
import CaseStudy from '../components/CaseStudy.vue';
import Navigation from '../components/Navigation.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
      Navigation,
      Footer,
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

          TweenMax.from('.hero', 1, {delay: .5, color: '#00000', ease: Power4.easeIn} );
          
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
