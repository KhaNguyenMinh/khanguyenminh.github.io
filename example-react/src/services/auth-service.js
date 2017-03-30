import BaseService from './base-service'

const baseService = new BaseService();
const AuthService = store => next => action => {
    /*
    Pass all actions through by default
    */
    next(action)
    switch (action.type) {
        case 'LOGIN':
            baseService.callAPI('post', '/authenticate/credentials', action.data).then (res=>{
                let data = res.data
                // Store
                localStorage.setItem("userData", data);
                console.log('user data', res.data)
                next({
                    type: 'LOGIN_SUCCESS',
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

export default AuthService