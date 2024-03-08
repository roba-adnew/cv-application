import { useState } from 'react';
import './App.css';
import HeaderForm from './Header/HeaderForm.jsx';
import HeaderDisplay from './Header/HeaderDisplay.jsx';
import ProfExperienceForm from './ProfExperience/ProfExperienceForm.jsx';


function App() {
  const [header, setHeader] = useState(() => ({
    name: '',
    phone: '',
    email: '',
    address: '',
    linkedin: '',
    github: ''
  }));

  function headerSubmitHandler(updatedHeader) {
    setHeader({...updatedHeader})
  }

  return (
    <>
      <div id='app'>
        <div id='form'>
          <HeaderForm submitHandler={headerSubmitHandler}/>
          <ProfExperienceForm />
        </div>
        <div id='display'>
          <HeaderDisplay headerData={header}/>
        </div>
      </div>
    </>
  )
}

export default App;