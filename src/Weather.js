import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}ºC`
    );
  }
  let apikey = "db4c9d5fac0799df6572445f027e0c0b";
  let apiUri = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apikey}&units=metric`;
  axios.get(apiUri).then(handleResponse);

  return (
    <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  );
}
