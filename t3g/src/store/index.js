import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		board: [],
		size: 5
	},
	actions: {
		newGame({commit}) {
			console.log('action: new game');
			commit('NEW_GAME');
		},
	},
	mutations: {
		NEW_GAME(state) {
			let cells = [];
			const length = 25;

			let start = Math.floor((Math.random() * 10) * (Math.pow(10, 1)));
			console.log('start', start);

			cells = _.chunk(_.shuffle(_.times(length, (index) => cells.push(start++))), 5);

			_.forEach(cells,(item) => state.board.push(item));
		}
	},
	getters: {
		getBoard(state) {
			return state.board;
		},
	}
});

export default store;
