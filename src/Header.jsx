import { useState } from 'react';
import './Header.css'
import { FaBars } from "react-icons/fa";
import resume from './assets/resume.pdf';

function Header (){
    //{link:'',name:''},
    //this is an array container all the Nav bar links and names, update sections as needed
    const navOptions = [
        {link:'#Intro',name:'Intro'},
        {link:'#Projects',name:'Projects'},
        {link:'#Skills',name:'Skills'},
        // {link:'#Certifications',name:'Certifications'},
        {link:'#AboutMe',name:'About Me'},
        {link:'#FutureWork',name:'Future Work'},
        {link:'#ContactMe',name:'Contact Me'},
    ]

    //"create a boolean variable (openMenu) starting as false (useState(false)), 
    //and give me a function (setOpenMenu) to set the value of said var"
    const [openMenu, setOpenMenu] = useState(false);

    return(
        <header className='header-container'>
            {/*code for mobile nav bar*/}
            <div id='name-mobile'><a href="#Intro">Keidy Lopez</a></div>
            <button 
                onClick={() => setOpenMenu(prev => !prev)}
                className='hamburger-menu'>

                <FaBars id='hamburger-menu-icon'/>
            </button>

            <nav className= {openMenu ? 'nav-mobile-open' : 'nav-mobile-close'}>
                {navOptions.map(menuItem =>
                    <a className='HeaderA' key={menuItem.name}href={menuItem.link}>{menuItem.name}</a>
                 )}
            </nav>
            {/*end of code for mobile nav bar*/}


            {/*code for nav bar on screens 768px and up*/}
            <nav id='navContainer'>
                <div id='name'><a href="#Intro">Keidy Lopez</a></div>
                <div>
                    {/*iterates through 'navOptions' and generates navbar links*/}
                    {navOptions.map(menuItem =>
                        <a className='HeaderA' key={menuItem.name}href={menuItem.link}>{menuItem.name}</a>
                    )}
                 </div>
            </nav>
        </header>
    );

}
export default Header;