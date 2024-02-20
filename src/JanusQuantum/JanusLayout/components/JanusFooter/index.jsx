import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import { Layout, Row, Col } from 'antd'

export default function JanusFooter() {
  const { Footer } = Layout
  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: ' rgb(245,247,270)',
    padding: '86px 144px 93px 144px',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  }
  return (
    <div className={styles.root}>
      <Footer style={footerStyle}>
        <div className="footer_menu">
          <Row>
            <Col lg={6} sm={24} xs={24}>
              <ul>
                <li className="footer_menu_title">
                  <span>COMMON LINKS</span>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="http://physics.zju.edu.cn/"
                    rel="noreferrer"
                  >
                    School of Computer Science, Zhejiang University
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="http://www.cs.zju.edu.cn/"
                    rel="noreferrer"
                  >
                    School of Physics, Zhejiang University
                  </a>
                </li>
              </ul>
            </Col>
            <Col lg={6} sm={24} xs={24}>
              <ul>
                <li className="footer_menu_title">
                  <span>USER GUIDE</span>
                </li>
                <li>
                  <Link to="/home/document">USER GUIDE</Link>
                </li>
                <li></li>
              </ul>
            </Col>
            <Col lg={6} sm={24} xs={24}>
              <ul>
                <li className="footer_menu_title">
                  <span>QUANTUM APPLICATIONS</span>
                </li>
                <li>
                  <Link to="/notFound">Solutions</Link>
                </li>
              </ul>
            </Col>
            <Col lg={6} sm={24} xs={24}>
              <div className="footer_phone">
                <p className="footer_phone_title">CONTACT US</p>
                <p>Address: Xixi Campus of Zhejiang University</p>
                <p>Telephone:0571-81951139</p>
                <p>Zip code:310028</p>
              </div>
            </Col>
          </Row>
        </div>
      </Footer>
      <Row justify="center" className="bottom-bar">
        <Col>
          <span style={{ marginRight: 12 }}>
            Copyright © Zhejiang University Quantum Computing.
          </span>
          <span style={{ marginRight: 12 }}> All rights reserved</span>
        </Col>
      </Row>
    </div>
  )
}
