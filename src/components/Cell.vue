<template>
	<button
		class="board-cell"
		@click="handleClick">
			{{ value }}
	</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	props: {
		position: { x: '', y: '' },
		value: null,
	},

	methods: {
		...mapActions([ 'switchPlayer', ]),

		handleClick() {
			this.switchPlayer();
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
