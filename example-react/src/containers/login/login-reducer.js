const loginReducer = (state = [], action) => {
	switch (action.type) {
	case 'OPEN_LOGIN_MODAL':
		return {open: true, logged: false}
	case 'LOGIN_SUCCESS':
		return {userData: action.data, open: false, logged: true}
	default:
		return state
	}
}

export default loginReducer