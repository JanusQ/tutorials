import React from 'react'
import { useLocation } from 'react-router-dom'

export default function PdfPreview({}) {
  const {
    state: { pdf },
  } = useLocation()
  return (
    <embed
      style={{ height: 1000 }}
      src={`/tutorials/PDF/${pdf}.pdf`}
      type="application/pdf"
      width="100%"
      height="100%"
    />
  )
}
