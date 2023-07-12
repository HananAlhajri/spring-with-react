import { useContext } from "react"
import { AuthContext } from "./security/AuthContext"

function FooterComponent() {
    const authContext = useContext(AuthContext)
    console.log(`Footer Component ${authContext.number}`)
    return (
        <footer className="FooterComponent">
            <div className='container'>
                Footer 
            </div>
        </footer>
    )
}

export default FooterComponent