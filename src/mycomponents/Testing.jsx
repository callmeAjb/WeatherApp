import React, { useState } from 'react';

function TestingApiG() {
const [city, setcity] = useState("");

  return(
    <div>
      <h1>Weather App</h1>
      <input type="text" onChange={(e) => {setcity(e.target.value)}} />
      <button type="button" onClick={Search}>Search</button>
    </div>
  )





  async function Search() {
  try {
	let url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;

  let dataRes = await fetch(url);


    if (!dataRes.ok) {
      throw new error('error: 404');
    }
    
  let data = await dataRes.json();
  console.log(data);

    if (!data.results) {
      return alert('city name not found!')
    }

  
    let latitudedata = data.results[0].latitude ;
    let longitudedata = data.results[0].longitude;

    let WeatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitudedata}&longitude=${longitudedata}&current=temperature_2m,relative_humidity_2m,weather_code` ;

let responseW = await fetch(WeatherUrl);

let wdata = await responseW.json();

console.log(wdata);
	
    
} catch (error) {
    // console.error(error);
	console.log(error.message);
    // alert("failed to fetch");
} 
}




}



export default TestingApiG;


// import React, { useState } from 'react';

// function Search({ onSearch, setLoading }) {
//   const [city, setCity] = useState("");

//   async function fetchData() {
//     try {

//       if (city.trim() === "") {
//         alert("pls enter city");
//         return;
//       }

//       setLoading(true);

//       // Find the city
//       let locationUrl =
//         `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;

//       const locationRes = await fetch(locationUrl);
//       const locationData = await locationRes.json();

//       console.log("Location:", locationData);

//       if (!locationData.results) {
//         alert("City not found");
//         return;
//       }

//       const location = locationData.results[0];

//       // Get the weather
//       let weatherUrl =
//         `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,weather_code`;

//       const weatherRes = await fetch(weatherUrl);
//       const weatherData = await weatherRes.json();

//       console.log("Weather:", weatherData);

//       // Put location and weather together
//       const data = {
//         weather: weatherData,
//         location: location
//       };

//       onSearch(data);

//     } catch (err) {
//       console.error(err);
//       alert("failed to fetch data");

//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         onKeyDown={(e) => {
//           if (e.key === "Enter") {
//             fetchData();
//           }
//         }}
//         onChange={(e) => setCity(e.target.value)}
//       />

//       <button type="button" onClick={fetchData}>
//         search city
//       </button>
//     </div>
//   );
// }

// export default Search;