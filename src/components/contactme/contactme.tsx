import React, { ChangeEvent, FormEvent, useRef, useState } from "react"
import './contactme.css'
import axios from "axios";

type FormState = {
    email: string;
    name: string;
    message: string;
}

type ServiceMessage = {
    text: string;
}

export default function ContactMe() {
    const formId = "Pb0EHY5H"
    const formSparkUrl = `https://submit-form.com/${formId}`

    const initialFormState = {
        email: '',
        name: '',
        message: '',
    };

    const [formState, setFormState] = useState<FormState>(initialFormState);
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [message, setMessage] = useState<ServiceMessage>();

    const submitForm = async(event: FormEvent) => {
        event.preventDefault();
        setSubmitting(true);
        await postSubmission();
        setSubmitting(false);
    };

    const postSubmission = async () => {
        const payload = {
            ...formState
        };

        try {
            const result = await axios.post(formSparkUrl, payload);
            console.log(result);
            setMessage ({
                text: "Thanks for reaching out, message has been recieved."
            })
            setFormState(initialFormState);
        } catch (error) {
            console.log(error);
            setMessage ({
                text: "Sorry there was an error, please try again."
            })
        }
    };

    const updateFormControl = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {id, value } = event.target;
        const formKey = id as keyof FormState;
        const updatedFormState = {...formState};
        updatedFormState[formKey] = value;
        setFormState(updatedFormState);
    };

    return (
        <div className="contactme" id="contactme">
            <p className="contactme--title">contact me</p>
            <div className="contactme--container">
                <input 
                className="contactme--name" 
                onChange={updateFormControl}
                type="text"
                id="name"
                placeholder="name"
                value={formState.name} 
                />
                <div></div>
                <input 
                    className="contactme--email" 
                    onChange={updateFormControl}
                    type="text"
                    id="email"
                    placeholder="email"
                    value={formState.email} 
                />
                <div></div>
                <textarea 
                    className="contactme--message" 
                    onChange={updateFormControl}
                    id="message"
                    placeholder="message"
                    value={formState.message} 
                />
                {message && <div className="contactme--aftermessage">{message.text}</div>}
                <form onSubmit={submitForm}>
                    <button 
                    disabled={submitting}
                    className="contactme--submit">
                        {submitting ? "sending..." : "send"}
                    </button>
                </form>
                <a href="mailto:juchen3637@gmail.com" className="contactme--info--email2">
                    <p className="contactme--info--email">juchen3637@gmail.com</p>
                </a>
                <p className="contactme--info--number">+1 732-331-8174</p>
            </div>
        </div>
    )
}