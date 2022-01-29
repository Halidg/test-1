<template>
  <div class="container">
   <div class="header"> 

    <div class="header__block">
     <h1 class="header__h1">Витрина</h1>  
     <h1 class="header__h1 grey">Семинары и Курсы</h1>
    </div>

     <p class="header__p">Мое обучение</p>
    </div>
     <button class="filter"><p class="filter__P"> Фильтры <span class="blue">3</span> </p></button>


  <div class="content"> 
   <div class="content__block">  
    <h1 class="content__h1">{{AUTHOR.topic}}</h1>  
     <h2 class="content__h2">{{AUTHOR.name}}</h2>
     <p class="content__p">{{AUTHOR.description}}</p>
    </div> 
      <img class="avatar" :src="AUTHOR.avatar"  alt="">  
  </div>

   <div class="phone__block"><p class="phone__block__p">{{AUTHOR.description}}</p></div>   
      

    <div class="grid">
     <div class="card" v-for="card in ORANGE_CARDS" :key="card.id">
      <h1 class="card__h1">{{card.title}}</h1>

       <div class="wrapper">   
        <div class="card__block">
         <img class="img" :src="require('../assets/img/Vector-orange.png')" alt="">  
           <p class="card__p">{{card.type}}</p>
        </div>

        <div class="card__block">
          <img class="img" :src="require('../assets/img/clock.png')" alt="">
          <p class="card__p">{{card.duration}}</p>
        </div>

        <div class="card__block">
          <img class="img" :src="require('../assets/img/calendar.png')" alt="">
          <p class="card__p">{{card.dateStart}}</p>
        </div>
          
        <p class="card__description">{{card.description}}</p> 
        <p v-for="(curators,index) in card.curators" :key="index" class="card__p">Куратор: {{curators}}  </p> 
        <p v-for="(methodist,index) in card.methodists"  :key="index"  class="card__p">Методисты: {{methodist}}</p>
       </div>
        <button class="card__button__seminar"><p class="card__button__seminar__p">{{card.price}} &#8381;</p></button>
      </div>

      <div class="card" v-for="card in BLUE_CARDS " :key="card.id">
       <div class="wrapper">
        <h1 class="card__h1">{{card.title}}</h1>
          
         <div class="card__block">
          <img class="img" :src="require('../assets/img/Vector-blue.png')" alt="">
           <p class="card__p">{{card.type}}</p>
         </div>
           
         <div class="card__block">
          <img class="img" :src="require('../assets/img/clock.png')" alt="">
           <p class="card__p">{{card.duration}}</p>
         </div>

         <div class="card__block">
          <img class="img" :src="require('../assets/img/calendar.png')" alt="">
           <p class="card__p">{{card.dateStart}}</p>
         </div>
         
         <p class="card__description">{{card.description}}</p> 
         <p v-for="(curators,index) in card.curators" :key="index" class="card__p">Куратор: {{curators}}  </p> 
         <p v-for="(methodist,index) in card.methodists"  :key="index"  class="card__p">Методисты: {{methodist}}</p>

        </div>

       <button class="card__button__training"><p class="card__button__training__p">Выбрать тариф</p></button>
      </div>

    </div>

  </div>
</template>

<script>
export default {
mounted(){
 this.$store.dispatch('GET_CARDS_FROM_API')   
},
computed:{
    ORANGE_CARDS(){
        return this.$store.getters.ORANGE_CARDS
    },
    BLUE_CARDS(){
        return this.$store.getters.BLUE_CARDS
    },
    AUTHOR(){
        return this.$store.getters.AUTHOR
    }
}
}
</script>

<style lang="scss" scoped>




.container{
   max-width: 1040px;
   width: 100%;
   margin: 0 auto;  
   padding: 15px;
 
  @media (max-width: 640px){   
   width: 100%;
  }
 

 }

.header{
   display: flex;
   justify-content: space-between;
   width: 100%;
   margin-top: 30px;
   &__block{
      display: flex; 
   }
   &__h1{
   font-family: Inter;
   font-style: normal;
   font-weight: bold;
   font-size: 36px;
   line-height: 48px;  
  @media (max-width: 1024px){   
    font-size: 16px;
  }   
   }
   &__p{
   font-family: Inter;
   font-style: normal;
   font-weight: bold;
   font-size: 16px;
   line-height: 24px;
   color:#007FF4;  
   text-align: right; 
   
   padding-top: 10px;
  @media (max-width: 1024px){   
    font-size: 13px;
  }   
   }
  @media (max-width:640px){
   display: flex;
   justify-content: space-between;
   margin-top: 150px; 
   &__block{
   display: flex;
   flex-direction: column;  
   }
   &__h1{
   font-family: Inter;
   font-style: normal;
   font-weight: bold;
   font-size: 24px;
   line-height: 32px;
   }
   &__p{
     padding-top: 0;
   }  
   }
}

.grey{
  color:#C4C4C4; 
  margin-left: 15px;
}

.content{  
  max-width: 618px; 
  width: 100%; 
  display: flex; 
  margin-top: 35px; 
  align-items: start;
  &__block{  
    display: flex;
    flex-direction: column;

  @media (max-width: 640px) { 
    width: 50%;
    } 

    } 
  &__h1{
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 1px;
    }
   &__h2{
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;  
    
   @media (max-width: 640px) {
    margin-bottom: 30px;
    } 

    }
  &__p{
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;  
  @media (max-width: 640px) { 
     display: none;
    }   
    }
    
}

.grid{ 
  display: grid; 
  grid-template-columns: repeat(4, 1fr); 
  grid-column-gap: 25px; 
  grid-row-gap: 25px; 
  margin-top: 25px;
   
 @media (max-width: 1024px){
  grid-template-columns: repeat(2, 1fr);
 }

}
.card{
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
  padding: 16px; 
  position: relative; 
  max-width: 224px;
  width: 100%; 
  min-height: 320px;

  background: #FFFFFF; 
  border: 1px solid #EDEDED;
  box-sizing: border-box; 
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.03);
  border-radius: 8px; 
 &__h1{
   font-family: Inter;
   font-style: normal;
   font-weight: bold;
   font-size: 18px;
   line-height: 24px;  
   } 
 &__block{
    width: 100%;   
    max-width: 170px;   
    display: flex; 
    margin-top: 5px;
    align-items: flex-start;
   }
 &__p{
   font-family: Inter;
   font-style: normal;
   font-weight: 500;
   font-size: 14px;
   line-height: 20px;    
   }
 &__description{
   font-family: Inter;
   font-style: normal;
   font-weight: normal;
   font-size: 12px;
   line-height: 16px;   
   padding-top: 10px; 
   } 
 &__button__seminar{
   max-width: 94px;
   width: 100%;
   min-height: 32px;
   align-self: end;

   cursor: pointer;
 
   bottom: 15px;

   background: #FBAD00;
   border-radius: 8px;
   border: none;
 &__p{ 
   font-family: Inter;
   font-style: normal;
   font-weight: bold;
   font-size: 14px;
   line-height: 16px;

   color: #FFFFFF;
   }

   @media (max-width: 640px){
    max-width: none;
    }

   } 
 &__button__training{
   max-width: 142px;
   width: 100%; 
   min-height: 32px; 
   bottom: 15px;
   align-self: end;

   cursor: pointer;
   background: #007FF4;
   border-radius: 8px; 
   border: none;
 &__p {  
   font-family: Inter;
   font-style: normal;
   font-weight: bold; 
   font-size: 14px;
   line-height: 16px; 
 
   color: #FFFFFF;
   } 
    
 @media (max-width: 640px){
   max-width: none; 
  }
   }

 @media (max-width: 640px){
   max-width: none; 
  }  
}


.phone__block{
  display: none;
  @media (max-width: 640px){
    display: block;
  }
  &__p{
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;    
  }
}


.filter{
  max-width: 288px;
  width: 100%;
  min-height: 48px;

  display: none;

  background: #F5F5F5;
  border-radius: 8px;
  border: none;
  @media (max-width: 640px){
   display: block;
   max-width: none;
 }

  &__p{
   font-family: Inter;
   font-style: normal;
   font-weight: bold;
   font-size: 14px;
   line-height: 16px;
   text-align: center; 
   color: #191919; 
  }
}

.blue{
  color: #007FF4;
}

.img{
   max-width: 13px;
   width: 100%; 
   min-height: 13px;
   margin-right: 5px;
   margin-top: 3px;
  
}

.avatar{
    max-width: 120px;
    min-height: 120px;
    border-radius: 50%;
    margin-left: 10px;
   @media (max-width: 640px) {
    width: 50%;
    margin-bottom: 25px;
    } 
}

  .wrapper{
    flex-grow: 1;
    width: 100%;
  }

@media (max-width: 640px){
 
 .grid{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
}  
 
 .grey{
    margin-left: 0;
    font-size: 16px; 
}

}


</style>