/**
 * TODO:
 * - How to use v:model in fields?
 */
<template>
	<div class="container">
		<div class="md-headline">become a member</div>
		<div class="md-subheading">* indicates required</div>
		<md-field md-clearable v-for="field in fields" :key="field.name">
			<label v-text="field.name"></label>
			<md-input
				:name="field.name"
				@change="handleChange"
				:required="field.isRequired"
				:type="field.type"
			></md-input>
		</md-field>
		<md-button @click="submit" class="md-raised md-accent">subscribe</md-button>
	</div>
</template>

<script>
export default {
	name: "MemberTab",
	data() {
		return {
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
			}
		};
	},
	methods: {
		submit() {
			console.log(this.inputs);
		},
		clear(e) {
			console.log(e.target);
		},
		handleChange(e) {
			const { name, value } = e.target;
			this.inputs[name] = value;
		}
	}
};
</script>

<style scoped>
.container {
	background-color: inherit;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.md-headline::first-letter {
	text-transform: capitalize;
}

label {
	text-transform: capitalize;
}
</style>