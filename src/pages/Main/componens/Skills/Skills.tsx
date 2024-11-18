import logoHtml from "../../../../common/images/html.png"
import logoCss  from "../../../../common/images/css.png"
import logoSass  from "../../../../common/images/sass.png"
import logoGit  from "../../../../common/images/git.png"
import logoFigma  from "../../../../common/images/figma.png"
import logoJs  from "../../../../common/images/js.png"
import logoTs  from "../../../../common/images/ts.png"
import logoVs  from "../../../../common/images/vscode.png"
import logoReact  from "../../../../common/images/react.png"

import './styles.scss'


function Skills(){ 
    return(
    <div className="skills ">
        <div className=" skills__row">
        <div className="skills__block"> 
            <img className="skills__img" src={logoHtml} alt="" /> 
            <p className="skills__textBlock">HTML</p> 
        </div>
        <div className="skills__block"> 
            <img className="skills__img" src={logoCss} alt="" /> 
            <p className="skills__textBlock">CSS</p>  
        </div>
        <div className="skills__block"> 
            <img className="skills__img" src={logoSass} alt="" /> 
            <p className="skills__textBlock">SASS</p> 
        </div>
        <div className="skills__block"> 
            <img className="skills__img" src={logoGit} alt="" />
            <p className="skills__textBlock">GIT</p>  
        </div>
        </div>
        <div className="skills__row ">
        <div className="skills__block"> 
            <img className="skills__img" src={logoFigma} alt="" />
            <p className="skills__textBlock">FIGMA</p> 
        </div>
        <div className="skills__block"> 
            <img className="skills__img" src={logoJs} alt="" /> 
            <p className="skills__textBlock">JS</p> 
        </div>
        <div className="skills__block"> 
            <img className="skills__img" src={logoTs} alt="" />
            <p className="skills__textBlock">TS</p>  
        </div>
        <div className="skills__block"> 
            <img className="skills__img" src={logoVs} alt="" /> 
            <p className="skills__textBlock">VSCode</p> 
        </div>
        <div className="skills__block"> 
            <img className="skills__img" src={logoReact} alt="" />
            <p className="skills__textBlock">React</p>  
        </div>
        </div>
        
        
    </div>
    )
    
}

export default Skills