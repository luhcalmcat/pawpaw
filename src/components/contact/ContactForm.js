import { click } from '@testing-library/user-event/dist/click';
import './ContactForm.css'
import React, { useState } from 'react';


function ContactForm() {

    const [clicked, setClicked] = useState(false)

    const onClickTrueHandler = () => {
        setClicked(true)
    }

    const onClickFalseHandler = () => {
        setClicked(false)
    }

    if (clicked != true)
        return (
            <div className='contact-from-wrapper'>

                <div className='contact-form-headings'>
                    <span className='contact-form-entry-text'>You have a question for us? Our operators are waiting for you...</span>
                    <span className='contact-form-title'>Contact us!</span>
                </div>

                <div className='contact-form-input-fields'>
                    <label className='contact-form-label' for='1'>Your e-mail:</label>
                    <input className='contact-form-input-field' id='1' type='email' placeholder='Your email goes here'></input>

                    <label className='contact-form-label'>Your message:</label>
                    <textarea className='contact-form-textarea' placeholder='Hello, I am looking for a paw...'></textarea>
                </div>

                <button className='contact-form-submit-button' onClick={onClickTrueHandler}>Send e-mail</button>
            </div>
        )
    else {
        return <button className='button' onClick={onClickFalseHandler}>DON'T CLICK ME</button>
    }

}

export default ContactForm;