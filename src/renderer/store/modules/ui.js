const state = {
	showData: false
};

const getters = {
	showData: state => state.showData
};

const mutations = {
	setShowData: (state, payload) => (state.showData = payload)
};

export default {
	state,
	getters,
	mutations
};
