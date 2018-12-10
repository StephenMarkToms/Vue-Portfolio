<template>

    
      <div>

          <!-- <div class="wash"> -->
          <div class="wash" v-bind:style="{ backgroundColor: color}">
            
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
          </div>
          <img class="img-fluid case-img" v-bind:src="require('../assets/' + thumbnail + '.jpg')" />
          <h4 class="header text-white mt-3 "><span class="title-disc">{{ title }}</span></h4>
          <p class="header mt-1 pr-4 ">{{ disc }}</p>

          
          

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
    
    // $( ".case-img" ).hover(

    //     console.log("asdfadf")
    //     //$( '.scoller-row' ).css( "opacity", "1" )
    // );

    $(document).ready(function(){

      $('.case-img').bind({
        mouseenter: function(e) {

          $(e.target).prev().find('.scroller').css('opacity', '.75');
          $(e.target).css('filter', 'grayscale(100%)');


        },
        mouseleave: function(e) {
        
          $(e.target).prev().find('.scroller').css('opacity', '0');
          $(e.target).css('filter', 'none');
        
        }
      });



    });

  }
  
};




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  .case-img{

    //border-bottom: solid 4px #ffc400;
    cursor: pointer;

  }
  
  .title-disc{

    text-decoration: none;
    border-bottom: 3px solid #ffaf1e;
    padding-bottom: 0px;

  }

  .scroller-row{

    position: absolute;
    bottom: 28%;

  }


  .scroller {
        overflow: hidden;
        width: 100%;
        opacity: 0;
    }

    .lines {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;  
        font-size: 7em;
        font-weight: 800;
        color: white;
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

    opacity: .6;

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
