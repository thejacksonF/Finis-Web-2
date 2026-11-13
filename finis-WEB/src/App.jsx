import React, { useEffect, useState } from 'react'
import BarraSuperior from './components/BarraSuperior.jsx'
import MenuLateral from './components/MenuLateral.jsx'
import TarjetaResumen from './components/TarjetaResumen.jsx'
import ListaMovimientos from './components/ListaMovimientos.jsx'

const datosEjemplo = [
  { id: 1, nombre: 'Despensa semanal', categoria: 'Alimentación', fecha: '02 nov 2026', monto: -820 },
  { id: 2, nombre: 'Pago de nómina', categoria: 'Ingreso', fecha: '01 nov 2026', monto: 12500 },
  { id: 3, nombre: 'Servicio de internet', categoria: 'Servicios', fecha: '31 oct 2026', monto: -599 },
  { id: 4, nombre: 'Café y desayuno', categoria: 'Alimentación', fecha: '30 oct 2026', monto: -145 },
]

export default function App() {
  const [mostrarMontos, setMostrarMontos] = useState(true)
  const [busqueda, setBusqueda] = useState('')
  const [movimientos, setMovimientos] = useState([])
  const [cargando, setCargando] = useState(true)

  // Simula una consulta y cancela el temporizador al desmontar.
  useEffect(() => {
    const temporizador = setTimeout(() => {
      setMovimientos(datosEjemplo)
      setCargando(false)
    }, 2000)
    return () => clearTimeout(temporizador)
  }, [])

  // El título de la pestaña cambia al buscar y se restaura al salir.
  useEffect(() => {
    const tituloAnterior = document.title
    document.title = busqueda.trim() ? `Buscando: ${busqueda.trim()} | FINIS` : 'FINIS | Panel de práctica'
    return () => { document.title = tituloAnterior }
  }, [busqueda])

  const ingresos = movimientos.filter((m) => m.monto > 0).reduce((total, m) => total + m.monto, 0)
  const gastos = movimientos.filter((m) => m.monto < 0).reduce((total, m) => total + Math.abs(m.monto), 0)
  const consulta = busqueda.trim().toLocaleLowerCase('es')
  const filtrados = movimientos.filter((m) => `${m.nombre} ${m.categoria}`.toLocaleLowerCase('es').includes(consulta))

  return <><BarraSuperior usuario="Alex" /><div className="estructura"><MenuLateral /><main className="contenido" id="inicio"><div className="bienvenida"><div><span className="eyebrow">PANEL PERSONAL · DEMOSTRACIÓN</span><h1>Tu dinero, más claro.</h1><p>Organiza tus movimientos y entiende tus finanzas de un vistazo.</p></div><span className="periodo">Noviembre 2026</span></div><div className="aviso">Esta es una práctica visual de FINIS con datos inventados. No está conectada a cuentas bancarias ni al proyecto del equipo.</div><div className="resumen-header"><h2>Tu resumen</h2><button type="button" className="boton-texto" onClick={() => setMostrarMontos((visible) => !visible)}>{mostrarMontos ? 'Ocultar montos' : 'Mostrar montos'}</button></div>{cargando ? <div className="montos-ocultos" role="status"><span className="spinner-border spinner-border-sm text-primary me-2" aria-hidden="true"></span>Cargando información...</div> : mostrarMontos ? <div className="row g-3"><TarjetaResumen etiqueta="Balance de ejemplo" valor={ingresos - gastos} detalle="Ingresos menos gastos" estilo="principal" /><TarjetaResumen etiqueta="Ingresos" valor={ingresos} detalle="Dinero recibido" /><TarjetaResumen etiqueta="Gastos" valor={gastos} detalle="Dinero utilizado" /></div> : <div className="montos-ocultos">Los montos del resumen están ocultos.</div>}<ListaMovimientos lista={filtrados} busqueda={busqueda} alBuscar={setBusqueda} cargando={cargando} /><p className="pie" id="acerca">FINIS práctica web · Interfaz de ejemplo para aprender React</p></main></div></>
}
