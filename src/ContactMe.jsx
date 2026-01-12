import { useState } from 'react';
import './ContactMe.css'

function ContactMe(){
    const [showForm, setShowForm] = useState(false);

    return(
        <section id='ContactMe'>
            <h1 className='contactMeH1'>Contact me</h1>

            <p className='contactMeP'>Like what you see? Lets connect!</p>
            <div className='contactMeBtnContainer'>
                <button className='contactMeBtn' onClick={()=>window.location.href="https://github.com/Klopez851"}>
                    Github
                </button>

                <button className='contactMeBtn' onClick={()=>window.location.href="www.linkedin.com/in/keidy-lopez-1361072a2"}>
                    LinkedIn
                </button>

    {/*add a form that pops up when u click the button for them to email personally*/}
                <button className='contactMeBtn' onClick={()=>setShowForm(prev => !prev)}>
                    Email
                </button>
            </div>

            <fieldset className={showForm ? 'contactMeFieldset':'hidden'}>
                <form action="mailto:keidy.y.lopez@gmail.com" method='get' className='contactMeForm'>
                    <input type="submit" value="Send Email" className='contactMeFormBtn'></input>
                    {/* <button className='contactMeFormBtn'>Submit</button>     */}
                    {/*figure our how to autogrow text area*/}            
                </form>
            </fieldset>
        </section>
    );
};

export default ContactMe;