import './styles.scss'


interface ExperienceProps {
    isToggled: boolean;
  }

function Experience ({isToggled}:ExperienceProps){
    return(
        <div className='experience'>
            
            <div className={`experience__leftBlock ${isToggled? 'dark' : 'trans'}`}>
            {!isToggled && (
        <div className="sun">
          <div className="sun-rays"></div>
        </div>
      )}
      {isToggled && (
        <>
        <div className="falling-star" style={{ left: '20%', animationDelay: '0s' }}></div>
            <div className="falling-star" style={{ left: '40%', animationDelay: '0.5s' }}></div>
            <div className="falling-star" style={{ left: '60%', animationDelay: '1s' }}></div>
            <div className="falling-star" style={{ left: '80%', animationDelay: '1.5s' }}></div>
            <div className="falling-star" style={{ left: '30%', animationDelay: '2s' }}></div>
            </>
      )}
                <h1>Experience</h1>
                <h4>2017 – 2019 Project Implementation Engineer  LTD “AIK-EKO”</h4>
                <p>Support and communication with clients.Meeting deadlines. Working with contracts</p>
                <h4>2019-2023 Heating systems engineer LTD “AISS_GROUP”</h4>
                <p>Search and communication with the client .Drawing up contracts .Drawing up technical specifications .Project management .Execution time control .Maintaining a corporate website</p>
                <h4>2023-2024 Heating systems engineer LTD “ABI_WORLD”</h4>
                <p>Search and communication with the client .Drawing up contracts .Drawing up technical specifications .Project management .Execution time control .Maintaining a corporate website</p>
            </div>
            <div className='experience__rightBlock'>
                <div className={`experience__education ${isToggled? 'dark' : 'trans'}`}>
                <div className="falling-star" style={{ left: '20%', animationDelay: '0s',animationDuration: '4s' }}></div>
                <div className="falling-star" style={{ left: '60%', animationDelay: '1s', animationDuration: '4s' }}></div>
            <div className="falling-star" style={{ left: '40%', animationDelay: '0.5s', animationDuration: '4s' }}></div>
          
            <div className="falling-star" style={{ left: '80%', animationDelay: '1.5s',animationDuration: '4s' }}></div>
                    <h2>Education</h2>
                    <h4> 2013 - 2019 Zaporizhzhya Technical National University Master - engineer.</h4>
                    <p>received a certificate from the French government that education is equivalent BAC+5</p>
                    <h4>2022 EPAM-SYSTEM course on frontend javascript, react - online format</h4>
                    <h4> 2024-2025 AFPA BAC+2 </h4>
              </div>
              <div className={`experience__hobbies ${isToggled? 'dark' : 'trans'}`}>
              <div className="falling-star" style={{ left: '20%', animationDelay: '1.5s',animationDuration: '4s' }}></div>
                <div className="falling-star" style={{ left: '60%', animationDelay: '2.5s',animationDuration: '4s' }}></div>
            <div className="falling-star" style={{ left: '40%', animationDelay: '2s',animationDuration: '4s' }}></div>
          
            <div className={"falling-star"} style={{ left: '80%', animationDelay: '2.5s',animationDuration: '4s' }}></div>
                <p>Sport</p>
                <p>3d model</p>
                <p>checkers</p>

              </div>

            </div >

        </div>
    )
}

export default Experience