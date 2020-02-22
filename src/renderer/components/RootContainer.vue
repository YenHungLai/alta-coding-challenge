<template>
	<md-content class="container md-elevation-5">
		<md-button @click="setShowData(!showData)" class="md-fab md-fab-bottom-left">
			<md-icon v-if="!showData">list</md-icon>
			<md-icon v-if="showData">close</md-icon>
		</md-button>
		<md-tabs class="md-primary" md-alignment="centered" md-elevation="3">
			<md-tab id="tab-member" md-label="member" to="/" exact md-icon="card_membership"></md-tab>
			<md-tab id="tab-pages" md-label="purchase" to="/purchase" md-icon="attach_money"></md-tab>
			<md-tab id="tab-posts" md-label="contact us" to="/contact" md-icon="phone"></md-tab>
			<md-tab id="tab-favorites" md-label="feedback" to="/feedback" md-icon="feedback"></md-tab>
		</md-tabs>
		<div class="content-container">
			<slot></slot>
		</div>
		<DataDisplay />
	</md-content>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import DataDisplay from "./DataDisplay";

export default {
	name: "RootContainer",
	components: { DataDisplay },
	computed: mapGetters(["showData"]),
	methods: mapMutations(["setShowData"])
};
</script>

<style scoped>
.container {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	height: 96vh;
	width: 90vw;
	overflow: auto;
	padding-bottom: 1em;
}

.content-container {
	display: flex;
	justify-content: center;
	margin-top: 2em;
}

.md-fab {
	background-color: #448aff !important;
}

@media screen and (max-width: 500px) {
	.md-fab {
		display: none;
	}
}
</style>
