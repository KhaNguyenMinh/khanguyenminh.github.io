import axios from 'axios';
import Config from '../config'

export default class BaseService {
	config = new Config()
	endPointAPI = (process.env.NODE_ENV === 'development') ? this.config.testAPI : this.config.prodAPI
	axiosInstance = axios.create({
		baseURL: this.endPointAPI,
		timeout: 5000,
		headers: {'Content-Type': 'application/json','X-Auth-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJleUp3Y205MmFXUmxja2xFSWpvaVptRmpaV0p2YjJzaUxDSndjbTkyYVdSbGNrdGxlU0k2SWpFd056VTNORFl4TnpJMU16Y3lOVFFpZlE9PSIsImlzcyI6InBsYXktYW5ndWxhci1zaWxob3VldHRlIiwiZXhwIjoxNDkwMjY0OTg1LCJpYXQiOjE0OTAwOTIxODUsImp0aSI6IjdiNWFiMzJlNGVlY2VkNzgwNGI2MWIyMDAxMzc2MDUzOTgzNWM1N2VlYzFhN2IwMjkyYTRmZGM5M2E3MmUzODAwNmQxMzJiYmU0OTczZjRmZjdmNDg5NjYwY2Q1NjAzNTYwNjAzMGE5NWNiZGM3MTE0MzQ2ODM3MWExMDQxOTgzZTg4OWViMjFiZmYxMTczNzkyZjBiOTkzY2FkODlmZDdlYWE3NDNhMDNiYjNlY2QxNzFkNzdhZmY5YTQ0NGE3MDc5NjIwNjI1NDUzZWI2NjE5YTkwNzhmNWY0YWM3ODZiNzVkZWY5MWEyNzVmYmEzYmY0MGM3NWRmM2EyNTY3NWUifQ.PG0l6KGlOJW4hKmnwTG3NZ-Q7ZQPG9tenNIMInPrbc4'}
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