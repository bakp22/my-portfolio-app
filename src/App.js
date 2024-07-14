import logo from "./me.png"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="profile-info">
        <div className="App-content">
          <p className="name">Beren Akpinar</p>
          <p className='d1'> Junior undergraduate studying Computer Science and Neuroscience at Boston University</p>

          <p className='d2'>
            Interests: neurotechnology, robotics, software development, healthcare
          </p>
        </div>
        
        <img className="profile-image" width="500" height="500" src={logo} alt="Logo" />
      </div>


      </header>

      <div className="skills">

        <p text-align="right" className="skill-word" >Skills:</p>


          <div className="skill-list">
            <p className="Java">Java</p>
            <p className="python">Python</p>
            <p className="react">React</p>
            <p className="script">JavaScript</p>
            <p className="web">HTML/CSS</p>
          </div>
      
      </div>
 

    </div>
  );
}

export default App;
