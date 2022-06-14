import {useState, useEffect} from 'react'
import Mensaje from './Mensaje'
import btnCerrar from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal,guardarGasto, gastoEditar,setGastoEditar}) => {

    const [mensaje, setMensaje] = useState('')

    const [nombre, setNombre] = useState('')
    const [monto, setMonto] = useState(0)
    const [categoria, setCategoria] = useState('')
    const [fecha, setFecha] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre)
            setMonto(gastoEditar.monto)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
          }
    }, [])

    const ocultarModal =() => {
        setModal(false)
        setGastoEditar({})
        setAnimarModal(false)
    }

    const handleSubmit = e => {
        e.preventDefault();

        if ([nombre, monto, categoria].includes('')) {
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 3000)

            return
        }

        guardarGasto({nombre,monto,categoria,id})
    }

  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img
                src={btnCerrar}
                alt="Ceerar modal"
                onClick={ocultarModal}
            />
        </div>

        <form onSubmit={handleSubmit} className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
            <legend>{gastoEditar.nombre ? 'Editar gasto' : 'Nuevo Gasto'}</legend>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

            <div className="campo">
                <label htmlFor="nombre">Gasto</label>
                <input id="nombre" type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
            </div>
            <div className="campo">
                <label htmlFor="monto">Monto</label>
                <input id="monto" type="number" value={monto} onChange={e => setMonto(Number(e.target.value))} />
            </div>
            <div className="campo">
                <label htmlFor="categoria">Categoria</label>
                <select id="categoria" value={categoria} onChange={e => setCategoria(e.target.value)}>
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

            <input type="submit" value={gastoEditar.nombre ? 'Guardar gasto' : 'Añadir Gasto'} />
        </form>

    </div>
  )
}


export default Modal
