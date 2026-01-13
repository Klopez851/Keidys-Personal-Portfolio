import resume from './assets/resume.pdf';
import './Footer.css'

function Footer(){
    return(
        <>
            <hr />

            <footer className='footerContainer'>

                {/*downloads the resume file*/}
                <a href={resume} download={'Keidy Lopez\'s Resume'}>
                    <button type='button' className='footerBtn'>Download Resume</button>
                </a>

                <p>This site is open source! Explore the code 
                    <a className='footerA' href="https://github.com/Klopez851/Notes-webapp" target="blank">here</a
                ></p>
                
                <p>&copy; {new Date().getFullYear()} Keidy's Personal Portfolio</p>
            </footer>
        </>
    );
};

export default Footer;