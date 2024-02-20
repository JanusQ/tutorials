import { Space, Table, Tag, Col, Row, Affix, Divider } from 'antd'
import { Link } from 'react-router-dom'
import jianweiyin from '../../assets/image/janusSwiper/jianweiyin.png'
import liqianglu from '../../assets/image/janusSwiper/liqianglu.png'
import tansiwei from '../../assets/image/janusSwiper/tansiwei.png'
import wuweitian from '../../assets/image/janusSwiper/wuweitian.png'
export const dataSource = [
  {
    key: '1',
    TimePDT: '1:40 PM',
    TimeEDT: '4:40 PM',
    Agenda: 'Introduction to Distributed DL Training',
    Presenter: 'Tushar',
    Resources: (
      <span>
        <Tag color={'green'}><Link to='/resources'>slide</Link> </Tag>
        <Tag color={'blue'}> <Link to='/resources'>video</Link></Tag>
      </span>
    ),
  },
  {
    key: '1',
    TimePDT: '1:40 PM',
    TimeEDT: '4:40 PM',
    Agenda: 'Introduction to Distributed DL Training',
    Presenter: 'Tushar',
    Resources: (
      <span>
        <Tag color={'green'}><Link to='/resources'>slide</Link> </Tag>
        <Tag color={'blue'}> <Link to='/resources'>video</Link></Tag>
      </span>
    ),
  },
  {
    key: '1',
    TimePDT: '1:40 PM',
    TimeEDT: '4:40 PM',
    Agenda: 'Introduction to Distributed DL Training',
    Presenter: 'Tushar',
    Resources: (
      <span>
        <Tag color={'green'}><Link to='/resources'>slide</Link> </Tag>
        <Tag color={'blue'}> <Link to='/resources'>video</Link></Tag>
      </span>
    ),
  },
  {
    key: '1',
    TimePDT: '1:40 PM',
    TimeEDT: '4:40 PM',
    Agenda: 'Introduction to Distributed DL Training',
    Presenter: 'Tushar',
    Resources: (
      <span>
        <Tag color={'green'}><Link to='/resources'>slide</Link> </Tag>
        <Tag color={'blue'}> <Link to='/resources'>video</Link></Tag>
      </span>
    ),
  },
  {
    key: '1',
    TimePDT: '1:40 PM',
    TimeEDT: '4:40 PM',
    Agenda: 'Introduction to Distributed DL Training',
    Presenter: 'Tushar',
    Resources: (
      <span>
        <Tag color={'green'}><Link to='/resources'>slide</Link> </Tag>
        <Tag color={'blue'}> <Link to='/resources'>video</Link></Tag>
      </span>
    ),
  },
  {
    key: '1',
    TimePDT: '1:40 PM',
    TimeEDT: '4:40 PM',
    Agenda: 'Introduction to Distributed DL Training',
    Presenter: 'Tushar',
    Resources: (
      <span>
        <Tag color={'green'}><Link to='/resources'>slide</Link> </Tag>
        <Tag color={'blue'}> <Link to='/resources'>video</Link></Tag>
      </span>
    ),
  },
  {
    key: '1',
    TimePDT: '1:40 PM',
    TimeEDT: '4:40 PM',
    Agenda: 'Introduction to Distributed DL Training',
    Presenter: 'Tushar',
    Resources: (
      <span>
        <Tag color={'green'}><Link to='/resources'>slide</Link> </Tag>
        <Tag color={'blue'}> <Link to='/resources'>video</Link></Tag>
      </span>
    ),
  },

]
export const dataSource1 = [
  {
    key: '1',
    Topic: 'Topic-2. Janus-CT Details',
    hour: '(2 hour)',
  },
  {
    key: '2',
    Topic: '\xa0  \xa0 \xa0 \xa0(a) Vectorization model and code examples',
    hour: '0.5 hour',
    indentSize: 20,
  },
  {
    key: '3',
    Topic:
      ' \xa0  \xa0 \xa0 \xa0(b) Fidelity optimization using gate vectors',
    hour: '0.5 hour',
  },
  {
    key: '4',
    Topic: '\xa0  \xa0 \xa0 \xa0(c) Unitary decomposition using gate vectors',
    hour: '0.5 hour',
  },
  {
    key: '5',
    Topic:
      ' \xa0  \xa0 \xa0 \xa0(d) Extending the framework yourself: other downstream tasks!',
    hour: '0.5 hour',
  },
  {
    key: '6',
    Topic: 'Topic-3. Implementing quantum applications',
    hour: '(1.25 hour)',
  },
  {
    key: '7',
    Topic:
      '\xa0  \xa0 \xa0 \xa0(a) Introduction of SAT problem and time crystal',
    hour: '0.25 hour',
  },
  {
    key: '8',
    Topic:
      '\xa0  \xa0 \xa0 \xa0(b) Compilation optimizations for solving SAT problems',
    hour: '0.5 hour',
  },
  {
    key: '9',
    Topic:
      '\xa0  \xa0 \xa0 \xa0(c) Simulate time crystal on Janus quantum platform',
    hour: '0.5 hour',
  },
  {
    key: '10',
    Topic: 'Topic-4. Q & A',
    hour: '0.5 hour',
  },
  {
    key: '11',
    Topic: 'Total',
    hour: '4 hours(half day)',
  },
]
export const columns1 = [
  {
    title: 'Time (PDT)',
    dataIndex: 'TimePDT',
    key: 'Time(PDT)',
  },
  {
    title: 'Time (EDT)',
    dataIndex: 'TimeEDT',
    key: 'TimeEDT',
  },
  {
    title: 'Agenda',
    dataIndex: 'Agenda',
    key: 'Agenda',
  },
  {
    title: 'Presenter',
    dataIndex: 'Presenter',
    key: 'Presenter',
  },
  {
    title: 'Resources',
    dataIndex: 'Resources',
    key: 'Resources',
  },
  // {
  //   title: 'Topic-1. Introduction of Janus quantum cloud platform ',
  //   dataIndex: 'Topic',
  //   key: 'Topic',
  // },
  // {
  //   title: '0.25 hour',
  //   dataIndex: 'hour',
  //   key: 'hour',
  // },
]
export const organizerData = [
  {
    name: 'jianweiyin',
    photo: jianweiyin,
    introduce:
      'Jianwei Yin is currently a full professor in the College of Computer Science, Zhejiang University (ZJU), China. He haspublished more than 100 papers in top international journals and conferences. His current research interests include quantum computing, service computing and business process management. He is also the Associate Editor of the IEEE Transactions on Services Computing.',
  },
  {
    name: 'liqianglu',
    photo: liqianglu,
    introduce:
      'Liqiang Lu is a ZJU100 Young Professor in the College of Computer Science, Zhejiang University (ZJU), China. His research interests include quantum computing, computer architecture, deep learning accelerator, and software-hardware codesign. He has authored more than 20 scientific publications in premier international journals and conferences in related  domains, including ISCA, MICRO, HPCA, FCCM, DAC, IEEE Micro, and TCAD. He also serves as a TPC member in the premier conferences in the related domain,including ICCAD,FPT,HPCC etc. ',
  },
  {
    name: 'tansiwei',
    photo: tansiwei,
    introduce:
      'Siwei Tan is a 5th year PhD student at Zhejiang University. His interests include the quantum algorithm and computer architecture. Wuwei Tian is a 4th year PhD student at Zhejiang  University.',
  },
  {
    name: 'wuweitian',
    photo: wuweitian,
    introduce:
      'Wuwei Tian is a 4th year PhD student at Zhejiang University. He is interested in the compiler design and quantum hardware.',
  },
]
export const papersData = [
  {
    title: `(HPCA 2023) HyQSAT: A Hybrid Approach for 3-SAT Problems by
    Integrating Quantum Annealer with CDCL`,
    team: `   Siwei Tan, Mingqian Yu, Andre Python, Yongheng
    Shang, Tingting Li, Liqiang Lu, Jianwei Yin (Zhejiang
    University)`
  },
  {
    title: `[MICRO 2023] QuCT: A Framework for Analyzing Quantum Circuit
    by Extracting Contextual and Topological Features`,
    team: `Siwei Tan, Congliang Lang, Liang Xiang; Shudi Wang, Xinghui
    Jia, Ziqi Tan, Tingting Li (Zhejiang University), Jieming
    Yin (Nanjing University of Posts and Telecommunications);
    Yongheng Shang, Andre Python, Liqiang Lu*, Jianwei
    Yin* (Zhejiang University)`
  },
  {
    title: `[Nature 2022] Digital quantum simulation of Floquet
    symmetry-protected topological phases`,
    team: `Xu Zhang (Zhejiang University), Wenjie Jiang (Tsinghua
      University), Jinfeng Deng, Ke Wang, Jiachen Chen, Pengfei
      Zhang, Wenhui Ren, Hang Dong, Shibo Xu, Yu Gao, Feitong Jin,
      Xuhao Zhu, Qiujiang Guo, Hekang Li, Chao Song, Alexey V.
      Gorshkov, Thomas Iadecola, Fangli Liu, Zhe-Xuan Gong, Zhen
      Wang* (Zhejiang University), Dong-Ling Deng* (Tsinghua
      University) & Haohua Wang (Zhejiang University)`
  },
]