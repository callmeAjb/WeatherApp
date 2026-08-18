import Search from "./mycomponents/search"
import Display from "./mycomponents/display"
import React, { useState } from 'react';
 
function App() {
   const [weather, setWeather] = useState(null);
  const [Loading, setLoading] = useState(false);
  return (
    <div>
      <h1>My Weather App</h1>
      <Search setWeather = {setWeather} setLoading = {setLoading}/>
      <Display weather = {weather} Loading = {Loading}/>
    
    </div>
  )
}

export default App;
