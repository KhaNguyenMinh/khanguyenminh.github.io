import BaseService from './base-service'

const baseService = new BaseService();
const CampaignService = store => next => action => {
    /*
    Pass all actions through by default
    */
    next(action)
    switch (action.type) {
        case 'GET_CAMPAIGN_DATA':
            baseService.callAPI('post', '/campaigns/query', {'query':{}}).then (res=>{
                let data = res.data
                next({
                    type: 'GET_CAMPAIGN_DATA_RECEIVED',
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

export default CampaignService