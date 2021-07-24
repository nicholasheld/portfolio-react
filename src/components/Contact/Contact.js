import React, {useState} from 'react';
import './Contact.css'
import { AboutMe } from '../AboutMe/AboutMe';

export function Contact(props) {
    const [contactName, setContactName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name } = e.target;
        const value = e.target.value.trim().toLowerCase()
        
        if (name === 'contactName') {
            setContactName(value)
        } else if (name === 'email') {
            setEmail(value)
        } else {
            setMessage(value)
        }
        
    }
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        //const { name } = e.target;
        const value = e.target.parentNode[1].value.trim().toLowerCase()
        const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValidEmail = emailReg.test(value)
        if (isValidEmail) {
            props.setPage(<AboutMe />)
        } else {
            console.log('invalid email')
            setEmail('Invalid email')
        }
    }

    const alertMessage = 'This field is required'

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (!value) {
            
            if (name === 'contactName') {
                setContactName(alertMessage)
            } else if (name === 'email') {
                setEmail(alertMessage)
            } else {
                setMessage(alertMessage)
            }
        } return
    }

    return (
        <div>
            <form>
                <input
                    value={contactName}
                    name="contactName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder={"Name"}
                    onBlur={handleBlur}
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder={"email"}
                    onBlur={handleBlur}
                />
                {email === 'Invalid email' && <span>Please enter valid email</span>}
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder={"message..."}
                    onBlur={handleBlur}
                />
                <button type="button" onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
        </div>
    )
}