const coffeeShopReducer = (state = [], action) => {
	switch (action.type) {
	case 'CREATE_COFFEE_SHOP_SUCCESS':
		return action.data
	default:
		return state
	}
}

export default coffeeShopReducer