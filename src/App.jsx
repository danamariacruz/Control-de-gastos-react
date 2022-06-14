import { useState, useEffect } from 'react'
import Header from './components/Header'
import Filtros from './components/Filtros' 
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'
import {generarId} from './helpers/index'
import NuevoGastoIcono from './img/nuevo-gasto.svg'

function App() {  

  const[presupuesto, setpresupuesto ] = useState(localStorage.getItem('presupuesto') ?? 0)
  const[presupuestoValido, setPresupuestoValido] = useState(false)

  const[modal, setModal] = useState(false)
  const[animarModal, setAnimarModal] = useState(false)

  const [gastos, setGastos] = useState(localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : [])

  const [gastoEditar, setGastoEditar] = useState({})

  const [filtro, setFiltro] = useState('')
  const [GastosFiltro, setGastoFiltro] = useState('')

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true)
       
      setTimeout(() => {
        setAnimarModal(true)
      }, 500);
    }
  }, [gastoEditar])

   useEffect(() => {
      localStorage.setItem('presupuesto', presupuesto ?? 0)
   },[presupuesto])

   useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [] )
 },[gastos])

  useEffect(() => {
    if (filtro) {
      const gastosFiltrados = gastos.filter(g => g.categoria === filtro)

      setGastoFiltro(gastosFiltrados)
    }
  }, [filtro])

   useEffect(() => {
     const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0
    
     if (presupuestoLS > 0) {
      setPresupuestoValido(true)
     }
   },[])

  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})
     
    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  }

  const guardarGasto = gasto => {
    if (gasto.id) {
      const gastoActualizado = gastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)

      setGastos(gastoActualizado)
      setGastoEditar({})
    }else {
      gasto.id = generarId()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])
    }    

    setAnimarModal(false)
    setModal(false)
  }

  const eliminarGasto = id => {
    const gastoEliminado = gastos.filter(gasto => gasto.id !== id )
    setGastos(gastoEliminado)
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header 
        gastos = {gastos}
        presupuesto={presupuesto}
        setpresupuesto={setpresupuesto}
        presupuestoValido={presupuestoValido}
        setPresupuestoValido={setPresupuestoValido}
      />

      {presupuestoValido && (
        <>
        <main>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
          <ListadoGastos 
            gastos={gastos}
            setGastoEditar={setGastoEditar}      
            eliminarGasto={eliminarGasto}
            filtro={filtro}
            GastosFiltro={GastosFiltro} 
          />
        </main>
        <div className='nuevo-gasto'>
          <img
            src={NuevoGastoIcono}
            alt="Icono nuevo gasto"
            onClick={handleNuevoGasto}
          />
        </div>
        </>
      )}
      {modal && <Modal 
              setModal={setModal} 
              animarModal={animarModal} 
              setAnimarModal={setAnimarModal}
              guardarGasto={guardarGasto}
              gastoEditar={gastoEditar}
              setGastoEditar={setGastoEditar}
            />}
    </div> 
  )
}

export default App
