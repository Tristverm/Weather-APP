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
  const [location, setLocation] = useState("Matuu");

  // utilisng useEffect to fetch data\
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;
  });

  return <div>react app</div>;
}

export default App;
