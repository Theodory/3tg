<template>
	<h4>Player: {{ nextPlayer }}</h4>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'Status',

	computed: {
		...mapGetters({
			nextPlayer: 'getNextPlayer',
		}),
	},
};
</script>
