import React from 'react';
import { Grid } from '@material-ui/core';

import SingleCard from '../SingleCard/SingleCard';

import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return <h2>Loading...</h2>;
  }

  const types = [
    { type: 'Infected', text: 'Active Cases', data: confirmed },
    { type: 'Recovered', text: 'Recoveries', data: recovered },
    { type: 'Deaths', text: 'Deaths', data: deaths },
  ];

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {types.map((type, idx) => (
          <SingleCard key={idx} data={type} lastUpdate={lastUpdate} />
        ))}
      </Grid>
    </div>
  );
};

export default Cards;
