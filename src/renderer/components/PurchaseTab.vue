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
				<md-input
					v-model="inputs[field.name]"
					:required="field.isRequired"
					:type="field.type"
					min="1"
				></md-input>
				<span class="md-error">this field is required</span>
			</md-field>
			<md-field :class="hasError ? 'md-invalid' : null">
				<label for="hear-from">token type</label>
				<md-select v-model="inputs.type" required>
					<md-option value="A">A</md-option>
					<md-option value="B">B</md-option>
				</md-select>
			</md-field>
		</div>
		<div class="total">
			<md-icon>attach_money</md-icon>
			<span class="equal">= <strong v-text="total"></strong></span>
		</div>
		<md-button id="submit" @click="submit" class="md-raised md-accent">check out</md-button>
		<Snackbar @close="closeSnackbar" :showSnackbar="showSnackbar" />
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Snackbar from './Snackbar';

export default {
	name: 'PurchaseTab',
	components: { Snackbar },
	data: () => ({
		fields: [
			{
				label: 'amount',
				name: 'amount',
				isRequired: true,
				type: 'number'
			}
		],
		pricing: {
			A: 100,
			B: 200
		},
		inputs: {
			amount: 1,
			type: 'A'
		},
		hasError: false,
		showSnackbar: false
	}),
	methods: {
		submit() {
			if (Object.values(this.inputs).filter(item => item).length < 2) {
				this.hasError = true;
			} else {
				this.hasError = false;
				this.setPurchaseData(this.inputs);
				this.showSnackbar = true;
			}
		},
		closeSnackbar(payload) {
			this.showSnackbar = payload;
		},
		...mapMutations(['setPurchaseData'])
	},
	computed: {
		total() {
			return '$' + this.inputs.amount * this.pricing[this.inputs.type];
		}
	}
};
</script>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: inherit;
}

.form-container {
	display: flex;
	flex-direction: column;
}

#input-label,
#comments {
	text-transform: capitalize;
}

label[for='hear-from']::first-letter {
	text-transform: capitalize;
}

.total {
	display: flex;
	align-items: center;
	align-self: flex-end;
	margin-bottom: 1em;
}

.equal {
	font-size: 1.5rem;
}
</style>
