import BaseService from './base-service'

const baseService = new BaseService();
const CoffeeShopService = store => next => action => {
    /*
    Pass all actions through by default
    */
    next(action)
    switch (action.type) {
        case 'CREAT_COFFEE_SHOP':
            baseService.callAPI('post', 'api/CoffeeShops', action.data).then (res=>{
                let data = res.data
                next({
                    type: 'CREATE_COFFEE_SHOP_SUCCESS',
                    data
                })
            })
            break
        /*
        Do nothing if the action does not interest us
        */
        default:
            break
    }
};

export default CoffeeShopService