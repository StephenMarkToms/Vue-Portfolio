<template>

    
      <div>

          <div class="wash">
          <!-- <div class="wash" v-bind:style="{ backgroundColor: color}"> -->
            <img class="img-fluid" v-bind:src="require('../assets/' + thumbnail + '.jpg')" />
          </div>

          <h4 class="header text-white mt-3">{{ title }}</h4>
          <p class="header mt-1 pr-4">{{ disc }}</p>

          <div class="row mt-5 scroller-row d-none">
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
      


</template>

<script>
export default {
  props: {
    name: String,
    thumbnail: String,
    title: String,
    disc: String,
    color: String
  }
  
};




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  .scroller-row{

    position: absolute;
    bottom: 28%;

  }


  .scroller {
        overflow: hidden;
        width: 100%;
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

    //opacity: .5;

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
