 import React, { useState } from 'react';
 
 

function Search({onSearch, setStatus}) {
const [city, setCity] = useState("");

  

  async function fetchData() {
	try {

    if (city.trim() === "") {
	alert("pls enter city");
    return
}

    onSearch(null);
    setStatus("loading");
    let url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;
    
		const res = await fetch(url);
		const Ldata = await res.json();

    console.log(Ldata);

    if (!Ldata.results) {
 alert('City name not found!')
      
      return;
} 

    let latitude = Ldata.results[0].latitude;

    let longitude = Ldata.results[0].longitude;

    let wurl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code`;

    let resWurl = await fetch(wurl);
    let wdata = await resWurl.json();

    console.log(wdata);

    const LWdata = {
      weatherinfo: wdata,
      locationinfo: Ldata,
    }

    

    
    onSearch(LWdata);
    setStatus("success");
    setCity("");
		return LWdata;
    
    
	} catch (err) {
		console.error(err);
    setStatus("error");
    onSearch(null);

	} 
}

  
  
return (

  <div>
    <input type="text" value={city} onKeyDown={(e) => {
if (e.key === "Enter") {
	fetchData();
}
    
    }} onChange={(e) => setCity(e.target.value) } />
     <button type="button" onClick={fetchData}>search city</button>
  </div>
)
  
}

export default Search;