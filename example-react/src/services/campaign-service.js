import axios from 'axios';

const instance = axios.create({
	  baseURL: 'http://test.adtopgo.com/',
	  timeout: 1000,
	  headers: {'Content-Type': 'application/json','X-Auth-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJleUp3Y205MmFXUmxja2xFSWpvaVkzSmxaR1Z1ZEdsaGJITWlMQ0p3Y205MmFXUmxja3RsZVNJNkltMXlMbXRvWVRZelFHZHRZV2xzTG1OdmJTSjkiLCJpc3MiOiJwbGF5LWFuZ3VsYXItc2lsaG91ZXR0ZSIsImV4cCI6MTQ4OTkxNjU4MCwiaWF0IjoxNDg5NzQzNzgwLCJqdGkiOiJlMTkyMGIyZjcxYmZjNWExZDc3MzlhYzA4MWZkODllYWEzNmUxNmE5YmRkZGIyOTUyNWVhM2E1N2U5OTEyYzc5MGU5ODBjNzAyOTExZGYzOTUwMWFiZjhjODU1ZGM5MjQ1YjFlMWFmMjhhMGY1NDcxYTA5Y2EzM2FhYjNhNWNmZWJmYWJkNzBjMTYwMWQzOTk0ZjlmZjAxOWJmY2VjOTIzOWI3NDZlNTQwMmIxMWUzMmM1OTA3ZGQzNDY4NDZlMDlkMTE4N2RjZDY0MTQwYzg4M2ZhMGMxN2FmYjMwYzZkMTcxM2IxODhlMDkyYzNmMmY3ZWM0NmUyOGU4MzQwMDY5In0.kLfLw7zu6kOOOxVPDDcUc0-t56d7J2CfL0UHOEu1iKQ'}
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