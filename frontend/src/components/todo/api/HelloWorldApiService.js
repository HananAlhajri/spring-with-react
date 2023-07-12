import {apiClient} from './ApiClient'

export const retrieveHelloWorldBean = 
            () => apiClient.get('/hello-world-bean')

export const retrieveHelloWorldUsername = 
            (username, token) => apiClient.get(`/hello-world/path-variable/${username}`, {
                // headers: { 
                //     Authorization: token
                // }
            })


export const executeBasicAuthService
            = (token) => apiClient.get(`/basic-auth `, {
                headers: { 
                    Authorization: token
                }
            })
