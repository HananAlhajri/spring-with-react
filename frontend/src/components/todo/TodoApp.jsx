import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import LogoutComponent from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from './ListTodosComponent'
import WelcomeComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import ErrorComponent from './ErrorComponent'
import AuthProvider, { useAuth } from './security/AuthContext'
import TodoComponent from './TodoComponent'

import './TodoApp.css'
// import FooterComponent from './FooterComponent'

function AuthRoute({children}) {

    const authContext = useAuth()

    if(authContext.isAuth)
        return children

    return <Navigate to = "/" /> 
}

export default function TodoApp(){
    return (
    <div className="TodoApp">
        <AuthProvider>
            <BrowserRouter>
            <HeaderComponent />
            <Routes>
                <Route path='/' element = { <LoginComponent/> }/>
                <Route path = '/login' element ={ <LoginComponent/> }/>
                <Route path = '/welcome/:username' element ={
                    <AuthRoute>
                        <WelcomeComponent/>
                    </AuthRoute> }/>
                <Route path = '/todos' element ={ 
                <AuthRoute>
                    <ListTodosComponent/>
                </AuthRoute> }/>

                <Route path = '/todo/:id' element = {
                    <AuthRoute>
                        <TodoComponent />
                    </AuthRoute> } />
                    
                <Route path = '/logout' element ={ 
                <AuthRoute>
                    <LogoutComponent/>
                </AuthRoute> }/>

                <Route path = '*' element ={ <ErrorComponent/> }/>
            </Routes>
            </BrowserRouter>
            {/* <FooterComponent/> */}
        </AuthProvider>

    </div>
    )
}