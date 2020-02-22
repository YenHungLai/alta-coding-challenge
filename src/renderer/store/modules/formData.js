const state = {
	memberData: {},
	contactData: {},
	purchaseData: {},
	feedbackData: {}
};

const getters = {
	memberData: ({ memberData }) =>
		Object.keys(memberData).map(key => ({ [key]: memberData[key] })),
	contactData: ({ contactData }) =>
		Object.keys(contactData).map(key => ({ [key]: contactData[key] })),
	purchaseData: ({ purchaseData }) =>
		Object.keys(purchaseData).map(key => ({ [key]: purchaseData[key] })),
	feedbackData: ({ feedbackData }) =>
		Object.keys(feedbackData).map(key => ({ [key]: feedbackData[key] }))
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
