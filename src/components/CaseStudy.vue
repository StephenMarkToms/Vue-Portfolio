<template>

    


        <div class="col-md-5 col-12 mx-0 mt-2 text-left">

          <div class="wash" v-bind:style="{ backgroundColor: color}">
            <img class="img-fluid" v-bind:src="require('../assets/' + thumbnail + '.jpg')" />
          </div>

          <h4 class="header text-white mt-3">{{ title }}</h4>
          <p class="header mt-1 pr-4">{{ disc }}</p>

          

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


</style>
