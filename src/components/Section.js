import React from 'react'
import styles from '../styles/Section.module.scss';

export default function Section(props) {
  return (
    <div className={styles.div}>
      <img src={require(`../images/${props.img}`)} alt={`${props.alt}`} className={styles.imgsec} />
      <div className={styles.image_text}><h2 className='capital'>{props.p1}</h2><h4>{props.p2}</h4></div>
    </div>
  )
}
