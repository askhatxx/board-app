import Vue from 'vue'
import Vuex from 'vuex'
import boards from '@/store/modules/boards'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    boards
  }
})
