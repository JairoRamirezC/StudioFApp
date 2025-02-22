import React, { useState } from 'react';
import type { ChangeEvent } from 'react';
import { useTransition, animated } from 'react-spring';
// import { motion, AnimatePresence } from 'framer-motion';

type Errors = {
  [key: string]: string
};


const categoriesList = [
  'Apropiación indebida de activos',
  'Mal uso de recursos',
  'Corrupción y conflicto de interés',
  'Sobornos y propinas ilegales',
  'Conductas anomalas en procesos administrativos (Proveedores)',
  'Daños contra la imagen corporativa',
  'Manipulación contable',
  'Revelación de información confidencial',
  'Otro'
]

const FormularioConPasos = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    categoriaReporte: '',
    descripcionEvento: '',
    archivos: [] as File[],
    nombreEmpleado: '',
    cargo: '',
    fechaEvento: '',
    departamento: '',
    municipio: '',
    lugarEvento: '',
    aceptaPolitica: false,
    nombre: '',
    correoElectronico: '',
    telefono: '',
    tipoDocumento: '',
    numeroDocumento: '',
    relacionEntidad: ''
  });
  const [errors, setErrors] = useState<Errors>({});

  const transitions = useTransition(currentStep, {
    from: { transform: 'translateX(100%)', opacity: 0 },
    enter: { transform: 'translateX(0%)', opacity: 1 },
    leave: { transform: 'translateX(-100%)', opacity: 0 },
    config: { duration: 300 },
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = event.target;
    const isChecked = (event?.target as HTMLInputElement).checked;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? isChecked : value,
    });
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event?.target?.files;
    if (files) {
      const acceptedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'application/pdf', 'text/plain', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      const validFiles = Array.from(files).filter((file) => acceptedTypes.includes(file.type));
      setFormData({ ...formData, archivos: validFiles });
      if (validFiles.length === 0) {
        setErrors((prev) => ({ ...prev, archivos: 'Formato de archivo no válido' }));
      } else {
        setErrors((prev) => ({ ...prev, archivos: '' }));
      }
    }
  };

  const validateStep = () => {
    const newErrors:Errors = {};
    if (currentStep === 1) {
      if (!formData.categoriaReporte) newErrors.categoriaReporte = 'Este campo es requerido';
      if (!formData.descripcionEvento) newErrors.descripcionEvento = 'Este campo es requerido';
    } else if (currentStep === 2) {
      if (!formData.nombreEmpleado) newErrors.nombreEmpleado = 'Este campo es requerido';
      if (!formData.cargo) newErrors.cargo = 'Este campo es requerido';
      if (!formData.fechaEvento) newErrors.fechaEvento = 'Este campo es requerido';
      if (!formData.departamento) newErrors.departamento = 'Este campo es requerido';
      if (!formData.municipio) newErrors.municipio = 'Este campo es requerido';
      if (!formData.lugarEvento) newErrors.lugarEvento = 'Este campo es requerido';
    } else if (currentStep === 3) {
      if (!formData.aceptaPolitica) {
        newErrors.aceptaPolitica = 'Debe aceptar la política de tratamiento de datos';
      }
      if (formData.aceptaPolitica) {
        if (!formData.nombre) newErrors.nombre = 'Este campo es requerido';
        if (!formData.correoElectronico) newErrors.correoElectronico = 'Este campo es requerido';
        if (!formData.telefono) newErrors.telefono = 'Este campo es requerido';
        if (!formData.tipoDocumento) newErrors.tipoDocumento = 'Este campo es requerido';
        if (!formData.numeroDocumento) newErrors.numeroDocumento = 'Este campo es requerido';
        if (!formData.relacionEntidad) newErrors.relacionEntidad = 'Este campo es requerido';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if(currentStep === 1) return;
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    if (validateStep()) {
      console.log('Datos enviados:', formData);
    }
  };

  return (
    <div className="formulario">
      <div className="formulario__steps">
        <div>
          <span className={`formulario__step ${currentStep === 1 ? 'activo' : ''}`}>1</span>
          <br />
          <p>DENUNCIA</p>
        </div>
        <div>
          <span className={`formulario__step ${currentStep === 2 ? 'activo' : ''}`}>2</span>
          <br />
          <p>DATOS DE LA DENUNCIA</p>
        </div>
        <div>
          <span className={`formulario__step ${currentStep === 3 ? 'activo' : ''}`}>3</span>
          <br />
          <p>MIS DATOS</p>
        </div>
      </div>
      <hr className='' />
      <div className="formulario__content">
        {transitions((style, step) => (
          <animated.div style={{ ...style, position: 'absolute', width: '100%' }}>
            {step === 1 && ((
              <div>
                <h2>Categoría De Reporte *</h2>
                <select
                  name="categoriaReporte"
                  value={formData.categoriaReporte}
                  onChange={handleInputChange}
                >
                  <option value="">-- Seleccionar una Opción --</option>
                  {categoriesList.map((category:string, index:number) => (
                    <option key={index} value={`Categoria ${index + 1}`}>{category}</option>
                  ))}
                </select>
                {errors.categoriaReporte && <label className="error">{errors.categoriaReporte}</label>}

                <h2>Descripción Detallada Del Evento*</h2>
                <textarea
                  name="descripcionEvento"
                  value={formData.descripcionEvento}
                  onChange={handleInputChange}
                />
                {errors.descripcionEvento && <label className="error">{errors.descripcionEvento}</label>}

                <h2>Selecciona un(os) archivo(s): imágenes(.jpeg, .jpg, .png, .webp), word, pdf, y .txt</h2>
                <div className="formulario__content__file-input">
                  <input
                    type="file"
                    name="archivos"
                    accept=".jpeg,.jpg,.png,.webp,.pdf,.txt,.doc,.docx"
                    multiple
                    onChange={handleFileChange}
                  />
                </div>
                {/* {errors.archivos && <label className="error">{errors.archivos}</label>} */}

                <br />
                <button onClick={handleNext}>Siguiente</button>
              </div>
            ))}

            {step === 2 && ((
              <div>
                <h2>Nombre Del Empleado Relacionado Con La Denuncia*</h2>
                <input type="text" name="nombreEmpleado" value={formData.nombreEmpleado} onChange={handleInputChange} />
                {errors.nombreEmpleado && <label className="error">{errors.nombreEmpleado}</label>}

                <h2>Cargo *</h2>
                <input type="text" name="cargo" value={formData.cargo} onChange={handleInputChange} />
                {errors.cargo && <label className="error">{errors.cargo}</label>}

                <h2>Fecha Del Evento *</h2>
                <input type="date" name="fechaEvento" value={formData.fechaEvento} onChange={handleInputChange} />
                {errors.fechaEvento && <label className="error">{errors.fechaEvento}</label>}

                <h2>Departamento *</h2>
                <select name="departamento" value={formData.departamento} onChange={handleInputChange}>
                  <option value="">Departamento</option>
                  <option value="Cundinamarca">Cundinamarca</option>
                  <option value="Antioquia">Antioquia</option>
                </select>
                {errors.departamento && <label className="error">{errors.departamento}</label>}

                <h2>Municipio *</h2>
                <select name="municipio" value={formData.municipio} onChange={handleInputChange}>
                  <option value="">Seleccionar opción...</option>
                  <option value="Bogotá">Bogotá</option>
                  <option value="Medellín">Medellín</option>
                </select>
                {errors.municipio && <label className="error">{errors.municipio}</label>}

                <h2>Lugar De Ocurrencia Del Evento*</h2>
                <input type="text" name="lugarEvento" value={formData.lugarEvento} onChange={handleInputChange} />
                {errors.lugarEvento && <label className="error">{errors.lugarEvento}</label>}
                <br />
                <button onClick={handlePrevious}>Anterior</button>
                <button onClick={handleNext}>Siguiente</button>
              </div>
            ))}
            
            {step === 3 && (
              <div>
                <input
                  type="checkbox"
                  name="aceptaPolitica"
                  checked={formData.aceptaPolitica}
                  onChange={handleInputChange}
                />
                <label>Declaro que he conocido la política de tratamiento de datos y he aceptado la misma.</label>
                {errors.aceptaPolitica && <label className="error">{errors.aceptaPolitica}</label>}

                {formData.aceptaPolitica && (
                  <div className="formulario__datos-adicionales">
                    <input type="text" name="nombre" placeholder="Nombre" onChange={handleInputChange} />
                    {errors.nombre && <label className="error">{errors.nombre}</label>}

                    <input type="email" name="correoElectronico" placeholder="Correo Electrónico" onChange={handleInputChange} />
                    {errors.correoElectronico && <label className="error">{errors.correoElectronico}</label>}

                    <input type="text" name="telefono" placeholder="No. Telefónico" onChange={handleInputChange} />
                    {errors.telefono && <label className="error">{errors.telefono}</label>}

                    <select name="tipoDocumento" onChange={handleInputChange}>
                      <option value="">-- Seleccionar una Opción --</option>
                      <option value="CC">Cédula de Ciudadanía</option>
                      <option value="TI">Tarjeta de Identidad</option>
                      <option value="CE">Cédula de Extranjería</option>
                    </select>
                    {errors.tipoDocumento && <label className="error">{errors.tipoDocumento}</label>}

                    <input type="text" name="numeroDocumento" placeholder="No." onChange={handleInputChange} />
                    {errors.numeroDocumento && <label className="error">{errors.numeroDocumento}</label>}

                    <input type="text" name="relacionEntidad" placeholder="Relación Entidad" onChange={handleInputChange} />
                    {errors.relacionEntidad && <label className="error">{errors.relacionEntidad}</label>}
                  </div>
                )}
                <button onClick={() => setCurrentStep(2)}>Anterior</button>
                <button onClick={handleSubmit}>Enviar</button>
              </div>
            )}
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default FormularioConPasos;
