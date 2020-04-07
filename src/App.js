import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Cards, Chart, CountryPicker } from './components';

import image from './images/image.png';

import styles from './App.module.css';

const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');

  const fetchData = (country) => {
    let url = 'https://covid19.mathdro.id/api';

    if (country) {
      url = `${url}/countries/${country}`;
    }

    axios
      .get(url)
      .then((response) => {
        const {
          data: { confirmed, recovered, deaths, lastUpdate },
        } = response;

        const modifiedData = {
          confirmed,
          recovered,
          deaths,
          lastUpdate,
        };

        setData(modifiedData);
        setCountry(country);
      })
      .catch((error) => console.error(error));
  };

  // on first page load
  useEffect(() => {
    fetchData();
  }, []);

  async function handleCountryChange(country) {
    await fetchData(country);
  }

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default App;
