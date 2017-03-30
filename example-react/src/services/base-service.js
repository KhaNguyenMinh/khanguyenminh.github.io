import axios from 'axios';
import Config from '../config'

export default class BaseService {
	config = new Config()
	endPointAPI = (process.env.NODE_ENV === 'development') ? this.config.testAPI : this.config.prodAPI
	axiosInstance = axios.create({
		baseURL: this.endPointAPI,
		timeout: 5000,
		headers: {'Content-Type': 'application/json','X-Auth-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJleUp3Y205MmFXUmxja2xFSWpvaVkzSmxaR1Z1ZEdsaGJITWlMQ0p3Y205MmFXUmxja3RsZVNJNkltMXlMbXRvWVRZelFHZHRZV2xzTG1OdmJTSjkiLCJpc3MiOiJwbGF5LWFuZ3VsYXItc2lsaG91ZXR0ZSIsImV4cCI6MTQ5MTAxMzQ2MSwiaWF0IjoxNDkwODQwNjYxLCJqdGkiOiJlZTgwYjJjOTllYTQ4OGM2OGNlYjk0ZDJkZDU2YTMwNDYwOTg5MWE3ZTM3NjA5OWU1MDBmZWEwNzQ1ZDM3ZmJkNmQ0MDkyYTJmMjZiN2FhYzFmOWM2ZDBmZDk4OGI3ZDI5ZWEyNmU4MWUyMDhmMjlhMWQzZmRhNjVhZTU0YjJjODU0MTM4YTNkMWMyNzJmMGZlOTY1NmY5Mjg1YTg5NzVjNmM4YTM5YmY0NjBjM2IwMjY5YTNlYzhkM2I1MGViM2MwNDg0OGE3YWQ2YTk5NmM0NmE0MTM5MDQ0NjM0N2FmOGVkN2Q1YWQ2MWNkNzUwOThjZDAyNzk4YzZmNzAxZjlhIn0.zNSp1qgRr-HCfGcvkZitSLqfk9ad3tNC-ZpgfQWZDts'}
	})
	callAPI(method = 'get', url = '', data = null) {
		switch (method) {
			case 'get':
				return this.axiosInstance.get(url)
			case 'post':
				return this.axiosInstance.post(url, data)
			default:
				break
		}
	}
}