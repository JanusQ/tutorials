import React from 'react'
import styles from './index.module.scss'
export default function Resources() {
  return (
    <div className={styles.root}>
      <div className="resource_container">
        <div className="publications">publications</div>
        <div className="slides">slides</div>
        <div className="videos">videos</div>
      </div>
    </div>
  )
}
