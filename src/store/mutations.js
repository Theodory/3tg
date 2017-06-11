import * as types from './mutation-types';

export default {
	[types.SWITCH_PLAYER](state) {
		state.xIsNext = !state.xIsNext;
	},
};
