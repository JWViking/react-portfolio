import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import './index.css';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    // Sync internal state of the compoment formState with the user input from the DOM. 
    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            //isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
        console.log('errorMessage', errorMessage);
    }

    //prevent default. Log formState on Submit button click.
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        window.document.location.href="mailto:"+formState.email+"?subject="+formState.name+"&body="+formState.message
    }
    return (
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="flex-container" >
                    <div className="item-one"></div>

                    <section className="item-two">
                        {/* //name input */}
                        <div className="label-name">
                            <label htmlFor="name">Name: </label>
                            <input required type="text" name="name" defaultValue={name} onChange={handleChange} />
                        </div>
                        {/* //email input */}
                        <div className="label-email">
                            <label htmlFor="email">Email address: </label>
                            <input required type="email" name="email" defaultValue={email} onChange={handleChange} />
                        </div>
                        {/* //message text area */}
                        <div className="label-message">
                            <label htmlFor="message">Message: </label>
                            <textarea required name="message" defaultValue={message} onChange={handleChange} rows="5" />
                        </div>
                        {/* display user errorMessage */}
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                        {/* //submit button */}
                        <button type="submit">Submit</button>
                    </section>
                    <div className="item-three"></div>
                </div>
            </form>


        </section>
    );
}

export default Contact