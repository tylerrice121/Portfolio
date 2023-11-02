import React from 'react'
import { StyledProjects } from './ProjectsElements'
import APW from '../../images/apw dash.png'
import Trivia from '../../images/Screen Shot 2021-12-08 at 1.00.04 PM.png'
import Cooked from '../../images/homecooked dash.png'
import Beat from '../../images/1.png'
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
                    <p>APW is a full CRUD application with authorization that allows users to keep track of their audio projects. Users can upload images for the project and mp3s for the songs within those projects. The user can also add todo lists for each song within the projects to keep track of what needs to be done to finish the album. The frontend of this application was done in React.js and the backend was done with Node.js, Express and Mongoose.</p>
                    <div className='techno'>
                        <p>Technologies used:</p>
                        <p className="technologies">React Firebase Node.js Express JavaScript SASS Mongodb EJS</p>
                    </div>
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
                    <a href="https://homecookedrecipes-3bf8b4829cd5.herokuapp.com/" target='_blank' rel="noreferrer" aria-label="home cooked project">
                        <img src={Cooked} alt="cooked" />
                    </a>
                </div>
                <div className="projecttext">
                    <h3>HomeCooked</h3>
                    <div className="mobileimg">
                        <img className="homecooked" src={Cooked} alt="cooked" />
                        <div className="mobilebuttons">
                            <Button variant="outlined">
                                <a href="https://homecookedrecipes-3bf8b4829cd5.herokuapp.com/" target='_blank' rel="noreferrer" aria-label="home cooked project">View Project</a>
                            </Button>
                            <Button variant="outlined">
                                <a href="https://github.com/tylerrice121/Recipe-App" target='_blank' rel="noreferrer" aria-label="home cooked git">View GitHub</a>
                            </Button>
                        </div>
                    </div>
                    <p>HomeCooked is a fully functional CRUD application created with Node.js. It allows users to view a variety of different recipes as well as add / edit recipes of their own. The application includes authentication and authorization. It also allows users to upload and replace images for their 'MyRecipes' tab.</p>
                    <div className='techno'>
                        <p>Technologies used:</p>
                        <p className="technologies">Node.js Express JavaScript jQuery CSS Mongodb Cloudinary EJS</p>
                    </div>
                    <div className="buttons">
                        <Button variant="outlined">
                            <a href="https://homecookedrecipes-3bf8b4829cd5.herokuapp.com/" target='_blank' rel="noreferrer" aria-label="home cooked project">View Project</a>
                        </Button>
                        <Button variant="outlined">
                            <a href="https://github.com/tylerrice121/Recipe-App" target='_blank' rel="noreferrer" aria-label="home cooked git">View GitHub</a>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="project">
                <div className="projecttext">
                    <h3>TR Beat Pad</h3>
                    <div className="mobileimg">
                        <img src={Beat} alt="trivia" />
                        <div className="mobilebuttons">
                            <Button variant="outlined">
                                <a href="https://trbeatpad.netlify.app/" target='_blank' rel="noreferrer" aria-label="beat project">View Project</a>
                            </Button>
                            <Button variant="outlined">
                                <a href="https://github.com/tylerrice121/trdrumset" target='_blank' rel="noreferrer" aria-label="beat git">View GitHub</a>
                            </Button>
                        </div>
                    </div>
                    <p>The TR Beat Pad is a fully functional and responsive audio triggering device. The user can touch each pad and trigger a sound with preloaded audio files that were created in Pro Tools and Ableton. This application works on touch screens as well as desktops. When on the desktop - the user can trigger each sound using these keys: 'W E R A S D'.</p>
                    <div className='techno'>
                        <p>Technologies used:</p>
                        <p className="technologies">React JavaScript CSS SASS ProTools Ableton</p>
                    </div>
                    <div className="buttons">
                        <Button variant="outlined">
                            <a href="https://trbeatpad.netlify.app/" target='_blank' rel="noreferrer" aria-label="beat project">View Project</a>
                        </Button>
                        <Button variant="outlined">
                            <a href="https://github.com/tylerrice121/trdrumset" target='_blank' rel="noreferrer" aria-label="beat git">View GitHub</a>
                        </Button>
                    </div>
                </div>
                <div className="projectimg">
                    <a href="https://trbeatpad.netlify.app/" target='_blank' rel="noreferrer" aria-label="beat project">
                        <img src={Beat} alt="trivia" />
                    </a>
                </div>
            </div>


            <div className="project2">
                <div className="projectimg">
                    <a href="https://tylerrice121.github.io/Project-1---Trivia-Night/" target='_blank' rel="noreferrer" aria-label="trivia project">
                        <img src={Trivia} alt="cooked" />
                    </a>
                </div>
                <div className="projecttext">
                    <h3>Trivia Night</h3>
                    <div className="mobileimg">
                        <img className="homecooked" src={Trivia} alt="trivia" />
                        <div className="mobilebuttons">
                            <Button variant="outlined">
                                <a href="https://tylerrice121.github.io/Project-1---Trivia-Night/" target='_blank' rel="noreferrer" aria-label="trivia project">View Project</a>
                            </Button>
                            <Button variant="outlined">
                                <a href="https://github.com/tylerrice121/Project-1---Trivia-Night" target='_blank' rel="noreferrer" aria-label="trivia git">View GitHub</a>
                            </Button>
                        </div>
                    </div>
                    <p>Trivia Night is a front end trivia application with dynamically produced trivia questions.  It allows users to play through the game and see their score at the end.  It was built with JavaScript, CSS, HTML and AJAX to access a third party API.</p>
                    <div className='techno'>
                        <p>Technologies used:</p>
                        <p className="technologies">JavaScript jQuery HTML CSS OpenTB-Database</p>
                    </div>
                    <div className="buttons">
                        <Button variant="outlined">
                            <a href="https://tylerrice121.github.io/Project-1---Trivia-Night/" target='_blank' rel="noreferrer" aria-label="trivia project">View Project</a>
                        </Button>
                        <Button variant="outlined">
                            <a href="https://github.com/tylerrice121/Project-1---Trivia-Night" target='_blank' rel="noreferrer" aria-label="trivia git">View GitHub</a>
                        </Button>
                    </div>
                </div>
            </div>
        </StyledProjects>
    )
}

export default Projects