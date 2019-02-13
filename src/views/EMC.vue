

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
                <div class="cover-photo" :style="{'background-image': 'url(' + require('@/assets/case-studies/emc/hero.jpg') + ')'}">
                  &nbsp;
                </div>
              </div>

              <div class="ribbon mx-0 row justify-content-between pl-4 px-md-5 no-gutters">
                <h2 id="ribbon-title" class="pt-1 my-3 mx-md-5" style="font-size: 1em; font-weight: 500;">Studio Eleven <span style="color: #585858; font-weight: 300; font-size: 1em; margin-left: .5em;">Towson, Maryland</span> </h2>
                <h2 class="my-auto mx-sm-5" style="font-size: 1em; font-weight: 300; letter-spacing: .05em;"><a class="link d-none d-sm-block" href="https://studioeleven.us">visit site  <i class="fas fa-arrow-right"></i></a></h2>
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
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  
                        </span>
                      </p>
                  </div>
                  <div class="pt-5 col-2 px-0  mx-5 d-none d-lg-block">
                        <p class="pt-5 pt-lg-0 text-left" style="font-size: 1em; font-weight: 100;">
                        <span style="color: white; font-size: .9em; font-weight: 500;"> 
                          client:
                        </span>
                        <br>
                        <br>
                        <span class="newslab" style="color:white;">
                          Studio Eleven<br>
                        </span>
                        <p class="pt-5 pt-lg-0 text-left" style="font-size: 1em; font-weight: 100;">
                        <span style="color: white; font-size: .9em; font-weight: 500;"> 
                          output:
                        </span>
                        <br>
                        <br>
                        <span class="newslab" style="color:white;">
                          Branding, Website, Photography, Videography
                        </span>
                      </p>
                      
                  </div> 
                </div>
               
                <div class="row mt-5 pt-5 justify-content-center">
                  <div class="callout" style="background-position: center;" :style="{'background-image': 'url(' + require('@/assets/case-studies/emc/hero-6.jpg') + ')'}">
                    &nbsp;
                  </div>
                </div>
               
                <div class="row mt-5 pt-3 justify-content-around">
                  <div class="col-12 col-md-5 ">
                    <div class="callout" style="border: solid 14px #e4efec; background-position: 56% 46%;" :style="{'background-image': 'url(' + require('@/assets/case-studies/emc/hero-3.jpg') + ')'}">
                      &nbsp;
                    </div>
                  </div>
                  <div class="mt-5 mt-md-0 col-12 col-md-5 ">
                    <div class="callout" style="border: solid 14px #e4efec; background-position: 100% 27%;" :style="{'background-image': 'url(' + require('@/assets/case-studies/emc/hero-4.jpg') + ')'}">
                      &nbsp;
                    </div>
                  </div>
                </div>
                <div class="row mt-5 pt-5 breakout justify-content-center">
                  <div class="callout" style="background-position: 75% 27%;" :style="{'background-image': 'url(' + require('@/assets/case-studies/emc/hero-2.jpg') + ')'}">
                    &nbsp;
                  </div>
                </div>
                <div class="row mt-5 pt-5 justify-content-center">
                  <div class="callout" style="background-position: center;" :style="{'background-image': 'url(' + require('@/assets/case-studies/emc/website-1.png') + ')'}">
                    &nbsp;
                  </div>
                </div>
                <router-link class="no-dec" to="/studio-eleven">
                  <div class="row mt-5 pt-5 breakout justify-content-center">
                    <div class="col mt-5" style="background-color: #252525;" >
                      <h4 class="no-dec my-auto " style="color: rgb(165, 165, 165); padding-top: 15%; padding-bottom: 15%;">Next Project: <br><span style="color: white;">Studio Eleven</span></h4>
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
    background-color: #BBC5A1;
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

          TweenMax.to($('.fixed-wash'), 1.3, {delay: .5, css:{height: "1px", top: "67vh"}, ease:Power4.easeInOut, onComplete: function(){
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
