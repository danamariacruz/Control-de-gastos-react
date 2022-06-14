import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({gastos,presupuesto, setpresupuesto,presupuestoValido, setPresupuestoValido}) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>

      {presupuestoValido ? (
        <ControlPresupuesto 
          gastos={gastos}
          presupuesto={presupuesto}
        />
      ) : (
        <NuevoPresupuesto 
                presupuesto={presupuesto}
                setpresupuesto={setpresupuesto}
                presupuestoValido={presupuestoValido}
                setPresupuestoValido={setPresupuestoValido}
              />
      )}

      
    </header>
  )
}

export default Header
