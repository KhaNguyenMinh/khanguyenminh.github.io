const capaignTableReducer = (state = [], action) => {
	switch (action.type) {
	case 'GET_CAMPAIGN_DATA_RECEIVED':
		return action.data
	default:
		return state
	}
}

export default capaignTableReducer