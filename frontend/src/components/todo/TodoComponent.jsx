import { useNavigate, useParams } from "react-router-dom"
import { createTodoApi, retrieveTodoApi, updateTodoApi } from "./api/TodoApiSevice"
import { useAuth } from "./security/AuthContext"
import { useEffect, useState } from "react"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import moment from "moment/moment"

export default function TodoComponent(){

    const { id } = useParams()

    const [ description, setDescription ] =  useState('')

    const [targetDate, setTargetDate] = useState('')

    const navigate = useNavigate()

    const authContext = useAuth()

    const username = authContext.username

    useEffect(
        () => retriveTodos(), 
        [id]
    )

    function retriveTodos(){

        if(id != -1) {

            retrieveTodoApi(username, id)
            .then(response => {
            setDescription(response.data.description)
            setTargetDate(response.data.targetDate)
        })
        .catch(error => console.log(error))
        }
    }

    function onSubmit(values){
        console.log(values)
        const todo = {
            id: id, 
            username: username,
            description: values.description,
            targetDate: values.targetDate, 
            done: false
        }

        console.log(todo)

        if(id==-1) {

            createTodoApi(username, todo)
            .then(response => { 
                navigate('/todos')
            })
            .catch(error => console.log(error))

        } else {
        updateTodoApi(username, id, todo)
        .then(response => { 
            navigate('/todos')
        })
        .catch(error => console.log(error))
        }
    }

    function validate(values){
        let errors = {
        }
        if(values.description.length < 5){
        errors.description = 'Enter at least 5 characters.'
        }
        if(values.targetDate == null || values.targetDate === '' || !moment(values.targetDate).isValid() ){
            errors.description = 'Enter a target date.'
            }
        console.log(values)
        return errors

    }
    return (
        <div className="container">
            <h1>Enter Todo Deatails</h1>
            <div>
                <Formik initialValues={ { description, targetDate } } 
                    enableReinitialize = {true}
                    onSubmit={onSubmit}
                    validate={validate}
                    validateOnChange= {false}
                    validateOnBlur = {false}> 
                {
                    (props) => (
                        <Form>
                            <ErrorMessage 
                            name = "description"
                            component = "div"
                            className="alert alert-warning" />

                            <ErrorMessage 
                            name = "targetDate"
                            component = "div"
                            className="alert alert-warning" />

                            <fieldset className="form-group m-1" >
                                <label>Description</label>
                                <Field type = "text" className = "form-control" name = "description" /> 
                            </fieldset>

                            <fieldset className="form-group">
                                <label>Terget Date</label>
                                <Field type = "date" className = "form-control" name = "targetDate" /> 
                            </fieldset>

                            <div>
                                <button className="btn btn-success m-5" type = "submit">Save</button>
                            </div>


                        </Form>
                    )
                }
                </Formik>
            </div>
        </div>
    )
}