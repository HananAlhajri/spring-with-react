import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuth } from './security/AuthContext'


function LoginComponent() {

    const [username, setUsername] = useState('hanan')
    const [password, setPassword] = useState('')
    const [showErrorMessage, setShowerrorMessage] = useState(false)
    const navigate = useNavigate();
    const authContext = useAuth()


    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    async function handleSubmit(){
        //auth
    if(await authContext.login(username, password)){
        setShowerrorMessage(false)
        navigate(`/welcome/${username}`)

    } else{
        setShowerrorMessage(true)
        }
    }
    
    return (
        <div className="Login">
            <h1>Enter your info</h1>
            <div className="LoginForm">
                {showErrorMessage && <div className='errorMessage'>Authenticated Failed!</div>}
                <div>
                    <label>Username:</label>
                    <input type= "text" name = "username" value = {username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type= "password" name = "password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type = "button" name = "login" onClick={handleSubmit}> Login </button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent