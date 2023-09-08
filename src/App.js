import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

// importing axios for comm

import axios from "axios";

//importing ICons
import {
  IoMdSunny,
  IoMdRainy,
  IoMdCloudy,
  IoMdSnow,
  IoMdThunderstorm,
  IoMdSearch,
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
// import CountUp from "react-countup/build/CountUp";
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
        <form className="shadow-2xl shadow-black h-16 bg-gradient-to-br from-violet-600/10 via-black/30 to-violet-600/10  w-full max-w-[450px] rounded-full backdrop-blur[32px] mb-8">
          <div className="h-full relative flex items-center justify-between px-4 mx-auto">
            <input
              type="text"
              placeholder="Search City or Country"
              className="placeholder:text-white h-full text-white text-[15px] font-light pl-6 bg-transparent focus:outline-none flex-1"
            />
            <button className="h-12 w-20 flex flex-row justify-center items-center bg-[#1ab8ed] rounded-full">
              <IoMdSearch className="text-white text-2xl " />
            </button>
          </div>
        </form>
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
              <div className="flex justify-center items-center">
                {/* temperature */}
                <div className="text-[144px] leading-none font-light ">
                  <CountUp
                    start={0}
                    end={(((+data.main.temp - 32) * 5) / 9).toFixed(1)}
                    duration={5}
                    useEasing={false}
                  />
                </div>
                <span className="text-4xl font-light">&deg;C</span>
              </div>
              {/* weather desc */}
              <div className="capitalize text-center">
                {data.weather[0].description}
              </div>
            </div>
            {/* card bottom */}
            <div className="max-w-[378px] mx-auto flex flex-col space-y-2 ">
              <div className="flex flex-row justify-between items-center ">
                <div className="flex items-center gap-x-2">
                  {/* icon */}

                  <div className="text-[20px]">
                    <BsEye />
                  </div>
                  <div>
                    Visibility{" "}
                    <span className="ml-2">
                      <CountUp
                        start={0}
                        end={data.visibility / 1000}
                        duration={5}
                        useEasing={false}
                        preserveValue={true}
                      />
                      km
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-x-2">
                  {/* icon */}

                  <div className="text-[20px]">
                    <BsThermometer />
                  </div>
                  <div>
                    Feels Like
                    <span className="ml-2">
                      <CountUp
                        start={0}
                        end={data.main.feels_like}
                        duration={5}
                        useEasing={false}
                        preserveValuelue={true}
                      />
                      <TbTemperatureCelsius className="inline" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between items-start ">
                <div className="flex items-center gap-x-2">
                  {/* icon */}
                  <div className="text-[20px]">
                    <BsWater />
                  </div>
                  <div>
                    Humidity
                    <span className="ml-2">
                      <CountUp
                        start={0}
                        end={data.main.humidity}
                        duration={5}
                        useEasing={false}
                        preserveValue={true}
                      />{" "}
                      %
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-x-2 mr-6">
                  {/* icon */}
                  <div className="text-[20px]">
                    <BsWind />
                  </div>
                  <div>
                    Wind
                    <span className="ml-2">
                      <CountUp
                        start={0}
                        end={data.wind.speed}
                        duration={5}
                        useEasing={false}
                        preserveValuelue={true}
                      />
                      m/s
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
