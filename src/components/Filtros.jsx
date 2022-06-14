import {useEffect, useState} from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className="filtros sombra contenedor">
        <form>
            <div className="campo">
                <label>Filtro Gastos</label>
                <select value={filtro} onChange={ (e) => setFiltro(e.target.value)}>
                    <option value="">Seleccione ...</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="transporte">Transporte</option>
                    <option value="casa">Casa</option>
                    <option value="salud">Salud</option>
                    <option value="ocio">Ocio</option>
                    <option value="otros">Otros gastos</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filtros
