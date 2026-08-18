import React, { useState } from 'react';
 
 

function Search({setWeather,setLoading}) {
const [city, setCity] = useState("");

  

  async function fetchData() {
	try {

    if (city === "") {
	alert("pls enter city");
    return
} 
    setLoading(true);
    let url = `https://wttr.in/${city}?format=j1`;
		const res = await fetch(url);
		const data = await res.json();

    console.log(data);
    setWeather(data);
    setLoading(false);
		return data;
    
	} catch (err) {
		console.error(err);
    setLoading(false);
	}
}

  
  
return (

  <div>
    <input type="text" onChange={(e) => setCity(e.target.value) } />
     <button type="button" onClick={fetchData}>search city</button>
  </div>
)
  
}

export default Search;