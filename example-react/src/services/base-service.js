import axios from 'axios';
import Config from '../config'

export default class BaseService {
	config = new Config()
	endPointAPI = (process.env.NODE_ENV === 'development') ? this.config.testAPI : this.config.prodAPI
	axiosInstance = axios.create({
		baseURL: this.endPointAPI,
		timeout: 5000,
		headers: {'Content-Type': 'application/json','X-Auth-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJleUp3Y205MmFXUmxja2xFSWpvaVkzSmxaR1Z1ZEdsaGJITWlMQ0p3Y205MmFXUmxja3RsZVNJNkltMXlMbXRvWVRZelFHZHRZV2xzTG1OdmJTSjkiLCJpc3MiOiJwbGF5LWFuZ3VsYXItc2lsaG91ZXR0ZSIsImV4cCI6MTQ5MDQ5NDYxMywiaWF0IjoxNDkwMzIxODEzLCJqdGkiOiI4Njc1MWI5ODhkYTkyMzZlYTIxNmZiNWVlNWJkMmFiNDRiN2UwNWQ2MTRlNTdhYzJmNTM1YjViYmFmZTFlNzdlZjQ1NTU1NWQyYTc5NDAzYTI1NjI2NDBjNjk4MmNjMGEyOWVkNzI3YjYxNGI2ZGY3ZjQ3NWM3MDAyNjUwOGY0YTU3MzgyZTEyNDk5NzMwNjZmNTY1MzQzMGU1ZTJkMzc3ZGMwNDlkYzJjNmMwNDYzZWYzMGY0YzEyMzVjZjU1OGY5ZDA3NmQ0MjdmYzEzMzFiZGQ5ZjI0MmZjNzI0OTE3MTY2MTkwYjkwOGZkYjEyNTAzYmQ5NTk1NTk3MDFiODVhIn0.8ZPaHnmoNf1R2PcrtcSFf3IvVTS1vtijwDO2uzwHy7A'}
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