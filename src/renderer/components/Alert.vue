<template>
	<md-dialog-alert
		:md-active.sync="show"
		md-content="Please answer all questions!"
		md-confirm-text="okay"
	/>
</template>

<script>
export default {
	name: "Alert",
	props: ["open"],
	computed: {
		show: {
			get() {
				return this.open;
			},
			set(val) {
				this.$emit("close", val);
			}
		}
	}
};
</script>

<style>
</style>