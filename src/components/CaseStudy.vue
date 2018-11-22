<template>

      

      <div class="case-study" :style="{'background-image': 'url(' + require('../assets/' + thumbnail + '.jpg') + ')'}">

     
                
                  <h2 class="my-auto mx-auto">{{ name }}</h2>
                
             
            
        
      </div>

</template>

<script>
export default {
  name: "CaseStudy",
  bgSrc: "./assets/imgs/case-study-1.jpg",
  props: {
    name: String,
    thumbnail: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  .case-study{

    min-height: 300px;
    display: flex;
    background-size: 105%;
    background-position: center;

  }

  h2{

    font-size: 3em;

  }


</style>
