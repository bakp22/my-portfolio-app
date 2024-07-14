import logo from "./me.png"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="App-content">
        <p className="name">Beren Akpinar</p>
        <p className='d1'> Junior undergraduate studying Computer Science and Neuroscience <br></br> 
                                    at Boston University</p>

         <p className='d2'>
            Interests: neurotechnology, robotics, software development, healthcare
        </p>

      
        
      </div>
        
      <img width="300" height="300" src={logo} alt="Logo" />

        <ul className="skills-list">
          <li>☕ Java</li>
          <li>🐍 Python</li>
          <li>⚛ React</li>
          <li>📝 JavaScript</li>
          <li>🕸️ HTML/CSS</li>
        </ul>

        <button className='Github'>GitHub</button>


      </header>

   

      

 

    </div>
  );
}

export default App;
