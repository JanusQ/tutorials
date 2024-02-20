import React, { useEffect, useState, useRef } from 'react'
import { Space, Table, Tag, Col, Row, Affix, Divider, Avatar } from 'antd'
import styles from './index.module.scss'

import janus from '../../assets/image/janusSwiper/janus1.svg'
import paper from '../../assets/image/janusSwiper/paper.png'
import Lightning from '../../assets/image/janusSwiper/Lightning.png'
import { LinkOutlined } from '@ant-design/icons'
import { dataSource, columns1, organizerData, papersData } from './data'
export default function JanusHomePage() {
  const articleContent = useRef()
  const Overview = useRef()
  const Schedule = useRef()
  const Organizer = useRef()
  const Speakers = useRef()
  // const JanusQCloud = useRef()
  const RealtedPapers = useRef()
  // const gitRpepos = useRef()
  const [windowHeight, setWindowHeight] = useState(0)
  const [showArticContentNav, setshowArticContentNav] = useState(false)

  const articleNav = [
    {
      id: 'Overview',
      name: 'Overview',
    },
    {
      id: 'Schedule',
      name: 'Schedule',
    },
    {
      id: 'RealtedPapers',
      name: 'Platform',
    },
    {
      id: 'OrganizersAndPresenters',
      name: 'Organizers',
    },
    // {
    //   id: 'JanusQCloud',
    //   name: 'JanusQ Cloud',
    // },
    // {
    //   id: 'gitRpepos',
    //   name: 'Repository',
    // },
  ]
  const [navAcitve, setnavAcitve] = useState('Overview')
  const toClickContent = (content) => {
    console.log(content, 'content')
    switch (content) {
      case 'Overview':
        document.documentElement.scrollTop = Overview.current.offsetTop
        setnavAcitve('Overview')
        break
      case 'Schedule':
        document.documentElement.scrollTop = Schedule.current.offsetTop
        setnavAcitve('Schedule')

        break
      case 'OrganizersAndPresenters':
        document.documentElement.scrollTop = Organizer.current.offsetTop
        setnavAcitve('OrganizersAndPresenters')

        break
      case 'Speakers':
        document.documentElement.scrollTop = Speakers.current.offsetTop
        setnavAcitve('Speakers')

        break
        // case 'JanusQCloud':
        //   document.documentElement.scrollTop = JanusQCloud.current.offsetTop
        //   setnavAcitve('JanusQCloud')

        break
      case 'RealtedPapers':
        document.documentElement.scrollTop = RealtedPapers.current.offsetTop
        setnavAcitve('RealtedPapers')

        break
        // case 'gitRpepos':
        //   document.documentElement.scrollTop = gitRpepos.current.offsetTop
        //   setnavAcitve('gitRpepos')

        break

      default:
        break
    }
  }
  useEffect(() => {
    setWindowHeight(document.body.clientHeight)
    window.addEventListener('scroll', articleContentOnScroll)
    return () => {
      window.addEventListener('scroll', articleContentOnScroll)
    }
  }, [])
  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', articleContentOnScroll)
    }
  }, [])

  const articleContentOnScroll = () => {
    let scrollTop =
      window.scrollY ||
      document?.documentElement?.scrollTop ||
      document.body.scrollTop
    const offsetTop = articleContent?.current?.offsetTop
    const articleContenttop = offsetTop - scrollTop
    if (articleContenttop < 220) {
      setshowArticContentNav(true)
    } else {
      // setshowArticContentNav(false)
    }

    if (scrollTop > Overview.current.offsetTop - 300) {
      setnavAcitve('Overview')
    }

    if (scrollTop > Schedule.current.offsetTop - 300) {
      setnavAcitve('Schedule')
    }
    if (scrollTop > RealtedPapers.current.offsetTop - 300) {
      setnavAcitve('RealtedPapers')
    }
    if (scrollTop > Organizer.current.offsetTop - 300) {
      setnavAcitve('OrganizersAndPresenters')
    }

    // if (scrollTop > JanusQCloud.current.offsetTop - 350) {
    //   setnavAcitve('JanusQCloud')
    // }

    // if (scrollTop > gitRpepos.current.offsetTop - 400) {
    //   setnavAcitve('gitRpepos')
    // }
  }

  return (
    <div className={styles.root}>
      <div className="home_content">
        <div className="home_conten_item_1">
          <div className="entry_header">
            <div className="header_title">
              <span>
                Janus 2.0: A Software Framework for Analyzing Optimizing and
                Implementing Quantum Circuit
              </span>
            </div>

            {/* <h1 style={{ fontSize: "2.6rem" }}>Implementing Quantum Circuit</h1> */}
          </div>
          <div className="entry_image">
            <img src={janus} alt=""></img>
          </div>
        </div>
        <div className="home_conten_item_2">
          <div className="article_nav">
            <Affix offsetTop={0}>
              <div className="article_nav_content">
                {articleNav.map((item, index) => (
                  <div className="articleNav" key={index}>
                    <span
                      onClick={() => toClickContent(item.id)}
                      className={
                        navAcitve === item.id
                          ? 'articleNav_active articleNav_item'
                          : 'articleNav_item'
                      }
                    >
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </Affix>
          </div>
          <div
            className="article_content"
            onScroll={articleContentOnScroll}
            ref={articleContent}
          >
            <div className="article_overView">
              <div className="article_overView_titel">
                <h1
                  style={{
                    textAlign: 'left',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                  }}
                  ref={Overview}
                >
                  Overview
                </h1>
              </div>
              <div className="articcle_overView_content">
                The paradigm of quantum computing exhibits a high potential to
                outperform classical computing in solving complex problems,
                e.g., cryptology, combinatorial optimization, and network
                analysis. However, achieving end-to-end speedup on the
                real-world quantum device is difficult as it involves a high
                degree of noise, high compilation overhead, and high cost of
                managing the quantum device. cost of managing the quantum
                device. In this tutorial, we present Janus 2.0, an open-source
                framework for analyzing and optimizing quantum circuit. This
                tutorial begins with a brief introduction of JanusQ cloud
                platform, which is equipped with several superconducting quantum
                chips, developed by Zhejiang University (Science 2019). Then, we
                present the tutorial of Janus 2.0 toolkit, from application
                -level to hardware-level. First, we introduce Janus-SAT, an
                application-software codesign technique for accelerating the
                solving of Boolean satisfiability (SAT) problems (HPCA 2023). We
                will provide the code and demo to demonstrate the speedup of
                Janus-SAT. Second, we introduce Janus-CT, a unified compilation
                framework that decouples analysis tasks into an upstream
                vectorization model and downstream models (MICRO 2023). In this
                tutorial, we provide the code and demo of two representative
                downstream tasks, including fidelity optimization and unitary
                decomposition. We will demonstrate that Janus-CT can enable
                various software-level optimization with high scalability.
                Finally, we introduce Janus-PulseLib, a hardware-level
                optimization for accelerating pulse generation (ICCAD 2023).
              </div>
            </div>
            <div className="article_Scheule">
              <div className="shedule_title">
                It is the first time to hold this tutorial!
              </div>
              <div className="article_Scheule_titel">
                <h1
                  style={{
                    textAlign: 'left',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                  }}
                  ref={Schedule}
                >
                  Schedule
                </h1>
              </div>
              <div className="articcle_Scheule_content">
                <Table
                  styles={{ fontSize: '1.8rem' }}
                  pagination={false}
                  dataSource={dataSource}
                  columns={columns1}
                ></Table>
              </div>
            </div>

            <div className="janusq_clound_platform" ref={RealtedPapers}>
              <div className="title">
                <h1> JanusQ cloud platform</h1>
              </div>
              <div className="janusQ">
                <h4>JanusQ</h4>
                <a
                  href="http://janusq.zju.edu.cn"
                  target="_blank"
                  rel="noreferrer"
                >
                  janusq.zju.edu.cn
                  <span className="LinkOutlined">
                    <LinkOutlined />
                  </span>
                </a>
              </div>
              <Divider />
              <div className="realted_papers">
                <div className="realted_papers_title">
                  <h1
                    style={{
                      textAlign: 'left',
                      fontSize: '1.5rem',
                      fontWeight: 700,
                    }}
                  >
                    Related papers
                  </h1>
                </div>
                {papersData.map((item, index) => (
                  <div className="realted_papers_content" key={index}>
                    <div className="paper_title">{item.title}</div>
                    <div className="paper_team">{item.team}</div>
                    <div className="link">
                      <div className="link_boder">
                        <img className="paper_icon" src={paper} alt=""></img>
                        Paper
                      </div>
                      <div className="link_boder">
                        <img
                          className="lighting_icon"
                          src={Lightning}
                          alt=""
                        ></img>
                        Lightning Talk
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Divider />
              <div className="code">
                <h4 className="title">Code</h4>
                <div className="gitHub_link">
                  <a>
                    Janus-SAT
                    <span className="LinkOutlined">
                      <LinkOutlined />
                    </span>
                  </a>
                </div>
                <div className="gitHub_link">
                  <a>
                    Janus-CT
                    <span className="LinkOutlined">
                      <LinkOutlined />
                    </span>
                  </a>
                </div>
                <div className="gitHub_link">
                  <a>
                    Janus-PulseLib
                    <span className="LinkOutlined">
                      <LinkOutlined />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div ref={Organizer} className="speakers">
              <div className="speaker_title">
                <h1
                  style={{ textAlign: 'left', fontSize: '1.5rem' }}
                  ref={Speakers}
                >
                  Organizers
                </h1>
              </div>
              <Divider />

              {organizerData.map((item, index) => (
                <div className="organizer_item">
                  <div className="speakers_1 speaker" key={index}>
                    <div className="photo">
                      {/* <img src={item.photo} alt="" /> */}
                      <Avatar src={item.photo} shape="square" size={100} />
                    </div>
                    <div className="speakers_1_content speaker_content">
                      <div className="name">{item.name}</div>
                      {item.introduce}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="article_content_right"></div>
        </div>
      </div>
    </div>
  )
}
