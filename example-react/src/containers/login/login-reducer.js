const loginReducer = (state = [], action) => {
	switch (action.type) {
	case 'OPEN_LOGIN_MODAL':
		return {open: true}
	case 'LOGIN_SUCCESS':
		return action.data
	default:
		return state
	}
}

export default loginReducer