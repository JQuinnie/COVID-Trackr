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

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    return data.map(({ confirmed, deaths, reportDate: date }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date,
    }));
  } catch (error) {
    return error;
  }
};
