import Vue from 'vue';
import Vuex from 'vuex';
import formData from './modules/formData';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		formData
	}
});
