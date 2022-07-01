import React from 'react';
import internal from 'stream';
import { CardDataDto } from '../../models/CardDataDto';
import styles from './card.module.css';



export const Card = (props: CardDataDto) => {
  return (
    <a href={props.link} className={styles.card}>
      <h2>{props.title} &rarr;</h2>
      <p>{props.desc}</p>
    </a>
  );
}