import {OPEN_LOGIN_MODAL, LOGIN} from '../../actions'

export const openLoginModal = () => {
	return {
	    type: OPEN_LOGIN_MODAL
	}
}

export const login = (loginData) => {
	console.log('actions data', loginData)
	return {
	    type: LOGIN,
	    data: loginData
	}
}
