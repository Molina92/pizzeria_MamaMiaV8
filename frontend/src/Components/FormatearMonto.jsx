import React from 'react'

export default function FormatearMonto(monto) {
  return (
    monto.toLocaleString("es-CL", { style: "currency", currency: "CLP" })
  )
}
