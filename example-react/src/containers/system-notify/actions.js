import {SHOW_SYSTEM_NOTIFY, HIDE_SYSTEM_NOTIFY} from '../../actions'

export const showNotify = (mgs = '', duration = 4000, open = true) => {
	return {
	    type: SHOW_SYSTEM_NOTIFY,
	    mgs: mgs,
	    duration: duration,
	    open: open
	}
}
export const hideNotify = (open) => {
	return {
	    type: HIDE_SYSTEM_NOTIFY,
	    open: open
	}
}