import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		board: [],
		size: 5,
		startTime: null,
		currentTime: null,
		endTime: null
	},
	actions: {
		newGame({commit}) {
			commit('NEW_GAME');
		},
		countDown({commit}) {
			commit('COUNT_DOWN');
		}
	},
	mutations: {
		NEW_GAME(state) {
			let cells = [];
			const length = 25;

			state.startTime = (new Date()).getTime();
			state.currentTime = state.startTime;

			let start = Math.floor((Math.random() * 10) * (Math.pow(10, 1)));

			cells = _.chunk(_.shuffle(_.times(length, (index) => cells.push(start++))), 5);

			_.forEach(cells,(item) => state.board.push(item));
		},
		COUNT_DOWN(state) {
			state.currentTime = (new Date()).getTime();
		}
	},
	getters: {
		getBoard(state) {
			return state.board;
		},
		getStartTime(state) {
			return state.startTime;
		},
		getCurrentTime(state) {
			return state.currentTime;
		},
		getEndTime(state) {
			return state.endTime;
		}
	}
});

export default store;
