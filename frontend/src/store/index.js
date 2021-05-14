import Vue from 'vue';
import Vuex from 'vuex';

import { auth } from './auth.module';
//import profile from '../components/Profile'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
  },
  state: {
    user: {lastname: "htell"},
  }


});