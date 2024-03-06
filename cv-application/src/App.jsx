import { useState } from 'react';
import './App.css';
import HeaderForm from './Header/HeaderForm.jsx';
import HeaderDisplay from './Header/HeaderDisplay.jsx';
import JobInput from './ProfessionalX/JobForm.jsx'

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
          <JobInput id={'123'}/>
        </div>
        <div id='display'>
          <HeaderDisplay headerData={header}/>
        </div>
      </div>
    </>
  )
}

export default App
