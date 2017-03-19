import axios from 'axios';

const instance = axios.create({
	  baseURL: 'http://test.adtopgo.com/',
	  timeout: 1000,
	  headers: {'Content-Type': 'application/json','X-Auth-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJleUp3Y205MmFXUmxja2xFSWpvaVptRmpaV0p2YjJzaUxDSndjbTkyYVdSbGNrdGxlU0k2SWpFd056VTNORFl4TnpJMU16Y3lOVFFpZlE9PSIsImlzcyI6InBsYXktYW5ndWxhci1zaWxob3VldHRlIiwiZXhwIjoxNDkwMDkxODM5LCJpYXQiOjE0ODk5MTkwMzksImp0aSI6ImZmODkwNDhhZDcwYTVmOGJjYzg1ZTA0MDE0NjQ2NTA3NmMzZDk1ZWM4ZTdlZGNjZTgzMzE4NDc1MzViZTkxNGY5ZjhhMjFlOWQ3NjEyN2E5YzI1M2VmYjY3MzljMzA0OWQ1NjhmMTI5MDJkOTEwZDJiNDBhOWVmYWE2YjBiNzIwMjljODdjOWU5ZTRlMGI3YzliMDgwZjY3OWY5YmYxMTNjNzc0NTBkZTJmYTA4MzBlMGU3NDQ0NDdhY2Q2ZDM3ZThjYzFiYzYwNDVlN2RjNTAwNDcxYjFmNzU3YjNmMGQ3MTAzNjFlNGY4ZTk3OTlhYjdmYWY1ZGViZTVjNjE0YzgifQ.1qPMG0b6140BoR06StvJPlwS17Lc3RUYGXS0JCompkQ'}
	});
export default class CampaignService {
	
	getCampaignList() {
		return instance.post('/campaigns/query', {'query':{}});
		// return {
		// 	id: '123456789',
		// 	name: 'test name'
		// };
	}
}