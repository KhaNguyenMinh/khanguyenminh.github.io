import {CREAT_COFFEE_SHOP} from '../../actions'

export const createCoffeeShop = (shopObj) => {
	return {
	    type: CREAT_COFFEE_SHOP,
	    data: shopObj
	}
}

