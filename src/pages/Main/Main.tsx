import Banner from "./componens/Bannner/Banner";
import Experience from "./componens/Experience/Experience";
import Skills from "./componens/Skills/Skills";
import Works from "./componens/Works/Works";
import { useState } from "react"



function Main() {
  const[isToggled, setIsToggled] = useState<boolean>(false);

  const toggleHandler = (): void => {
    setIsToggled(!isToggled)
  };
 
    return (
      <>
        <Banner/>
        <Skills  isToggled={isToggled} toggleHandler={toggleHandler}/>
        <Experience  isToggled={isToggled}/>
        <Works/>
        </>
    );
  }
  
  export default Main;
  