import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

// ストアを作成
const store = new Vuex.Store({
  state: {
    name: "kohei",
  },
  getters:{
    getName(state){
      return state.name
    }
  },
  mutations:{
    setName(state,payload){
      state.name = payload.name
    },
  },
  actions:{
    updateName(state,payload){
      setTimeout(()=>{
        state.commit("setName",payload)
      },1000)
    }
  }
})

export default store
