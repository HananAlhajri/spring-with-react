import { apiClient } from "./ApiClient";

export const executeBasicAuthService
            = (token) => apiClient.get(`/basic-auth `, {
                headers: { 
                    Authorization: token
                }
            })
export const executeJwtAuthService
            = (username, password) => apiClient.post(`/authenticate `, {username, password})
// eyJraWQiOiIzYzY4OTk1MS00ZDA4LTQ4MTktODM2ZS0yMGNlYzMzZjMwMGUiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwic3ViIjoiaGFuYW4iLCJleHAiOjE2ODkxNzcwNTIsImlhdCI6MTY4OTE3MTY1Miwic2NvcGUiOiJST0xFX1VTRVIifQ.Yd_lEPVgzPyKo4Sfkx-RI6cZ65KKGLGlcEUfX6pADJ0AWC4InkPdbaUicCaMLFhpSrrU4I0mGKggsqjmEbK7DBwAfSt93E16jDHXHnPdU0aCsybmnD9qlz3SpYaYSpTrByehoh3Mp-Pl1AASAfQEe2dEYKnF_sdsY9O67BMK1rkEXhOkUujbaHIqiSkymi3y1iPpv9BrmWA8pukly_Ss06huIeMh4_m9Cp8kIG7OHfwTRIjSNCqWl0IjTpH-740x-2kNs5WdKuiQVckBCnsMXvQ3AJwk5mq61kA92Wa8eZnktOVE-VCOdM1eYxmAtCb6Z5aC1oOuLtScHZc-OFslgg"
