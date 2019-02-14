

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

              

              

              <div class="page-container">
                <div class="row my-5 py-5 justify-content-around">
                  <div class="mx-auto col-12  px-0 mt-2">
                      
                      <p class="newslab pt-lg-0 " style="font-size: 1.5em; font-weight: 100;">
                        <span class="text-left" style="color: white; font-size: 1.1em; "> 
                          Thank you for reaching out!
                        </span>
                        <br>
                        <span class="" style="color:white;">
                          <small>Your email has been recieved and I will try my best to respond within 48 hours.</small>
                        </span>
                        
                        
                      </p>
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

  .btn-primary{
      background-color: #181818;
      border-color: #9e9e9e;
    &:hover {
      color: #fff;
      background-color: #3a3a3a;
      border-color: #9e9e9e;
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
      doneLoad: false,
    }
  },
  
  mounted(){

  

  },
  methods: {
    handleSubmit(){

      console.log('hi');
      
      $.ajax({
          url: 'send_email.php',
          type: 'POST',
          data: {
              email: 'email@example.com',
              message: 'hello world!'
          },
          success: function(msg) {
              alert('Email Sent');
          }               
      });


    },
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
