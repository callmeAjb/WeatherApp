import Search from "./mycomponents/search"
import Display from "./mycomponents/display"
import TestingApiG from "./mycomponents/Testing"
import React, { useState } from 'react';
 
function App() {

  function handleSearch(data) {
	setWeather(data)
}


  
  const [weather, setWeather] = useState(null);
  const [status, setStatus] = useState("idle");
  return (
    <div>

      <TestingApiG/>

      
      <h1>My Weather App</h1>
      <Search onSearch = {handleSearch} setStatus = {setStatus}/>
      <Display weather = {weather} status = {status}/>
    
    </div>
  )
}

export default App;
