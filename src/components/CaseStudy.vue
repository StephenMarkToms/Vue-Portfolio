<template>

    
      <div>

          <!-- <div class="wash"> -->
          
          <div class="wash" v-bind:style="{ backgroundColor: color}">
            

            <img class="img-fluid case-img" v-bind:src="require('../assets/' + thumbnail + '.jpg')" />

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

          <div class="page-container">
            <div class="page-2 hero-1"></div>
          </div>
          

      </div>
      


</template>

<script>
export default {
  props: {
    name: String,
    thumbnail: String,
    title: String,
    disc: String,
    color: String
  },
  mounted: function () {
    
    console.clear();

    var root = document.documentElement;
    var body = document.body;
    var pages = document.querySelectorAll(".page-2");
    var tiles = document.querySelectorAll(".wash");

    for (var i = 0; i < tiles.length; i++) {
      addListeners(tiles[i], pages[i]);
    }

    function addListeners(tile, page) {

      tile.addEventListener("click", function () {
        animateHero(tile, page);
      });

      page.addEventListener("click", function () {
        animateHero(page, tile);
      });
    }

    function animateHero(fromHero, toHero) {

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
        ease: Power1.easeOut,
        onComplete: onComplete };


      TweenLite.set(clone, from);
      TweenLite.to(clone, 0.3, style);

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

      $('.hover').bind({
        mouseenter: function(e) {

          $(e.target).prev().css('opacity', '.75');
          $(e.target).prev().prev().css('opacity', '.5');
          $(e.target).prev().prev().css('transform', 'rotate(5deg) scale(.8)');

        },
        mouseleave: function(e) {
        
          $(e.target).prev().css('opacity', '0');
          $(e.target).prev().prev().css('opacity', '1');
          $(e.target).prev().prev().css('transform', 'rotate(0deg) scale(1)');
        
        }
      });



    });

  }
  
};




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  .hero-1 {
    background: #F4DB33;
  }

  .page-container {
    visibility: hidden;
  }

  .page-2 {
    cursor: pointer;
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    position: fixed;
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
    transition: all 0.5s ease;
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
