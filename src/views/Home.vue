

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
              
              <!-- <h1 class="text-left mb-0">
                  <span class="bg-txt">
                    Hello World
                  </span>
              </h1> -->

              <div class="row mt-0 justify-content-center">
                <div class="col mx-auto px-0 mt-5">
                  <h1 class="hero text-left mb-0">
                      <!-- <span style="margin-bottom: 1em; font-size: 3em; font-style: unset; font-weight: 500;">
                        Stephen Mark Toms
                      </span> -->
                  </h1>
                </div>

              </div>

              <div class="row mb-5 pb-5 justify-content-center">
                <div class="col mx-auto px-0 mt-2">
                  <h1 class="quote text-left text-white mb-0 mt-lg-3">
                      A multimodal company
                      <br>
                      based in York, PA. Creating brand
                      <br>
                      identities, websites and visual experiences  
                      <br>
                      <!-- to help organizations <i style="color: #ffbd00; font-size: 1.23em;"><b>innovate</b></i> their business. -->
                      to help organizations innovate their business.
                  </h1>
                </div>

              </div>


              <div class="row mx-0 mt-md-5">
                <div class="col-12 px-0  mx-0">

                  <div class="row justify-content-between">

                    <div class="case-study px-0 col-md-5 col-12 mx-0 text-left">

                      <CaseStudy
                          ref="case1"
                          name="Studio Eleven" 
                          id="studio-eleven" 
                          thumbnail="studio-eleven" 
                          title="Studio Eleven Hair Salon"
                          disc="Creating a brand identity and website refresh for an upcoming hair salon"
                          color="#FFBD00"
                      ></CaseStudy>
                    </div>

                    <div class="case-study px-0 col-md-6 col-12 mx-0 mt-2 text-left my-md-auto">
                      <CaseStudy class="mt-6 my-md-auto"
                          ref="case2"
                          name="Callie Tomblin" 
                          id="callie-tomblin" 
                          thumbnail="callie-tomblin" 
                          title="Callie Tomblin"
                          disc="Establishing a brand identity for a musician"
                          color="#FFBD00"
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
                            ref="case3"
                            name="Jake Matthew Rivers" 
                            id="jake" 
                            thumbnail="jake" 
                            title="Jake Matthew Rivers"
                            disc="Creating a brand identity and website refresh for an upcoming hair salon"
                            color="#FFBD00"
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
                            color="#FFBD00"
                        ></CaseStudy>
                     </div>

                     <div class="case-study px-0 col-md-6 col-12 mx-0 mt-2 text-left">
                        <CaseStudy class="my-5"
                            name="EMC Performing Arts" 
                            thumbnail="emc" 
                            title="Studio Eleven Hair Salon"
                            disc="Creating a brand identity and website refresh for an upcoming hair salon"
                            color="#FFBD00"
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

<style lang="scss" scoped>

  

  .bg-txt{

    position: absolute;
    top: 21%;
    left: -5%;
    word-break: break-all;
    overflow-x: hidden;
    overflow-y: hidden;
    font-size: 8em;
    color: #1d1c1c;
    line-height: 1em;
    width: 118vw;
    display: inline;

  }

  del {
    text-decoration-color: #ffbd00;
  }

  ins {
    text-decoration: none;
    font-size: 1.1em;
    color: #ffbd00;
    position: absolute;
    font-weight: 500;
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
    margin-left: 14em;
    margin-top: -3em;
    font-family: 'Permanent Marker', cursive;
    
  }

</style>



<script>
import CaseStudy from '../components/CaseStudy.vue';
import Navigation from '../components/Navigation.vue';
import Footer from '../components/Footer.vue';
export default {
  components: {
      Navigation,
      Footer,
      CaseStudy,
  },
  name: "home",
  data() {
    return {
      animation: 'enter',
      doneLoad: false
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
        
          //TweenMax.from('body', 2, {delay: .5, backgroundColor:"#ffffff", ease: Power3.easeOut});

          //TweenMax.from('.hero', 1, {delay: .5, y: "+=50", alpha: 0, ease: Power4.easeIn} );
          
          var mySplitText = new SplitText(".quote", {type:"lines"}),
          t2 = new TimelineLite();


          t2.staggerFrom(mySplitText.lines, 0.75, {delay: .5, opacity:0, y: 100, ease:Power4.easeOut}, 0.2)

          setTimeout(
            function(){
              this.doneLoad = true;
            }, 2000
          );
          
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
