import './ProjectCard.css';
import { useState } from 'react';

//this is a dynamic card component that can display information based on the passed props
function ProjectCard({imglink, imgAlt, projectTitle, projectLink, description, techs}){

    //this useState is used to have a 'read more' feature for longer text, allowing for cards to 
    // display the same amount of text upfront, creating a neater look
    const [showMore, setShowMore]=useState(false)

    return(
        <div className="projectcard-container">

            { /*outside of an if statement the && returns the right side if the left side is truthy, else it returns 
            whatever is to the left*/}
            {imglink && <img className='ProjectCardImg' src={imglink} alt={imgAlt} />}


            {projectLink ?
                (<h2 className='ProjectCardH2'><a className='ProjectCardA' href={projectLink} target="blank">{projectTitle}</a></h2>) 
                :
                (<h2 className='ProjectCardH2'>{projectTitle}</h2>)
            }


            {description.length <= 390 ? 
                <p className='ProjectCardP'>{description}</p>
                :
                <>
                    <p className='ProjectCardPExtraText'>
                        {description.slice(0,390)}
                        <span class={showMore ? "extraTextHide": ""}>...</span>{/*if extra text is shown, this span will hide, and the extra text (line under this) will show*/}
                        <span className='ProjectCardP' class={showMore ? "": "extraTextHide"}>{" "+ description.slice(391)}</span>
                    </p>
                    
                    {/*this is the backbone of the 'read more' feature, it changes the value of the useState allowing for the extra text to show/hide */}
                    <button className='showMoreBtn' onClick={()=> setShowMore(prev=>!prev)}>{showMore ? 'show less': "show more"}</button>
                </>
            }


            {techs && (
                <div className='skills-container'>
                    {techs.map((lang)=><button key={lang} className='ProjectCardButton'>{lang}</button>)}
                </div>
                )
            }
        </div>
    );
};

export default ProjectCard;