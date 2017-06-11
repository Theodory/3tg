import * as types from './mutation-types';

export default {
	setCells({ commit, dispatch }, payload) {
		commit(types.SET_CELLS, payload);
		dispatch('switchPlayer');
	},

	switchPlayer({ commit }) {
		commit(types.SWITCH_PLAYER);
	},
};
