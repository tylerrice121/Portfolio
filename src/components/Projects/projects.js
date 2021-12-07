import React from 'react'
import { StyledProjects } from './ProjectsElements'

const Projects = () => {
    return (
        <StyledProjects id="projects">
            <h1>Projects</h1>
            <br />
            <div className="project1text">
                <h3>APW</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus temporibus asperiores, quae fuga mollitia magnam animi iste voluptas aperiam dolores unde explicabo cupiditate accusantium totam dignissimos consequatur repellat. Molestias!</p>
                <a href="">View Deployed Project</a>
                <a href="">View on GitHub</a>
            </div>
            <div className="project1img">
            </div>
            <div className="project2text">
                <h3>HomeCooked</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus temporibus asperiores, quae fuga mollitia magnam animi iste voluptas aperiam dolores unde explicabo cupiditate accusantium totam dignissimos consequatur repellat. Molestias!</p>
            </div>
            <div className="project2img">
            </div>
            <div className="project3text">
                <h3>Trivia Night</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus temporibus asperiores, quae fuga mollitia magnam animi iste voluptas aperiam dolores unde explicabo cupiditate accusantium totam dignissimos consequatur repellat. Molestias!</p>
            </div>
            <div className="project3img">
            </div>
        </StyledProjects>
    )
}

export default Projects