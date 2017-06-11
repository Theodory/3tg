<template>
	<button
		class="board-cell"
		@click="handleClick">
			{{ value }}
	</button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	props: {
		pos: Object,
		value: null,
	},

	computed: {
		...mapGetters({
			cells: 'getCells',
			currentPlayer: 'getCurrentPlayer',
		}),
	},

	methods: {
		...mapActions([ 'switchPlayer', 'setCells', ]),

		handleClick() {
			const cells = this.cells.slice();
			console.log(this.currentPlayer);

			cells[this.pos.x][this.pos.y] = this.currentPlayer;
			this.setCells(cells);
		},
	},
};
</script>

<style>
.board-cell {
	background: #fff;
	border: 1px solid #999;
	font-weight: bold;
	text-align: center !important;
	padding: 16px;
	margin: -1px;
	line-height: 13px;
	width: 19.999%;
	height: 19.999%;
}

.board-cell:focus {
	outline: none;
}

board-cell.active {
	color: #333;
}
</style>
