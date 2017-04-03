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
			},
		},
	};
</script>

<style>
	.board-cell {
		background: #fff;
		border: 1px solid #999;
		float: left;
		font-size: 24px;
		font-weight: bold;
		padding: 13px;
		text-align: center;
	}

	.board-cell:focus {
		outline: none;
	}
</style>
