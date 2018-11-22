<template>

      

      <div class="case-study" v-bind:style="{ backgroundImage: 'url(' + this.bg + ')' }">

        <h1>{{ name }}</h1>
        <h1>{{ name }}</h1>
        <h1>{{ name }}</h1>
        <h1>{{ name }}</h1>
        <h1>{{ name }}</h1>
        <div class="img-banner" :style="{'background-image': 'url(' + require('../assets/' + icon + '.jpg') + ')'}">

          adsfasdfsad
        
        </div>

      </div>

</template>

<script>
export default {
  name: "CaseStudy",
  bgSrc: "./assets/imgs/case-study-1.jpg",
  props: {
    name: String,
    bg: String,
    icon: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>




</style>
