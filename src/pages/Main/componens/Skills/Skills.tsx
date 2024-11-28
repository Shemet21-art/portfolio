import logoHtml from "../../../../common/images/html.png"
import logoCss  from "../../../../common/images/css.png"
import logoSass  from "../../../../common/images/sass.png"
import logoGit  from "../../../../common/images/git.png"
import logoFigma  from "../../../../common/images/figma.png"
import logoJs  from "../../../../common/images/js.png"
import logoTs  from "../../../../common/images/ts.png"
import logoVs  from "../../../../common/images/vscode.png"
import logoReact  from "../../../../common/images/react.png"
import logoBoots from "../../../../common/images/bootstrap.svg"

import './styles.scss'

interface SkillsProps {
    isToggled: boolean;
    toggleHandler: () => void; // Функция для переключения состояния
  }



function Skills({isToggled,toggleHandler}:SkillsProps){ 

    

    return(
    <div className={`skills ${isToggled? 'dark' : 'light'}`}>
        <div className="skills__wrapperSwitch">
        <p className="darkText">White</p>
        <label className="switch"> 
        <input type="checkbox" checked={isToggled} onChange={toggleHandler} />
        <span className="slider"></span>
      </label>
      <p className="lightText">Black</p>
        </div>
   
        <div className="skills__container">
        <div className=" skills__row">
        <div className={`skills__block ${isToggled?  'light' : 'dark' }`}> 
            <img className="skills__img" src={logoHtml} alt="" /> 
            <p className={`skills__textBlock ${isToggled? 'darkText' :'lightText' }`}>HTML</p> 
        </div>
        <div className={`skills__block ${isToggled?  'light' : 'dark' }`}> 
            <img className="skills__img" src={logoCss} alt="" /> 
            <p className={`skills__textBlock ${isToggled? 'darkText' :'lightText' }`}>CSS</p>  
        </div>
        <div className={`skills__block ${isToggled?  'light' : 'dark' }`}> 
            <img className="skills__img" src={logoSass} alt="" /> 
            <p className={`skills__textBlock ${isToggled? 'darkText' :'lightText' }`}>SASS</p> 
        </div>
        <div className={`skills__block ${isToggled?  'light' : 'dark' }`}> 
            <img className="skills__img" src={logoGit} alt="" />
            <p className={`skills__textBlock ${isToggled? 'darkText' :'lightText' }`}>GIT</p>  
        </div>
        <div className={`skills__block ${isToggled?  'light' : 'dark' }`}> 
            <img className="skills__img" src={logoFigma} alt="" />
            <p className={`skills__textBlock ${isToggled? 'darkText' :'lightText' }`}>FIGMA</p> 
        </div>
        </div>
        <div className="skills__row ">
        <div className={`skills__block ${isToggled?  'light' : 'dark' }`}> 
            <img className="skills__img" src={logoJs} alt="" /> 
            <p className={`skills__textBlock ${isToggled? 'darkText' :'lightText' }`}>JS</p> 
        </div>
        <div className={`skills__block ${isToggled?  'light' : 'dark' }`}> 
            <img className="skills__img" src={logoTs} alt="" />
            <p className={`skills__textBlock ${isToggled? 'darkText' :'lightText' }`}>TS</p>  
        </div>
        <div className={`skills__block ${isToggled?  'light' : 'dark' }`}> 
            <img className="skills__img" src={logoVs} alt="" /> 
            <p className={`skills__textBlock ${isToggled? 'darkText' :'lightText' }`}>VSCode</p> 
        </div>
        <div className={`skills__block ${isToggled?  'light' : 'dark' }`}> 
            <img className="skills__img" src={logoReact} alt="" />
            <p className={`skills__textBlock ${isToggled? 'darkText' :'lightText' }`}>React</p>  
        </div>
        <div className={`skills__block ${isToggled?  'light' : 'dark' }`}> 
            <img className="skills__img" src={logoBoots} alt="" />
            <p className={`skills__textBlock ${isToggled? 'darkText' :'lightText' }`}>Bootstrap</p>  
        </div>
        </div>
        </div>
    </div>
    )
    
}

export default Skills