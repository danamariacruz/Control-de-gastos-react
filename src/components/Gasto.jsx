import React from 'react'
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import { formatoFecha } from '../helpers';

import iconoAhorro from '../img/icono_ahorro.svg'
import iconoComida from '../img/icono_comida.svg'
import iconoCasa from '../img/icono_casa.svg'
import iconoGastos from '../img/icono_gastos.svg'
import iconoOcio from '../img/icono_ocio.svg'
import iconoSalud from '../img/icono_salud.svg'
import iconoSuscripciones from '../img/icono_suscripciones.svg'

const diccionarioIconos = {
  ahorro: iconoAhorro,
  comida: iconoComida,
  casa: iconoCasa,
  gastos: iconoGastos,
  ocio: iconoOcio,
  salud: iconoSalud,
  suscripciones: iconoSuscripciones
}

const Gasto = ({gasto,setGastoEditar,eliminarGasto}) => {

  const {categoria, nombre, monto, id,fecha} = gasto;

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction 
        onClick={() => eliminarGasto(id)}
        destructive={true}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem 
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="gasto sombra">
            <div className="contenido-gasto">
                <img
                  src={diccionarioIconos[categoria]}
                  alt='Icono del gasto'
                />
                <div className="descripcion-gasto">
                    <p className="categoria">{categoria}</p>
                    <p className="nombre-gasto">{nombre}</p>
                    <p className="fecha-gasto">Agregado el: {''} <span>{formatoFecha(fecha)}</span></p>
                </div>
                
            </div>
            <p className="cantidad-gasto">${monto}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto
