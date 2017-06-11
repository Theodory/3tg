<template>

	<div id="app">

		<status-bar />

		<game-board />

	</div>

</template>

<script>
import Board from './components/Board.vue';
import Status from './components/Status.vue';

export default {
	name: 'App',

	components: {
		gameBoard: Board,
		statusBar: Status,
	},
};
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
