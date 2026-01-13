import { useState } from 'react';
import './ContactMe.css'

function ContactMe(){
    //useState that sllow for 'send email' button to show/hide
    const [showForm, setShowForm] = useState(false);

    return(
        <section id='ContactMe'>

            <h1 className='contactMeH1'>Contact me</h1>

            <p className='contactMeP'>Like what you see? Lets connect!</p>

            <div className='contactMeBtnContainer'>
                <button 
                    className='contactMeBtn' 
                    onClick={()=>window.location.href="https://github.com/Klopez851"}>
                    Github
                </button>

                <button 
                    className='contactMeBtn' 
                    onClick={()=>window.location.href="https://www.linkedin.com/in/keidy-lopez-1361072a2"}>
                    LinkedIn
                </button>

                <button 
                    className='contactMeBtn' 
                    onClick={()=>setShowForm(prev => !prev)}>
                    Email
                </button>
            </div>

            {/*in the future this will be a proper fomr, hence why the send email 'button' is w/n a form and fieldset*/}
            <fieldset className={showForm ? 'contactMeFieldset':'hidden'}>
                <form action="mailto:keidy.y.lopez@gmail.com" method='get' className='contactMeForm'>

                    <input type="submit" value="Send Email" className='contactMeFormBtn'></input>     

                </form>
            </fieldset>
        </section>
    );
};

export default ContactMe;