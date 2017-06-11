<template>
	<div>
		<div class="board-row" v-for="(row, indexX) in cells">

			<board-cell
				v-for="(cell, indexY) in row"
				:key="cell"
				:value="cell"
				:pos="{ x: indexX, y: indexY }" />

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
