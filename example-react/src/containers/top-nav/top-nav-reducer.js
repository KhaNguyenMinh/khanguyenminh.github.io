const topNavReducer = (state = [], action) => {
	switch (action.type) {
	case 'LOGOUT':
		return {logged: false}
	case 'LOGIN_SUCCESS':
		return {logged: true}
	default:
		return state
	}
}

export default topNavReducer