import React from 'react'
import { useState } from 'react'
import Textinput from '../../Components/Textinput/Textinput'
import '../../Styles/Form page/Formpage.css'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className='form-page-wrapper'>
            <div className="form-wrapper">
                <form>
                    <Textinput inputClass='section' id='email' onChange={e => setEmail(e.target.value)} labelText='Email' validations={{ isNotEmpty: true, isEmail: true }} />
                    <Textinput inputClass='section' id='password' onChange={e => setPassword(e.target.value)} labelText='Password' validations={{ isNotEmpty: true }} />
                </form>
            </div>
        </div>
    )
}
