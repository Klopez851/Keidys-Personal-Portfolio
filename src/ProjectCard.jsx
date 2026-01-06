import './ProjectCard.css';
import { useState } from 'react';

function ProjectCard({imglink, imgAlt, projectTitle, projectLink, description, techs}){

    const [showMore, setShowMore]=useState(false)

    return(
        <div className="projectcard-container">
            { /*outside of an if statement the && returns the right side if the left side is truthy, else it returns left*/}
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
                <p className='ProjectCardPExtraText'>{description.slice(0,390)}
                <span class={showMore ? "extraTextHide": ""}>...</span>
                <span className='ProjectCardP' class={showMore ? "": "extraTextHide"}>{" "+ description.slice(391)}</span>
                </p>
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