<template>
	<div class="container">
		<div class="form-container">
			<md-field
				:class="hasError && field.isRequired ? 'md-invalid' : null"
				:id="field.name"
				md-clearable
				v-for="field in fields"
				:key="field.name"
			>
				<label id="input-label" v-text="field.label"></label>
				<md-input v-model="inputs[field.name]" :required="field.isRequired" :type="field.type"></md-input>
				<span class="md-error">this field is required</span>
			</md-field>
			<md-field>
				<label for="hear-from">how did you hear about us</label>
				<md-select v-model="inputs.hearFrom">
					<md-option value="online">online</md-option>
					<md-option value="friends">friends</md-option>
					<md-option value="magazine">magazine</md-option>
				</md-select>
			</md-field>
			<md-field id="comments">
				<label>comments</label>
				<md-textarea v-model="inputs.comments"></md-textarea>
			</md-field>
		</div>
		<md-button id="submit" @click="submit" class="md-raised md-accent">submit</md-button>
		<Snackbar @close="closeSnackbar" :showSnackbar="showSnackbar" />
	</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Snackbar from "./Snackbar";

export default {
	name: "ContactTab",
	components: { Snackbar },
	data: () => ({
		fields: [
			{
				label: "first name",
				name: "firstName",
				isRequired: true,
				type: "text"
			},
			{
				label: "last name",
				name: "lastName",
				isRequired: true,
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
				isRequired: true,
				type: "tel"
			},
			{
				label: "company name",
				name: "companyName",
				isRequired: true,
				type: "tel"
			}
		],
		inputs: {
			firstName: "",
			lastName: "",
			emailAddress: "",
			phoneNumber: "",
			companyName: "",
			hearFrom: "",
			comments: ""
		},
		hasError: false,
		showSnackbar: false
	}),
	methods: {
		submit() {
			if (Object.values(this.inputs).filter(item => item).length < 4) {
				this.hasError = true;
			} else {
				this.hasError = false;
				this.setContactData(this.inputs);
				this.showSnackbar = true;
			}
		},
		closeSnackbar(payload) {
			this.showSnackbar = payload;
		},
		...mapMutations(["setContactData"])
	}
};
</script>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	background-color: inherit;
}

.form-container {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-column-gap: 15px;
}

label[for="hear-from"]::first-letter,
#input-label,
#comments {
	text-transform: capitalize;
}

#companyName {
	grid-column: 1/3;
}

#comments {
	grid-column: 1/3;
}

#submit {
	width: 30%;
	margin: auto;
}

@media screen and (max-width: 500px) {
	#firstName,
	#lastName,
	#emailAddress,
	#phoneNumber {
		grid-column: 1/3;
	}

	.form-container {
		padding: 0 5px;
	}
}
</style>