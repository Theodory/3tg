<template>
	<div id="app">
		<count-down />
		<game-board />
	</div>
</template>

<script>
import Board from './components/Board.vue';
import Timer from './components/Timer.vue';

export default {
	components: {
		gameBoard: Board,
		countDown: Timer,
	},
	mounted: function() {
		console.log('Mount game');
		this.$store.dispatch('newGame');
	}
}
</script>

<style lang="scss">

html, body {
	height: 100%;
}

html {
	display: table;
	margin: auto;
}

body {
	font-family: monospace;
	display: table-cell;
	text-align: center;
}

#app {
	margin-top: 60px;

	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

h1, h2 {
	font-weight: normal;
}
</style>
