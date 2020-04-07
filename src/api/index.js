import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

// NOTE: this is implemented in App.js under useEffect as a Promise
// export const fetchData = async (country) => {

//   try {
//     const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

//     return { confirmed, recovered, deaths, lastUpdate };
//   } catch (error) {
//     return error;
//   }
// };

// NOTE: this one call can replace both fetchData and fetchCountry
// export const fetchData = async (country) => {
  // let changeableUrl = url;
  // if(country) {
  //   changeableUrl = `${url}/countries/${country}`;
  // }
//   try {
//   const { data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(changeableUrl);

//   return { confirmed, recovered, deaths, lastUpdate };
//   } catch (error) {
//     console.log(error);
//   }
// }


export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date,
    }));
  } catch (error) {
    console.log(error)
  }
};

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
}

export const fetchCountry = async (country) => {
  try {
  const { data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(`${url}/countries/${country}`);

  return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
}
