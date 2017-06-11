<template>
	<div>
		<div class="board-row" v-for="(row, indexY) in cells">

			<board-cell
				v-for="(cell, indexX) in row"
				:key="cell"
				:value="cell"
				:position="{ x: indexX, y: indexY }" />

		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

import Cell from './Cell.vue';

export default {
	components: {
		boardCell: Cell,
	},

	computed: {
		...mapGetters({
			cells: 'getCells',
		}),
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
