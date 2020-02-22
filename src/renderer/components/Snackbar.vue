<template>
	<md-snackbar md-position="center" md-duration.number="3000" :md-active.sync="open">
		<span>your data was submitted!</span>
	</md-snackbar>
</template>

<script>
import { mapGetters, mapMutations, map } from "vuex";

export default {
	name: "Snackbar",
	props: ["showSnackbar"],
	computed: {
		open: {
			get() {
				return this.showSnackbar;
			},
			set(val) {
				this.$emit("close", val);
			}
		}
	}
};
</script>

<style scoped>
span {
	margin: auto;
}

span::first-letter {
	text-transform: capitalize;
}
</style>