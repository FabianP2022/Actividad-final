import React, { useState } from 'react';

const Form = () => {
    const [cliente, setCliente] = useState(null); // Estado para almacenar los datos del cliente
    const [modalVisible, setModalVisible] = useState(false); // Estado para controlar la visibilidad del modal
    const [fotoURL, setFotoURL] = useState(null); // Estado para almacenar la URL de la foto seleccionada

    // Manejar la selección de la foto
    const handleFotoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file); // Crear URL para la imagen
            setFotoURL(url);
        }
    };

    // Manejar el envío del formulario
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

        const formData = new FormData(event.target);
        const nuevoCliente = {
            nombre: formData.get("nombre"),
            direccion: formData.get("direccion"),
            telefono: formData.get("telefono"),
            foto: fotoURL, // Usar la URL de la foto
            web: formData.get("web"),
            email: formData.get("email"),
        };

        setCliente(nuevoCliente); // Guardar el cliente en el estado
        setModalVisible(true); // Mostrar el modal
        event.target.reset(); // Limpiar el formulario
        setFotoURL(null); // Resetear la URL de la foto
    };

    // Cerrar el modal
    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <div>
            <div className="shadow-sm rounded mt-5">
                <h4 className="text-center">Registro de clientes</h4>
                <form className="p-4" onSubmit={handleSubmit}>
                    {/* Nombre */}
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control mt-2 mb-2"
                            id="nombre"
                            placeholder="Ingresar nombre"
                            name="nombre"
                            required
                        />
                        <label htmlFor="nombre">Ingresar nombre</label>
                    </div>

                    {/* Dirección */}
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control mt-2 mb-2"
                            id="direccion"
                            placeholder="Ingresar dirección"
                            name="direccion"
                            required
                        />
                        <label htmlFor="direccion">Ingresar dirección</label>
                    </div>

                    {/* Teléfono */}
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control mt-2 mb-2"
                            id="telefono"
                            placeholder="Ingresar teléfono"
                            name="telefono"
                            required
                        />
                        <label htmlFor="telefono">Ingresar teléfono</label>
                    </div>

                    {/* Foto de perfil */}
                    <div className="mt-3">
                        <label htmlFor="foto">Elegir foto de perfil</label>
                        <input
                            type="file"
                            id="foto"
                            className="form-control"
                            name="foto"
                            accept="image/*"
                            onChange={handleFotoChange}
                        />
                    </div>

                    {/* Web */}
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control mt-2 mb-2"
                            id="web"
                            placeholder="Ingresar sitio web"
                            name="web"
                            required
                        />
                        <label htmlFor="web">Ingresar sitio web</label>
                    </div>

                    {/* Email */}
                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control mt-2 mb-2"
                            id="email"
                            placeholder="Ingresar correo electrónico"
                            name="email"
                            required
                        />
                        <label htmlFor="email">Ingresar correo electrónico</label>
                    </div>

                    {/* Botón */}
                    <button type="submit" className="btn btn-primary mt-3 w-100">
                        Guardar Cliente
                    </button>
                </form>
            </div>

            {/* Modal */}
            {modalVisible && cliente && (
                <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Datos del Cliente Guardado</h5>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <p><strong>Nombre:</strong> {cliente.nombre}</p>
                                <p><strong>Dirección:</strong> {cliente.direccion}</p>
                                <p><strong>Teléfono:</strong> {cliente.telefono}</p>
                                <p><strong>Web:</strong> {cliente.web}</p>
                                <p><strong>Email:</strong> {cliente.email}</p>
                                {cliente.foto && (
                                    <div className="text-center">
                                        <strong>Foto:</strong>
                                        <img
                                            src={cliente.foto}
                                            alt="Foto del cliente"
                                            className="img-thumbnail mt-2"
                                            style={{ maxWidth: "200px" }}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Form;
