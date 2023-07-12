import { createContext, useContext, useState } from "react";
import { executeJwtAuthService } from "../api/AuthenticationApiService";
import { apiClient } from "../api/ApiClient";

//fisrt: create context 
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)



//second: share context with other components
export default function AuthProvider( { children } ){
    //third: put some state in the context 
    const [isAuth, setAuth] = useState(false)
    const [username, setUsername] = useState(null)

    const [token, setToken] = useState(null)

    //basic auth
    // async function login(username, password) {

    //     const baToken = 'Basic ' + window.btoa(username + ":" + password)

    //     try {
    //     const response = await executeBasicAuthService(baToken)
    //     if( response.status == 200 ) {
    //         setAuth(true)
    //         setUsername(username)
    //         setToken(baToken)

    //         apiClient.interceptors.request.use(
    //             (config) => {
    //                 console.log('intercepting and adding a token')
    //                 config.headers.Authorization=baToken
    //                 return config
    //             }
    //         )

    //         return true;
    //     } else {
    //         logout()
    //         return false;
    //     }
    //     } catch (error){
    //             logout()
    //             return false;
    //         }

    // }

    async function login(username, password) {

        try {

        const response = await executeJwtAuthService(username, password)

        if( response.status == 200 ) {

            const jwtToken = 'Bearer ' + response.data.token

            setAuth(true)
            setUsername(username)
            setToken(jwtToken)

            apiClient.interceptors.request.use(
                (config) => {
                    console.log('intercepting and adding a token')
                    config.headers.Authorization = jwtToken
                    return config
                }
            )

            return true;
        } else {
            logout()
            return false;
        }
        } catch (error){
                logout()
                return false;
            }

    }

    function logout() {
            setAuth(false)
            setUsername(null)
            setToken(null)
    }

    return (
        <AuthContext.Provider value = { { isAuth, login, logout, username, token } } >
            {children}
        </AuthContext.Provider>
    )
}
