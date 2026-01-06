import profilePic from './assets/profilePic.jpg'
import './Intro.css'

function Intro(){
    return(
        <section className='intro-container'>
            <img className='introImg' src={profilePic} alt="Keidy Lopez" />
            <p className='introP'>Hello! My name is Keidy and I’m a Massachusetts-based <span className='introSpan'>backend engineer</span> by trade,
             with hands-on experience across the <span className='introSpan'>full stack</span> through personal 
             projects. My primary interest lies in backend development, where 
             I enjoy designing and making <span className='introSpan'>APIs</span>, working with <span className='introSpan'>relational databases</span>, 
             and strengthening <span className='introSpan'>application security</span> using <span className='introSpan'>Java</span>, <span className='introSpan'>Spring Boot</span>, and 
             <span className='introSpan'>SQL</span> as my core tech stack.</p> 
        </section>

    );
};

export default Intro;