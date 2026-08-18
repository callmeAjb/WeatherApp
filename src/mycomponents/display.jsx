function Display({ weather, Loading }) {

if (Loading) {
      
      return (<p>loading....</p>) ;
}
  
  if (!weather) {
    return;
  } else {
    

    return (
      <div>
        <h3>Temperature🌡️:{weather.current_condition[0].temp_C}°C</h3>
        <h3>Humidity💧: {weather.current_condition[0].humidity}%</h3>

        <h3>
          Description🔎: {weather.current_condition[0].weatherDesc[0].value}
        </h3>

        <h3>City📍: {weather.nearest_area[0].areaName[0].value}</h3>

        <h3>State: {weather.nearest_area[0].region[0].value}</h3>

        <h3>Country🗺️: {weather.nearest_area[0].country[0].value}</h3>
      </div>
    );
  }
}

export default Display;
