

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

              <div class="works-bg" :style="{'background-image': 'url(' + bgSrc + ')'}">
                  &nbsp;
                </div>
                <!-- <div class="full-wash"></div> -->

              <div class="works-holder">

                <div class="row mt-5 pt-5 justify-content-center">
                     <router-link class="nav-item nav-link mx-2" to="/studio-eleven">
                        <h1 id="studio-eleven" class="works-btn text-white py-2 f-300">
                          Studio Eleven
                        </h1>
                     </router-link>
                </div>
                <div class="row justify-content-center">
                  <router-link class="nav-item nav-link mx-2" to="/callie-tomblin">
                    <h1 id="callie-tomblin" class="works-btn text-white py-2 f-300">
                      Callie Tomblin
                    </h1>
                  </router-link>
                </div>

                <div class="row justify-content-center">
                  <router-link class="nav-item nav-link mx-2" to="/jake-rivers">
                    <h1 id="jake-rivers" class="works-btn text-white py-2 f-300">
                      Jake Matthew Rivers
                    </h1>
                  </router-link>
                </div>

                <div class="row justify-content-center">
                  <router-link class="nav-item nav-link mx-2" to="/emc">
                    <h1 id="emc" class="works-btn text-white py-2 f-300">
                      EMC Performing Arts
                    </h1>
                  </router-link>
                </div>

                <div class="row justify-content-center">
                  <router-link class="nav-item nav-link mx-2" to="/joppa-view">
                    <h1 id="joppa-view" class="works-btn text-white py-2 f-300">
                      Joppa View Elementary
                    </h1>
                  </router-link>
                </div>

              </div>







              </div>

            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <br>
            <Footer class="mt-5"></Footer>
            </div>

          
           
            
        </template>
      
  </transition>


</template>

<style lang="scss" scoped>

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
    background-position: top center;
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
      bgSrc: require('@/assets/works/bg.jpg'),
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

      let thisObj = this;

      $(".works-bg").css("clip-path", "circle(200% at 50% 35%");
      setTimeout(function(){
          $(".works-bg").css("clip-path", "circle(35% at 50% 45%");
      }, 500);

      //manipulate mouse move
      var mouseX;
      var mouseY;
      var clipPos;

      $(document).mousemove( function(e) {
        
        mouseX = e.pageX; 
        mouseY = e.pageY;
        clipPos = "circle(27% at " + mouseX + "px " + mouseY + "px)";
        $(".works-bg").css("clip-path", clipPos);
        
      });  

      $( "#studio-eleven" ).hover(function(){
        thisObj.bgSrc = require('@/assets/case-studies/studio-eleven/hero.jpg');
      });
      $( "#callie-tomblin" ).hover(function(){
        thisObj.bgSrc = require('@/assets/case-studies/callie-tomblin/hero.jpg');
      });
      $( "#jake-rivers" ).hover(function(){
        thisObj.bgSrc = require('@/assets/case-studies/jake-rivers/hero.jpg');
      });
      $( "#emc" ).hover(function(){
        thisObj.bgSrc = require('@/assets/case-studies/emc/hero.jpg');
      });
      $( "#joppa-view" ).hover(function(){
        thisObj.bgSrc = require('@/assets/case-studies/joppa-view/hero.jpg');
      });

    

      


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
