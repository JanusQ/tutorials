import { Space, Table, Tag, Col, Row, Affix, Divider } from 'antd'
import { Link } from 'react-router-dom'
import jianweiyin from '../../assets/image/janusSwiper/JianweiYin.png'
import liqianglu from '../../assets/image/janusSwiper/liqianglu.jpg'
import tansiwei from '../../assets/image/janusSwiper/tansiwei.png'
import wuweitian from '../../assets/image/janusSwiper/wuweitian.png'
import zhanghanyu from '@/assets/image/janusSwiper/HanyuZhang.jpg'
export const dataSource = [
  {
    key: '1',
    TimePDT: (
      <div style={{ fontWeight: 800, fontFamily: 'PingFang_HEAVY' }}>
        1:00 PM
      </div>
    ),
    // TimeEDT: '4:40 PM',
    Agenda: (
      <div style={{ fontWeight: 800, fontFamily: 'PingFang_HEAVY' }}>
        Introduction of Janus quantum cloud platform
      </div>
    ),
    Presenter: 'Jianwei Yin',
    Resources: (
      <span>
        <Tag color={'green'}>
          <Link to="/resources">slide</Link>
        </Tag>
        <Tag color={'blue'}>
          <Link to="/resources">video</Link>
        </Tag>
      </span>
    ),
  },
  {
    key: '2',
    TimePDT: (
      <div style={{ fontWeight: 800, fontFamily: 'PingFang_HEAVY' }}>
        1:15 PM
      </div>
    ),
    // TimeEDT: '4:40 PM',
    Agenda: (
      <div style={{ fontWeight: 800, fontFamily: 'PingFang_HEAVY' }}>
        Janus-CT Details
      </div>
    ),
    Presenter: 'Siwei Tan',
    Resources: (
      <span>
        <Tag color={'green'}>
          <Link to="/resources">slide</Link>
        </Tag>
        <Tag color={'blue'}>
          <Link to="/resources">video</Link>
        </Tag>
      </span>
    ),
  },
  {
    key: '3',
    // TimePDT: '1:40 PM',
    // TimeEDT: '4:40 PM',
    Agenda: 'Vectorization model and code examples',
    // Presenter: 'Tushar',
    Resources: (
      <span>
        <Tag color={'green'}>
          <Link to="/resources">slide</Link>{' '}
        </Tag>
        <Tag color={'blue'}>
          {' '}
          <Link to="/resources">video</Link>
        </Tag>
      </span>
    ),
  },
  {
    key: '4',
    // TimePDT: '1:40 PM',
    // TimeEDT: '4:40 PM',
    Agenda: 'Fidelity optimization using gate vectors',
    // Presenter: 'Tushar',
    Resources: (
      <span>
        <Tag color={'green'}>
          <Link to="/resources">slide</Link>{' '}
        </Tag>
        <Tag color={'blue'}>
          {' '}
          <Link to="/resources">video</Link>
        </Tag>
      </span>
    ),
  },
  {
    key: '5',
    // TimePDT: '1:40 PM',
    // TimeEDT: '4:40 PM',
    Agenda: 'Unitary decomposition using gate vectors',
    // Presenter: 'Tushar',
    Resources: (
      <span>
        <Tag color={'green'}>
          <Link to="/resources">slide</Link>{' '}
        </Tag>
        <Tag color={'blue'}>
          {' '}
          <Link to="/resources">video</Link>
        </Tag>
      </span>
    ),
  },
  {
    key: '6',
    // TimePDT: '1:40 PM',
    // TimeEDT: '4:40 PM',
    Agenda: 'Extending the framework by yourself: other downstream tasks!',
    // Presenter: 'Tushar',
    Resources: (
      <span>
        <Tag color={'green'}>
          <Link to="/resources">slide</Link>{' '}
        </Tag>
        <Tag color={'blue'}>
          {' '}
          <Link to="/resources">video</Link>
        </Tag>
      </span>
    ),
  },
  {
    key: '7',
    TimePDT: (
      <div style={{ fontWeight: 800, fontFamily: 'PingFang_HEAVY' }}>
        2:45 PM
      </div>
    ),
    // TimeEDT: '4:40 PM',
    Agenda: (
      <div style={{ fontWeight: 800, fontFamily: 'PingFang_HEAVY' }}>
        Janus-FEM Details
      </div>
    ),
    Presenter: 'Hanyu Zhang',
    Resources: (
      <span>
        <Tag color={'green'}>
          <Link to="/resources">slide</Link>{' '}
        </Tag>
        <Tag color={'blue'}>
          {' '}
          <Link to="/resources">video</Link>
        </Tag>
      </span>
    ),
  },
  {
    key: '8',
    // TimePDT: '1:40 PM',
    // TimeEDT: '4:40 PM',
    Agenda: 'Characterization of readout error',
    // Presenter: 'Tushar',
    Resources: (
      <span>
        <Tag color={'green'}>
          <Link to="/resources">slide</Link>
        </Tag>
        <Tag color={'blue'}>
          <Link to="/resources">video</Link>
        </Tag>
      </span>
    ),
  },
  {
    key: '9',
    // TimePDT: '1:40 PM',
    // TimeEDT: '4:40 PM',
    Agenda: 'Readout calibration using Janus-FEM',
    // Presenter: 'Tushar',
    Resources: (
      <span>
        <Tag color={'green'}>
          <Link to="/resources">slide</Link>{' '}
        </Tag>
        <Tag color={'blue'}>
          {' '}
          <Link to="/resources">video</Link>
        </Tag>
      </span>
    ),
  },
  {
    key: '10',
    TimePDT: (
      <div style={{ fontWeight: 800, fontFamily: 'PingFang_HEAVY' }}>
        3:15 PM
      </div>
    ),
    // TimeEDT: '4:40 PM',
    Agenda: (
      <div style={{ fontWeight: 800, fontFamily: 'PingFang_HEAVY' }}>
        lmplementing quantum applications
      </div>
    ),
    Presenter: 'Liqiang Lu',
    Resources: (
      <span>
        <Tag color={'green'}>
          <Link to="/resources">slide</Link>{' '}
        </Tag>
        <Tag color={'blue'}>
          {' '}
          <Link to="/resources">video</Link>
        </Tag>
      </span>
    ),
  },
  {
    key: '11',
    // TimePDT: '1:40 PM',
    // TimeEDT: '4:40 PM',
    Agenda: 'Introduction of SAT problem and time crystal',
    // Presenter: 'Tushar',
    Resources: (
      <span>
        <Tag color={'green'}>
          <Link to="/resources">slide</Link>{' '}
        </Tag>
        <Tag color={'blue'}>
          <Link to="/resources">video</Link>
        </Tag>
      </span>
    ),
  },
  {
    key: '12',
    // TimePDT: '1:40 PM',
    // TimeEDT: '4:40 PM',
    Agenda: 'End-to-end speedup in domain problems based on quantum SAT solver',
    // Presenter: 'Tushar',
    Resources: (
      <span>
        <Tag color={'green'}>
          <Link to="/resources">slide</Link>{' '}
        </Tag>
        <Tag color={'blue'}>
          <Link to="/resources">video</Link>
        </Tag>
      </span>
    ),
  },
  {
    key: '13',
    // TimePDT: '1:40 PM',
    // TimeEDT: '4:40 PM',
    Agenda: 'Simulate time crystal on Janus quantum platform',
    // Presenter: 'Tushar',
    Resources: (
      <span>
        <Tag color={'green'}>
          <Link to="/resources">slide</Link>{' '}
        </Tag>
        <Tag color={'blue'}>
          <Link to="/resources">video</Link>
        </Tag>
      </span>
    ),
  },
  {
    key: '14',
    TimePDT: (
      <div style={{ fontWeight: 800, fontFamily: 'PingFang_HEAVY' }}>
        4:30 PM
      </div>
    ),
    // TimeEDT: '4:40 PM',
    Agenda: (
      <div style={{ fontWeight: 800, fontFamily: 'PingFang_HEAVY' }}>Q & A</div>
    ),
    Presenter: 'Siwei Tan',
    Resources: (
      <span>
        <Tag color={'green'}>
          <Link to="/resources">slide</Link>
        </Tag>
        <Tag color={'blue'}>
          <Link to="/resources">video</Link>
        </Tag>
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
    Topic: ' \xa0  \xa0 \xa0 \xa0(b) Fidelity optimization using gate vectors',
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
    title: (
      <div style={{ fontWeight: 800, fontFamily: 'PingFang_HEAVY' }}>
        Time (PDT)
      </div>
    ),
    dataIndex: 'TimePDT',
    key: 'Time(PDT)',
  },
  // {
  //   title: <div style={{  fontWeight: 800, fontFamily: 'PingFang_HEAVY' }}>Time (EDT)</div>,
  //   dataIndex: 'TimeEDT',
  //   key: 'TimeEDT',
  // },
  {
    title: (
      <div style={{ fontWeight: 800, fontFamily: 'PingFang_HEAVY' }}>
        Agenda
      </div>
    ),
    dataIndex: 'Agenda',
    key: 'Agenda',
  },
  {
    title: (
      <div style={{ fontWeight: 800, fontFamily: 'PingFang_HEAVY' }}>
        Presenter
      </div>
    ),
    dataIndex: 'Presenter',
    key: 'Presenter',
  },
  {
    title: (
      <div style={{ fontWeight: 800, fontFamily: 'PingFang_HEAVY' }}>
        Resources
      </div>
    ),
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
    name: 'Jianwei Yin',
    photo: jianweiyin,
    introduce:
      'Jianwei Yin is currently a full professor in the College of Computer Science, Zhejiang University (ZJU), China. He haspublished more than 100 papers in top international journals and conferences. His current research interests include quantum computing, service computing and business process management. He is also the Associate Editor of the IEEE Transactions on Services Computing.',
  },
  {
    name: 'Liqiang Lu',
    photo: liqianglu,
    introduce:
      'Liqiang Lu is a ZJU100 Young Professor in the College of Computer Science, Zhejiang University (ZJU), China. His research interests include quantum computing, computer architecture, deep learning accelerator, and software-hardware codesign. He has authored more than 20 scientific publications in premier international journals and conferences in related  domains, including ISCA, MICRO, HPCA, FCCM, DAC, IEEE Micro, and TCAD. He also serves as a TPC member in the premier conferences in the related domain,including ICCAD,FPT,HPCC etc. ',
  },
  {
    name: 'Siwei Tan',
    photo: tansiwei,
    introduce:
      'Siwei Tan is a 5th year PhD student at Zhejiang University. His interests include the quantum algorithm and computer architecture.',
  },
]
export const papersData = [
  {
    title: `[ASPLOS 2024] MorphQPV: Exploiting Isomorphism in Quantum Programs to Facilitate Confident Verification`,
    team: `Siwei Tan, Debin Xiang, Liqiang Lu, Junlin Lu (Peking University), Qiuping Jiang (Ningbo University), Mingshuai Chen, and Jianwei Yin`,
    link: 'https://doi.org/10.1145/3620666.3651360',
    pdf: 'MorphQPV',
  },
  {
    title: `[ASPLOS 2024] QuFEM: Fast and Accurate Quantum Readout Calibration Using the Finite Element Method`,
    team: `Siwei Tan, Hanyu Zhang, Jia Yu, Congliang Lang, Xinkui Zhao, Mingshuai Chen, Yun Liang, Liqiang Lu, and Jianwei Yin (Zhejiang University)`,
    link: 'https://doi.org/10.1145/3620665.3640380',
    pdf: 'QuFEM',
  },
  {
    title: `[HPCA 2023] HyQSAT: A Hybrid Approach for 3-SAT Problems by
    Integrating Quantum Annealer with CDCL`,
    team: `Siwei Tan, Mingqian Yu, Andre Python, Yongheng
    Shang, Tingting Li, Liqiang Lu, Jianwei Yin (Zhejiang
    University)`,
    link: 'https://ieeexplore.ieee.org/document/10071022',
    pdf: 'HyQSAT',
  },
  {
    title: `[MICRO 2023] QuCT: A Framework for Analyzing Quantum Circuit
    by Extracting Contextual and Topological Features`,
    team: `Siwei Tan, Congliang Lang, Liang Xiang; Shudi Wang, Xinghui
    Jia, Ziqi Tan, Tingting Li (Zhejiang University), Jieming
    Yin (Nanjing University of Posts and Telecommunications);
    Yongheng Shang, Andre Python, Liqiang Lu, Jianwei
    Yin (Zhejiang University)`,
    link: 'https://dl.acm.org/doi/10.1145/3613424.3614274',
    pdf: 'QuCT',
  },
  {
    title: `[Nature 2022] Digital Quantum Simulation of Floquet SymmetryProtected Topological Phases`,
    team: `Xu Zhang (Zhejiang University), Wenjie Jiang (Tsinghua
      University), Jinfeng Deng, Ke Wang, Jiachen Chen, Pengfei
      Zhang, Wenhui Ren, Hang Dong, Shibo Xu, Yu Gao, Feitong Jin,
      Xuhao Zhu, Qiujiang Guo, Hekang Li, Chao Song, Alexey V.
      Gorshkov, Thomas Iadecola, Fangli Liu, Zhe-Xuan Gong, Zhen
      Wang* (Zhejiang University), Dong-Ling Deng* (Tsinghua
      University) & Haohua Wang (Zhejiang University)`,
    link: 'https://www.nature.com/articles/s41586-022-04854-3',
    pdf: 'Digital',
  },
]

export const participatorData = [
  'Chenning Tao',
  'Yifan Guo',
  'Xinghui Jia',
  'Hanyu Zhang',
  'Congliang Lang',
  'Debing Xiang',
]
