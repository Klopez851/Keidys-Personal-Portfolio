import ProjectCard from "./ProjectCard.jsx";
import './Projects.css';

function Projects(){
    // {imageUrl:,imageAlt:,projectTitle:,projectLink:,description:,techs[]},
    const projects =[
        {
            imageUrl:'/notesAPIProject.jpg',
            imageAlt:'A collage of sticky notes in different colors and shapes, covering a wall.',
            projectTitle:'Notes API',
            projectLink:'https://github.com/Klopez851/notesAPI',
            description:'This is the RESTful API for a personal Notes web application I’m building. The API is built and updated using Java, Spring Boot, and SQL with JPA, and it stores data in a local database. I’m currently working on a frontend that consumes this API, and I plan to add authentication, additional validation, and eventually host it with an external database. This project is my current focus.', 
            techs:['Java', 'Spring Boot', 'Spring Boot JPA', 'SQL']
        },
        {
            imageUrl:'/cliImg.jpg',
            imageAlt:'A computer screen displaying vibrant, colorful lines of code in C++',
            projectTitle:'CLI Task Tracker',
            projectLink:'https://github.com/Klopez851/taskTrackerCLI',
            description:'I built this simple command-line task tracker to practice working with JSON data using Jackson. The application has basic CRUD operations and stores tasks in a local JSON file, giving me hands-on experience with data serialization and deserialization. This project also helped me understand how Spring uses Jackson for handling JSON in APIs, which ties directly into my backend learning.',
            techs:['Java', 'Jackson', 'JSON']
        },
        {
            imageUrl:'/databaseImg.jpg',
            imageAlt:' A row of computer servers lined up in a dimly lit room, showcasing their sleek designs and blinking lights.  ',
            projectTitle:'Database Remake (Upcoming)',
            description:'I plan to remake a classroom group project where my teammates and I designed and normalized a relational database from scratch. The original project had three parts: documentation, reading, and technical implementation, and I was mainly in charge of the latter. I helped identify customer needs and business rules, determine entities and their relationships, and create tables that followed those rules. I was responsible for normalizing the tables and relationships, getting the tables up and running in the database, and ensuring all sample queries returned the expected output to confirm the database was set up correctly. This project gave me hands-on experience with creating schemas, defining entity relationships based on the identified business rules, and applying normalization principles to ensure data integrity. By remaking it, I aim to showcase my understanding of database design, best practices for data integrity, and my ability to contribute effectively in a team setting.',
            techs:['ERWin','SQL', 'MySQL', 'MySQL Workbench', 'Amazon EC2']
        },
        {
            imageUrl:'/smoothieImg.jpg',
            imageAlt:'Five colorful smoothies in mason jars sit on a rustic wooden table, showcasing vibrant hues and refreshing textures.',
            projectTitle:'Pec\'ish',
            description:'I contributed to a friend’s project by helping build the backend for a website (Pec’ish) using JavaScript, Node.js, and Express.js. My role included creating endpoints, setting up database tables, and ensuring the server responded correctly to client requests. I also contributed to the frontend by building the main sign-up and sign-in pages. This was my first time working with a backend, so the experience gave me hands-on practice building APIs, creating a relational database outside of the classroom, and collaborating on a codebase I didn’t fully own. It strengthened both my understanding of backend development and my ability to work effectively as part of a team.',
            techs: ['HTML', 'CSS', 'JavaScript', 'Express.js', 'Node.js', 'SQL']
        },
    ]
    return(
        <section className="projects-container">
            <h1 className="projectH1">Projects</h1>

            <p className="projectP">Here are some projects I’ve worked on recently! 
                Finished projects link to their GitHub repositories, 
                while others are works in progress or explain my 
                contributions to larger projects. You can find more on my 
                <a className="projectA" href="https://github.com/Klopez851" target="blank"> Github</a>
            </p>

            {projects.map((project)=>
                <ProjectCard
                    key={project.projectTitle}
                    imglink={project.imageUrl}
                    imgAlt={project.imageAlt}
                    projectTitle={project.projectTitle}
                    projectLink={project.projectLink}
                    description={project.description}
                    techs={project.techs}
                />
            )}
        </section>
    );
};

export default Projects;
