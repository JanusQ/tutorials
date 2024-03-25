import React from 'react'
import styles from './index.module.scss'
export default function Title({ title }) {
  return <h1 className={styles.root}>{title}</h1>
}
