

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



            <div id="home-content" >

              <div class="row mt-md-5 pt-5 mb-5 pb-lg-5">
                <div class="cover-photo" :style="{'background-image': 'url(' + require('@/assets/case-studies/joppa-view/hero.jpg') + ')'}">
                  &nbsp;
                </div>
              </div>

              <div class="ribbon mx-0 row justify-content-between pl-4 px-md-5 no-gutters" style="background-color:#8DD9FD;">
                <h2 id="ribbon-title" class="pt-1 my-3 mx-md-5" style="font-size: 1em; font-weight: 500; color: black;">Joppa View Elementary School Team BCPS Day <span style="color: black; font-weight: 300; font-size: 1em; margin-left: .5em;">Perry Hall, Maryland</span> </h2>
                <h2 class="my-auto mx-sm-5" style="font-size: 1em; font-weight: 300; letter-spacing: .05em;"><a class="link d-none d-sm-block" style="color:black;" href="https://vimeo.com/250881723">watch video  <i class="fas fa-arrow-right"></i></a></h2>
              </div>

              <div class="page-container">
                <div class="row my-5 py-5 justify-content-around">
                  <div class="mx-auto col-12 col-lg-7 px-0 mt-2">
                      
                      <p class="newslab pt-lg-0 text-left" style="font-size: 1.5em; font-weight: 100;">
                        <span class="text-left" style="color: white; font-size: 1.1em; "> 
                          QUICK WORDS
                        </span>
                        <br>
                        <span class="gordita" style="color:white;">
                          Played around with ideas, and experiences from each of my clients to put together a promotional video for a local elementary school.
                          <br>
                          <br>
                          Joppa View Elementary School had a Team Blue BCPS Day to celebrate its faculty and students. This was just a fun volunteer project to help encapsulate day.
                        </span>
                      </p>
                  </div>
                  <!-- <div class="pt-5 col-2 px-0  mx-5 d-none d-lg-block">
                        <p class="pt-5 pt-lg-0 text-left" style="font-size: 1em; font-weight: 100;">
                        <span style="color: white; font-size: .9em; font-weight: 500;"> 
                          client:
                        </span>
                        <br>
                        <br>
                        <span class="newslab" style="color:white;">
                          Callie Tomblin<br>
                        </span>
                        <p class="pt-5 pt-lg-0 text-left" style="font-size: 1em; font-weight: 100;">
                        <span style="color: white; font-size: .9em; font-weight: 500;"> 
                          output:
                        </span>
                        <br>
                        <br>
                        <span class="newslab" style="color:white;">
                          Branding<br>
                          Website<br> 
                          Social Media Marketing<br>
                          Photography<br>
                          Videography
                        </span>
                      </p>
                      
                  </div>  -->
                </div>
                <div class="row breakout d-none d-md-block" style="">
                  <div class="embed-responsive embed-responsive-16by9">
                    <video class="embed-responsive-item" autoplay muted loop> 
                      <source :src="require('@/assets/case-studies/joppa-view/movie.webm')" type="video/webm">
                      <source :src="require('@/assets/case-studies/joppa-view/movie.mp4')" type="video/mp4">
                    </video>
                  </div>
                </div>
                
                <!-- <div class="row breakout mt-5 pt-3 justify-content-center">
                  <div class="callout" style="background-position: 100% 27%;" :style="{'background-image': 'url(' + require('@/assets/case-studies/studio-eleven/hero-2.jpg') + ')'}">
                    &nbsp;
                  </div>
                </div> -->
                <!-- <div class="row py-5 px-5 breakout justify-content-center" style="background-color: white;">
                  <div class="px-5 my-auto col-12 col-lg-6" style="background-position: 100% 27%; " >
                    <p class="px-lg-5 pt-lg-0 text-left text-black" style="font-size: 1.5em; font-weight: 100;">
                        <span class="text-left newslab" style="font-size: 1.1em;"> 
                          SOCIAL MEDIA MARKETING
                        </span>
                        <br>
                        <span class="gordita">
                          Lorem ipsum dolor sit amet, cis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  
                        </span>
                      </p>
                  </div>
                  <div class="px-5 py-5 my-auto col-12 col-lg-3" style="background-position: 100% 27%; " >
                    <img class="img-fluid" :src="require('@/assets/case-studies/jake-rivers/insta-2.png')" >
                  </div>
                  <div class="px-5 py-5 my-auto col-12 col-lg-3" style="background-position: 100% 27%; " >
                    <img class="img-fluid" :src="require('@/assets/case-studies/jake-rivers/insta-1.png')" >
                  </div>
                </div> -->
                <div class="row my-5 py-5 justify-content-center">
                  <!-- <div class="callout" style="background-position: bottom;" :style="{'background-image': 'url(' + require('@/assets/case-studies/jake-rivers/hero-6.jpg') + ')'}">
                    &nbsp;
                  </div> -->
                  <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/lFzrZc_LgCs?rel=0" allowfullscreen></iframe>
                  </div>
                </div>

                <div class="row py-5 px-5 breakout justify-content-center" style="background-color: white;">
                  <div class="px-5 my-auto col-12" style="background-position: 100% 27%; " >
                    <img style="max-width: 100%;" :src="require('@/assets/case-studies/joppa-view/stat.png')" >
                  </div>
                </div>
                <!-- <div class="row my-5 pt-5 justify-content-around">
                  <div class="mx-auto col-12 col-lg-10 px-0 mt-2">
                      <p class="pt-5 pt-lg-0 text-left" style="font-size: 1.5em; font-weight: 100;">
                        <span class="newslab text-left" style="color: white; font-size: 1.1em;"> 
                          TELLING A STORY
                        </span>
                        <br>
                        <span class="gordita" style="color:white;">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  
                        </span>
                      </p>
                  </div>
                </div>
                <div class="row mt-5 pt-3 justify-content-around">
                  <div class="col-12 col-md-5 ">
                    <div class="callout" style="border: solid 14px #e4efec; background-position: 56% 46%;" :style="{'background-image': 'url(' + require('@/assets/case-studies/jake-rivers/hero-3.jpg') + ')'}">
                      &nbsp;
                    </div>
                  </div>
                  <div class="mt-5 mt-md-0 col-12 col-md-5 ">
                    <div class="callout" style="border: solid 14px #e4efec; background-position: 100% 27%;" :style="{'background-image': 'url(' + require('@/assets/case-studies/jake-rivers/hero-4.jpg') + ')'}">
                      &nbsp;
                    </div>
                  </div>
                </div>
                <div class="row mt-5 pt-5 breakout justify-content-center">
                  <div class="callout" style="background-position: 75% 27%;" :style="{'background-image': 'url(' + require('@/assets/case-studies/jake-rivers/hero-2.jpg') + ')'}">
                    &nbsp;
                  </div>
                </div>
                <div class="row my-5 pt-5 justify-content-around">
                  <div class="mx-auto col-12 col-lg-10 px-0 mt-2">
                      <p class="pt-5 pt-lg-0 text-left" style="font-size: 1.5em; font-weight: 100;">
                        <span class="text-left newslab" style="color: white; font-size: 1.1em;"> 
                          FINAL RESULTS
                        </span>
                        <br>
                        <span class="gordita" style="color:white;">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  
                        </span>
                      </p>
                  </div>
                </div>
                <div class="row d-none d-md-block mt-5 p-3 justify-content-center" style="background-color: white; border: solid 10px #ccc8c8;">
                  <div class=" my-auto col-12" style="background-position: 100% 27%; " >
                    <img style="width: 100%; height: auto;" :src="require('@/assets/case-studies/jake-rivers/website-1.png')" >
                  </div>
                </div>
                <div class="row d-none d-md-block mt-5 p-3 justify-content-center" style="background-color: white; border: solid 10px #ccc8c8;">
                  <div class=" my-auto col-12" style="background-position: 100% 27%; " >
                    <img style="width: 100%; height: auto;" :src="require('@/assets/case-studies/jake-rivers/website-2.png')" >
                  </div>
                </div>
                <div class="row d-none d-md-block mt-5 p-3 justify-content-center" style="background-color: white; border: solid 10px #ccc8c8;">
                  <div class=" my-auto col-12" style="background-position: 100% 27%; " >
                    <img style="width: 100%; height: auto;" :src="require('@/assets/case-studies/jake-rivers/website-3.png')" >
                  </div>
                </div>
                <div class="row d-none d-md-block mt-5 mb-5 p-3 justify-content-center" style="background-color: white; border: solid 10px #ccc8c8;">
                  <div class=" my-auto col-12" style="background-position: 100% 27%; " >
                    <img style="width: 100%; height: auto;" :src="require('@/assets/case-studies/jake-rivers/website-4.png')" >
                  </div>
                </div>
                <div class="row breakout pt-5 mt-5 p-3 py-5 justify-content-center" style="background-color: #f0f0f0;">
                  <div class="px-5 my-5 my-md-auto col-12 col-md-3" style="background-position: 100% 27%; " >
                    <img style="width: 100%; height: auto;" :src="require('@/assets/case-studies/jake-rivers/mobile/1.jpg')" >
                  </div>
                  <div class="px-5 my-5 my-md-auto col-12 col-md-3" style="background-position: 100% 27%; " >
                    <img style="width: 100%; height: auto;" :src="require('@/assets/case-studies/jake-rivers/mobile/2.jpg')" >
                  </div>
                  <div class="px-5 my-5 my-md-auto col-12 col-md-3" style="background-position: 100% 27%; " >
                    <img style="width: 100%; height: auto;" :src="require('@/assets/case-studies/jake-rivers/mobile/3.jpg')" >
                  </div>
                  <div class="px-5 my-5 my-md-auto col-12 col-md-3" style="background-position: 100% 27%; " >
                    <img style="width: 100%; height: auto;" :src="require('@/assets/case-studies/jake-rivers/mobile/4.jpg')" >
                  </div>
                </div> -->
                <router-link class="no-dec" to="/emc">
                  <div class="row mt-5 pt-5 breakout justify-content-center">
                    <div class="col mt-5" style="background-color: #252525;" >
                      <h4 class="no-dec my-auto " style="color: rgb(165, 165, 165); padding-top: 15%; padding-bottom: 15%;">Next Project: <br><span style="color: white;">EMC Performing Arts Studio</span></h4>
                    </div>
                  </div>
                </router-link>



              </div>
            </div>

          

            <Footer></Footer>
           
            

          </div>
        </template>
      
  </transition>


</template>

<style lang="scss" scoped>

p{
    font-size: 1.2em !important;
  }

  @media (min-width: 576px) {
   p{
    font-size: 1.5em !important;
  }
 }


  .link{
    color: white;
    &:hover{
      text-decoration: none;
    }
  }

  .ribbon{
    background-color: #a1d0c1;
    color: white;
  }

  .page-container{
    margin-top: 57vh;
  }

  .quote div {
    white-space: nowrap;
    width: 50%;
  }

  .quote {
    box-sizing: border-box;
    font-size: 2.7em;
    line-height: 1.5em;
  }


  // Medium devices (tablets, 768px and up)
  @media (max-width: 768px) { 
    .quote {
      font-size: 2em;
    }
 }

 @media (max-width: 576px) {
   .quote {
      font-size: 1.5em;
    }
 }

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

  .cover-photo{
    //background-position: top center;
    background-size: cover;
  }

</style>



<script>
/* eslint-disable */
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

    animateWash(){

          TweenMax.to($('.fixed-wash'), 1, {delay: .5, css:{height: "1px", top: "67vh"}, ease:Power4.easeInOut, onComplete: function(){
              $('.fixed-wash').addClass('d-none');
          }});
          TweenMax.from($('.cover-photo'), 1, {delay: .75, alpha: 0, scaleX: 1.1, scaleY: 1.1});

          TweenMax.from($('.ribbon'), .5, {alpha: 0, scaleY: 0});

          TweenMax.from($('#ribbon-title'), 1, {delay: 1.5, alpha: 0});

          

    },
    setNewAnimation: function (){

      this.animation = 'none';

      //alert("leaving " + this.animation);

      //this.$router.push('about');

    },


		enter: function enter(el, done) {

      


      $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();

        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        return elementBottom > viewportTop && elementTop < (viewportBottom + 100);
      };

      


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
        

        this.animateWash();

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
