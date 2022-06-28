import React from 'react';
import styles from './card.module.css';

export interface CardData {
  title: string,
  desc: string,
  link: string
}

const Card = (props: CardData) => {
  return (
    <a href={props.link} className={styles.card}>
      <h2>{props.title} &rarr;</h2>
      <p>{props.desc}</p>
    </a>
  );
}

export {Card};