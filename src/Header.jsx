import { useState } from 'react';
import './Header.css'
import { FaBars } from "react-icons/fa";
import resume from './assets/resume.pdf';

function Header (){
    //{link:'',name:''},
    const navOptions = [
        {link:'#Intro',name:'Intro'},
        {link:'#Projects',name:'Projects'},
        {link:'#Skills',name:'Skills'},
        {link:'#Certifications',name:'Certifications'},
        {link:'#AboutMe',name:'About Me'},
        {link:'#FutureWork',name:'Future Work'},
        {link:'#ContactMe',name:'Contact Me'},
    ]
    const [openMenu, setOpenMenu] = useState(false);
    //"create a boolVar (openMenu) starting as false (useState(false)), and give me a function (setOpenMenu) to set the value of said var"
    return(
        <header className='header-container'>
            <button 
                onClick={() => setOpenMenu(prev => !prev)}
                className='hamburger-menu'>

                <FaBars size='1.5rem' color='white'/>

            </button>

            <nav className= {openMenu ? 'nav-mobile-open' : 'nav-mobile-close'}>
                {navOptions.map(menuItem =>
                    <a className='HeaderA' key={menuItem.name}href={menuItem.link}>{menuItem.name}</a>
                 )}
            </nav>

            <nav id='ipadAndUpNav'>
                {navOptions.map(menuItem =>
                    <a className='HeaderA' key={menuItem.name}href={menuItem.link}>{menuItem.name}</a>
                 )} 
            </nav>
        </header>
    );

}
export default Header;