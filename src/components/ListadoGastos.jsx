import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({filtro, GastosFiltro,gastos,setGastoEditar,eliminarGasto}) => {
  return (
    <div className="listado-gastos contenedor">
      

      {
        filtro ? (
          <>
          <h2>{GastosFiltro.lenth ? 'Gastos' : 'No hay gastos disponibles'}</h2>
            {GastosFiltro.map( gasto => (
                <Gasto 
                  key={gasto.id}
                  gasto={gasto}
                  setGastoEditar={setGastoEditar}
                  eliminarGasto={eliminarGasto}
                />
            ))}
          </>
        ) : 
        (
          <>
            <h2>{gastos.lenth ? 'Gastos' : 'No hay gastos disponibles'}</h2>
            { gastos.map( gasto => (
                <Gasto 
                  key={gasto.id}
                  gasto={gasto}
                  setGastoEditar={setGastoEditar}
                  eliminarGasto={eliminarGasto}
                />
            ))}          
        </>
        )
      }
    </div>
  )
}

export default ListadoGastos
