<template>
	<div class="container">
		<div class="form-container">
			<div class="md-headline">customer feedback</div>
			<div class="row" v-for="question in questions" :key="question.text">
				<p class="question" v-text="question.text"></p>
				<div>
					<md-radio v-model="inputs[question.name]" value="bad" required>bad</md-radio>
					<md-radio v-model="inputs[question.name]" value="average" required>average</md-radio>
					<md-radio v-model="inputs[question.name]" value="good" required>good</md-radio>
				</div>
			</div>
			<div class="row last">
				<p class="question">would you recommend our service to other people</p>
				<div class="radios">
					<md-radio v-model="inputs.wouldRecommend" value="definetly not" required>definetly not</md-radio>
					<md-radio v-model="inputs.wouldRecommend" value="maybe" required>maybe</md-radio>
					<md-radio v-model="inputs.wouldRecommend" value="definetly" required>definetly</md-radio>
				</div>
			</div>
			<md-button @click="submit" class="md-raised md-accent">submit</md-button>
		</div>
		<Snackbar @close="closeSnackbar" :showSnackbar="showSnackbar" />
		<Alert @close="closeAlert" :open="hasError" />
	</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Snackbar from "./Snackbar";
import Alert from "./Alert";

export default {
	name: "FeedbackTab",
	components: { Snackbar, Alert },
	data: () => ({
		questions: [
			{
				text:
					"how would you rate your overall experience with our service?",
				name: "service"
			},
			{
				text: "how would you rate our prices?",
				name: "prices"
			},
			{
				text: "how satisfied are you with customer support?",
				name: "customerSupport"
			}
		],
		inputs: {
			service: "",
			prices: "",
			customerSupport: "",
			wouldRecommend: ""
		},
		hasError: false,
		showSnackbar: false
	}),
	methods: {
		submit() {
			if (Object.values(this.inputs).filter(item => item).length !== 4) {
				this.hasError = true;
			} else {
				this.hasError = false;
				this.setFeedbackData(this.inputs);
				this.showSnackbar = true;
			}
		},
		closeSnackbar(payload) {
			this.showSnackbar = payload;
		},
		closeAlert(payload) {
			this.hasError = payload;
		},
		...mapMutations(["setFeedbackData"])
	}
};
</script>

<style scoped>
.container {
	background-color: inherit;
}

.form-container {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.row {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.question {
	margin-right: 1em;
}

.last {
	align-items: flex-start;
	justify-content: flex-start;
}

.last > .question {
	margin-top: 1em;
}

.radios {
	display: flex;
	flex-direction: column;
	position: relative;
	left: 65px;
}

.md-error::first-letter,
.md-headline::first-letter,
.question::first-letter,
label {
	text-transform: capitalize;
}

@media screen and (max-width: 755px) {
	.row {
		flex-direction: column;
	}

	.last {
		align-items: center;
	}

	.radios {
		left: 0;
	}
}

@media screen and (max-width: 450px) {
	.form-container {
		padding: 0 10px;
	}
}
</style>