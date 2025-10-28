import React from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';


function CalculadoraPrincipal() {

    const [potenciaPanel, setPotenciaPanel] = useState(0);
    const [cantidadPaneles, setCantidadPaneles] = useState(0);
    const [inversorPrecio, setInversorPrecio] = useState(0);
    const [bateriaPrecio, setBateriaPrecio] = useState(0);
    const [cantidadBaterias, setCantidadBaterias] = useState(0);
    const [estrucCableado, setEstrucCableado] = useState(0);
    const [instalacionBase, setInstalacionBase] = useState(0);
    const [pesoEnvio, setPesoEnvio] = useState(0);
    const [tipoTecho, setTipoTecho] = useState("");
    const [region, setRegion] = useState("");
    const [complejidadInstalacion, setComplejidadInstalacion] = useState("");
    const [subsidio, setSubsidio] = useState("");
    const [metodoEnvio, setMetodoEnvio] = useState("");
    const [garantia, setGarantia] = useState("");
    const [planPago, setPlanPago] = useState("");
    const [tipoPie, setTipoPie] = useState("");
        const [valorPie, setValorPie] = useState(0);



    const [cantidadModulosRam, setCantidadModulosRam] = useState(0);
    const [descuento, setDescuento] = useState(0);
    const [precioCpu, setPrecioCpu] = useState(0);
    const [precioGpu, setPrecioGpu] = useState(0);
    const subTotal = parseInt(precioCpu) + parseInt(precioGpu) + parseInt(cantidadModulosRam);
    const totalIva = parseInt(subTotal) * 0.19;
    const total = parseInt(subTotal) + parseInt(totalIva) - parseInt(descuento);

    return (
        <div className='row justify-content-center'>
            <div className='row justify-content-center'>
                <div className='col-lg-6 text-left'>
                    <h2>DEMO calculadora</h2>
                </div>
            </div>

            <div className='row mt-3 justify-content-center'>
                <div className='col-lg-4 bg-white p-3 rounded'>
                    <h4>Formulario</h4>

                    {/* primera row */}
                    <div className="row">

                        <div className='col-lg-6'>
                            <label className='form-label' htmlFor='potenciaPanel'>Potencia del panel (W)</label>
                            <input id='potenciaPanel' name='potenciaPanel' placeholder='1000000' type='number' className='form-control' value={potenciaPanel} onChange={(e) => setPotenciaPanel(e.target.value)}></input>
                        </div>

                        <div className='col-lg-6'>
                            <label className='form-label' htmlFor='cantidadPaneles'>Cantidad Paneles</label>
                            <input id='cantidadPaneles' name='cantidadPaneles' placeholder='1000000' type='number' className='form-control' value={cantidadPaneles} onChange={(e) => setCantidadPaneles(e.target.value)}></input>

                        </div>
                    </div>
                    {/* segunda row */}
                    <div className="row">

                        <div className='col-lg-6'>
                            <label className='form-label' htmlFor='inversorPrecio'>Inversor (precio)</label>
                            <input id='inversorPrecio' name='inversorPrecio' placeholder='1000000' type='number' className='form-control' value={inversorPrecio} onChange={(e) => setInversorPrecio(e.target.value)}></input>
                        </div>

                        <div className='col-lg-6'>
                            <label className='form-label' htmlFor='bateriaPrecio'>Batería (precio unidad)</label>
                            <input id='bateriaPrecio' name='bateriaPrecio' placeholder='1000000' type='number' className='form-control' value={bateriaPrecio} onChange={(e) => setBateriaPrecio(e.target.value)}></input>

                        </div>
                    </div>

                    {/* tercera row */}
                    <div className="row">

                        <div className='col-lg-6'>
                            <label className='form-label' htmlFor='cantidadBaterias'>Cantidad Baterías</label>
                            <input id='cantidadBaterias' name='cantidadBaterias' placeholder='1000000' type='number' className='form-control' value={cantidadBaterias} onChange={(e) => setCantidadBaterias(e.target.value)}></input>
                        </div>

                        <div className='col-lg-6'>
                            <label className='form-label' htmlFor='estrucCableado'>Estruc./cableado</label>
                            <input id='estrucCableado' name='estrucCableado' placeholder='1000000' type='number' className='form-control' value={estrucCableado} onChange={(e) => setEstrucCableado(e.target.value)}></input>

                        </div>
                    </div>

                    {/* cuarta row */}
                    <div className="row">

                        <div className='col-lg-6'>
                            <label className='form-label' htmlFor='instalacionBase'>Instalación Base</label>
                            <input id='instalacionBase' name='instalacionBase' placeholder='1000000' type='number' className='form-control' value={instalacionBase} onChange={(e) => setInstalacionBase(e.target.value)}></input>
                        </div>

                        <div className='col-lg-6'>
                            <label className='form-label' htmlFor='pesoEnvio'>Peso envío (kg)</label>
                            <input id='pesoEnvio' name='pesoEnvio' placeholder='1000000' type='number' className='form-control' value={pesoEnvio} onChange={(e) => setPesoEnvio(e.target.value)}></input>

                        </div>
                    </div>

                    {/* quinta  row con despliegue*/}
                    <div className="row">

                        <div className='col-lg-6'>
                            <label className='form-label' htmlFor='tipoTecho'>Tipo de techo</label>
                            <select className='form-select' id='tipoTecho' name='tipoTecho' value={tipoTecho} onChange={(e) => setTipoTecho(e.target.value)}>
                                <option>Seleccione Opción</option>
                                <option value={1}>Con Garantía</option>
                                <option value={2}>Sin Garantía</option>
                            </select>
                        </div>
                        <div className='col-lg-6'>
                            <label className='form-label' htmlFor='region'>Región</label>
                            <select className='form-select' id='region' name='region' value={region} onChange={(e) => setRegion(e.target.value)}>
                                <option>Seleccione Opción</option>
                                <option value={1}>Con Garantía</option>
                                <option value={2}>Sin Garantía</option>
                            </select>
                        </div>

                    </div>

                    {/* sexta  row con despliegue*/}
                    <div className="row">

                        <div className='col-lg-6'>
                            <label className='form-label' htmlFor='complejidadInstalacion'>Complejidad instalación</label>
                            <select className='form-select' id='complejidadInstalacion' name='complejidadInstalacion' value={complejidadInstalacion} onChange={(e) => setComplejidadInstalacion(e.target.value)}>
                                <option>Seleccione Opción</option>
                                <option value={1}>Con Garantía</option>
                                <option value={2}>Sin Garantía</option>
                            </select>
                        </div>
                        <div className='col-lg-6'>
                            <label className='form-label' htmlFor='subsidio'>Subsidio</label>
                            <select className='form-select' id='subsidio' name='subsidio' value={subsidio} onChange={(e) => setSubsidio(e.target.value)}>
                                <option>Seleccione Opción</option>
                                <option value={1}>Con Garantía</option>
                                <option value={2}>Sin Garantía</option>
                            </select>
                        </div>

                    </div>

                    {/* septima  row con despliegue*/}
                    <div className="row">

                        <div className='col-lg-6'>
                            <label className='form-label' htmlFor='metodoEnvio'>Método de envío</label>
                            <select className='form-select' id='metodoEnvio' name='metodoEnvio' value={metodoEnvio} onChange={(e) => setMetodoEnvio(e.target.value)}>
                                <option>Seleccione Opción</option>
                                <option value={1}>Con Garantía</option>
                                <option value={2}>Sin Garantía</option>
                            </select>
                        </div>
                        <div className='col-lg-6'>
                            <label className='form-label' htmlFor='garantia'>Garantía</label>
                            <select className='form-select' id='garantia' name='garantia' value={garantia} onChange={(e) => setGarantia(e.target.value)}>
                                <option>Seleccione Opción</option>
                                <option value={1}>Con Garantía</option>
                                <option value={2}>Sin Garantía</option>
                            </select>
                        </div>

                    </div>

                    {/* octava  row con despliegue*/}
                    <div className="row">

                        <div className='col-lg-6'>
                            <label className='form-label' htmlFor='planPago'>Plan de Pago</label>
                            <select className='form-select' id='planPago' name='planPago' value={planPago} onChange={(e) => setPlanPago(e.target.value)}>
                                <option>Seleccione Opción</option>
                                <option value={1}>Con Garantía</option>
                                <option value={2}>Sin Garantía</option>
                            </select>
                        </div>
                        <div className='col-lg-6'>
                            <label className='form-label' htmlFor='tipoPie'>Tipo de pie</label>
                            <select className='form-select' id='tipoPie' name='tipoPie' value={tipoPie} onChange={(e) => setTipoPie(e.target.value)}>
                                <option>Seleccione Opción</option>
                                <option value={1}>Con Garantía</option>
                                <option value={2}>Sin Garantía</option>
                            </select>
                        </div>

                    </div>

                    {/* novena  row con despliegue*/}
                    <div className="row">
                        <div className='col-lg-6'>
                            <label className='form-label' htmlFor='valorPie'>Valor de pie</label>
                            <input id='valorPie' name='valorPie' placeholder='1000000' type='number' className='form-control' value={valorPie} onChange={(e) => setValorPie(e.target.value)}></input>
                        </div>


                    </div>





                    <div className='form-group mt-3'>
                        <a className='btn btn-warning' onClick={(e) => {

                            setPrecioCpu(0);
                            setPrecioGpu(0);
                            setCantidadModulosRam(0);
                            setSubsidio("");
                            setDescuento(0);
                        }} ><i class="fa-solid fa-poo"></i> Limpiar </a>
                    </div>

                </div>

                <div className='col-lg-4 bg-white p-3 rounded'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Concepto</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Subtotal</td>
                                <td>$ {subTotal.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>(-) IVA (19%)</td>
                                <td>$ {totalIva.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>(-) Descuento </td>
                                <td>$ {descuento.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Total</td>
                                <td>$ {total.toLocaleString()}</td>
                            </tr>


                        </tbody>
                    </Table>
                </div>

            </div>
        </div>

    );

}


export default CalculadoraPrincipal;