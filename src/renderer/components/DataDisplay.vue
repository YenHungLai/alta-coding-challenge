<template>
	<div class="display-container" v-if="showData">
		<md-list md-expand-single="true">
			<md-list-item md-expand>
				<md-icon>card_membership</md-icon>
				<span class="md-list-item-text">member data</span>
				<md-list slot="md-expand">
					<md-list-item class="md-inset" v-for="key in Object.keys(memberData)" :key="key">
						<strong>{{key}}:&nbsp;</strong>
						{{memberData[key]}}
					</md-list-item>
				</md-list>
			</md-list-item>

			<md-list-item md-expand>
				<md-icon>attach_money</md-icon>
				<span class="md-list-item-text">puchase</span>
				<md-list slot="md-expand">
					<md-list-item class="md-inset" v-for="key in Object.keys(purchaseData)" :key="key">
						<strong>{{key}}:&nbsp;</strong>
						{{purchaseData[key]}}
					</md-list-item>
				</md-list>
			</md-list-item>

			<md-list-item md-expand>
				<md-icon>phone</md-icon>
				<span class="md-list-item-text">contact us</span>
				<md-list slot="md-expand">
					<md-list-item class="md-inset" v-for="key in Object.keys(contactData)" :key="key">
						<strong>{{key}}:&nbsp;</strong>
						{{contactData[key]}}
					</md-list-item>
				</md-list>
			</md-list-item>

			<md-list-item md-expand>
				<md-icon>feedback</md-icon>
				<span class="md-list-item-text">feedback</span>
				<md-list slot="md-expand">
					<md-list-item class="md-inset" v-for="key in Object.keys(feedbackData)" :key="key">
						<strong>{{key}}:&nbsp;</strong>
						{{feedbackData[key]}}
					</md-list-item>
				</md-list>
			</md-list-item>
		</md-list>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
	name: "DataDisplay",
	data() {
		return {};
	},
	computed: {
		...mapGetters(["memberData"]),
		...mapGetters(["contactData"]),
		...mapGetters(["purchaseData"]),
		...mapGetters(["feedbackData"]),
		...mapGetters(["showData"])
	}
};
</script>

<style scoped>
.display-container {
	position: absolute;
	left: 10px;
	bottom: 90px;
	width: 400px;
	animation: fadeIn 0.5s linear;
	z-index: 1000;
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

@media screen and (max-width: 500px) {
	.display-container {
		display: none;
	}
}
</style>
