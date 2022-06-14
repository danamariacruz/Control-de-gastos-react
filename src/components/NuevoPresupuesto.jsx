import {useState} from 'react'
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({presupuesto, setpresupuesto,setPresupuestoValido}) => {

  const [mensaje, setmensaje] = useState('')

  const handlePresupuesto = (e) => {
    e.preventDefault();

    if (!presupuesto || presupuesto < 0) {
      setmensaje('Debe ser un presupuesto valido ')

      return
    }
      setmensaje('')
      setPresupuestoValido(true)

  }

  return (
    <div className="contenedor-presupuesto contenedor sombra">

      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
            <label>Definir presupuesto</label>
            <input className="nuevo-presupuesto" type="number" placeholder="Añadir presupuesto" value={presupuesto} onChange={ e => setpresupuesto(Number(e.target.value))}/>
        </div>
        <input type="submit" value="Agregar" />

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  )
}

export default NuevoPresupuesto
