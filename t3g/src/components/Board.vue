<template>
	<div>
		<div class="board-row" v-for="(row, indexY) in board">

			<board-cell
				v-for="(cell, indexX) in row"
				:value="cell"
				:key="cell"
				:position="{x: indexX, y: indexY}" />
		</div>
	</div>
</template>

<script>
	import Cell from './Cell.vue';
	import {mapGetters} from 'vuex';

	export default {
		components: {
			boardCell: Cell,
		},
		computed: {
			...mapGetters([
				'getBoard'
			]),
			board() {
				console.log('board', this.getBoard);
				return this.getBoard;
			}
		},
	};
</script>

<style>
	.board-row:after {
		clear: both;
		content: "";
		display: table;
	}
</style>
