import { useState } from 'react';
import './Header.css'
import { FaBars } from "react-icons/fa";

function Header (){
    //{link:'',name:''},
    const navOptions = [
        {link:'',name:'Intro'},
        {link:'',name:'Projects'},
        {link:'',name:'Skills'},
        {link:'',name:'Certifications'},
        {link:'',name:'About Me'},
        {link:'',name:'Future Work'},
        {link:'',name:'Contact Me'},
        {link:'',name:'Resume'},
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