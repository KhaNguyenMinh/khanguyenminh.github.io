const systemNotifyReducer = (state = [], action) => {
	switch (action.type) {
	case 'SHOW_SYSTEM_NOTIFY':
		return {mgs: action.mgs, duration: action.duration, open: action.open}
	case 'HIDE_SYSTEM_NOTIFY':
		return {open: action.open}
	default:
		return state
	}
}

export default systemNotifyReducer