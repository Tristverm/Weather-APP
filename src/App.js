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
// date
let date = new Date();

// API Key
const APIKey = "e5fdf6cb75ee9d788b59a6f2f6db5d28";

function App() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("Kithimani");

  // utilisng useEffect to fetch data\
  useEffect(() => {
    console.log("fetchig data");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${APIKey}`;
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
        <div className="w-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center px-4 lg:px-0">
          <ImSpinner8 className="text-5xl animate-spin text-white" />
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
      <div className="w-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center px-4 lg:px-0">
        {/* form section */}
        <form></form>
        {/* card section */}
        <div className="w-full  bg-gradient-to-br from-violet-600/10 via-black/30 to-violet-600/10  max-w-[450px] min-h-[584px] text-white backdrop-blur-[32px] rounded-[32px] py-12 px-6 shadow-black/80 shadow-lg bg-blend-luminosity">
          <div>
            {/* card top */}
            <div className="flex flex-row items-center justify-start gap-x-5">
              {/* icon */}
              <div className="text-[87px]">{icon}</div>
              <div>
                {/* country name */}
                <div className="text-2xl font-semibold">
                  {data.name},{data.sys.country}
                </div>
                {/* date */}
                <div>
                  {date.getUTCDate()}/{+date.getUTCMonth() + 1}/
                  {date.getUTCFullYear()}
                </div>
              </div>
            </div>

            {/* card body  */}
            <div
              className="
            my-20"
            >
              <div>
                {/* temperature */}
                <div className="text-[144px] leading-none">{(((+data.main.temp - 32) * 5) / 9).toFixed(1)}&deg;C</div>
              </div>
            </div>
            {/* card bottom */}
            <div>card bottom</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
