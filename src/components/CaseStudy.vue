<template>

    
      <div style="background-color:#131212;">

          <!-- <div class="wash"> -->
          
          <div class="wash" v-bind:style="{ backgroundColor: color}">
            

            <img class="img-fluid" v-bind:src="require('../assets/' + thumbnail + '.jpg')" />

            <div class="row mt-5 scroller-row">
              <div class="scroller mt-5">
                    <div class="lines">
                        <div class="line">
                          <span>{{ name }}</span>
                          <span>{{ name }}</span>
                          <span>{{ name }}</span>
                          <span>{{ name }}</span>
                          <span>{{ name }}</span>
                        </div>
                        <div class="line">
                            <span>{{ name }}</span>
                            <span>{{ name }}</span>
                            <span>{{ name }}</span>
                            <span>{{ name }}</span>
                            <span>{{ name }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hover" style="background-color:red; width: 100%; height: 100%; position: absolute; top: 0; opacity: .01;"></div>
          </div>

          
          
          <h4 class="header text-white mt-3 "><span class="title-disc">{{ title }}</span></h4>
          <p class="header mt-1 pr-4 ">{{ disc }}</p>

          
        
          

      </div>
      


</template>

<script>


export default {
  data(){
    return{
      timesViewed: 0,
    }
  },
  props: {
    name: String,
    thumbnail: String,
    title: String,
    disc: String,
    color: String
  },
  methods:{

    doneAnimating(){

      $(this.$el).find('img').addClass('case-img');

      $(this.$el).find('.hover').bind({
        mouseenter: function(e) {
          
          $(e.target).prev().css('opacity', '.75');
          $(e.target).prev().prev().css('opacity', '.5');
          $(e.target).prev().prev().css('transform', 'scale(.8)');

        },
        mouseleave: function(e) {
        
          $(e.target).prev().css('opacity', '0');
          $(e.target).prev().prev().css('opacity', '1');
          $(e.target).prev().prev().css('transform', 'scale(1)');
        
        }
      });

    }

  },
  mounted: function () {
   

    

    var root = document.documentElement;
    var body = document.body;
    var pages = document.querySelectorAll(".fixed-wash");
    var tiles = document.querySelectorAll(".wash");

    for (var i = 0; i < tiles.length; i++) {
      addListeners(tiles[i], pages[i]);
      //animateHero(tiles[i], pages[i]);
    }

    function addListeners(tile, page) {

      setHero(page, tile);

      $(page).removeClass('d-none');

      tile.addEventListener("click", function () {

        TweenMax.to($(tile).find('.case-img')[0], .2, { autoAlpha: 0 });
        TweenMax.to($(tile).find('.scroller-row')[0], .2, { autoAlpha: 0});

        TweenMax.to($(tile), .5, { onComplete:function(){
                animateHero(tile, page) 
            }});

      });

    }

    function setHero(fromHero, toHero) {

      var clone = fromHero.cloneNode(true);

      var from = calculatePosition(fromHero);
      var to = calculatePosition(toHero);

      TweenLite.set([fromHero, toHero], { visibility: "hidden" });
      TweenLite.set(clone, { position: "absolute", margin: 0 });

      body.appendChild(clone);

      var style = {
        x: to.left - from.left,
        y: to.top - from.top,
        width: to.width,
        height: to.height,
        autoRound: false,
        ease: Power2.easeInOut,
        onComplete: onComplete };

      TweenLite.set(clone, style);

      function onComplete() {

        TweenLite.set(toHero, { visibility: "visible" });
        body.removeChild(clone);
      }

    }


    function animateHero(fromHero, toHero) {

      

      //console.log($(fromHero).find('.case-img')[0]);

      

      var clone = fromHero.cloneNode(true);
      
      $(clone).remove('.case-img');
      //console.log($(clone).find('img'));

      //remove elements from cloned element
      $(clone).find('img').remove();
      $(clone).find('.scroller-row').remove();

      //TweenMax.to($(clone).find('.case-img')[0], .2, { autoAlpha: 0 });
      //TweenMax.to($(clone).find('.scroller-row')[0], .2, { autoAlpha: 0 });

      var from = calculatePosition(fromHero);
      var to = calculatePosition(toHero);

      TweenLite.set([fromHero, toHero], { visibility: "hidden" });
      TweenLite.set(clone, { position: "absolute", margin: 0 });

      body.appendChild(clone);

      var style = {
        x: to.left - from.left,
        y: to.top - from.top,
        width: to.width,
        height: to.height,
        autoRound: false,
        ease: Power3.easeInOut,
        onComplete: onComplete 
      };


      TweenLite.set(clone, from);
      TweenLite.to(clone, 0.45, style);

      function onComplete() {
        TweenLite.set(toHero, { visibility: "visible" });
        body.removeChild(clone);
      }

    }

    function calculatePosition(element) {

      var rect = element.getBoundingClientRect();

      var scrollTop = window.pageYOffset || root.scrollTop || body.scrollTop || 0;
      var scrollLeft = window.pageXOffset || root.scrollLeft || body.scrollLeft || 0;

      var clientTop = root.clientTop || body.clientTop || 0;
      var clientLeft = root.clientLeft || body.clientLeft || 0;

      return {
        top: Math.round(rect.top + scrollTop - clientTop),
        left: Math.round(rect.left + scrollLeft - clientLeft),
        height: rect.height,
        width: rect.width };

    }

      


    //hover code
    $(document).ready(function(){

      // $('.hover').bind({
      //   mouseenter: function(e) {
          
      //     $(e.target).prev().css('opacity', '.75');
      //     $(e.target).prev().prev().css('opacity', '.5');
      //     $(e.target).prev().prev().css('transform', 'scale(.8)');

      //   },
      //   mouseleave: function(e) {
        
      //     $(e.target).prev().css('opacity', '0');
      //     $(e.target).prev().prev().css('opacity', '1');
      //     $(e.target).prev().prev().css('transform', 'scale(1)');
        
      //   }
      // });



    });

  }
  
};



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >


  /* Page content */
  .content {
    padding: 16px;
  }

  /* The sticky class is added to the header with JS when it reaches its scroll position */
  .sticky {
    position: fixed;
    top: 0;
    width: 100%
  }

  /* Add some top padding to the page content to prevent sudden quick movement (as the header gets a new position at the top of the page (position:fixed and top:0) */
  .sticky + .content {
    padding-top: 102px;
  }

  .hover{

    cursor: pointer;

  }

  .case-img{

    //border-bottom: solid 4px #ffc400;
    cursor: pointer;
    transition: all 0.5s ease;

  }
  
  .title-disc{

    text-decoration: none;
    border-bottom: 3px solid #ffaf1e;
    padding-bottom: 0px;

  }

  .scroller-row{

    position: absolute;
    bottom: 28%;
    opacity: 0;
    transition: all 0.5s ease;

  }


  .scroller {
        overflow: hidden;
        width: 100%;
        //opacity: 0;
        transition: all 0.5s ease;
    }

    .lines {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;  
        font-size: 7em;
        font-weight: 800;
        color: white;
        transition: all 0.5s ease;
    }

    .line {
        animation: scrollerAnime 30s linear infinite;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-content: flex-start;
        align-items: flex-start;
        white-space: nowrap;
        // transition: all 0.5s ease;
    }

    .line span {
        padding-right: 0.5em;
    }
    
    .line span:after {
        content: ' ';
        margin-left: 0.5em;
    }

    @keyframes scrollerAnime {
        0% {
            transform: translate3d(0, 0, 0);
        }
        100% {
            transform: translate3d(-100%, 0, 0);
        }
    }



  h2{

    font-size: 3em;

  }

  .header{

    font-size: 1em;

  }

  p{

    font-family: sailec-thin;
    font-size: .9em;
    color: #a9a9a9;

  }

  .wash{

    // background-color: red;
    z-index: 2;

  }

  img{

    // opacity: .6;
    //transition: all 0.5s ease;
    transform: scaleX(1.01);

  }

  .disc{

    font-size: 8em;
    font-weight: 800;
    color: white;
    position: absolute;
    top: 30%;
    background-color: red;


  }

  .disc2{

    position: absolute;
    top: 50%;

  }


.marquee {
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
}

.marquee span {
  display: inline-block;
  padding-left: 80%;
  animation: marquee 6s linear infinite;
}

.marquee2 span {
  animation-delay: 3s;
}

#mar1{

    color: white;
    font-size: 5em;
    font-weight: 800;

}

#mar2{

    color: white;
    font-size: 5em;
    font-weight: 800;

}

@keyframes marquee {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}

  



</style>
