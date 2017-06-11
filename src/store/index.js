import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		xIsNext: true,
		cells: Array(5).fill().map(arr => Array(5).fill('#')),
	},

	actions,
	getters,
	mutations,
});

export default store;
