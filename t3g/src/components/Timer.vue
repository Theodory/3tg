<template>
	<h1>{{ currentTime }}</h1>
</template>

<script>
	import {mapGetters} from 'vuex';

	export default  {
		computed: {
			...mapGetters([
				'getCurrentTime'
			]),
			currentTime() {
				return this.getCurrentTime;
			}
		},
		methods: {
			tick() {
				console.log('Tick...');
				this.$store.dispatch('countDown');
			}
		},
		mounted: function() {
			console.log('Timer mounted!');

			setInterval(() => {
				this.tick();
			}, 1000);
		}
	};
</script>
