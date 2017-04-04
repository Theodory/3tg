<template>
	<div id="app">
		<game-board />
	</div>
</template>

<script>
import Board from './components/Board.vue';

export default {
	components: {
		gameBoard: Board,
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
