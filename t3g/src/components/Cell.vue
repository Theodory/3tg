<template>
	<button
		class="board-cell"
		value="value"
		@click="handleClick">

		{{ value }}

	</button>
</template>

<script>
	export default {
		props: {
			position: Object,
			value: null
		},
		methods: {
			handleClick() {
				console.log('board-cell', this.position.x, this.position.y);
				this.setClassName('active');
			}
		}
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
