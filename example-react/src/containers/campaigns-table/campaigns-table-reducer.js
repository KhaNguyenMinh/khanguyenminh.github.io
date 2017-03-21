const capaignTableReducer = (state = [], action) => {
	switch (action.type) {
	/*
	Consider all received data as the initial list of
	todo items
	*/
	case 'GET_CAMPAIGN_DATA_RECEIVED':
		return action.data
	default:
		return state
	}
}

export default capaignTableReducer