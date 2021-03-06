const state = {
	memberData: {},
	contactData: {},
	purchaseData: {},
	feedbackData: {}
};

const getters = {
	memberData: ({ memberData }) => memberData,
	contactData: ({ contactData }) => contactData,
	purchaseData: ({ purchaseData }) => purchaseData,
	feedbackData: ({ feedbackData }) => feedbackData
};

const actions = {};

const mutations = {
	setMemberData: (state, payload) => (state.memberData = payload),
	setContactData: (state, payload) => (state.contactData = payload),
	setPurchaseData: (state, payload) => (state.purchaseData = payload),
	setFeedbackData: (state, payload) => (state.feedbackData = payload)
};

export default {
	state,
	getters,
	actions,
	mutations
};
