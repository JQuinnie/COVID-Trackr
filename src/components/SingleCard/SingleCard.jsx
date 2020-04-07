import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './SingleCard.module.css';

const SingleCard = ({ data: { type, text, data }, lastUpdate }) => {
  let typeStyle = type === 'Infected' ? styles.Infected : type === 'Recovered' ? styles.Recovered : styles.Deaths;

  return (
    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, typeStyle)}>
      <CardContent>
        <Typography color="textSecondary" gutterButtom>
          {type}
        </Typography>
        <Typography variant="h5">
          <CountUp start={0} end={data.value} duration={2} separator="," />
        </Typography>
        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
        <Typography variant="body2">{`Number of ${text} of COVID-19`}</Typography>
      </CardContent>
    </Grid>
  );
};

export default SingleCard;
