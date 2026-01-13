import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { SiSpring } from "react-icons/si";
import IconCard from "./IconCard.jsx";
import './Skills.css'


function Skills(){
    //Skill list, update as skills are acquired
    //{icon:, name:}
    const skillList = [
        {icon:FaJava, name:'Java'},
        {icon:SiSpring, name:'Spring'},
        {icon:FaHtml5, name:'HTML'},
        {icon:FaCss3Alt, name:'CSS'},
        {icon:IoLogoJavascript, name:'Javascript'},
        {icon:FaPython, name:'Python'},
        {icon:DiMysql, name:'MySQL'},
        {icon:FaGitAlt, name:'Git'},
        {icon:FaGithub, name:'Github'}
        ];
    
    return(
        <section id="Skills">
            <h1 className="skillsH1">Skills</h1>        
            <div  className="skillsContainer">
                {/*Iterates through skill list array and generated icons*/}
                {skillList.map((skill) => 
                    <IconCard
                    key={skill.name}
                    icon = {skill.icon}
                    iconName={skill.name}
                    />
                )}
            </div>
        </section>

    );
};


export default Skills;