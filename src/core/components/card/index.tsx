import React from 'react';
import internal from 'stream';
import styles from './card.module.css';

export interface CardData {
  id?: number,
  title: string,
  desc: string,
  link: string
}

export const Card = (props: CardData) => {
  return (
    <a href={props.link} className={styles.card}>
      <h2>{props.title} &rarr;</h2>
      <p>{props.desc}</p>
    </a>
  );
}