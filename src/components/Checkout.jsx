import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { db } from "../service/firebase"
import { Link } from "react-router-dom"
import EmptyCart from "./EmptyCart"
import { Button, Col, Form, Row } from "react-bootstrap"
import { toast, Flip } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Swal from 'sweetalert2'

const Checkout = () => {
    const [buyer, setBuyer] = useState({})
    const [validMail, setValidMail] = useState('')
    const [orderId, setOrderId] = useState(null)
    const [error, setError] = useState(null)
    const [process, setProcess] = useState(false)
    const [validated, setValidated] = useState(false)
    const { cart, totalAPagar, clear } = useContext(CartContext)

    const buyerData = (e) => {
        setBuyer({ ...buyer, [e.target.name]: e.target.value })
    }

    const finalizarCompra = (e) => {
        e.preventDefault()
        const form = e.currentTarget
        if (form.checkValidity() === false) {
            e.stopPropagation()
            setValidated(true)
            return
        }
        if (buyer.email !== validMail) {
        toast.error(`Los emails ingresados no coinciden. Revise los datos ingresados`)
            return
        }
        setValidated(true)
        setProcess(true)
        setError(null)
        let orden = {
            comprador: buyer,
            compras: cart,
            total: totalAPagar(),
            date: serverTimestamp()
        }
        const ventas = collection(db, "orders")
        addDoc(ventas, orden)
            .then((res) => {
            setOrderId(res.id)
            clear()
            Swal.fire({
                title: "¡Compra realizada!",
                text: `Tu número de orden es: ${res.id}`,
                icon: "success"
            })
        })
            .catch((error) => console.log(error))
            .finally(() => setProcess(false))
    }

    if (!cart.length && !orderId) {
        return <EmptyCart />
    }

    return (
        <>
            {orderId
                ? <div className="text-center mt-5">
                    <h2>¡Muchas gracias por su compra! 🎉</h2>
                    <h4>Su orden es: <strong>{orderId}</strong></h4>
                    <Link className='btn btn-naranja mt-3' to='/'>Volver a Home</Link>
                </div>
                : <div className="container mt-4" style={{ maxWidth: '600px' }}>
                    <h1 className="mb-4">Complete sus datos</h1>
                    {error && <span style={{ color: 'red', fontWeight: 'bold' }}>{error}</span>}
                    <Form noValidate validated={validated} onSubmit={finalizarCompra}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationNombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control required type="text" placeholder="Ingrese su nombre" name="name" onChange={buyerData} />
                                <Form.Control.Feedback>¡Se ve bien!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Por favor ingrese su nombre.</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationApellido">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control required type="text" placeholder="Ingrese su apellido" name="lastname" onChange={buyerData} />
                                <Form.Control.Feedback>¡Se ve bien!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Por favor ingrese su apellido.</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationEmail">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control required type="email" placeholder="Ingrese su correo" name="email" onChange={buyerData} />
                                <Form.Control.Feedback>¡Se ve bien!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Por favor ingrese un correo válido.</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="12" controlId="validationEmail2">
                                <Form.Label>Repetir correo electrónico</Form.Label>
                                <Form.Control required type="email" placeholder="Repita su correo" onChange={(e) => setValidMail(e.target.value)} />
                                <Form.Control.Feedback>¡Se ve bien!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Por favor repita su correo.</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                        <Form.Group as={Col} md="8" controlId="validationDireccion">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control required type="text" placeholder="Ingrese su dirección" name="direccion" onChange={buyerData} />
                            <Form.Control.Feedback type="invalid">Por favor ingrese su dirección.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationCP">
                            <Form.Label>Código Postal</Form.Label>
                            <Form.Control required type="text" placeholder="Ej: 1234" name="codigoPostal" onChange={buyerData} />
                            <Form.Control.Feedback type="invalid">Por favor ingrese su código postal.</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                        <Button type="submit" className="btn btn-success w-100" disabled={process}>
                            {process ? 'Procesando Orden...' : 'Generar Orden'}
                        </Button>
                    </Form>
                </div>
            }
        </>
    )
}

export default Checkout