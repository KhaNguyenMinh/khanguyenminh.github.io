import axios from 'axios';
import Config from '../config'

export default class BaseService {
    config = new Config()
    endPointAPI = (process.env.NODE_ENV === 'development') ? this.config.testAPI : this.config.prodAPI
    axiosInstance = axios.create({
        baseURL: this.endPointAPI,
        timeout: 5000,
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJleUp3Y205MmFXUmxja2xFSWpvaVkzSmxaR1Z1ZEdsaGJITWlMQ0p3Y205MmFXUmxja3RsZVNJNkltMXlMbXRvWVRZelFHZHRZV2xzTG1OdmJTSjkiLCJpc3MiOiJwbGF5LWFuZ3VsYXItc2lsaG91ZXR0ZSIsImV4cCI6MTQ5MTc1MjU1OSwiaWF0IjoxNDkxNTc5NzU5LCJqdGkiOiI0YzRmNjE0ODFmNTgzYzgwOTkyOTMwNzU2MTM0Yzc2ZjdjNWY1ZmM1ZDM1MTYxNGJjZmZlMjFhMzMwODIzYmNiMDA2ZWVmZjc3NTYyM2RlZTJjMDFlYzMwYzRiYzkzYzQyODEzZmQ2Zjg1ZDMwZmVmMWQ5MDJlYmZmYTU2YTI3ZTkyMTk1ZDhlY2VkNGI1YWIyYjcwMTI2NzVmNWVmNzQ2NmFmZGNkOGU4MGRlY2Y3Nzc4ZDg5NWIzNjQ4NWZjY2I1YjIyOTE2NzFiZjRjNTRiMTcwOGFlNWU2YWU0NzA4Mjc2MWE3ZTc5N2IzNTQ0YTkyYWM1M2IxZDMxMGE1YzcxIn0.NQk4QdW3ZJgyUmOLuWu6FwYNZIRVeXUA24UnjLzZkfM'
        }
    })
    callAPI(method = 'get', url = '', data = null) {
        let self = this

        return new Promise(function(resolve, reject) {
            let apiPromiseOject = new Promise(function() {})
            console.log('test promise obj', apiPromiseOject);
            switch (method) {
                case 'get':
                    apiPromiseOject = self.axiosInstance.get(url)
                    break
                case 'post':
                    apiPromiseOject = self.axiosInstance.post(url, data)
                    break
                default:
                    break
            }

            apiPromiseOject.then(function(res) {
                console.log('success data', res)
                resolve(res);
            }).catch(function(reason) {
                console.log('errors:', reason)
                resolve({
                    errors: reason
                })
            })
        })
    }
}