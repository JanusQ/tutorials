import React from 'react'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Button, Tag } from 'antd'
import { papersData } from '../JanusHomePage/data'
import { FileOutlined, FilePdfOutlined } from '@ant-design/icons'
import { downloadPdf, downloadPdfWithProgress } from '@/util/util'

export default function Resources() {
  const slides = [
    {
      title: '0.1 Yin',
      pdf: 'SllidesPdf/0.1Yin',
    },
    {
      title: '0.2. background',
      pdf: 'SllidesPdf/0.2.background',
    },
    {
      title: '2. janus-ct',
      pdf: 'SllidesPdf/2.janus-ct',
    },
    {
      title: '3. janus-fem',
      pdf: 'SllidesPdf/3.janus-fem',
    },
    {
      title: '4. 1sat',
      pdf: 'SllidesPdf/4.1sat',
    },
    {
      title: '4.2 time crystal',
      pdf: 'SllidesPdf/4.2timecrystal',
    },
  ]
  const videos = [
    {
      title: 'video title',
      link: '//player.bilibili.com/player.html?aid=1751216516&bvid=BV1cx42127MX&cid=1454229384&p=1',
    },
    {
      title: 'video title',
      link: '//player.bilibili.com/player.html?aid=1751216516&bvid=BV1cx42127MX&cid=1454229384&p=1',
    },
    {
      title: 'video title',
      link: '//player.bilibili.com/player.html?aid=1751216516&bvid=BV1cx42127MX&cid=1454229384&p=1',
    },
    {
      title: 'video title',
      link: '//player.bilibili.com/player.html?aid=1751216516&bvid=BV1cx42127MX&cid=1454229384&p=1',
    },
    {
      title: 'video title',
      link: '//player.bilibili.com/player.html?aid=1751216516&bvid=BV1cx42127MX&cid=1454229384&p=1',
    },
  ]
  return (
    <div className={styles.root}>
      <Row justify="center">
        <Col span={18} offset={1}>
          <div className="resource_container">
            <div className="publications">
              <div className="publications_title title">Publications</div>
              {papersData.map((item, index) => (
                <div className="realted_papers_content" key={index}>
                  <div className="paper_title">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title}
                    </a>
                  </div>
                  <div className="paper_team">{item.team}</div>
                  <div className="link">
                    {/* <div className="link_boder">
                      <Link to={'/pdfPreview'} state={{ pdf: item.pdf }}>
                        <FileOutlined
                          className="paper_icon"
                          style={{ marginRight: 10 }}
                        />
                        Preview
                      </Link>
                    </div> */}
                    <div
                      className="link_boder"
                      onClick={() => downloadPdf(item.pdf, item.title)}
                    >
                      <FilePdfOutlined style={{ marginRight: 10 }} />
                      Download PDF
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="slides">
              <div className="slides_title title">Slides</div>
              <div className="slides_content">
                {slides.map((item, index) => (
                  <div className="slides_item" key={index}>
                    <div className="pdf_title">{item.title}</div>
                    <div className="link">
                      {/* <div className="link_boder">
                        <Link to={'/pdfPreview'} state={{ pdf: item.pdf }}>
                          <FileOutlined
                            className="paper_icon"
                            style={{ marginRight: 10 }}
                          />
                          Preview
                        </Link>
                      </div> */}
                      <div
                        className="link_boder"
                        onClick={() =>
                          downloadPdfWithProgress(item.pdf, item.title)
                        }
                      >
                        <FilePdfOutlined style={{ marginRight: 10 }} />
                        Download PDF
                      </div>
                    </div>
                    {/* <div className="operate">
                      <Link to={'/pdfPreview'} state={{ pdf: item.pdf }}>
                        <Tag color={'green'}>Preview</Tag>
                      </Link>
                      <Tag
                        color={'blue'}
                        style={{ cursor: 'pointer' }}
                        onClick={() => downloadPdf(item.pdf, item.title)}
                      >
                        Download
                      </Tag>
                    </div> */}
                  </div>
                ))}
              </div>
            </div>
            {/* <div className="video">
              <div className="video_title title">Video</div>
              <div className="video_content">
                {videos.map((item, index) => (
                  <div className="video_item" key={index}>
                    <iframe
                      src={item.link}
                      scrolling="no"
                      border="0"
                      frameborder="no"
                      framespacing="0"
                      allowFullScreen={true}
                    ></iframe>
                    <div className="title">{item.title}</div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </Col>
      </Row>
    </div>
  )
}
