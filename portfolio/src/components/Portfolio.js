import '../styles/Portfolio.css';
import Swal from 'sweetalert2';

// Images
import laptopWindow from "../images/laptop-window.png"
import paintSwipe1 from "../images/paint-swipe.png"
import paintSwipe2 from "../images/paint-swipe2.png"
import paintSwipe3 from "../images/paint-swipe3.png"
import paintSwipe4 from "../images/paint-swipe4.png"

// I need to style the tech-list class
function Portfolio() {
    // modal("title", "<p>Flask</p> <p>HTML</p> <p>CSS</p>", "<p>Description of project</p>", "github URL")
    const modal = (title, paint, technologies, description, githubLink) => {
        Swal.fire({
            title: `<strong>${title}</strong><img src=${paint} class="modal-paint" alt="paint swipe">`,
            imageUrl: "https://unsplash.it/1000/350",
            imageWidth: "90%",
            imageHeight: "auto",
            imageAlt: "Custom image",
            html: `
                <div class="modal-tech-list">
                    ${technologies}
                </div>
                <div>
                    <p>${description}</p>
                </div>
            `,
            showConfirmButton: false,
            showCancelButton: true,
            focusConfirm: false,
            cancelButtonText: `Close`,
            cancelButtonAriaLabel: "Close",
            footer: `<a href="${githubLink}" target="_blank">View code on Github</a>`
        });
    }

    return (
        <main className="portfolio">
            <div className="content-container">
                <div className="portfolio-content">
                    <h1>Projects</h1>
                    <p className='page-text-sample'>Here are my projects</p>
                    <div className="project-group">
                        <div className="project">
                            <img src={laptopWindow} className="project-img" alt="project1"></img>
                            <h1>Instructor Index</h1>
                            <p>
                                This site is a full back and front end using flask and RESTapi.
                                I used this as a project to challenge myself in using python for a
                                backend with SQLAlchemy.
                            </p>
                            <button className="project-button" onClick={() => modal("Instructor Index",
                                paintSwipe1,
                                "<p>Flask</p> <p>HTML</p> <p>CSS</p>",
                                "<p>Description of project that I used this great tech in. I learned a lot\
                                from it and will never forget how to use this technology for sure. I dont\
                                know how anyone could forget any of this crazy code</p>",
                                "https://github.com/DAlsabrook/Instructor_Index") }>Details
                            </button>
                        </div>
                        <div className="project">
                            <img src={laptopWindow} className="project-img" alt="project1"></img>
                            <h1>Portfolio Page</h1>
                            <p>
                                I LOVED making this site and learning so much about the REACT
                                framework. Learning how to build and import components to use was
                                super interesting. I made this site with accessability and having
                                a responsive design in mind.
                            </p>
                            <button className="project-button" onClick={() => modal("Instructor Index",
                                paintSwipe2,
                                "<p>REACT</p> <p>HTML</p> <p>CSS</p>",
                                "<p>Description of project that I used this great tech in. I learned a lot\
                                from it and will never forget how to use this technology for sure. I dont\
                                know how anyone could forget any of this crazy code</p>",
                                "https://github.com/DAlsabrook/Portfolio_Web_page")}>Details
                            </button>
                        </div>
                    </div>
                    <div className="project-group">
                        <div className="project">
                            <img src={laptopWindow} className="project-img" alt="project1"></img>
                            <h1>The Shallot</h1>
                            <p>
                                This site is a fully front end sequential discovery puzzle.
                                I only used html, javascript, and CSS to make this site.
                            </p>
                            <button className="project-button" onClick={() => modal("Instructor Index",
                                paintSwipe3,
                                "<p>JavaScript</p> <p>HTML</p> <p>CSS</p>",
                                "<p>Description of project that I used this great tech in. I learned a lot\
                                from it and will never forget how to use this technology for sure. I dont\
                                know how anyone could forget any of this crazy code</p>",
                                "https://github.com/DAlsabrook/Instructor_Index")}>Details
                            </button>
                        </div>
                        <div className="project">
                            <img src={laptopWindow} className="project-img" alt="project1"></img>
                            <h1>TuBrosWindows</h1>
                            <p>
                                This site is a full back and front end using flask and RESTapi.
                                I used this as a project to challenge myself in using python for a
                                backend with SQLAlchemy.
                            </p>
                            <button className="project-button" onClick={() => modal("Instructor Index",
                                paintSwipe4,
                                "<p>Flask</p> <p>HTML</p> <p>CSS</p>",
                                "<p>Description of project that I used this great tech in. I learned a lot\
                                from it and will never forget how to use this technology for sure. I dont\
                                know how anyone could forget any of this crazy code</p>",
                                "https://github.com/DAlsabrook/Instructor_Index")}>Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Portfolio;
