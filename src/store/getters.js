export default {
	getCells(state) {
		return state.cells;
	},

	getNextPlayer(state) {
		return state.xIsNext === true ? 'X' : '0';
	},
};

