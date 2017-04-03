const capaignTableReducer = (state = [], action) => {
	switch (action.type) {
	case 'GET_CAMPAIGN_DATA_RECEIVED':
		return action.data
	case 'GET_CAMPAIGN_DATA_FAILED':
		return []
	default:
		return state
	}
}

export default capaignTableReducer