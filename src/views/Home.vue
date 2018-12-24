<template>
  <div id="home">
    <HeaderComponent></HeaderComponent>
    <div class="computed-height home-content">
      <NavbarComponent></NavbarComponent>
      <div class="container-fluid">
        
      </div>
    </div>
   
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderComponent from '@/components/header/HeaderComponent.vue'
import NavbarComponent from '@/components/navbar/NavbarComponent.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
    HeaderComponent,
    NavbarComponent
  }
}
</script>
<style lang="scss" scoped>
  #home{
    height: 100%;
  }
  .computed-height{
    height: calc(100% - 60px);
  }
  .home-content{
    display: flex;
  }
  .container-fluid{
    flex: 1;
  }
</style>

