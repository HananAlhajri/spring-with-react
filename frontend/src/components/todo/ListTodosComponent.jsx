import { useEffect, useState } from "react";
import { deleteTodoApi, retrieveAllTodosForUsernameApi } from "./api/TodoApiSevice";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

function ListTodosComponent() {
    const today = new Date();
    const authContext = useAuth()
    const username = authContext.username
    const navigate = useNavigate()
    const targetDate = new Date(today.getFullYear()+1 , today.getMonth(), today.getDay());
    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState(null)
    // const todos = [
    //     // {id: 1, description: 'Learn React', done: false, targetDate: targetDate },
    //     // {id: 2, description: 'Learn Full Stack', done: false, targetDate: targetDate},
    //     // {id: 3, description: 'Master Spring and React', done: false, targetDate: targetDate},
    
    // ]
    useEffect ( () => refreshTodos(), [] )

    function refreshTodos(){
        retrieveAllTodosForUsernameApi(username)
        .then(response => {setTodos(response.data)})
        .catch(error => console.log(error))
    }

    function deleteTodo(id){
        deleteTodoApi(username, id)
        .then(() => {
            setMessage(`Delete todo with id = ${id} sucessfully`)
            refreshTodos()
        } )
        .catch( error => console.log(error))
    }

    function updateTodo(id){
        console.log('update' + id)
        navigate(`/todo/${id}`)
    }

    function addNewTodo(){
        navigate(`/todo/-1`)
    }

    return (
        <div className="container">
            <h1>Todo: </h1>
            {message && <div className="alert alert-warning">{message}</div> }
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Done? </th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map( 
                            todo => 
                            <tr key = {todo.id}>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                                <td> <button className="btn btn-warning" 
                                onClick={() => deleteTodo(todo.id) }>Delete</button></td>
                                <td> <button className="btn btn-success" 
                                onClick={() => updateTodo(todo.id) }>Edit</button></td>
                            </tr>  
                        )
                    }
                    </tbody>
                </table>
            </div>
            <div className = "btn btn-success m-5" onClick={addNewTodo}>Add New Todo</div>
        </div>
    )
}


export default ListTodosComponent