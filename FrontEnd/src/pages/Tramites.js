import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Tab, Modal, Button } from 'react-bootstrap';

const Tramites = () => {
  const [showModal, setShowModal] = useState(false);
  const [tramiteSeleccionado, setTramiteSeleccionado] = useState(null);

  const tramites = {
    'Trámites Legales': [
      { 
        nombre: 'Legalización de Documentos', 
        descripcion: 'Proceso de validación legal de documentos municipales.',
        costo: '$20',
        tiempoEspera: '2 días hábiles',
        requisitos: 'Documento original, identificación.',
        documentacionRequerida: 'Documento a legalizar, copia de identificación.',
        pasosASeguir: '1. Acudir a la alcaldía. 2. Presentar documento. 3. Pagar tasa.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-file-signature' 
      },
      { 
        nombre: 'Testamentos', 
        descripcion: 'Redacción y certificación de testamentos.',
        costo: '$50',
        tiempoEspera: '5 días hábiles',
        requisitos: 'Presencia del testador, dos testigos.',
        documentacionRequerida: 'Documento de identidad, prueba de patrimonio.',
        pasosASeguir: '1. Firmar testamento. 2. Validar con testigos. 3. Registrar.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-scroll' 
      },
      { 
        nombre: 'Poderes Notariales', 
        descripcion: 'Gestión de poderes legales.',
        costo: '$30',
        tiempoEspera: '3 días hábiles',
        requisitos: 'Firma del otorgante, identificación.',
        documentacionRequerida: 'Identificación oficial, poder firmado.',
        pasosASeguir: '1. Firmar poder. 2. Validar documento. 3. Entregar poder.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-gavel' 
      },
      { 
        nombre: 'Autorizaciones Legales', 
        descripcion: 'Documentos oficiales emitidos por la alcaldía.',
        costo: '$25',
        tiempoEspera: '2 días hábiles',
        requisitos: 'Identificación, solicitud formal.',
        documentacionRequerida: 'Formulario completado, identificación.',
        pasosASeguir: '1. Presentar solicitud. 2. Validación de datos. 3. Emitir autorización.',
        icono: 'fa-solid fa-check-circle' 
      },
      { 
        nombre: 'Diligencias de Jurisdicción Voluntaria', 
        descripcion: 'Gestión de trámites judiciales sin intervención del juez.',
        costo: '$40',
        tiempoEspera: '3 días hábiles',
        requisitos: 'Solicitante y documentos requeridos.',
        documentacionRequerida: 'Identificación oficial, solicitud de diligencia.',
        pasosASeguir: '1. Presentar solicitud. 2. Evaluar solicitud. 3. Emitir resolución.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-balance-scale' 
      },
      { 
        nombre: 'Diligencia de Establecimiento Subsidiario', 
        descripcion: 'Proceso para declarar la incapacidad de los responsables legales.',
        costo: '$60',
        tiempoEspera: '7 días hábiles',
        requisitos: 'Documento legal, declaración de incapacidad.',
        documentacionRequerida: 'Acta notarial de incapacidad, documentos legales.',
        pasosASeguir: '1. Acudir a la alcaldía. 2. Presentar acta notarial. 3. Registrar resolución.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-hand-paper' 
      },
      { 
        nombre: 'Constitución de Asociaciones Comunales', 
        descripcion: 'Creación formal de asociaciones para gestión comunitaria.',
        costo: '$100',
        tiempoEspera: '15 días hábiles',
        requisitos: 'Acta constitutiva, acta de reunión.',
        documentacionRequerida: 'Acta de constitución, documento de identidad.',
        pasosASeguir: '1. Redactar acta. 2. Firmar acta. 3. Registrar ante la alcaldía.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-users' 
      },
      { 
        nombre: 'Título de Propiedad', 
        descripcion: 'Trámite para la obtención del título oficial de propiedad.',
        costo: '$80',
        tiempoEspera: '10 días hábiles',
        requisitos: 'Documento de identidad, prueba de propiedad.',
        documentacionRequerida: 'Título preliminar, identificación oficial.',
        pasosASeguir: '1. Presentar solicitud. 2. Evaluación de propiedad. 3. Emitir título.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-home' 
      }
    ],
    'Constancias': [
      { 
        nombre: 'Constancia Catastral', 
        descripcion: 'Certificado oficial sobre la ubicación y características de propiedades.',
        costo: '$10',
        tiempoEspera: '2 días hábiles',
        requisitos: 'Documento de identidad, solicitud formal.',
        documentacionRequerida: 'Copia del plano catastral, identificación.',
        pasosASeguir: '1. Solicitar constancia. 2. Validación de datos. 3. Emitir constancia.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-map' 
      },
      { 
        nombre: 'Constancia Inscripción', 
        descripcion: 'Constancia de inscripción en el registro público.',
        costo: '$15',
        tiempoEspera: '3 días hábiles',
        requisitos: 'Documento de inscripción, solicitud.',
        documentacionRequerida: 'Formulario de inscripción, identificación.',
        pasosASeguir: '1. Presentar documento. 2. Validación. 3. Emitir constancia.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-pen' 
      },
      { 
        nombre: 'Constancia Cementerios', 
        descripcion: 'Constancia de inhumación o ubicación en el cementerio.',
        costo: '$20',
        tiempoEspera: '4 días hábiles',
        requisitos: 'Registro de fallecimiento, solicitud.',
        documentacionRequerida: 'Acta de defunción, solicitud de constancia.',
        pasosASeguir: '1. Presentar solicitud. 2. Validación de datos. 3. Emitir constancia.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-cross' 
      },
      { 
        nombre: 'Constancia Municipal', 
        descripcion: 'Certificado de residencia o domicilio.',
        costo: '$12',
        tiempoEspera: '2 días hábiles',
        requisitos: 'Comprobante de residencia, identificación.',
        documentacionRequerida: 'Factura reciente, identificación.',
        pasosASeguir: '1. Presentar solicitud. 2. Validación de datos. 3. Emitir constancia.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-building' 
      },
      { 
        nombre: 'Constancia ANDA', 
        descripcion: 'Certificado relacionado con el servicio de agua.',
        costo: '$8',
        tiempoEspera: '1 día hábil',
        requisitos: 'Factura de agua, identificación.',
        documentacionRequerida: 'Factura, identificación oficial.',
        pasosASeguir: '1. Solicitar constancia. 2. Validación de datos. 3. Emitir constancia.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-water' 
      }
    ],
    'Trámites Empresariales': [
      { 
        nombre: 'Permiso de Instalación de Elemento Publicitario',
        descripcion: 'Autorización para instalar elementos publicitarios.',
        costo: '$50',
        tiempoEspera: '5 días hábiles',
        requisitos: 'Solicitud formal, identificación.',
        documentacionRequerida: 'Formulario de solicitud, comprobante de propiedad.',
        pasosASeguir: '1. Solicitar permiso. 2. Validación de lugar. 3. Emitir permiso.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-bullhorn' 
      },
      { 
        nombre: 'Vialidades', 
        descripcion: 'Permiso para la realización de obras en vías públicas.',
        costo: '$70',
        tiempoEspera: '7 días hábiles',
        requisitos: 'Estudio de impacto vial, plano de la obra.',
        documentacionRequerida: 'Plano vial, solicitud de permiso.',
        pasosASeguir: '1. Solicitar permiso. 2. Evaluar impacto. 3. Emitir permiso.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-road' 
      },
      { 
        nombre: 'Licencia de Operaciones para Empresas',
        descripcion: 'Licencia para operar legalmente una empresa.',
        costo: '$100',
        tiempoEspera: '15 días hábiles',
        requisitos: 'Registro de empresa, identificación.',
        documentacionRequerida: 'Certificado de registro, documento de identidad.',
        pasosASeguir: '1. Presentar solicitud. 2. Validación de empresa. 3. Emitir licencia.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-building' 
      },
      { 
        nombre: 'Renovación de Permanencia',
        descripcion: 'Renovación de permiso de permanencia para empresas.',
        costo: '$50',
        tiempoEspera: '5 días hábiles',
        requisitos: 'Identificación, documento de la empresa.',
        documentacionRequerida: 'Identificación, documento vigente.',
        pasosASeguir: '1. Solicitar renovación. 2. Validar información. 3. Emitir permiso.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-refresh' 
      },
      { 
        nombre: 'Licencia de Operaciones para Empresa Publicitaria',
        descripcion: 'Licencia especial para empresas publicitarias.',
        costo: '$120',
        tiempoEspera: '10 días hábiles',
        requisitos: 'Documentación oficial, registro de empresa.',
        documentacionRequerida: 'Registro comercial, identificación.',
        pasosASeguir: '1. Solicitar licencia. 2. Validar datos. 3. Emitir licencia.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-ad' 
      },
      { 
        nombre: 'Emisión de Estados de Cuenta',
        descripcion: 'Solicitud de estado de cuenta oficial.',
        costo: '$15',
        tiempoEspera: '2 días hábiles',
        requisitos: 'Número de cuenta, identificación.',
        documentacionRequerida: 'Número de cuenta, identificación oficial.',
        pasosASeguir: '1. Solicitar estado. 2. Validar información. 3. Emitir estado.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-file-invoice' 
      },
      { 
        nombre: 'Emisión de Solvencia Municipal General',
        descripcion: 'Certificado de solvencia municipal para empresas.',
        costo: '$30',
        tiempoEspera: '4 días hábiles',
        requisitos: 'Comprobante de pago de impuestos.',
        documentacionRequerida: 'Comprobante de pago, solicitud.',
        pasosASeguir: '1. Solicitar solvencia. 2. Validar pagos. 3. Emitir certificado.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-check' 
      },
      { 
        nombre: 'Emisión de Planes de Pago',
        descripcion: 'Solicitud para establecer un plan de pagos.',
        costo: '$20',
        tiempoEspera: '3 días hábiles',
        requisitos: 'Identificación, monto adeudado.',
        documentacionRequerida: 'Copia de deuda, identificación.',
        pasosASeguir: '1. Solicitar plan. 2. Evaluar deuda. 3. Emitir plan.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-credit-card' 
      },
      { 
        nombre: 'Concepto de Negocio',
        descripcion: 'Certificación de actividad económica de la empresa.',
        costo: '$25',
        tiempoEspera: '2 días hábiles',
        requisitos: 'Documento de identidad, registro de actividad.',
        documentacionRequerida: 'Documentos oficiales, identificación.',
        pasosASeguir: '1. Solicitar concepto. 2. Validar información. 3. Emitir concepto.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-business-time' 
      }
    ],
    'Registro Familiar': [
      { 
        nombre: 'Asentamiento de Nacimiento', 
        descripcion: 'Inscripción de Nacimiento.',
        costo: 'Gratis',
        tiempoEspera: '5 días hábiles',
        requisitos: 'Se debe de informar en un plazo máximo de 45 días en base al art 51, Art 48 LREF.',
        documentacionRequerida: '1. Ficha médica del nacimiento emitida por Sistema Nacional Integrado de Salud (PREREGISTRO NUI). 2. Copia de DUI de ambos padres si aplicare.',
        pasosASeguir: '1. La persona informante deberá, demostrar la ocurrencia del nacimiento al registrador del estado familiar, mediante la declaración de un testigo, mayor de dieciocho años de edad, que pueda dar féconforme a lo dispuesto en esta ley. 2. No existen limitaciones en cuanto a que el testigo sea familiarde la madre o padre del recién nacido. 3. La declaración del testigo sobre el hecho del nacimiento no garantizará la veracidad de esta, portanto, podrá impugnarse en la instancia judicial correspondiente.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-baby' 
      },
      { 
        nombre: 'Emisión de auténtica de partidas', 
        descripcion: 'Autenticación oficial de las partidas.',
        costo: '$9.98',
        tiempoEspera: '5 días hábiles',
        requisitos: 'Se deberá presentar prueba documental si se solicita la modificación del nombre o apellidos de uno de los padres del interesado, indicar antes de solciitar cualquier documento que se necesite ser emitido en el Registro del Estado Familiar con estas caracteristicas FIRMA DELREGISTRADOR, FIRMA DEL SECRETARIO MUNICIPAL, FIRMA DE ALCALDE, .',
        documentacionRequerida: 'Partida original, identificación.',
        pasosASeguir: '1. Indicar el tipo de firma requerida. 2. Pagar el costo del trámite. 3. Emitir auténtica.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-id-card' 
      },
      { 
        nombre: 'Carnét de identificación personal', 
        descripcion: 'Emisión de carnét de menoridad.',
        costo: '$5.00',
        tiempoEspera: '5 días hábiles',
        requisitos: 'Debe estar acompañado por al menos uno de sus padres o representante legal, el menor debe tener entre 7 y 17 años,',
        documentacionRequerida: ' Certificación de partida de nacimiento reciente, debe de residir dentro del municipio y acompañarse con uno de suspadres o responsable.',
        pasosASeguir: '1. Acudir a la Alcaldía con el menor y la documentación requerida. 2. Presentar la partida de nacimiento y la copia del DUI del acompañante. 3. Pagar el tramite, 4. Esperar la emisión del carné, el cual se entrega en el mismo día o en un máximo de 3 días hábiles',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-user' 
      },
      { 
        nombre: 'Constancias', 
        descripcion: 'Constancia de Inexistencia (CI), Constancia de Solteria (CS)',
        costo: '$3.68',
        tiempoEspera: '5 día hábil',
        requisitos: 'Identificación, solicitud.',
        documentacionRequerida: 'Presentar solicitud con datos personales como el nombre, lugar de nacimiento, fecha de nacimiento y nombre completo de los padres (CI),   2. Certificación de partida de nacimiento reciente, copia de DUI (CS).',
        pasosASeguir: '1. Presentar la solicitud con los datos personales. 2. Realizar el pago del trámite. 3. Recibir la constancia. ',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-id-badge' 
      },
      { 
        nombre: 'Marginaciones y/o Reposiciones', 
        descripcion: 'Marginaciones (MG), Reposiciones (RP).',
        costo: '$3.68',
        tiempoEspera: '1 día hábil',
        requisitos: 'Solicitud escrita dirigida al Registro del Estado Familiar, especificando el tipo de marginación solicitada (MG). Documentos probatorios (MG), (RP).',
        documentacionRequerida: 'Documentos a recibir.',
        pasosASeguir: '1. Documentos probatorios que respalden la modificación (MG) 2. Copia del DUI del solicitante (MG),(RP). 3. Se realiza a solicitud de la parte interesada. 4. Llenado de formulario y solicitud (RP). 5. Partida certificada por Notario o Microfilm emitidopor RNPN (RP)',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-receipt' 
      },
      { 
        nombre: 'Certificaciones', 
        descripcion: 'Certificación de Partidas de Nacimiento (CPN), Matrimonio (CM), Partida de Defunción (CPD), Unión No Matrimonial (CUNM), Divorcios Históricos (CDH), Cedula de Identidad (CCI)..',
        costo: '$3.68',
        tiempoEspera: '5 días hábiles',
        requisitos: 'a. Presentar solicitud con datos personales (nombre, lugar y fecha de nacimiento)(CPN) b. Presentar solicitud con nombres completos de los contrayentes fecha y lugar (CM). c. Presentar solicitud con el nombre del fallecido, fecha y lugar del fallecimiento, nombre de los padres o cónyuge (si aplica) (CPD).  d. Presentar solicitud con los nombres de los convivientes, fecha y lugar de la unión (CUNM). e. Presentar solicitud con nombres completos de las partes involucradas, fecha y lugar del divorcio (CDH). f. Presentar solicitud con fecha exacta de emisión de cédula a solicitar, y nombre completo de los padres(CCI).',
        documentacionRequerida: 'Copia del DUI del solicitante (CNP),(CM),(CPD),(CDH), Copia del DUI de ambos convivientes (CUNM).',
        pasosASeguir: '1. Presentarse a la Alcaldía con la documentación, en unidad de registro familiar (REF). 2. Llenar la solicitud con los datos para cualquiera de su certificación. 3. Pagar el arancel establecido, o costo del tramite 4. Emitir certificación.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-certificate' 
      },
      { 
        nombre: 'Asentamiento de defunción', 
        descripcion: 'Registro de defunción.',
        costo: '$3.68',
        tiempoEspera: '5 días hábiles',
        requisitos: 'Cualquier pariente por consanguinidad o afinidad de un fallecido, o persona que, por razón de su cargo, profesión u oficio, o vecindad, tuviere conocimiento del fallecimiento de una persona, en el plazo máximo de cuarenta y cinco díashábiles siguientes de dicho conocimiento, deberá informarlo al registrador del estado familiar competente, para que asiente la inscripción de defunción en base al art 78 LREF.',
        documentacionRequerida: '1. Esquela del Instituto de médicina Legal, constancia o certificado médico expedida y firmada por el médico que atendió o reconoció el cadaver. 2. Copia de DUI del fallecido, el informante y un testigo en caso aplicare.',
        pasosASeguir: '1. Cuando no fuere posible obtener constancia médica de la muerte, el deceso deberá probarse al registrador delestado familiar a través del documento resultante de la autopsia o del levantamiento del cadáver con relación a a determinación del cuerpo sin vida, o en su caso, mediante la declaración de un testigo mayor de dieciocho en base a la hábiles siguientes de dicho conocimiento, deberá informarlo al años que haya visto el cadáver, quien en todo caso deberá identificarse de acuerdo con lo establecido en la presente ley. 2. No existe limitaciones en cuanto a que el testigo sea familiar de la persona fallecida.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-cross' 
      },
      { 
        nombre: 'Inscripciones Uniones No Matrimoniales', 
        descripcion: 'Registro de Union no Matrimonial.',
        costo: '$3.68',
        tiempoEspera: '5 días hábiles',
        requisitos: 'Cualquier pariente por consanguinidad o afinidad de un fallecido, o persona que, por razón de su cargo, profesión u oficio, o vecindad, tuviere conocimiento del fallecimiento de una persona, en el plazo máximo de cuarenta y cinco díashábiles siguientes de dicho conocimiento, deberá informarlo al registrador del estado familiar competente, para que asiente la inscripción de defunción en base al art 78 LREF.',
        documentacionRequerida: '1. Esquela del Instituto de médicina Legal, constancia o certificado médico expedida y firmada por el médico que atendió o reconoció el cadaver. 2. Copia de DUI del fallecido, el informante y un testigo en caso aplicare.',
        pasosASeguir: '1. Cuando no fuere posible obtener constancia médica de la muerte, el deceso deberá probarse al registrador delestado familiar a través del documento resultante de la autopsia o del levantamiento del cadáver con relación a a determinación del cuerpo sin vida, o en su caso, mediante la declaración de un testigo mayor de dieciocho en base a la hábiles siguientes de dicho conocimiento, deberá informarlo al años que haya visto el cadáver, quien en todo caso deberá identificarse de acuerdo con lo establecido en la presente ley. 2. No existe limitaciones en cuanto a que el testigo sea familiar de la persona fallecida.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-handshake' 
      },
      { 
        nombre: 'Inscripciones de Matrimonios', 
        descripcion: 'Registro de Matrimonio.',
        costo: '$3.68',
        tiempoEspera: '5 días hábiles',
        requisitos: 'Cualquier pariente por consanguinidad o afinidad de un fallecido, o persona que, por razón de su cargo, profesión u oficio, o vecindad, tuviere conocimiento del fallecimiento de una persona, en el plazo máximo de cuarenta y cinco díashábiles siguientes de dicho conocimiento, deberá informarlo al registrador del estado familiar competente, para que asiente la inscripción de defunción en base al art 78 LREF.',
        documentacionRequerida: '1. Esquela del Instituto de médicina Legal, constancia o certificado médico expedida y firmada por el médico que atendió o reconoció el cadaver. 2. Copia de DUI del fallecido, el informante y un testigo en caso aplicare.',
        pasosASeguir: '1. Cuando no fuere posible obtener constancia médica de la muerte, el deceso deberá probarse al registrador delestado familiar a través del documento resultante de la autopsia o del levantamiento del cadáver con relación a a determinación del cuerpo sin vida, o en su caso, mediante la declaración de un testigo mayor de dieciocho en base a la hábiles siguientes de dicho conocimiento, deberá informarlo al años que haya visto el cadáver, quien en todo caso deberá identificarse de acuerdo con lo establecido en la presente ley. 2. No existe limitaciones en cuanto a que el testigo sea familiar de la persona fallecida.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-ring' 
      }
    ],
    'Inmuebles': [
      { 
        nombre: 'Calificaciones de oficio de inmuebles', 
        descripcion: 'Calificación oficial de inmuebles.',
        costo: '$30',
        tiempoEspera: '10 días hábiles',
        requisitos: 'Documentos del inmueble.',
        documentacionRequerida: 'Escritura, recibo de impuestos.',
        pasosASeguir: '1. Presentar documentos. 2. Evaluación. 3. Emitir calificación.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-home' 
      },
      { 
        nombre: 'Inscripción de inmueble por comodato', 
        descripcion: 'Inscripción de inmuebles en comodato.',
        costo: '$40',
        tiempoEspera: '5 días hábiles',
        requisitos: 'Contrato de comodato.',
        documentacionRequerida: 'Contrato, identificación.',
        pasosASeguir: '1. Presentar contrato. 2. Validación de datos. 3. Inscribir inmueble.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-building' 
      },
      { 
        nombre: 'Traspasos de inmuebles', 
        descripcion: 'Traspaso de propiedad de inmuebles.',
        costo: '$60',
        tiempoEspera: '7 días hábiles',
        requisitos: 'Escritura pública, pago de impuestos.',
        documentacionRequerida: 'Escritura, identificación.',
        pasosASeguir: '1. Presentar escritura. 2. Validación de pagos. 3. Traspasar inmueble.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-exchange-alt' 
      },
      { 
        nombre: 'Traspasos de inmuebles por herencia', 
        descripcion: 'Traspaso de propiedad por herencia.',
        costo: '$100',
        tiempoEspera: '15 días hábiles',
        requisitos: 'Certificado de defunción, testamento.',
        documentacionRequerida: 'Testamento, certificado de defunción.',
        pasosASeguir: '1. Presentar documentos. 2. Validación de herencia. 3. Transferir propiedad.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-people-carry' 
      }
    ],
    'Trámites de Construcción': [
      { 
        nombre: 'Permiso de construcción o legalización', 
        descripcion: 'Permiso para construir o legalizar una construcción.',
        costo: '$200',
        tiempoEspera: '10 días hábiles',
        requisitos: 'Planos, identificación.',
        documentacionRequerida: 'Planos arquitectónicos, licencia.',
        pasosASeguir: '1. Presentar planos. 2. Validación de proyecto. 3. Emitir permiso.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-hammer' 
      },
      { 
        nombre: 'Facilidad de vialidad de un proyecto', 
        descripcion: 'Autorización para el uso de vialidades.',
        costo: '$150',
        tiempoEspera: '7 días hábiles',
        requisitos: 'Planos del proyecto.',
        documentacionRequerida: 'Plano de vialidad.',
        pasosASeguir: '1. Presentar proyecto. 2. Validar vialidad. 3. Emitir autorización.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-road' 
      },
      { 
        nombre: 'Recepción de obra de proyectos', 
        descripcion: 'Recepción de obras de construcción terminadas.',
        costo: '$100',
        tiempoEspera: '5 días hábiles',
        requisitos: 'Inspección de obra.',
        documentacionRequerida: 'Informe de obra, licencia.',
        pasosASeguir: '1. Presentar informe. 2. Inspección. 3. Aceptar obra.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-tools' 
      },
      { 
        nombre: 'Demolición de cualquier naturaleza', 
        descripcion: 'Permiso para demolición de estructuras.',
        costo: '$80',
        tiempoEspera: '7 días hábiles',
        requisitos: 'Permiso de construcción.',
        documentacionRequerida: 'Permiso, planos de demolición.',
        pasosASeguir: '1. Solicitar demolición. 2. Validar permisos. 3. Autorizar demolición.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-building' 
      }
    ],
    'Trámites Cementerio': [
      { 
        nombre: 'Reposición de títulos', 
        descripcion: 'Proceso para recuperar un título de propiedad de una tumba.',
        costo: '$40',
        tiempoEspera: '3 días hábiles',
        requisitos: 'Identificación, solicitud formal.',
        documentacionRequerida: 'Copia de identificación, solicitud formal.',
        pasosASeguir: '1. Presentar solicitud. 2. Validación de datos. 3. Emitir reposición.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-cross' 
      },
      { 
        nombre: 'Permiso de construcción', 
        descripcion: 'Autorización para construir en el cementerio.',
        costo: '$50',
        tiempoEspera: '7 días hábiles',
        requisitos: 'Plan de construcción, autorización de la alcaldía.',
        documentacionRequerida: 'Plano de construcción, carta de autorización.',
        pasosASeguir: '1. Presentar plan. 2. Evaluación de viabilidad. 3. Obtener permiso.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-hard-hat' 
      },
      { 
        nombre: 'Certificaciones de títulos de propiedad', 
        descripcion: 'Certificación oficial del título de propiedad de una tumba.',
        costo: '$30',
        tiempoEspera: '4 días hábiles',
        requisitos: 'Título original, identificación.',
        documentacionRequerida: 'Título de propiedad, copia de identificación.',
        pasosASeguir: '1. Presentar título. 2. Validación de datos. 3. Emitir certificación.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-certificate' 
      }
    ],
    'Trámites de Delegación': [
      { 
        nombre: 'Denuncia', 
        descripcion: 'Proceso para realizar una denuncia oficial.',
        costo: 'Gratis',
        tiempoEspera: '2 días hábiles',
        requisitos: 'Identificación, pruebas.',
        documentacionRequerida: 'Formulario de denuncia, identificación.',
        pasosASeguir: '1. Llenar formulario. 2. Presentar pruebas. 3. Registrar denuncia.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-exclamation-circle' 
      },
      { 
        nombre: 'Mediación', 
        descripcion: 'Proceso para resolver conflictos mediante mediación.',
        costo: '$25',
        tiempoEspera: '5 días hábiles',
        requisitos: 'Acuerdo entre partes, identificación.',
        documentacionRequerida: 'Formulario de mediación, identificación.',
        pasosASeguir: '1. Presentar solicitud. 2. Agendar mediación. 3. Resolver el conflicto.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-handshake' 
      },
      { 
        nombre: 'Apelación de esquela', 
        descripcion: 'Proceso para apelar una esquela emitida por la alcaldía.',
        costo: '$15',
        tiempoEspera: '5 días hábiles',
        requisitos: 'Esquela, razones para apelación.',
        documentacionRequerida: 'Copia de esquela, razones escritas.',
        pasosASeguir: '1. Presentar apelación. 2. Evaluación del caso. 3. Emitir resolución.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-gavel' 
      },
      { 
        nombre: 'Devolución de decomisos', 
        descripcion: 'Proceso para solicitar la devolución de bienes decomisados.',
        costo: '$10',
        tiempoEspera: '3 días hábiles',
        requisitos: 'Prueba de propiedad, identificación.',
        documentacionRequerida: 'Formulario de solicitud, identificación.',
        pasosASeguir: '1. Presentar solicitud. 2. Validación de propiedad. 3. Devolución de bienes.',
        horarioAtencion: 'Lunes a Viernes 8 AM - 4 PM',
        icono: 'fa-solid fa-box-open' 
      }
    ]
  };

  const handleShowModal = (tramite) => {
    setTramiteSeleccionado(tramite);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setTramiteSeleccionado(null);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Trámites</h1>
      <p className="text-center mb-5">Descubre los trámites que puedes realizar en la alcaldía, organizados por categoría.</p>
      
      <Tab.Container defaultActiveKey="Trámites Legales">
        <Nav variant="pills" className="justify-content-center mb-4">
          {Object.keys(tramites).map((categoria, index) => (
            <Nav.Item key={index}>
              <Nav.Link eventKey={categoria}>{categoria}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        <Tab.Content>
          {Object.entries(tramites).map(([categoria, tramitesList], index) => (
            <Tab.Pane eventKey={categoria} key={index}>
              <div className="row gy-4">
                {tramitesList.map((tramite, idx) => (
                  <div className="col-md-4 col-sm-6" key={idx}>
                    <div className="card shadow-sm border-0 h-100" onClick={() => handleShowModal(tramite)}>
                      <div className="card-body text-center">
                        <i className={`${tramite.icono} fa-3x mb-3 text-primary`}></i>
                        <h5 className="card-title mb-3">{tramite.nombre}</h5>
                        <p className="card-text">{tramite.descripcion}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Pane>
          ))}
        </Tab.Content>
      </Tab.Container>

      {/* Modal de Detalle */}
      {tramiteSeleccionado && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{tramiteSeleccionado.nombre}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Descripción:</strong> {tramiteSeleccionado.descripcion}</p>
            <p><strong>Costo:</strong> {tramiteSeleccionado.costo}</p>
            <p><strong>Tiempo de espera:</strong> {tramiteSeleccionado.tiempoEspera}</p>
            <p><strong>Requisitos:</strong> {tramiteSeleccionado.requisitos}</p>
            <p><strong>Documentación Requerida:</strong> {tramiteSeleccionado.documentacionRequerida}</p>
            <p><strong>Pasos a Seguir:</strong> {tramiteSeleccionado.pasosASeguir}</p>
            <p><strong>Horario de Atención:</strong> {tramiteSeleccionado.horarioAtencion}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Tramites;
