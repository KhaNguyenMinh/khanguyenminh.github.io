import axios from 'axios';
import Config from '../config'

export default class BaseService {
	config = new Config()
	endPointAPI = (process.env.NODE_ENV === 'development') ? this.config.testAPI : this.config.prodAPI
	axiosInstance = axios.create({
		baseURL: this.endPointAPI,
		timeout: 5000,
		headers: {'Content-Type': 'application/json','X-Auth-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJleUp3Y205MmFXUmxja2xFSWpvaVptRmpaV0p2YjJzaUxDSndjbTkyYVdSbGNrdGxlU0k2SWpFd056VTNORFl4TnpJMU16Y3lOVFFpZlE9PSIsImlzcyI6InBsYXktYW5ndWxhci1zaWxob3VldHRlIiwiZXhwIjoxNDkwNzU2MTgxLCJpYXQiOjE0OTA1ODMzODEsImp0aSI6IjNhOWJiYWJlYjU5ZGZiNWJhNjQ0YzU5MmIyMjQwODRlOWZlM2ExNWQyOTg3ZGJlOWRhYWQyZGNhN2M2YzFhNmJkNmJhYjFlZTI5YjkwZTRlYzEzODZiMGJmOTQxM2RlZDM5OWIzM2Q4MmRhYWE0NmZhNDAzZmI3MTc2NDZjNzM2NWQ0NWNlOTI3Y2ExNTQwMzRlZmYyMjEwMjMzOTIxYmFjOWU1MjMyYzcxZjJkZjA4YzM4NWI5YzcyZTdkOGE3MTAxNTYwNDM0Y2MyMzI0MjVlODlmZTkwNzU1MDk1N2FmY2UyMjk5ZmMwZjljYjA5M2NiMjIxMWVhNGViMmJjYmQifQ.JWUZ1yWt26fsPNYVp8N6dIxC6KaHOYft1FX8q5oDnLY'}
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