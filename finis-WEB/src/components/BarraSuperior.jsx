import React from 'react'

export default function BarraSuperior({ usuario }) {
  return <header className="topbar"><a className="marca" href="#inicio"><span className="marca-icono">f</span> finis<span className="marca-punto">.</span></a><span className="usuario"><span className="avatar">{usuario[0]}</span> Hola, {usuario}</span></header>
}
