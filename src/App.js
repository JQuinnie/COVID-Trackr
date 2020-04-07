import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Cards, Chart, CountryPicker } from './components';

import styles from './App.module.css';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = () => {
      axios
        .get('https://covid19.mathdro.id/api')
        .then(response => {
          const {data: { confirmed, recovered, deaths, lastUpdate }} = response;

          const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate,
          };

          console.log(modifiedData);
          setData(modifiedData);
        })
        .catch((error) => console.error(error));
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker />
      <Chart />
    </div>
  );
};

export default App;
