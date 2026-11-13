import React from 'react'

const enlaces = [{ nombre: 'Resumen', destino: '#inicio', icono: '◫' }, { nombre: 'Movimientos', destino: '#movimientos', icono: '↗' }, { nombre: 'Acerca del proyecto', destino: '#acerca', icono: 'ⓘ' }]
export default function MenuLateral() {
  return <aside className="menu"><p className="menu-titulo">TU ESPACIO</p>{enlaces.map((enlace) => <a key={enlace.nombre} href={enlace.destino}><span aria-hidden="true">{enlace.icono}</span>{enlace.nombre}</a>)}<div className="menu-nota">Una vista más clara de tu dinero.</div></aside>
}
