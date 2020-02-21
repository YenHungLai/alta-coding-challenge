import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import store from './store';
import App from './App';
import {
	MdButton,
	MdContent,
	MdTabs,
	MdIcon,
	MdField
} from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
// Components
import MemberTab from './components/MemberTab';
import FeedbackTab from './components/FeedbackTab';
import PurchaseTab from './components/PurchaseTab';
import ContactTab from './components/ContactTab';

Vue.use(VueRouter);
Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdIcon);
Vue.use(MdField);

const router = new VueRouter({
	routes: [
		{
			path: '/',
			component: MemberTab
		},
		{
			path: '/purchase',
			component: PurchaseTab
		},
		{
			path: '/contact',
			component: ContactTab
		},
		{
			path: '/feedback',
			component: FeedbackTab
		}
	]
});

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	components: { App },
	template: '<App/>',
	store,
	router
}).$mount('#app');
