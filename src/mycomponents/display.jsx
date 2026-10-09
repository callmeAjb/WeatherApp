function Display({ weather, status }) {

if (status === "idle") {
      
      return (<h2>enter city name</h2>) ;
}
  if (status === "loading") {
	return (<p>loading....</p>)
};
  if (status === "error") {
	return (<p>unable to fetch data</p>)
};
  
  
  if (weather) {
    return (
      <div>
        <h3>Temperature🌡️:{weather.weatherinfo.current.temperature_2m}°C</h3>
        <h3>Humidity💧: {weather.weatherinfo.current.relative_humidity_2m}%</h3>
    <h3> Description🔎: {weather.weatherinfo.current.weather_code}         </h3>          <h3>City📍: {weather.locationinfo.results[0].name}</h3>          <h3>State: {weather.locationinfo.results[0].admin1}</h3>
        <h3>LGA: {weather.locationinfo.results[0].admin2}</h3>
        <h3>Country🗺️: {weather.locationinfo.results[0].country}</h3>     
        
         

         </div>
    );
  } 



  
}

export default Display;
