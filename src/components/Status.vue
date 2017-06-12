<template>
	<h4>Player: {{ currentPlayer }}</h4>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'Status',

	computed: {
		...mapGetters({
			currentPlayer: 'getCurrentPlayer',
		}),
	},
};
</script>
