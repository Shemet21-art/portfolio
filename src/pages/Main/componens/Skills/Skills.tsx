import logoHtml from "../../../../common/images/html.png"
import logoCss  from "../../../../common/images/css.png"
import logoSass  from "../../../../common/images/sass.png"
import logoGit  from "../../../../common/images/git.png"
import logoFigma  from "../../../../common/images/figma.png"
import logoJs  from "../../../../common/images/js.png"

import './styles.scss'


function Skills(){ 
    return(
    <div className="skills ">
        <div className="skills__block"> 
            <img className="skills__img" src={logoHtml} alt="" />  
        </div>
        <div className="skills__block"> 
            <img className="skills__img" src={logoCss} alt="" />  
        </div>
        <div className="skills__block"> 
            <img className="skills__img" src={logoSass} alt="" />  
        </div>
        <div className="skills__block"> 
            <img className="skills__img" src={logoGit} alt="" />  
        </div>
        <div className="skills__block"> 
            <img className="skills__img" src={logoFigma} alt="" />  
        </div>
        <div className="skills__block"> 
            <img className="skills__img" src={logoJs} alt="" />  
        </div>
        
    </div>
    )
    
}

export default Skills