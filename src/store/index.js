import { createStore } from 'vuex'

export default createStore({
    state: {
     cards:[],
     author:{}
    },
    mutations: {
      ADD_TO_CARD(state,response){
        state.cards = response
      },
      ADD_TO_AUTHOR(state,response){
        state.author = response
      },
    },
    actions: {
    async GET_CARDS_FROM_API({commit,dispatch}){
     const response = await fetch('https://eg-cdn.s3.eu-central-1.amazonaws.com/static/fe-test/seminars-test-data.json').then(response => {
            return response.json()
        })
        console.log(response.seminars);
        console.log(response.author);
        commit('ADD_TO_CARD',response.seminars)
        commit('ADD_TO_AUTHOR',response.author)
        
    }
    },
    getters:{
      ORANGE_CARDS(state){
         return state.cards.filter(el => el.type === 'seminar')
      },
      BLUE_CARDS(state){
        return state.cards.filter(el => el.type === 'training')
      },
      AUTHOR(state){
          return state.author
      }
    },
    modules: {
    }
  })