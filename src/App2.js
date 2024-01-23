import React, { useState } from 'react'
import Header from './componets/Header/Header'
import Navbar from './componets/Navbar/Navbar'
import request from './helpers/request'
import Results from './componets/Results/Results'
import './App2.css'

const App = () => {
  const[selectedOption, setSelectedOption] = useState(request.fetchTrending);
  // console.log(selectedOption);
  return (
    <div className='app'>
      <Header/>
      <Navbar setSelectedOption={setSelectedOption}/>
      <Results selectedOption={selectedOption}/>
    </div>
  )
}

export default App