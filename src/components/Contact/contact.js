import React from 'react'
import { StyledContact } from './ContactElements'
import { TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import emailjs from 'emailjs-com'
import { useState } from 'react'



const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'white',
    },
    '& .MuiInput': {
        color: 'white',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#1d7874',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'white',
            color: 'white',
        },
        '&:hover fieldset': {
            borderColor: '#705294',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#1d7874',
        },
    },
});

const Contact = () => {

    const [submitted, setSubmitted] = useState(false)

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_mbl9aw2', 'template_purab41', e.target, `${process.env.GATSBY_API_KEY}`)
          .then((result) => {
              setSubmitted(true)
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }

    return (
        <StyledContact id="contact">
            <h1>Contact Me</h1>
            <div className="formsection">
                <div className="email">
                    <a href="mailto: tylerrice121@gmail.com">tylerrice121@gmail.com</a>   
                </div>
                <div className="formdiv">
                    <form className="form" onSubmit={sendEmail}>
                        <CssTextField id="outlined-basic" variant='outlined' label="Name" InputLabelProps={{className: 'textfieldlabel'}} name="name"/>
                        <CssTextField id="outlined-basic" variant='outlined' label="Email" InputLabelProps={{className: 'textfieldlabel'}} name="email"/>
                        <CssTextField id="outlined-basic" variant='outlined' label="Message"  multiline rows={6}  InputLabelProps={{className: 'textfieldlabel'}} name="message"/>
                        <Button type="submit" variant="outlined">Submit</Button>
                    </form>
                </div>
                {submitted &&  
                    <p className="success">Thank you for your message! I'll get back to you shortly.</p>
                }
            </div>
        </StyledContact>
    )
}

export default Contact