import { useAuth } from "./security/AuthContext"

function LogoutComponent() {
    
    const authContext = useAuth()
    authContext.logout()

    return (
        <div className="LogoutComponent">
            <h1> Log out Successfully. See you soon! </h1>
        </div>
    )
}

export default LogoutComponent