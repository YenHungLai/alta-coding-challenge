const state = {
	count: 10
};

const getters = {
	getCount: state => state.count
};

const actions = {};

const mutations = {
	increment: state => state.count++
};

export default {
	state,
	getters,
	actions,
	mutations
};
