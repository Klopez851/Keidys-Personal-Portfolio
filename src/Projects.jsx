import { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";
import "./Projects.css";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

function Projects() {
    // Project array
    const projects = [
        {
            imageUrl: "./notesAPIProject.jpg",
            imageAlt: "A collage of sticky notes in different colors and shapes, covering a wall.",
            projectTitle: "Clarity API",
            projectLink: "https://github.com/Klopez851/ClarityAPI",
            description: "This is the RESTful API for a personal notes web application I’m building. The API is built and updated using Java, Spring Boot, and SQL with JPA, and it stores data in a local database. The frontend that will consume this API is part of future plans, but the current focus is on automated unit testing. This project is my current focus.",
            techs: [
                "Java",
                "Spring Boot",
                "Spring Security",
                "JWT",
                "MySQL",
                "Spring Data JPA",
                "JPA/Hibernate",
                "Docker",
                "Junit 5",
                "Rest Assured",
            ],
        },
        {
            imageUrl: "./cliImg.jpg",
            imageAlt: "A computer screen displaying vibrant, colorful lines of code in C++",
            projectTitle: "CLI Task Tracker",
            projectLink: "https://github.com/Klopez851/taskTrackerCLI",
            description:
                "I built this simple command-line task tracker to practice working with JSON data using Jackson. The application has basic CRUD operations and stores tasks in a local JSON file, giving me hands-on experience with data serialization and deserialization. This project also helped me understand how Spring uses Jackson for handling JSON in APIs, which ties directly into my backend learning.",
            techs: ["Java", "Jackson", "JSON"],
        },
        {
            imageUrl: "./databaseImg.jpg",
            imageAlt: "A row of computer servers lined up in a dimly lit room, showcasing their sleek designs and blinking lights.",
            projectTitle: "Database Remake (Upcoming)",
            description:
                "I plan to remake a classroom group project where my teammates and I designed and normalized a relational database from scratch. The original project had three parts: documentation, reading, and technical implementation, and I was mainly in charge of the latter. I helped identify customer needs and business rules, determine entities and their relationships, and create tables that followed those rules. I was responsible for normalizing the tables and relationships, getting the tables up and running in the database, and ensuring all sample queries returned the expected output to confirm the database was set up correctly.",
            techs: ["ERWin", "SQL", "MySQL", "MySQL Workbench", "Amazon EC2"],
        },
        {
            imageUrl: "./smoothieImg.jpg",
            imageAlt: "Five colorful smoothies in mason jars sit on a rustic wooden table, showcasing vibrant hues and refreshing textures.",
            projectTitle: "Pec'ish",
            description:
                "I contributed to a friend’s project by helping build the backend for a website (Pec’ish) using JavaScript, Node.js, and Express.js. My role included creating endpoints, setting up database tables, and ensuring the server responded correctly to client requests. I also contributed to the frontend by building the main sign-up and sign-in pages.",
            techs: ["HTML", "CSS", "JavaScript", "Express.js", "Node.js", "SQL"],
        },
    ];

    {/*Functions for prev and next button*/}
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? projects.length - 1 : prev - 1
        );
    };

    const currentProject = projects[currentIndex];



    return (
        <section className="projects-container" id="Projects">

            <h1 className="projectH1">Projects</h1>

            <p className="projectP">
                Here are some projects I’ve worked on recently! Finished projects
                link to their GitHub repositories, while others are works in
                progress or explain my contributions to larger projects. You can
                find more on my{" "}
                <a className="projectA" href="https://github.com/Klopez851" target="_blank">GitHub</a>!
            </p>

            <div className="carouselContainer">
                <button className="carouselButton" onClick={handlePrevious}>
                    <GrFormPrevious />
                </button>

                <ProjectCard
                    imglink={currentProject.imageUrl}
                    imgAlt={currentProject.imageAlt}
                    projectTitle={currentProject.projectTitle}
                    projectLink={currentProject.projectLink}
                    description={currentProject.description}
                    techs={currentProject.techs}
                />

                <button className="carouselButton" onClick={handleNext}>
                    <GrFormNext />
                </button>
            </div>

            <p className="carousel-indicator">
                {currentIndex + 1} / {projects.length}
            </p>

        </section>
    );
}

export default Projects;