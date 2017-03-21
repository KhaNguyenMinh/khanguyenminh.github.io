import axios from 'axios';

const instance = axios.create({
	  baseURL: 'http://test.adtopgo.com/',
	  timeout: 1000,
	  headers: {'Content-Type': 'application/json','X-Auth-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJleUp3Y205MmFXUmxja2xFSWpvaVptRmpaV0p2YjJzaUxDSndjbTkyYVdSbGNrdGxlU0k2SWpFd056VTNORFl4TnpJMU16Y3lOVFFpZlE9PSIsImlzcyI6InBsYXktYW5ndWxhci1zaWxob3VldHRlIiwiZXhwIjoxNDkwMjY0OTg1LCJpYXQiOjE0OTAwOTIxODUsImp0aSI6IjdiNWFiMzJlNGVlY2VkNzgwNGI2MWIyMDAxMzc2MDUzOTgzNWM1N2VlYzFhN2IwMjkyYTRmZGM5M2E3MmUzODAwNmQxMzJiYmU0OTczZjRmZjdmNDg5NjYwY2Q1NjAzNTYwNjAzMGE5NWNiZGM3MTE0MzQ2ODM3MWExMDQxOTgzZTg4OWViMjFiZmYxMTczNzkyZjBiOTkzY2FkODlmZDdlYWE3NDNhMDNiYjNlY2QxNzFkNzdhZmY5YTQ0NGE3MDc5NjIwNjI1NDUzZWI2NjE5YTkwNzhmNWY0YWM3ODZiNzVkZWY5MWEyNzVmYmEzYmY0MGM3NWRmM2EyNTY3NWUifQ.PG0l6KGlOJW4hKmnwTG3NZ-Q7ZQPG9tenNIMInPrbc4'}
	});
// export default class CampaignService {
	
	// getCampaignList() {
	// 	return instance.post('/campaigns/query', {'query':{}});
	// 	// return {
	// 	// 	id: '123456789',
	// 	// 	name: 'test name'
	// 	// };
	// }
// }

const CampaignService = store => next => action => {
  /*
  Pass all actions through by default
  */
  next(action)
  switch (action.type) {
  case 'GET_CAMPAIGN_DATA':
    instance.post('/campaigns/query', {'query':{}}).then(res => {
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