import React, { useRef } from 'react'
import styles from './index.module.scss'
import { Affix } from 'antd'
export default function Test() {
  const titleRefs = Array.from({ length: 5 }, () => useRef(null))

  const scrollToTitle = (index) => {
    const topPosition = titleRefs[index].current.offsetTop - 100
    window.scrollTo({ top: topPosition, behavior: 'smooth' })
  }
  console.log(titleRefs, 88)
  return (
    <div className={styles.root}>
      <div className="container">
        <Affix offsetTop={100}>
          <ul className="left">
            {titleRefs.map((ref, index) => (
              <li key={index} onClick={() => scrollToTitle(index)}>
                Title {index + 1}
              </li>
            ))}
          </ul>
        </Affix>

        <div>
          {titleRefs.map((ref, index) => (
            <div className="title" key={index} ref={ref}>
              Title {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
