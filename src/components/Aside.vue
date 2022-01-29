<template>
  <aside class="aside" :class="{'aside__phone' : menuShow}">
   <div class="logo-werapper">
    <img class="logo" :src="require('../assets/img/logo.png')" alt="">
   </div>


   <div class="menu">
    <div class="menu__item">
     <p class="menu__item__text">Мой кабинет</p>
      <img  :src="require('../assets/img/Vector4.png')" alt="">
    </div>

    <div class="menu__item">
     <p class="menu__item__text">Обучение</p>
      <img class="menu__item__arrow"  :class="show==true ? 'active' : ''" :src="require('../assets/img/Vector4.png')" alt="" @click="showArrow">
    </div>

    <div v-show="show" class="menu__item__block">
     <p class="menu__item__block__text">Семинары и курсы</p>
     <p class="menu__item__block__text">Вебинары</p>
     <p class="menu__item__block__text">Самообучение</p>
     <p class="menu__item__block__text">Тьютор</p>
    </div>

     <p class="menu__item__text">Чат</p>
     <p class="menu__item__text">Конкуры</p>
     <p class="menu__item__text">Онлайн преподавание</p>  
     <p class="menu__item__text">Маркет</p>   
     <p class="menu__item__text">Правила</p>
     <p class="menu__item__text">Представители</p>

    <div class="user-block">
     <img  :src="require('../assets/img/Rectangle 7.png')" alt="">  
      <div class="user-block__content">
       <p class="user-block__content__text">Екатерина Иванова</p>
        <div class="user-block__content__frame">
          <p class="user-block__content__frame__text"> 2 458 ⌘</p>
        </div>
      </div>
    </div>
   </div>

  </aside>
</template>

<script>
export default {
props:{
  menuShow:Boolean
},
data(){
 return{
   show:false
 }
},

methods:{
  showArrow(){
    this.show = !this.show
  }
}

}
</script>

<style lang='scss' scoped>

.aside{
  max-width: 320px;
  width: 100%;
  min-height: 1024px;
  background:#F5F5F5;
  padding: 25px 30px;

  position: relative;

 &__h1{
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
}


.logo{ 
  max-width:150px;
  width: 100%;
}

.menu{
  max-width: 256px;
  width: 100%;
  display: flex;
  flex-direction: column;
 
  margin-top: 50px;
 
 

 &__item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

 &__text{
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;   
 } 

 &__arrow{
   cursor: pointer;
   
 }
 
 .active{
    transform: rotate(90deg);
 }

 &__block{
   width: 100%;
   display: flex;
   flex-direction: column;
   margin-left: 15px;
  
 &__text{
   font-family: Inter;
   font-style: normal;
   font-weight: normal;
   font-size: 16px;
   line-height: 24px;
   cursor: pointer;
   }
 }
 }
}

.menu__item__block__text:hover{
  background-color: #FACB64;
  transition: 0.2s;
}

.user-block{
  max-width: 320px;
  width: 100%;
  display: flex;
  
  padding: 16px 64px 16px 32px;

  border-top: 1px solid grey;
  box-shadow: 0px -1px 0px rgba(0, 0, 0, 0.25);

  position: absolute;
  left: 0px;
  bottom: 0px;
  &__content{
   display: flex; 
   flex-direction: column;

   margin-left: 10px;
  &__text{
   font-family: Inter;
   font-style: normal;
   font-weight: bold;
   font-size: 14px;
   line-height: 16px  
  }  
  &__frame{
   max-width: 71px;
   width: 100%;
   min-height: 24px; 
   background: #FACB64;
   border-radius: 8px;

   margin-top: 5px;
  &__text{
   font-family: Inter;
   font-style: normal;
   font-weight: bold;
   font-size: 12px;
   line-height: 16px;
   letter-spacing: 1px;
   text-transform: uppercase;
   text-align: center;

   padding-top: 2px;
   
  }
  }
  }
}

.burger{
  display: none;
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

@media (max-width:640px){
  .aside{
    display: none;
    &__phone{
      display: flex;
      width: 100%;
      min-height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;
    }
  }
 
  .logo{
    display: none;
  }
  
}




</style>