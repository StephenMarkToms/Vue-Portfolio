<template>

    
      <div>

          <div class="wash" v-bind:style="{ backgroundColor: color}">
            <img class="img-fluid" v-bind:src="require('../assets/' + thumbnail + '.jpg')" />
          </div>

          <h4 class="header text-white mt-3">{{ title }}</h4>
          <p class="header mt-1 pr-4">{{ disc }}</p>

          <h1 id="disc-1" class="disc">{{ name }}</h1>
          <h1 id="disc-2" class="disc">{{ name }}</h1>

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

    opacity: .5;

  }

  .disc{

    font-size: 8em;
    font-weight: 800;
    color: white;
    position: absolute;
    top: 30%;
    width: 200vw;
    white-space: nowrap;

    &:hover{

      animation-name: discAnime;
      transition-timing-function: linear !important;
      animation-iteration-count: 2;
      animation-duration: 10s;

    }

  }

  #disc-1{

     &:hover{

      animation-name: discAnime;
      transition-timing-function: linear !important;
      animation-iteration-count: 2;
      animation-duration: 10s;

    }

  }

  #disc-2{

     &:hover{

      animation-name: discAnime2;
      transition-timing-function: linear !important;
      animation-iteration-count: 2;
      animation-duration: 10s;

    }

  }

  


  $duration: 30s;

  @-webkit-keyframes discAnime{
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }

    100% {
      -webkit-transform: translate3d(-120%, 0, 0);
      transform: translate3d(-120%, 0, 0);
    }
  }

  @keyframes discAnime{
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }

    100% {
      -webkit-transform: translate3d(-120%, 0, 0);
      transform: translate3d(-120%, 0, 0);
    }
  }

  @-webkit-keyframes discAnime2{
    0% {
      -webkit-transform: translate3d(120, 0, 0);
      transform: translate3d(120, 0, 0);
      visibility: visible;
    }

    100% {
      -webkit-transform: translate3d(0%, 0, 0);
      transform: translate3d(0%, 0, 0);
    }
  }

  @keyframes discAnime2{
    0% {
      -webkit-transform: translate3d(120, 0, 0);
      transform: translate3d(120, 0, 0);
      visibility: visible;
    }

    100% {
      -webkit-transform: translate3d(0%, 0, 0);
      transform: translate3d(120%, 0, 0);
    }
  }
  



</style>
