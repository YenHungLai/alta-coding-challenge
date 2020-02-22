<template>
	<div id="app">
		<RootContainer>
			<router-view></router-view>
		</RootContainer>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
// Components
import RootContainer from "./components/RootContainer";

export default {
	name: "alta-coding-challenge",
	components: { RootContainer },
	computed: mapGetters(["showSnackbar"]),
	methods: {
		...mapMutations(["increment"])
	}
};
</script>

<style>
* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}

#app {
	background-color: #999;
	height: 100vh;
}
</style>
