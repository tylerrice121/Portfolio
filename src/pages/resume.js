import React from 'react'

import resume from '../images/Tyler Rice.pdf'
const Resume = () => {
    return (
        <embed  style={{position:"absolute", left: 0, top: 0, width:"100%", height:"100%"}} src={resume} type="application/pdf" />
    )
}

export default Resume