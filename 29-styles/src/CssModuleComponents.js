import React from 'react';
import styles from './styles/cssModule.module.css';

export default function CssModuleComponents() {
  console.log(styles);
  return (
    <div className={styles.container}>
      <div className={[styles.box, styles.red].join(' ')}></div>
      <div className={[styles.box, styles.orange].join(' ')}></div>
      <div className={`${styles.box} ${styles.yellow}`}></div>
    </div>
  );
}
