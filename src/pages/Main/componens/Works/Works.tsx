
import imgGit from "../../../../common/images/gitphoto.png"
import './styles.scss'

function Works(){
    return(
        <div className='Projects'>
        <h2>Projects</h2>
        <p> Links to some works in my repository</p>
        <a href=""><img src={imgGit} alt="" /></a>
    </div>
    )
   
}

export default Works