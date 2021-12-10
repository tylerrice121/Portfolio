import React from 'react'
import resume from '../images/Tyler Rice.png'
import { ResumeStyle } from '../styles'
import Button from '@mui/material/Button'


const Resume = () => {
    return (
        <ResumeStyle>
            <div>
                <Button variant="outlined">
                    <a href="https://drive.google.com/file/d/1a2_aSBfWtOyJuhAGk4-Y3e1Czxyt9hxF/view?usp=sharing" target='_blank' rel="noreferrer" aria-label="apw git">View GitHub</a>
                </Button>
                <img src={resume} alt="resume" />   
            </div>
        </ResumeStyle>
    )
}

export default Resume