import React, { useState, useEffect } from "react";

// importing axios for comm

import axios from "axios";

//importing ICons
import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
} from "react-icons/io";
import {
  BsCloudHaze2Fill,
  BsCloudDrizzleFill,
  BsEye,
  BsWater,
  BsThermometer,
  BsWind,
} from "react-icons/bs";
import { TbTemperatureCelsius } from "react-icons/tb";
import { ImSpinner8 } from "react-icons/im";

// API Key
const APIKey = "e5fdf6cb75ee9d788b59a6f2f6db5d28";

function App() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("Dubai");

  // utilisng useEffect to fetch data\
  useEffect(() => {
    console.log("fetchig data");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${APIKey}`;
    axios.get(url).then((response) => {
      setData(response.data);
    });
    // async function dataFetch(link) {
    //   let response = await fetch(link);
    //   let datam = await response.json();
    //   setData(datam);
    // }
    // dataFetch(url);
  }, [location]);
  console.log(data);

  // whenever data is null show loader
  if (!data) {
    return (
      <div>
        <div>
          <ImSpinner8 className="text-5xl animate-spin" />
        </div>
      </div>
    );
  }

  // Selecting the icon based on weather
  let icon =
    data.weather[0].main === "Clouds" ? (
      <IoMdCloudy />
    ) : data.weather[0].main === "Haze" ? (
      <BsCloudHaze2Fill />
    ) : data.weather[0].main === "Rain" ? (
      <IoMdRainy />
    ) : data.weather[0].main === "Clear" ? (
      <IoMdSunny />
    ) : data.weather[0].main === "Drizzle" ? (
      <BsCloudDrizzleFill />
    ) : data.weather[0].main === "Snow" ? (
      <IoMdSnow />
    ) : (
      <IoMdThunderstorm />
    );

  return (
    <>
      <div>
        {/* form section */}
        <form></form>
        {/* card section */}
        <div></div>
      </div>
    </>
  );
}

export default App;
