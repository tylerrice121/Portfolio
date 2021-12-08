import React from 'react'
import { StyledProjects } from './ProjectsElements'
import APW from '/Users/tylerrice/Code/Portfolio/public/images/apw dash.png'
import Trivia from '/Users/tylerrice/Code/Portfolio/public/images/Screen Shot 2021-12-08 at 1.00.04 PM.png'
import Cooked from '/Users/tylerrice/Code/Portfolio/public/images/homecooked dash.png'
import Button from '@mui/material/Button'

const Projects = () => {
    return (
        <StyledProjects id="projects">
            <h1>Projects</h1>
            <br />
            <div className="projecttext">
                <h3>APW</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus temporibus asperiores, quae fuga mollitia magnam animi iste voluptas aperiam dolores unde explicabo cupiditate accusantium totam dignissimos consequatur repellat. Molestias!</p>
                <Button variant="outlined">
                    <a href="https://apw-app-4.netlify.app/" target='_blank' rel="noreferrer" aria-label="apw project">View Project</a>
                </Button>
                <Button variant="outlined">
                    <a href="https://github.com/tylerrice121/Audio-Project-Workspace-Frontend" target='_blank' rel="noreferrer" aria-label="apw git">View on GitHub</a>
                </Button>
            </div>
            <div className="projectimg">
                <img src={APW} style={{width: "700px"}} alt="apw" />
            </div>
            <div className="projecttext">
                <h3>HomeCooked</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus temporibus asperiores, quae fuga mollitia magnam animi iste voluptas aperiam dolores unde explicabo cupiditate accusantium totam dignissimos consequatur repellat. Molestias!</p>
            </div>
            <div className="projectimg">
                <img src={Cooked} style={{width: "700px"}} alt="apw" />
            </div>
            <div className="projecttext">
                <h3>Trivia Night</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus temporibus asperiores, quae fuga mollitia magnam animi iste voluptas aperiam dolores unde explicabo cupiditate accusantium totam dignissimos consequatur repellat. Molestias!</p>
            </div>
            <div className="projectimg">
                <img src={Trivia} style={{width: "700px"}} alt="apw" />
            </div>
        </StyledProjects>
    )
}

export default Projects