import React, { Suspense } from 'react'
import { Navigate } from 'react-router-dom'

import LazyLoad from '../utils/LazyLoad'
import JanusLayout from './../../JanusQuantum/JanusLayout'
import JanusHomePage from './../../JanusQuantum/JanusHomePage'
export const JanusRouter = [
  {
    element: <JanusLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to="/home" />,
      },
      {
        path: '/home',
        element: <JanusHomePage />,

        meta: {
          requiresAuth: false,
          title: 'home',
          key: 'home',
        },
      },
      {
        path: '/resources',
        element: LazyLoad(
          React.lazy(() => import('./../../JanusQuantum/Resources'))
        ),
        meta: {
          requiresAuth: false,
          title: 'resources',
          key: 'resources',
        },
      },
      {
        path: '/pdfPreview',
        element: LazyLoad(
          React.lazy(() => import('./../../JanusQuantum/PdfPreview'))
        ),
        meta: {
          requiresAuth: false,
          title: 'pdfPreview',
          key: 'pdfPreview',
        },
      },

      {
        path: '/tutorial_liealgebra',
        element: LazyLoad(
          React.lazy(() => import('../../JanusQuantum/IpynbPreview'))
        ),
        meta: {
          requiresAuth: false,
          title: 'tutorial_liealgebra',
          key: 'tutorial_liealgebra',
        },
      },
      {
        path: '/test',
        element: LazyLoad(React.lazy(() => import('@/pages/Test'))),
        meta: {
          requiresAuth: false,
          title: 'test',
          key: 'tes',
        },
      },
      {
        path: '/404',
        element: LazyLoad(React.lazy(() => import('@/pages/ErrorMessage/404'))),
      },
      // {
      //   path: '*',
      //   element: <Navigate to="/404" />,
      // },
    ],
  },
  {
    path: '/demonstrations/:fileName',
    element: LazyLoad(
      React.lazy(() => import('../../JanusQuantum/Demonstrations'))
    ),
    meta: {
      requiresAuth: false,
      title: 'demonstrations',
      key: 'demonstrations',
    },
  },
  {
    path: '/demonstrations/',
    element: LazyLoad(
      React.lazy(() => import('../../JanusQuantum/Demonstrations'))
    ),
    meta: {
      requiresAuth: false,
      title: 'demonstratio',
      key: 'demonstratio',
    },
  },
]
