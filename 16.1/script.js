"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

const whereAmI = function (lat, long) {
  fetch(
    `https://geocode.xyz/${lat},${long}?geoit=json&auth=193720320080954157810x86354`
  )
    .then((response) => {
      if (!response.ok) throw new Error(`Location not found`);
      if (response.status === 403)
        throw new Error("Too many requests. Try to reload slower");
      return response.json();
    })
    .then((data) => mostrarInfo(data))
    .catch((err) => console.log(err));
};

const mostrarInfo = function (data) {
  console.log(`You are in ${data.city}, ${data.country}`);
  console.log(data);
  //renderInfo(data.country);
};

const renderInfo = function (country) {
  fetch(
    `https://api.countrylayer.com/v2/all?access_key=a419dc0f23aaa492b9ef184d841a7ac4`
  )
    .then((response) => {
      if (!response.ok)
        throw new Error("Location not found at RestCountries API");
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

whereAmI(52.508, 13.381);
//whereAmI(19.037, 72.873);
//whereAmI(-33.933, 18.474);

//https://api.countrylayer.com/v2/name/{country}?access_key=8090f6036c7e3d37c5582bb348bd6bf3
