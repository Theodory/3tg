export default {
	getCells(state) {
		return state.cells;
	},

	getCurrentPlayer(state) {
		return state.xIsNext === true ? '0' : 'X';
	},

	getNextPlayer(state) {
		return state.xIsNext === true ? 'X' : '0';
	},
};

