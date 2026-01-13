import './IconCard.css'

function IconCard({icon: Icon, iconName}){
    //by adding the : Icon, im turning the variable into an Icon component, so now everytime one uses <Icon/> 
    //it will apply to whatever was passed as the icon variable, which should be an icon tag name
    //for example for the react-icon <FaJava/> 'FaJava' should be passed to the icon prop
    return(
        <div className="iconCardContainer">
            <Icon className="icon"/>
            <p className='iconCarcP'>{iconName}</p>
        </div>
    );
};

export default IconCard;