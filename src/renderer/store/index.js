import Vue from 'vue';
import Vuex from 'vuex';
import formData from './modules/formData';
import ui from './modules/ui';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		formData,
		ui
	}
});
