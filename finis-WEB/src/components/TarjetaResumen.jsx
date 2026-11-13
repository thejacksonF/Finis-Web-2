import React from 'react'
import { dinero } from '../dinero.js'

export default function TarjetaResumen({ etiqueta, valor, detalle, estilo }) {
  return <div className="col-md-4"><article className={`resumen-card ${estilo || ''}`}><p>{etiqueta}</p><strong>{dinero(valor)}</strong><span>{detalle}</span></article></div>
}
