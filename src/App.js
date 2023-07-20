import { useState } from 'react';
import './App.css';
import { Body } from './components/Body/Body';
import Header from './components/Header/Header';
import Joyride,{STATUS} from 'react-joyride';


function App() {

  const[{run,steps},setState] = useState({
    run:true,
    steps: [
      {
        content: <h2>Welcome ! Let's get started with this little tour</h2>,
        locale: {skip:<strong>SKIP</strong>},
        placement: "center",
        target: "body"
      },
      {
        content: <h2>You can switch between sections by clicking on them</h2>,
        locale: {skip:<strong>SKIP</strong>},
        placement: "bottom",
        target: "#tut5"
      },
      {
        content: <h2>Select the color-tones from the palette</h2>,
        locale: {skip:<strong>SKIP</strong>},
        placement: "bottom",
        target: "#tut2"
      },
      {
        content: <h2>Save your work from here</h2>,
        locale: {skip:<strong>SKIP</strong>},
        placement: "top",
        target: "#tut4"
      },
      {
        content: <h2>Your saved work will be previewed here</h2>,
        locale: {skip:<strong>SKIP</strong>},
        placement: "top",
        target: "#tut6"
      },
      {
        content: <h2>Download your crafted resume</h2>,
        locale: {skip:<strong>SKIP</strong>},
        placement: "bottom",
        target: "#tut3"
      }
      
      
    ]
  })

  return (
    <div className="App">
      <Joyride
        continuous
        callback={()=>{}}
        run={run}
        steps={steps}
        hideCloseButton
        scrollToFirstStep
        showSkipButton
        spotlightClicks
        showProgress
        styles={{
         options: {
          
            arrowColor: "black",
            backgroundColor: "teal",
            
            //button color
            primaryColor: "black",
            //text color
            textColor: "wheat ",
 
            zIndex: 1000
        }
     }}
      />
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
