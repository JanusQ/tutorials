import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Popover, Dropdown, Space } from 'antd'
import { DownOutlined } from '@ant-design/icons'
export default function JanusHeader({ fontColor }) {
  const [showSelect, setShowSelect] = useState(false)
  const onMouseOver = () => {}

  const items = [
    {
      key: '3',
      label: <Link tyle={{ fontSize: 18, color: 'black' }}>Janus-SAT</Link>,
    },
    {
      key: '4',
      label: <Link tyle={{ fontSize: 18, color: 'black' }}>Janus-CT</Link>,
    },
    {
      key: '5',
      label: (
        <Link tyle={{ fontSize: 18, color: 'black' }}>Janus-PulseLib</Link>
      ),
    },
  ]
  const headerMenu = [
    {
      name: 'JanusQ',
      link: (
        <a
          target="_blank"
          href="http://janusq.zju.edu.cn/#/home"
          rel="noreferrer"
        >
          JanusQ
        </a>
      ),
    },
    {
      name: 'Documents',
      link: (
        <a
          target="_blank"
          href="http://janusq.zju.edu.cn/#/documents"
          rel="noreferrer"
        >
          Documents
        </a>
      ),
    },
    {
      name: 'Resources',
      link: <Link to="/resources">Resources</Link>,
    },
    {
      name: 'Github',
      link: (
        <a
          target="_blank"
          href="https://github.com/JanusQ/JanusQ/tree/main"
          rel="noreferrer"
        >
          Github
        </a>
      ),
    },
    {
      name: 'Team',
      link: (
        <a
          target="_blank"
          href="http://janusq.zju.edu.cn:10210/#/home"
          rel="noreferrer"
        >
          Team
        </a>
      ),
    },
  ]
  return (
    <div className="header_menu">
      {headerMenu.map((item, index) => (
        <div key={index}>
          <span className="header_menu_item_black">{item.link}</span>
        </div>
      ))}
    </div>
  )
}
