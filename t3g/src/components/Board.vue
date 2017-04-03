<template>
	<div>
		<div class="board-row">
			<board-cell />
			<board-cell />
			<board-cell />
		</div>
		<div class="board-row">
			<board-cell />
			<board-cell />
			<board-cell />
		</div>
		<div class="board-row">
			<board-cell />
			<board-cell />
			<board-cell />
		</div>
	</div>
</template>

<script>
	import Cell from './Cell.vue';

	export default {
		components: {
			boardCell: Cell,
		},
	}
</script>

<style>
	.board-row:after {
		clear: both;
		content: "";
		display: table;
	}
</style>
