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
            'X-Auth-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJleUp3Y205MmFXUmxja2xFSWpvaVkzSmxaR1Z1ZEdsaGJITWlMQ0p3Y205MmFXUmxja3RsZVNJNkltMXlMbXRvWVRZelFHZHRZV2xzTG1OdmJTSjkiLCJpc3MiOiJwbGF5LWFuZ3VsYXItc2lsaG91ZXR0ZSIsImV4cCI6MTQ5MTM3NTg0NiwiaWF0IjoxNDkxMjAzMDQ2LCJqdGkiOiJhMDkxZjk0MjE0ODVjOTYyZGNiY2NlN2Y1Y2E1ODcyY2ExMWFlZDcwMzJlNGUzNmZkZDdmODY3ODczZWVjZjcxMWJjOTY5NWNhOTc3YWM1NGQxM2YyYzJiNzdiODFkOGNlYzIzMDZiMDgyMzA5MDQwMTY4NmQxNTlmZDM0YTA3YmE4YzQ1MGQ1OTQxMDg5YzA1ZjMyNjdhZDkyNDg2NjU0ZjFlNDg0YTY2NmY4NzI2NGYxZjExY2E1ZGNlMGE0Mjk5MDEwNmM2NjNmMmIzMmUzYWUwM2MxZDEwZDQzN2Q0YTQ2MjFmNWFhYzVmYjViZTc3YzYyODIxYTM2M2JmYjk0In0.snHwx2pz5ItjNMdS14HGjE3GI-aIzv24naCRK4Ky45g'
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