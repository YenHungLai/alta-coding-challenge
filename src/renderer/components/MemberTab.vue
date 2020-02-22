<template>
	<div class="container">
		<div class="form-container">
			<div class="md-headline">become a member</div>
			<div class="md-subheading">* indicates required</div>
			<md-field
				:class="hasError && field.isRequired ? 'md-invalid' : null"
				md-clearable
				v-for="field in fields"
				:key="field.name"
			>
				<label v-text="field.label"></label>
				<md-input v-model="inputs[field.name]" :required="field.isRequired" :type="field.type"></md-input>
				<span class="md-error">this field is required</span>
			</md-field>
			<md-button @click="submit" class="md-raised md-accent">subscribe</md-button>
		</div>
		<Snackbar @close="closeSnackbar" :showSnackbar="showSnackbar" />
	</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Snackbar from "./Snackbar";

export default {
	name: "MemberTab",
	components: { Snackbar },
	data: () => ({
		fields: [
			{
				label: "name",
				name: "name",
				isRequired: false,
				type: "text"
			},
			{
				label: "business name",
				name: "businessName",
				isRequired: false,
				type: "text"
			},
			{
				label: "email address",
				name: "emailAddress",
				isRequired: true,
				type: "email"
			},
			{
				label: "phone number",
				name: "phoneNumber",
				isRequired: false,
				type: "tel"
			}
		],
		inputs: {
			name: "",
			businessName: "",
			emailAddress: "",
			phoneNumber: ""
		},
		hasError: false,
		showSnackbar: false
	}),
	methods: {
		submit() {
			if (this.inputs.emailAddress.length === 0) {
				this.hasError = true;
			} else {
				this.hasError = false;
				this.setMemberData(this.inputs);
				this.showSnackbar = true;
			}
		},
		closeSnackbar(payload) {
			this.showSnackbar = payload;
		},
		...mapMutations(["setMemberData"])
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

.md-error::first-letter,
.md-headline::first-letter,
label {
	text-transform: capitalize;
}
</style>