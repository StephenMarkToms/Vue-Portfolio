

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

              <div class="row mt-md-5 pt-5 mb-5 pb-lg-5">
                <div class="col-12 col-lg-10 px-0 mt-2">
                    <img v-bind:src="require('@/assets/case-studies/studio-eleven/hero.jpg')">
                </div>
              </div>

              <div class="row mx-0 mt-md-5">
                <div class="col-12 px-0  mx-0">

                  <div class="row justify-content-between">

                    

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
        

      //animateCallout();


       
          
        function animateCallout(){


          $('.quote').css('opacity', '0');

          setTimeout(
            function(){

              $('.quote').css('opacity', '1');

              var mySplitText = new SplitText($(".quote")),
              t2 = new TimelineLite();

              mySplitText.split({type:"lines"}); 
              t2.staggerFrom(mySplitText.lines, 0.75, {delay: .5, opacity:0, y: 100, ease:Power4.easeOut}, 0.2, 0, allDone);

              function allDone(){

                mySplitText.revert();

              }
            }, 500
          );
          
          // var mySplitText = new SplitText($(".quote")),
          // t2 = new TimelineLite();

          // mySplitText.split({type:"lines"}); 
          // t2.staggerFrom(mySplitText.lines, 0.75, {delay: .5, opacity:0, y: 100, ease:Power4.easeOut}, 0.2, 0, allDone);

          // function allDone(){

          //   mySplitText.revert();

          // }

          
          setTimeout(
            function(){
              this.doneLoad = true;
              $('.case-study').removeClass('d-none');
            }, 500
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
