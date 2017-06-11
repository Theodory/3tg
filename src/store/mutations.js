import * as types from './mutation-types';

export default {
	[types.SET_CELLS](state, payload) {
		state.cells = payload;
	},

	[types.SWITCH_PLAYER](state) {
		state.xIsNext = !state.xIsNext;
	},
};
