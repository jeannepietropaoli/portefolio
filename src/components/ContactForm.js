import React from "react";
import emailjs from '@emailjs/browser';
import paperPlane from "../assets/paper-plane-2.png";
import "../styles/ContactForm.css";
import { useTranslation } from "react-i18next";

export default function ContactForm(props) {
    const [isSent, setIsSent] = React.useState(false);
    const [formData, setFormData] = React.useState({
        form_name: "",
        email: "",
        message: "",
    });
    const paperPlaneRef = React.useRef(null);
    const paperPlaneContainerRef = React.useRef(null);

    const { t } = useTranslation('contactForm');

    const inputs = Array.from(document.querySelectorAll('input, textarea'));

    const defaultPlaceholders = {
        form_name : t("placeholders.form_name"),
        email :  t("placeholders.email"),
        message :  t("placeholders.message")
    }

    const inputsErrorMessages = {
        form_name : t("errorMessages.form_name"),
        email : t("errorMessages.email"),
        message : t("errorMessages.message")
    }

    function handleChange(event) {
        if(isInputInvalid(event.target)) {
            alertInputIsInvalid(event.target);
        }
        else {
            alertInputIsValid(event.target);
        }
        setFormData(prevFormData => {
            return (
                {
                    ...prevFormData,
                    [event.target.name]: event.target.value,
                }
            )
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        inputs.some(input => isInputInvalid(input))
            ? alertInputIsInvalid(inputs.find(input => isInputInvalid(input)))
            : sendEmail(event);
    }

    function resetForm() {
        inputs.forEach(input => {
            input.value = "";
            input.placeholder = defaultPlaceholders[input.name];
            input.setCustomValidity('');
        });
        setFormData({
            form_name: "",
            email: "",
            message: "",
        });
    }

    function isInputInvalid(input) {
        return input.value==="" || input.validity.valueMissing || input.validity.typeMismatch || input.validity.patternMismatch;
    }

    function alertInputIsValid(input) {
        input.setCustomValidity('');
    }

    function alertInputIsInvalid(input) {
        if (input.value === "") {
            input.placeholder = inputsErrorMessages[input.name]
            input.setCustomValidity(" ")
        }
        else {
            input.setCustomValidity(inputsErrorMessages[input.name]);
        }
        input.reportValidity();
    }

    function sendEmail(event) {
        const form = event.currentTarget;
        event.preventDefault();
        emailjs.sendForm("service_h2q1gxf", "template_izdp388", form, "vPC7QtDI-tQ29CDzB")
          .then((result) => {
              triggerSubmitButtonAnimation();
                setIsSent(true);
                resetForm();
          }, (error) => {
              console.log(error.text);
          });
    }

    function triggerSubmitButtonAnimation() {
        paperPlaneContainerRef.current.classList.add("submit-button-animate");
        paperPlaneRef.current.classList.add("paper-plane-animate");
    }

    return (
        
        <form className="contact--form" onSubmit={handleSubmit}>
            <input onChange={handleChange} name="form_name" type="text" placeholder={defaultPlaceholders.form_name} />
            <input onChange={handleChange} name="email" type="email" placeholder={defaultPlaceholders.email} />
            <textarea onChange={handleChange} name="message" placeholder={defaultPlaceholders.message}></textarea>
            <button type="submit" disabled={isSent} className="submit-button">
                <div ref={paperPlaneContainerRef} className="paper-plane-container">
                    <img src={paperPlane} ref={paperPlaneRef} />
                </div>
            </button>
        </form>
    )
}