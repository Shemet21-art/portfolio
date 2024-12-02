
import imgGit from "../../../../common/images/gitphoto.png"
import './styles.scss'

function Works(){
    return(
        <div className='projects'>
            
        <h2 className='projects__title'>Projects</h2>
        <div className='projects__wrapperTitle' >
        <p  className='projects__subTitle'> Links to some works in my repository</p>
        <a  className='projects__gitIcon' href="https://github.com/shemetWebDev"><img src={imgGit} alt="" /></a>
        </div>
        <div className="projects__cardsWrapper">
            <div className="projects__card">
                <img src="" alt="" />
                <div className="projects__cardContent">
                    <p>Text Project </p>
                </div>

            </div>

        </div>
    </div>
    )
   
}

export default Works