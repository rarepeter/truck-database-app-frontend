import React, { useContext, useState } from 'react'
import { Context } from '../../index.js'
import Textinput from '../../Components/Textinput/Textinput'
import '../../Styles/Form page/Formpage.css'
import Button from '../../Components/Button/Button.jsx'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { store } = useContext(Context)
    const navigate = useNavigate()

    useEffect(() => {
        if (store.isAuth) navigate('/')
    }, [])


    const login = (e) => {
        e.preventDefault();
        store.login(email, password)
        navigate('/')
        console.log(store.isAuth)
    }

    const logout = (e) => {
        e.preventDefault()
        store.logout()
    }

    return (
        <div className='form-page-wrapper'>
            <div className="form-wrapper">
                <form>
                    <Textinput inputClass='section' id='email' onChange={e => setEmail(e.target.value)} labelText='Email' validations={{ isNotEmpty: true, isEmail: true }} />
                    <Textinput isPassword={true} inputClass='section' id='password' onChange={e => setPassword(e.target.value)} labelText='Password' validations={{ isNotEmpty: true }} />
                    <Button onClick={(e) => login(e)}>Login</Button>
                    <Button onClick={(e) => logout(e)}>Logout</Button>
                </form>
            </div>
        </div>
    )
}

export default Login