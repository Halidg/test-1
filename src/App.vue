<template>
 <div class="page">
   <header class="header">
    <img class="logo" :src="require('./assets/img/logo.png')" alt="">
     <div class="burger" @click="menuShow = !menuShow">
      <img class="burger__img" :src="require('./assets/img/burger.png')" alt="">
     </div>
   </header>

   <Aside
   :menuShow='menuShow'
   />
   
   <main-page></main-page>
 </div>
</template>

<script>
import Aside from './components/Aside.vue'
import MainPage from './components/MainPage.vue'


export default {
  data(){ 
    return{
      menuShow:false
    }
  },
  
  components:{Aside,MainPage}
}
</script>

<style lang="scss" scoped>
 

 .page{
   display: flex;
   width: 100%;
   max-width: 1360px;
   min-height: 1024px;
 }


.header{
  display: none;
  width: 100%;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 100;
  transform: translate(-50%);
  @media (max-width: 640px){
   display: flex;
   
 }
}

 .logo{ 
  flex: 1 1 auto;

  max-width: 115px;

}

.h1{
  font-family: Gamja Flower;   
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.04em;

  left: 10px;
  top: 12px;

  position: absolute;
  z-index: 4;
 }

.img1{
  position: absolute;
  z-index: 3;

  width: 60.92px;
  height: 52.62px;
  left: 0px;
  top: 6.54px;
}

.img2{
 position: absolute;
 z-index: 2;

 width: 51px;
 height: 56.89px;
 left: 17px;
 top: 0px;
}

.img3{
 position: absolute;
 z-index: 1;

 
 width: 46.75px;
 height: 51.2px;
 left: 9.63px;
 top: 12.8px;
}

 .burger{
   z-index: 100;
   flex: 0 0 auto;
 }
 
</style>
