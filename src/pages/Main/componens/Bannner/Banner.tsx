import "./styles.scss";
import bannerIMG from "../../../../common/images/photo_2024-11-06_10-04-55-removebg-preview.png";
import { SocialIcon } from "react-social-icons";

function Banner ( ){ 
    return(
<div className="banner">
    <div className="banner__wrapperText"> 
        <div>
        <p className="banner__subtitle bold brown">About me </p>
        <h3  className="banner__title"> Shemet Ihor</h3>
        <p className="banner__subtitle">Engineer + junior Web Deweloper</p>
        <p className="text">I created this support</p>
        <p className="text">using <span className="banner__textReact">React</span> framework</p>
        
        </div>
        <div className="containerLogo">
		<span className="react-logo">
			<span className="nucleo"></span>
		</span>
    </div>
    </div>
    
    <div className="banner__img">
        <img src={bannerIMG} alt="" />
    </div>  
    <div className="banner__mediaBtnsWrapper">
        <SocialIcon style={{height:"30px", width:"30px"}} url="https://t.me/Shemis"/>
        <SocialIcon style={{height:"30px", width:"30px"}} url="https://www.linkedin.com/in/igor-shemet-54b91a209/"/>
        <SocialIcon style={{height:"30px", width:"30px"}} url="https://github.com/Shemet21-art"/>
        </div>  
</div>
    )

}

export default Banner