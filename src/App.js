import josh from './josh.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <img src={josh} className="Picture" alt="logo" />
        <div className="About-me">
          <div className="Parent">
            <div className="Child">
              <h4 className="Is-humane">
                Josh
                is Humane.
              </h4>
              <p className="Title">
                Josh Lee, Accountant
              </p>
              <p>
                When I stumbled upon Humane, I was inspired by its mission and moved by the mountain of positive things each member had to say about the company. I didn't want to miss out on the opportunity to be part of a team so dedicated to its people and its vision for something revolutionary.
              </p>
              <div>
                <p>
                Josh is an experienced accountant and analyst with a passion for making a positive impact and building meaningful connections. He has a diverse professional background that ranges from, starting and operating a restaurant, to providing financial services for large software clients like NCR, Teradata, and MPS. Throughout his time at PwC and EY, he played an instrumental role in helping teams streamline and optimize data analysis processes. He is excited for the chance to join a team devoted to reshaping technology in our lives for a better human experience.
                </p>
              </div>
              <p className="Hire">hire Josh!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
