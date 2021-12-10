import React from 'react'
import { StyledProjects } from './ProjectsElements'
import APW from '../../images/apw dash.png'
import Trivia from '../../images/Screen Shot 2021-12-08 at 1.00.04 PM.png'
import Cooked from '../../images/homecooked dash.png'
import Button from '@mui/material/Button'

const Projects = () => {
    return (
        <StyledProjects id="projects">
            <h1>Projects</h1>
            <br />
            <div className="project">
                <div className="projecttext">
                    <h3>Audio Project Workspace</h3>
                    <div className="mobileimg">
                        <img src={APW} alt="apw" />
                        <div className="mobilebuttons">
                            <Button variant="outlined">
                                <a href="https://apw-app-4.netlify.app/" target='_blank' rel="noreferrer" aria-label="apw project">View Project</a>
                            </Button>
                            <Button variant="outlined">
                                <a href="https://github.com/tylerrice121/Audio-Project-Workspace-Frontend" target='_blank' rel="noreferrer" aria-label="apw git">View GitHub</a>
                            </Button>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus temporibus asperiores, quae fuga mollitia magnam animi iste voluptas aperiam dolores unde explicabo cupiditate accusantium totam dignissimos consequatur repellat. Molestias!</p>
                    <p>Technologies used:</p>
                    <div className="buttons">
                        <Button variant="outlined">
                            <a href="https://apw-app-4.netlify.app/" target='_blank' rel="noreferrer" aria-label="apw project">View Project</a>
                        </Button>
                        <Button variant="outlined">
                            <a href="https://github.com/tylerrice121/Audio-Project-Workspace-Frontend" target='_blank' rel="noreferrer" aria-label="apw git">View GitHub</a>
                        </Button>
                    </div>
                </div>
                <div className="projectimg">
                    <a href="https://apw-app-4.netlify.app/" target='_blank' rel="noreferrer" aria-label="apw project">
                        <img src={APW} alt="apw" />
                    </a>
                </div>
            </div>
            <div className="project2">
                <div className="projectimg">
                    <a href="https://homecooked99675.herokuapp.com/" target='_blank' rel="noreferrer" aria-label="home cooked project">
                        <img src={Cooked} alt="apw" />
                    </a>
                </div>
                <div className="projecttext">
                    <h3>HomeCooked</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus temporibus asperiores, quae fuga mollitia magnam animi iste voluptas aperiam dolores unde explicabo cupiditate accusantium totam dignissimos consequatur repellat. Molestias!</p>
                    <p>Technologies used:</p>
                    <div className="buttons">
                        <Button variant="outlined">
                            <a href="https://homecooked99675.herokuapp.com/" target='_blank' rel="noreferrer" aria-label="home cooked project">View Project</a>
                        </Button>
                        <Button variant="outlined">
                            <a href="https://github.com/tylerrice121/Recipe-App" target='_blank' rel="noreferrer" aria-label="home cooked git">View GitHub</a>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="project">
                <div className="projecttext">
                    <h3>Trivia Night</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto delectus temporibus asperiores, quae fuga mollitia magnam animi iste voluptas aperiam dolores unde explicabo cupiditate accusantium totam dignissimos consequatur repellat. Molestias!</p>
                    <p>Technologies used:</p>
                    <div className="buttons">
                        <Button variant="outlined">
                            <a href="https://tylerrice121.github.io/Project-1---Trivia-Night/" target='_blank' rel="noreferrer" aria-label="trivia project">View Project</a>
                        </Button>
                        <Button variant="outlined">
                            <a href="https://github.com/tylerrice121/Project-1---Trivia-Night" target='_blank' rel="noreferrer" aria-label="trivia git">View GitHub</a>
                        </Button>
                    </div>
                </div>
                <div className="projectimg">
                    <a href="https://tylerrice121.github.io/Project-1---Trivia-Night/" target='_blank' rel="noreferrer" aria-label="trivia project">
                        <img src={Trivia} alt="apw" />
                    </a>
                </div>
            </div>
        </StyledProjects>
    )
}

export default Projects