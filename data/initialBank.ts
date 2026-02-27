import { Question } from '../types';

export const initialBank: Question[] = 
  [
  {
    "id": "q1",
    "questionText": "Agregar pequeñas perturbaciones para engañar IA",
    "type": "single",
    "options": [
      { "id": "q1_o1", "text": "Ataque adversarial.", "isCorrect": true },
      { "id": "q1_o2", "text": "Envenenamiento de datos.", "isCorrect": false },
      { "id": "q1_o3", "text": "Ataque de denegación de servicio.", "isCorrect": false },
      { "id": "q1_o4", "text": "Fuga de modelo.", "isCorrect": false }
    ],
    "hint": "Son cambios sutiles en los datos de entrada.",
    "explanation": "Los ataques adversariales manipulan deliberadamente las entradas para provocar comportamientos incorrectos en modelos de IA."
  },
  {
    "id": "q2",
    "questionText": "Al comparar las pruebas SCA y SAST, ¿cuáles afirmaciones son correctas?",
    "type": "multiple",
    "options": [
      { "id": "q2_o1", "text": "SCA se centra en analizar cómo funcionan los componentes a tiempo de ejecución.", "isCorrect": false },
      { "id": "q2_o2", "text": "SAST evalúa cómo funcionan a tiempo de ejecución los componentes.", "isCorrect": false },
      { "id": "q2_o3", "text": "SCA se centra en analizar los componentes externos.", "isCorrect": true },
      { "id": "q2_o4", "text": "SAST se enfoca en analizar los componentes desarrollados.", "isCorrect": true },
      { "id": "q2_o5", "text": "SCA permite evaluar lo mismo que SAST.", "isCorrect": false },
      { "id": "q2_o6", "text": "SAST se enfoca en analizar dependencias externas exclusivamente.", "isCorrect": false }
    ],
    "hint": "Uno analiza dependencias externas y el otro código propio.",
    "explanation": "SCA analiza bibliotecas externas y vulnerabilidades conocidas; SAST analiza el código fuente desarrollado internamente."
  },
  {
    "id": "q3",
    "questionText": "Uso de algoritmos criptográficos auditados públicamente corresponde a qué principio?",
    "type": "single",
    "options": [
      { "id": "q3_o1", "text": "Diseño abierto.", "isCorrect": true },
      { "id": "q3_o2", "text": "Diseño modular.", "isCorrect": false },
      { "id": "q3_o3", "text": "Diseño hermético.", "isCorrect": false },
      { "id": "q3_o4", "text": "Fallo seguro.", "isCorrect": false },
      { "id": "q3_o5", "text": "Menor privilegio.", "isCorrect": false },
      { "id": "q3_o6", "text": "Defensa en profundidad.", "isCorrect": false }
    ],
    "hint": "La seguridad no debe depender del secreto del diseño.",
    "explanation": "El principio de diseño abierto establece que la seguridad no depende del secreto del sistema sino de la solidez de sus mecanismos."
  },
  {
    "id": "q4",
    "questionText": "API permite acceso a recursos por IDs sin verificación",
    "type": "single",
    "options": [
      { "id": "q4_o1", "text": "Autorización de objeto rota.", "isCorrect": true },
      { "id": "q4_o2", "text": "Inyección SQL.", "isCorrect": false },
      { "id": "q4_o3", "text": "Errores criptográficos.", "isCorrect": false },
      { "id": "q4_o4", "text": "Configuración incorrecta de seguridad.", "isCorrect": false }
    ],
    "hint": "Acceso indebido a objetos específicos.",
    "explanation": "La autorización de objeto rota permite acceder a recursos sin validar adecuadamente los permisos."
  },
  {
    "id": "q5",
    "questionText": "API sin autenticación segura",
    "type": "single",
    "options": [
      { "id": "q5_o1", "text": "Autenticación/autorización insegura.", "isCorrect": true },
      { "id": "q5_o2", "text": "Exposición excesiva de datos.", "isCorrect": false },
      { "id": "q5_o3", "text": "Falsificación de solicitudes del lado del servidor.", "isCorrect": false },
      { "id": "q5_o4", "text": "Diseño inseguro.", "isCorrect": false }
    ],
    "hint": "Problemas al validar identidad del usuario.",
    "explanation": "La autenticación rota permite accesos no autorizados por validaciones incorrectas."
  },
  {
    "id": "q6",
    "questionText": "Ataque a integridad del conjunto de datos de IA",
    "type": "single",
    "options": [
      { "id": "q6_o1", "text": "Envenenamiento de datos.", "isCorrect": true },
      { "id": "q6_o2", "text": "Ataque adversarial.", "isCorrect": false },
      { "id": "q6_o3", "text": "Ataque de fuerza bruta.", "isCorrect": false },
      { "id": "q6_o4", "text": "Exfiltración de datos.", "isCorrect": false }
    ],
    "hint": "Manipulación del dataset de entrenamiento.",
    "explanation": "El envenenamiento de datos altera el rendimiento del modelo introduciendo datos maliciosos."
  },
  {
    "id": "q7",
    "questionText": "Ataque que eleva privilegios modificando roles",
    "type": "single",
    "options": [
      { "id": "q7_o1", "text": "Elevation of privileges.", "isCorrect": true },
      { "id": "q7_o2", "text": "Tampering.", "isCorrect": false },
      { "id": "q7_o3", "text": "Spoofing.", "isCorrect": false },
      { "id": "q7_o4", "text": "Repudiation.", "isCorrect": false }
    ],
    "hint": "Relacionado con aumento indebido de permisos.",
    "explanation": "La elevación de privilegios ocurre cuando un usuario obtiene permisos superiores sin autorización."
  },
  {
    "id": "q8",
    "questionText": "Ataques a consola cloud. ¿Qué implementar?",
    "type": "single",
    "options": [
      { "id": "q8_o1", "text": "Controlar estrictamente el acceso con privilegios a la consola de gestión.", "isCorrect": true },
      { "id": "q8_o2", "text": "Habilitar todas las cuentas por defecto.", "isCorrect": false },
      { "id": "q8_o3", "text": "Desactivar monitoreo.", "isCorrect": false },
      { "id": "q8_o4", "text": "Compartir credenciales administrativas.", "isCorrect": false }
    ],
    "hint": "Gestión estricta de accesos privilegiados.",
    "explanation": "Controlar y monitorear accesos privilegiados reduce el riesgo en entornos cloud."
  },
  {
    "id": "q9",
    "questionText": "Causa de un ataque DDoS",
    "type": "single",
    "options": [
      { "id": "q9_o1", "text": "Exceso de solicitudes simultáneas de un único origen.", "isCorrect": true },
      { "id": "q9_o2", "text": "Uso de cifrado fuerte.", "isCorrect": false },
      { "id": "q9_o3", "text": "Validación de entradas.", "isCorrect": false },
      { "id": "q9_o4", "text": "Autenticación multifactor.", "isCorrect": false }
    ],
    "hint": "Saturación del servicio.",
    "explanation": "Los ataques DoS/DDoS saturan servicios mediante múltiples solicitudes."
  },
  {
    "id": "q10",
    "questionText": "¿Cómo garantiza un servidor API que un consumidor tenga permisos para acceder a un recurso?",
    "type": "single",
    "options": [
      { "id": "q10_o1", "text": "Validando respuestas incorrectas.", "isCorrect": false },
      { "id": "q10_o2", "text": "Autenticando mediante contraseñas simples.", "isCorrect": false },
      { "id": "q10_o3", "text": "Permitiendo acceso sin verificar permisos.", "isCorrect": false },
      { "id": "q10_o4", "text": "Verificando la clave API del consumidor.", "isCorrect": true }
    ],
    "hint": "Se usa un identificador único asignado al cliente.",
    "explanation": "Las API Keys permiten validar solicitudes provenientes de consumidores autorizados."
  },
    {
    "id": "q11",
    "questionText": "¿Cómo prevenir problemas en componentes desactualizados?",
    "type": "single",
    "options": [
      { "id": "q11_o1", "text": "Realizando inventarios continuos de versiones.", "isCorrect": true },
      { "id": "q11_o2", "text": "Usando claves predeterminadas.", "isCorrect": false },
      { "id": "q11_o3", "text": "Configurando credenciales débiles.", "isCorrect": false },
      { "id": "q11_o4", "text": "Deshabilitando TLS.", "isCorrect": false }
    ],
    "hint": "Identificar versiones vulnerables es clave.",
    "explanation": "Mantener inventarios actualizados permite detectar componentes con vulnerabilidades conocidas y gestionarlos adecuadamente."
  },
  {
    "id": "q12",
    "questionText": "¿Cómo se llama el principio de seguridad que consiste en implementar medidas en cada capa de una aplicación?",
    "type": "single",
    "options": [
      { "id": "q12_o1", "text": "Defensa en profundidad.", "isCorrect": true },
      { "id": "q12_o2", "text": "Economía de mecanismos.", "isCorrect": false },
      { "id": "q12_o3", "text": "Separación de responsabilidades.", "isCorrect": false },
      { "id": "q12_o4", "text": "Menor privilegio.", "isCorrect": false },
      { "id": "q12_o5", "text": "Fallo seguro.", "isCorrect": false },
      { "id": "q12_o6", "text": "Diseño abierto.", "isCorrect": false }
    ],
    "hint": "Implica múltiples capas de protección.",
    "explanation": "La defensa en profundidad utiliza múltiples controles en distintas capas para proteger los activos."
  },
  {
    "id": "q13",
    "questionText": "¿Cómo se previene una falla de integridad de datos?",
    "type": "single",
    "options": [
      { "id": "q13_o1", "text": "No usar herramientas de análisis.", "isCorrect": false },
      { "id": "q13_o2", "text": "Almacenando dependencias en repositorios confiables.", "isCorrect": true },
      { "id": "q13_o3", "text": "Permitiendo cambios no revisados.", "isCorrect": false },
      { "id": "q13_o4", "text": "Usando datos sin cifrar.", "isCorrect": false }
    ],
    "hint": "Evitar código o paquetes manipulados.",
    "explanation": "Usar repositorios confiables reduce el riesgo de incorporar dependencias comprometidas o alteradas."
  },
  {
    "id": "q14",
    "questionText": "Con el fin de prevenir vulnerabilidades, decide eliminar todos los servicios y procesos innecesarios. ¿Qué tipo de amenaza se busca impedir?",
    "type": "single",
    "options": [
      { "id": "q14_o1", "text": "Inyección.", "isCorrect": false },
      { "id": "q14_o2", "text": "Configuración incorrecta de seguridad.", "isCorrect": true },
      { "id": "q14_o3", "text": "Fallos de integridad de software y datos.", "isCorrect": false },
      { "id": "q14_o4", "text": "Falsificación de solicitudes del lado del servidor (SSRF).", "isCorrect": false },
      { "id": "q14_o5", "text": "Diseño inseguro.", "isCorrect": false },
      { "id": "q14_o6", "text": "Errores criptográficos.", "isCorrect": false }
    ],
    "hint": "Reducir superficie de ataque es clave.",
    "explanation": "Eliminar servicios y procesos innecesarios es una práctica de hardening que previene configuraciones inseguras y reduce la superficie de ataque."
  },
  {
    "id": "q15",
    "questionText": "Si se realiza hardening eliminando componentes innecesarios y automatizando el control de cambios, ¿se impide la amenaza de Configuración incorrecta de seguridad?",
    "type": "single",
    "options": [
      { "id": "q15_o1", "text": "Verdadero.", "isCorrect": true },
      { "id": "q15_o2", "text": "Falso.", "isCorrect": false }
    ],
    "hint": "El hardening es una práctica recomendada por OWASP.",
    "explanation": "El hardening y la automatización de configuraciones reducen desviaciones inseguras y previenen la materialización de configuraciones incorrectas."
  },
  {
    "id": "q16",
    "questionText": "Para prevenir errores criptográficos, se decide almacenar la clave criptográfica junto con los datos respaldados. ¿Esto impide la amenaza?",
    "type": "single",
    "options": [
      { "id": "q16_o1", "text": "Falso.", "isCorrect": true },
      { "id": "q16_o2", "text": "Verdadero.", "isCorrect": false }
    ],
    "hint": "Las claves deben protegerse separadamente.",
    "explanation": "Guardar la clave junto con los datos compromete la confidencialidad y no previene errores criptográficos; por el contrario, los agrava."
  },
  {
    "id": "q17",
    "questionText": "Para prevenir Diseño inseguro, se decide reforzar validaciones de entrada y usar consultas parametrizadas. ¿Esto impide la amenaza?",
    "type": "single",
    "options": [
      { "id": "q17_o1", "text": "Falso.", "isCorrect": true },
      { "id": "q17_o2", "text": "Verdadero.", "isCorrect": false }
    ],
    "hint": "El diseño inseguro se aborda desde etapas tempranas.",
    "explanation": "Las validaciones y consultas parametrizadas previenen inyecciones, pero no corrigen fallas estructurales de diseño que deben abordarse en fases tempranas como modelado de amenazas."
  },
  {
    "id": "q18",
    "questionText": "Registrar actividades relevantes y usar herramientas como SIEM/SOAR configuradas correctamente, ¿previene errores de registro y supervisión de seguridad?",
    "type": "single",
    "options": [
      { "id": "q18_o1", "text": "Falso.", "isCorrect": false },
      { "id": "q18_o2", "text": "Verdadero.", "isCorrect": true }
    ],
    "hint": "El monitoreo proactivo es fundamental.",
    "explanation": "Registrar eventos críticos y monitorearlos con herramientas adecuadas permite detectar y responder incidentes oportunamente, mitigando la amenaza."
  },
  {
    "id": "q19",
    "questionText": "¿Qué elemento fortalece la cultura organizacional dentro de un Modelo de Seguridad de la Información?",
    "type": "single",
    "options": [
      { "id": "q19_o1", "text": "Un plan de concientización y mecanismos de control.", "isCorrect": true },
      { "id": "q19_o2", "text": "Desactivar auditorías internas.", "isCorrect": false },
      { "id": "q19_o3", "text": "Reducir controles para mejorar velocidad.", "isCorrect": false },
      { "id": "q19_o4", "text": "Eliminar políticas documentadas.", "isCorrect": false }
    ],
    "hint": "La cultura se construye con formación y control.",
    "explanation": "Un modelo de seguridad efectivo requiere un plan estructurado de concientización y controles que permitan reducir riesgos organizacionales."
  },
  {
    "id": "q20",
    "questionText": "¿Qué condición ocurre cuando múltiples procesos quedan esperando recursos retenidos por otros procesos?",
    "type": "single",
    "options": [
      { "id": "q20_o1", "text": "Deadlock.", "isCorrect": true },
      { "id": "q20_o2", "text": "Starvation.", "isCorrect": false },
      { "id": "q20_o3", "text": "Race condition.", "isCorrect": false },
      { "id": "q20_o4", "text": "Overflow.", "isCorrect": false }
    ],
    "hint": "Existe espera circular entre procesos.",
    "explanation": "Deadlock ocurre cuando procesos se bloquean mutuamente esperando recursos que nunca se liberan."
  },
{
    "id": "q21",
    "questionText": "¿Qué práctica es recomendable para asegurar la configuración de seguridad antes del despliegue?",
    "type": "single",
    "options": [
      { "id": "q21_o1", "text": "Crear configuraciones auditables y controladas por versiones.", "isCorrect": true },
      { "id": "q21_o2", "text": "Modificar configuraciones directamente en producción sin registro.", "isCorrect": false },
      { "id": "q21_o3", "text": "Usar configuraciones por defecto sin revisión.", "isCorrect": false },
      { "id": "q21_o4", "text": "Evitar documentar cambios de configuración.", "isCorrect": false }
    ],
    "hint": "La trazabilidad es clave antes de desplegar.",
    "explanation": "Las configuraciones auditables y versionadas permiten control, trazabilidad y prevención de errores de configuración."
  },
  {
    "id": "q22",
    "questionText": "Para prevenir ataques a la cadena de suministro, ¿qué tipo de prueba se recomienda utilizar?",
    "type": "single",
    "options": [
      { "id": "q22_o1", "text": "Pruebas de carga.", "isCorrect": false },
      { "id": "q22_o2", "text": "SAST.", "isCorrect": false },
      { "id": "q22_o3", "text": "SCA.", "isCorrect": true },
      { "id": "q22_o4", "text": "Pruebas unitarias.", "isCorrect": false },
      { "id": "q22_o5", "text": "Pruebas de integración.", "isCorrect": false },
      { "id": "q22_o6", "text": "DAST.", "isCorrect": false }
    ],
    "hint": "Se enfoca en dependencias de terceros.",
    "explanation": "SCA (Software Composition Analysis) permite identificar vulnerabilidades en bibliotecas y componentes externos utilizados por la aplicación."
  },
  {
    "id": "q23",
    "questionText": "Cuando los datos copiados en un búfer superan su capacidad, ¿qué tipo de amenaza se presenta?",
    "type": "single",
    "options": [
      { "id": "q23_o1", "text": "Denegación de servicio.", "isCorrect": false },
      { "id": "q23_o2", "text": "Keylogger.", "isCorrect": false },
      { "id": "q23_o3", "text": "XSS.", "isCorrect": false },
      { "id": "q23_o4", "text": "Buffer overflow.", "isCorrect": true },
      { "id": "q23_o5", "text": "Falsificación de solicitudes del lado del servidor.", "isCorrect": false },
      { "id": "q23_o6", "text": "Inyección.", "isCorrect": false }
    ],
    "hint": "Implica sobrescritura de memoria.",
    "explanation": "El buffer overflow ocurre cuando se escriben más datos de los que el búfer puede manejar, pudiendo generar ejecución de código arbitrario."
  },
  {
    "id": "q24",
    "questionText": "¿Qué tipo de prueba valida el comportamiento del sistema ante acciones de un atacante?",
    "type": "single",
    "options": [
      { "id": "q24_o1", "text": "Pruebas de penetración.", "isCorrect": true },
      { "id": "q24_o2", "text": "Pruebas unitarias.", "isCorrect": false },
      { "id": "q24_o3", "text": "Pruebas de regresión.", "isCorrect": false },
      { "id": "q24_o4", "text": "Pruebas lógicas.", "isCorrect": false },
      { "id": "q24_o5", "text": "Pruebas de rendimiento.", "isCorrect": false },
      { "id": "q24_o6", "text": "Pruebas funcionales.", "isCorrect": false }
    ],
    "hint": "Simulan ataques reales.",
    "explanation": "Las pruebas de penetración simulan ataques reales para identificar vulnerabilidades explotables."
  },
  {
    "id": "q25",
    "questionText": "Si un desarrollador sube código sin revisión rigurosa y este se activa bajo ciertas condiciones causando daño, ¿de qué amenaza se trata?",
    "type": "single",
    "options": [
      { "id": "q25_o1", "text": "Buffer overflow.", "isCorrect": false },
      { "id": "q25_o2", "text": "Bombas lógicas.", "isCorrect": true },
      { "id": "q25_o3", "text": "Revisión de código.", "isCorrect": false },
      { "id": "q25_o4", "text": "Análisis estático.", "isCorrect": false },
      { "id": "q25_o5", "text": "Spyware.", "isCorrect": false },
      { "id": "q25_o6", "text": "Robo de sesión.", "isCorrect": false }
    ],
    "hint": "Se activa bajo condiciones específicas.",
    "explanation": "Una bomba lógica es código malicioso oculto que se activa cuando se cumplen ciertas condiciones."
  },
  {
    "id": "q26",
    "questionText": "Un usuario descubre que puede obtener un 100% de descuento realizando ciertos pasos sin intención maliciosa. ¿Qué tipo de agente de amenaza es?",
    "type": "single",
    "options": [
      { "id": "q26_o1", "text": "Descubridor accidental.", "isCorrect": false },
      { "id": "q26_o2", "text": "Script kiddie.", "isCorrect": false },
      { "id": "q26_o3", "text": "Hacker.", "isCorrect": false },
      { "id": "q26_o4", "text": "Amenaza interna.", "isCorrect": true },
      { "id": "q26_o5", "text": "Cracker.", "isCorrect": false },
      { "id": "q26_o6", "text": "Hacktivista.", "isCorrect": false }
    ],
    "hint": "Puede ser no intencional.",
    "explanation": "Una amenaza interna puede ser accidental, cuando un usuario interno causa un impacto sin intención maliciosa."
  },
  {
    "id": "q27",
    "questionText": "Una validación de entrada deficiente puede permitir qué tipo de amenaza?",
    "type": "single",
    "options": [
      { "id": "q27_o1", "text": "Robo de sesión.", "isCorrect": false },
      { "id": "q27_o2", "text": "Falsificación de solicitudes del lado del servidor.", "isCorrect": false },
      { "id": "q27_o3", "text": "Mensajes de error detallados.", "isCorrect": false },
      { "id": "q27_o4", "text": "XSS.", "isCorrect": false },
      { "id": "q27_o5", "text": "Fuerza bruta.", "isCorrect": false },
      { "id": "q27_o6", "text": "Inyección SQL.", "isCorrect": true }
    ],
    "hint": "Implica insertar comandos maliciosos.",
    "explanation": "La falta de validación permite ataques de inyección, como SQL Injection, manipulando consultas a la base de datos."
  },
  {
    "id": "q28",
    "questionText": "¿Cuál afirmación describe mejor cómo SCA, SAST y DAST se complementan?",
    "type": "single",
    "options": [
      { "id": "q28_o1", "text": "SCA se aplica solo a móviles.", "isCorrect": false },
      { "id": "q28_o2", "text": "SCA revisa dependencias, SAST analiza código antes de ejecución y DAST evalúa la app en ejecución.", "isCorrect": true },
      { "id": "q28_o3", "text": "SCA solo prueba rendimiento.", "isCorrect": false },
      { "id": "q28_o4", "text": "DAST reemplaza SAST.", "isCorrect": false },
      { "id": "q28_o5", "text": "SAST y DAST son idénticos.", "isCorrect": false },
      { "id": "q28_o6", "text": "SCA reemplaza las demás pruebas.", "isCorrect": false }
    ],
    "hint": "Cada una cubre una capa distinta.",
    "explanation": "SCA revisa dependencias, SAST analiza código estático y DAST evalúa vulnerabilidades en tiempo de ejecución."
  },
  {
    "id": "q29",
    "questionText": "¿Qué término representa un acuerdo contractual cuyo incumplimiento puede generar sanciones?",
    "type": "single",
    "options": [
      { "id": "q29_o1", "text": "RTO.", "isCorrect": false },
      { "id": "q29_o2", "text": "SLA.", "isCorrect": true },
      { "id": "q29_o3", "text": "RPO.", "isCorrect": false },
      { "id": "q29_o4", "text": "RCO.", "isCorrect": false },
      { "id": "q29_o5", "text": "MTD.", "isCorrect": false },
      { "id": "q29_o6", "text": "RTA.", "isCorrect": false }
    ],
    "hint": "Es un acuerdo formal de nivel de servicio.",
    "explanation": "El SLA (Service Level Agreement) establece niveles de servicio y puede incluir penalizaciones si no se cumplen."
  },
  {
    "id": "q30",
    "questionText": "¿Qué vulnerabilidad puede surgir por una persistencia de sesión incorrecta?",
    "type": "single",
    "options": [
      { "id": "q30_o1", "text": "Ataques de lógica de aplicaciones.", "isCorrect": false },
      { "id": "q30_o2", "text": "Fallas de escaneo dinámico.", "isCorrect": false },
      { "id": "q30_o3", "text": "Secuestro de sesión.", "isCorrect": true },
      { "id": "q30_o4", "text": "Administración de sesiones rotas.", "isCorrect": false }
    ],
    "hint": "Implica reutilizar una sesión activa.",
    "explanation": "Una mala gestión de sesiones puede permitir a un atacante reutilizar o robar una sesión activa, provocando secuestro de sesión."
  },
{
    "id": "q31",
    "questionText": "¿Cuál de los siguientes es un control de seguridad digital?",
    "type": "single",
    "options": [
      { "id": "q31_o1", "text": "Software antivirus.", "isCorrect": true },
      { "id": "q31_o2", "text": "Mitigación de DDoS.", "isCorrect": false },
      { "id": "q31_o3", "text": "Sensores de detección de intrusiones.", "isCorrect": false },
      { "id": "q31_o4", "text": "Sistemas de prevención de intrusiones.", "isCorrect": false }
    ],
    "hint": "Es un control lógico instalado directamente en el sistema.",
    "explanation": "El software antivirus es un control digital preventivo y detectivo que protege sistemas frente a malware mediante análisis y monitoreo continuo."
  },
  {
    "id": "q32",
    "questionText": "¿Cuál es el propósito principal de las herramientas utilizadas en DevOps para gestionar riesgos y vulnerabilidades?",
    "type": "single",
    "options": [
      { "id": "q32_o1", "text": "Automatizar el proceso de entrega continua.", "isCorrect": false },
      { "id": "q32_o2", "text": "Asegurar la infraestructura en la nube.", "isCorrect": false },
      { "id": "q32_o3", "text": "Detectar y marcar los riesgos y vulnerabilidades para su investigación.", "isCorrect": true },
      { "id": "q32_o4", "text": "Mejorar la eficiencia del proceso de desarrollo.", "isCorrect": false }
    ],
    "hint": "Se relaciona con DevSecOps.",
    "explanation": "Las herramientas DevSecOps identifican vulnerabilidades y riesgos durante el ciclo de desarrollo para que puedan ser investigados y corregidos oportunamente."
  },
  {
    "id": "q33",
    "questionText": "¿Cuál es el propósito principal de las pruebas de penetración?",
    "type": "single",
    "options": [
      { "id": "q33_o1", "text": "Probar la funcionalidad del código.", "isCorrect": false },
      { "id": "q33_o2", "text": "Medir la resistencia frente a ataques.", "isCorrect": true },
      { "id": "q33_o3", "text": "Validar la persistencia de sesión.", "isCorrect": false },
      { "id": "q33_o4", "text": "Evaluar el diseño de interfaz.", "isCorrect": false }
    ],
    "hint": "Simulan el comportamiento de un atacante.",
    "explanation": "Las pruebas de penetración evalúan qué tan resistente es el sistema ante ataques reales simulados."
  },
  {
    "id": "q34",
    "questionText": "¿Qué actividad de seguridad se realiza durante la etapa de implementación del SDLC?",
    "type": "single",
    "options": [
      { "id": "q34_o1", "text": "Generación del modelo de amenazas.", "isCorrect": false },
      { "id": "q34_o2", "text": "Aplicación de estándares de desarrollo seguro.", "isCorrect": true },
      { "id": "q34_o3", "text": "Planificación de nuevos requisitos.", "isCorrect": false },
      { "id": "q34_o4", "text": "Creación de documentación.", "isCorrect": false }
    ],
    "hint": "Ocurre mientras se escribe el código.",
    "explanation": "Durante la implementación se aplican estándares de codificación segura, validación de entrada y buenas prácticas para prevenir vulnerabilidades."
  },
  {
    "id": "q35",
    "questionText": "¿Qué metodología calcula el valor de la pérdida de un activo ante un único evento de riesgo?",
    "type": "single",
    "options": [
      { "id": "q35_o1", "text": "STRIDE.", "isCorrect": false },
      { "id": "q35_o2", "text": "DREAD.", "isCorrect": false },
      { "id": "q35_o3", "text": "ARO.", "isCorrect": false },
      { "id": "q35_o4", "text": "SLE.", "isCorrect": true },
      { "id": "q35_o5", "text": "Modelado de amenazas.", "isCorrect": false },
      { "id": "q35_o6", "text": "CIAAAA.", "isCorrect": false }
    ],
    "hint": "Se refiere a pérdida monetaria por evento.",
    "explanation": "SLE (Single Loss Expectancy) calcula la pérdida monetaria esperada cada vez que ocurre un evento de riesgo."
  },
  {
    "id": "q36",
    "questionText": "¿Cuál es un ejemplo de expansión de secretos en un entorno de desarrollo?",
    "type": "single",
    "options": [
      { "id": "q36_o1", "text": "El almacenamiento de secretos en ubicaciones no seguras como computadoras portátiles o servidores de compilación.", "isCorrect": true },
      { "id": "q36_o2", "text": "La automatización de la entrega continua sin validación de credenciales.", "isCorrect": false },
      { "id": "q36_o3", "text": "El uso de contraseñas encriptadas en código abierto.", "isCorrect": false },
      { "id": "q36_o4", "text": "La eliminación de claves SSH de los repositorios.", "isCorrect": false }
    ],
    "hint": "Implica exposición innecesaria de credenciales.",
    "explanation": "La expansión de secretos ocurre cuando credenciales o claves se almacenan en ubicaciones inseguras, aumentando la superficie de exposición."
  },
  {
    "id": "q37",
    "questionText": "¿Cuál es un ejemplo de una vulnerabilidad de inyección?",
    "type": "single",
    "options": [
      { "id": "q37_o1", "text": "Uso de consultas dinámicas sin parametrizar.", "isCorrect": true },
      { "id": "q37_o2", "text": "Uso de encabezados HTTP configurados.", "isCorrect": false },
      { "id": "q37_o3", "text": "Implementar autenticación multi-factor.", "isCorrect": false },
      { "id": "q37_o4", "text": "No segmentar la arquitectura.", "isCorrect": false }
    ],
    "hint": "Se relaciona con SQL Injection.",
    "explanation": "Las consultas dinámicas sin parametrizar permiten que un atacante inserte comandos maliciosos en la base de datos."
  },
  {
    "id": "q38",
    "questionText": "¿Cuáles afirmaciones sobre SAST y SCA son correctas?",
    "type": "single",
    "options": [
      { "id": "q38_o1", "text": "SCA se centra en analizar los componentes externos y SAST analiza los componentes desarrollados internamente.", "isCorrect": true },
      { "id": "q38_o2", "text": "SAST y SCA son técnicas idénticas.", "isCorrect": false },
      { "id": "q38_o3", "text": "SAST solo funciona en producción.", "isCorrect": false },
      { "id": "q38_o4", "text": "SCA analiza comportamiento en tiempo real.", "isCorrect": false }
    ],
    "hint": "Uno analiza dependencias, el otro código propio.",
    "explanation": "SCA analiza dependencias externas y bibliotecas de terceros, mientras que SAST analiza el código fuente desarrollado internamente."
  },
{
    "id": "q39",
    "questionText": "Cuando trabajamos con lenguajes de programación, C# de .NET puede ser considerado un lenguaje:",
    "type": "single",
    "options": [
      { "id": "q39_o1", "text": "Alto nivel.", "isCorrect": false },
      { "id": "q39_o2", "text": "Ensamblador.", "isCorrect": false },
      { "id": "q39_o3", "text": "Interpretado.", "isCorrect": false },
      { "id": "q39_o4", "text": "Compilado.", "isCorrect": false },
      { "id": "q39_o5", "text": "Híbrido.", "isCorrect": true }
    ],
    "hint": "Su ejecución combina compilación intermedia y runtime.",
    "explanation": "C# se compila a IL (Intermediate Language) y luego la CLR lo convierte en código máquina mediante JIT. Este modelo combina compilación y ejecución gestionada, por lo que se considera un lenguaje híbrido."
  },
  {
    "id": "q40",
    "questionText": "Cuando una aplicación de IA cambia sus políticas de privacidad o introduce nuevas funcionalidades, ¿qué debe hacer la empresa respecto al consentimiento de los usuarios?",
    "type": "single",
    "options": [
      { "id": "q40_o1", "text": "El consentimiento no es necesario si las políticas no cambian.", "isCorrect": false },
      { "id": "q40_o2", "text": "La empresa debe notificar a los usuarios y pedirles que revisen y confirmen nuevamente su consentimiento.", "isCorrect": true },
      { "id": "q40_o3", "text": "No es necesario hacer nada si el consentimiento ya ha sido obtenido.", "isCorrect": false },
      { "id": "q40_o4", "text": "Solo se debe actualizar el consentimiento si hay un cambio en el algoritmo.", "isCorrect": false }
    ],
    "hint": "Cambios en el tratamiento de datos requieren acción.",
    "explanation": "Si cambian las políticas de privacidad o el uso de los datos, la empresa debe notificar y obtener nuevamente el consentimiento informado de los usuarios."
  },
  {
    "id": "q41",
    "questionText": "¿De qué tipo de criterios se está hablando cuando mencionamos RPO, RTO y MTD?",
    "type": "single",
    "options": [
      { "id": "q41_o1", "text": "Requerimientos de confidencialidad.", "isCorrect": false },
      { "id": "q41_o2", "text": "Requerimientos de manejo de errores.", "isCorrect": false },
      { "id": "q41_o3", "text": "Requerimientos de manejo de configuraciones.", "isCorrect": false },
      { "id": "q41_o4", "text": "Requerimientos de disponibilidad.", "isCorrect": true },
      { "id": "q41_o5", "text": "Requerimientos de autenticación.", "isCorrect": false },
      { "id": "q41_o6", "text": "Requerimientos de integridad.", "isCorrect": false }
    ],
    "hint": "Se relacionan con recuperación ante desastres.",
    "explanation": "RPO, RTO y MTD son métricas asociadas a continuidad del negocio y disponibilidad de servicios tras incidentes."
  },
  {
    "id": "q42",
    "questionText": "Demasiadas peticiones a una API afectan a otros. ¿Qué tipo de amenaza es?",
    "type": "single",
    "options": [
      { "id": "q42_o1", "text": "DDoS.", "isCorrect": true }
    ],
    "hint": "Implica saturación del servicio desde múltiples fuentes.",
    "explanation": "Un DDoS (Distributed Denial of Service) ocurre cuando múltiples solicitudes saturan un servicio impidiendo su disponibilidad para otros usuarios."
  },
  {
    "id": "q43",
    "questionText": "Demasiadas peticiones dirigidas a una API pueden ralentizar o detener el servicio para otros clientes. ¿A qué tipo de amenazas estamos hablando?",
    "type": "single",
    "options": [
      { "id": "q43_o1", "text": "DDoS.", "isCorrect": true },
      { "id": "q43_o2", "text": "Ataques basados en la autenticación.", "isCorrect": false },
      { "id": "q43_o3", "text": "Aprovechamientos de vulnerabilidades.", "isCorrect": false },
      { "id": "q43_o4", "text": "DoS.", "isCorrect": false },
      { "id": "q43_o5", "text": "Errores de autorización.", "isCorrect": false }
    ],
    "hint": "Es distribuido y afecta la disponibilidad.",
    "explanation": "Cuando múltiples solicitudes saturan la API desde diferentes orígenes, se trata de un ataque DDoS."
  },
  {
    "id": "q44",
    "questionText": "Desarrollo multiplataforma con una sola base de código:",
    "type": "single",
    "options": [
      { "id": "q44_o1", "text": "Desarrollo híbrido.", "isCorrect": true }
    ],
    "hint": "Una sola base de código para varias plataformas.",
    "explanation": "El desarrollo híbrido permite crear aplicaciones para múltiples plataformas utilizando una única base de código."
  },
  {
    "id": "q45",
    "questionText": "Detectan vulnerabilidad en un contenedor. ¿Qué hacer primero?",
    "type": "single",
    "options": [
      { "id": "q45_o1", "text": "Asegurar que la imagen base provenga de una fuente confiable.", "isCorrect": true }
    ],
    "hint": "La seguridad empieza desde la base.",
    "explanation": "Verificar que la imagen base sea oficial y confiable reduce el riesgo de vulnerabilidades heredadas en el contenedor."
  },
  {
    "id": "q46",
    "questionText": "Diseño eficiente para móviles de bajo rendimiento:",
    "type": "single",
    "options": [
      { "id": "q46_o1", "text": "Usar una interfaz sencilla y eficiente.", "isCorrect": true }
    ],
    "hint": "Menos es más en móviles.",
    "explanation": "Un diseño simple enfocado en funciones esenciales mejora la experiencia de usuario y reduce el consumo de recursos."
  },
  {
    "id": "q47",
    "questionText": "Durante la implementación de un contenedor, un miembro del equipo intenta acceder a imágenes sin usar controles de acceso. ¿Cuál es el riesgo?",
    "type": "single",
    "options": [
      { "id": "q47_o1", "text": "El proceso de integración será más lento.", "isCorrect": false },
      { "id": "q47_o2", "text": "Los datos no estarán disponibles.", "isCorrect": false },
      { "id": "q47_o3", "text": "El contenedor no podrá ejecutarse.", "isCorrect": false },
      { "id": "q47_o4", "text": "Exposición de vulnerabilidades conocidas.", "isCorrect": true }
    ],
    "hint": "Riesgo asociado a imágenes no verificadas.",
    "explanation": "Acceder a imágenes sin controles puede permitir el uso de imágenes manipuladas o con vulnerabilidades conocidas."
  },
  {
    "id": "q48",
    "questionText": "Durante la implementación de un nuevo entorno en la nube, el equipo usa scripts automatizados para aprovisionar servidores y bases de datos. ¿Qué enfoque están utilizando?",
    "type": "single",
    "options": [
      { "id": "q48_o1", "text": "DevSecOps.", "isCorrect": false },
      { "id": "q48_o2", "text": "Administración de artefactos.", "isCorrect": false },
      { "id": "q48_o3", "text": "Consistencia operativa.", "isCorrect": false },
      { "id": "q48_o4", "text": "Infraestructura como Código (IaC).", "isCorrect": true }
    ],
    "hint": "Infraestructura definida mediante código.",
    "explanation": "La Infraestructura como Código (IaC) permite definir y aprovisionar recursos mediante scripts automatizados, asegurando consistencia y control de versiones."
  },
{
    "id": "q49",
    "questionText": "Durante la implementación de un nuevo entorno en la nube, el equipo usa scripts automatizados para aprovisionar servidores y bases de datos. ¿Qué enfoque están utilizando?",
    "type": "single",
    "options": [
      { "id": "q49_o1", "text": "DevSecOps.", "isCorrect": false },
      { "id": "q49_o2", "text": "Administración de artefactos.", "isCorrect": false },
      { "id": "q49_o3", "text": "Consistencia operativa.", "isCorrect": false },
      { "id": "q49_o4", "text": "Infraestructura como Código (IaC).", "isCorrect": true }
    ],
    "hint": "Se define infraestructura mediante scripts.",
    "explanation": "Infraestructura como Código (IaC) permite aprovisionar y gestionar recursos cloud mediante código automatizado, garantizando repetibilidad, trazabilidad y seguridad."
  },
  {
    "id": "q50",
    "questionText": "Durante la integración continua, un equipo omite la automatización de la verificación de seguridad. ¿Cuál es el impacto?",
    "type": "single",
    "options": [
      { "id": "q50_o1", "text": "Aumento de los riesgos de seguridad por errores humanos.", "isCorrect": true },
      { "id": "q50_o2", "text": "Los contenedores se desarrollan más rápido.", "isCorrect": false },
      { "id": "q50_o3", "text": "El sistema operativo se actualizará automáticamente.", "isCorrect": false },
      { "id": "q50_o4", "text": "El proceso de integración se acelera.", "isCorrect": false }
    ],
    "hint": "Sin automatización, se depende del factor humano.",
    "explanation": "Omitir verificaciones automáticas de seguridad incrementa la probabilidad de errores humanos y vulnerabilidades no detectadas en etapas tempranas."
  },
  {
    "id": "q51",
    "questionText": "Un modelo de IA discrimina contra un grupo demográfico debido a datos de entrenamiento sesgados. ¿Qué práctica debió implementarse?",
    "type": "single",
    "options": [
      { "id": "q51_o1", "text": "Derecho de oposición.", "isCorrect": false },
      { "id": "q51_o2", "text": "Pruebas de sesgo.", "isCorrect": true },
      { "id": "q51_o3", "text": "Plataforma de gestión de consentimiento.", "isCorrect": false },
      { "id": "q51_o4", "text": "Uso de datos sintéticos.", "isCorrect": false }
    ],
    "hint": "Evalúa la equidad del modelo.",
    "explanation": "Las pruebas de sesgo permiten identificar discriminación algorítmica y aplicar correcciones antes del despliegue del modelo."
  },
  {
    "id": "q52",
    "questionText": "El backend no verifica si el usuario tiene permisos para ejecutar una función administrativa. ¿Qué amenaza se describe?",
    "type": "single",
    "options": [
      { "id": "q52_o1", "text": "Autenticación/Autorización insegura.", "isCorrect": true },
      { "id": "q52_o2", "text": "Protecciones binarias insuficientes.", "isCorrect": false },
      { "id": "q52_o3", "text": "Validación de entrada/salida insuficiente.", "isCorrect": false },
      { "id": "q52_o4", "text": "Controles de privacidad inadecuados.", "isCorrect": false },
      { "id": "q52_o5", "text": "Uso inadecuado de credenciales.", "isCorrect": false },
      { "id": "q52_o6", "text": "Comunicación insegura.", "isCorrect": false }
    ],
    "hint": "Relacionado con Broken Access Control.",
    "explanation": "Cuando el sistema no valida correctamente los permisos del usuario, se produce una falla de autorización conocida como Broken Access Control."
  },
  {
    "id": "q53",
    "questionText": "Eliminación de artefactos de build innecesarios:",
    "type": "single",
    "options": [
      { "id": "q53_o1", "text": "Especificar condiciones para eliminar artefactos en función del tiempo o espacio disponible.", "isCorrect": true }
    ],
    "hint": "Gestión eficiente del repositorio.",
    "explanation": "La administración de artefactos permite definir políticas de retención y eliminación automática para optimizar espacio y mantener orden en los repositorios."
  },
  {
    "id": "q54",
    "questionText": "¿Qué tan importante es implementar herramientas que automaticen el registro y almacenamiento de consentimientos en APIs?",
    "type": "single",
    "options": [
      { "id": "q54_o1", "text": "Solo es importante para empresas pequeñas.", "isCorrect": false },
      { "id": "q54_o2", "text": "Es fundamental para garantizar la trazabilidad y cumplir con leyes de privacidad como el GDPR.", "isCorrect": true },
      { "id": "q54_o3", "text": "No es necesario almacenar el consentimiento si los datos son anónimos.", "isCorrect": false },
      { "id": "q54_o4", "text": "Se puede omitir el registro si se usan datos públicos.", "isCorrect": false }
    ],
    "hint": "Cumplimiento normativo y trazabilidad.",
    "explanation": "Automatizar el registro de consentimientos garantiza trazabilidad, cumplimiento normativo y auditoría adecuada del tratamiento de datos personales."
  },
  {
    "id": "q55",
    "questionText": "¿En qué tipo de lenguajes el código fuente no se compila previamente a código máquina?",
    "type": "single",
    "options": [
      { "id": "q55_o1", "text": "Lenguajes interpretados.", "isCorrect": true },
      { "id": "q55_o2", "text": "Lenguajes de bajo nivel.", "isCorrect": false },
      { "id": "q55_o3", "text": "Lenguajes compilados.", "isCorrect": false },
      { "id": "q55_o4", "text": "Lenguajes de alto nivel.", "isCorrect": false },
      { "id": "q55_o5", "text": "Lenguaje máquina.", "isCorrect": false },
      { "id": "q55_o6", "text": "Lenguaje ensamblador.", "isCorrect": false }
    ],
    "hint": "Se ejecutan mediante un intérprete.",
    "explanation": "Los lenguajes interpretados ejecutan el código directamente mediante un intérprete sin una compilación previa a código máquina."
  },
  {
    "id": "q56",
    "questionText": "En un pipeline DevSecOps, ¿qué herramienta se utiliza en la fase de construcción para detectar fallas en el código antes del despliegue?",
    "type": "single",
    "options": [
      { "id": "q56_o1", "text": "Herramientas DAST.", "isCorrect": false },
      { "id": "q56_o2", "text": "Herramientas SAST.", "isCorrect": true },
      { "id": "q56_o3", "text": "Plataformas de análisis de vulnerabilidades.", "isCorrect": false },
      { "id": "q56_o4", "text": "Consolas SaaS.", "isCorrect": false }
    ],
    "hint": "Analizan el código sin ejecutarlo.",
    "explanation": "SAST analiza el código fuente durante la fase de build, permitiendo detectar vulnerabilidades antes de la implementación."
  },
  {
    "id": "q57",
    "questionText": "Un repositorio público contenía credenciales expuestas. ¿Qué recomendación DevSecOps aplica para evitar este error?",
    "type": "single",
    "options": [
      { "id": "q57_o1", "text": "Utilizar claves SSH incrustadas en el código fuente.", "isCorrect": false },
      { "id": "q57_o2", "text": "Aplicar análisis de vulnerabilidades en la etapa de prueba.", "isCorrect": false },
      { "id": "q57_o3", "text": "Implementar controles Git para proteger las credenciales.", "isCorrect": true },
      { "id": "q57_o4", "text": "Usar herramientas SAST en la fase de despliegue.", "isCorrect": false }
    ],
    "hint": "Protección temprana en control de versiones.",
    "explanation": "Implementar hooks, escaneo de secretos y políticas en Git previene la exposición accidental de credenciales en repositorios."
  },
  {
    "id": "q58",
    "questionText": "Envío cifrado de datos utilizando una clave pública:",
    "type": "single",
    "options": [
      { "id": "q58_o1", "text": "Cifrado asimétrico.", "isCorrect": true }
    ],
    "hint": "Se usan dos claves diferentes.",
    "explanation": "El cifrado asimétrico utiliza una clave pública para cifrar y una clave privada para descifrar la información."
  },
{
    "id": "q59",
    "questionText": "Error común en instalación que permite hackeo:",
    "type": "single",
    "options": [
      { "id": "q59_o1", "text": "Ignorar principios de seguridad en instalación.", "isCorrect": true }
    ],
    "hint": "Configuraciones iniciales inseguras.",
    "explanation": "No aplicar principios de seguridad durante la instalación (como deshabilitar servicios innecesarios, cambiar credenciales por defecto o aplicar parches) puede dejar el sistema expuesto a ataques."
  },
  {
    "id": "q60",
    "questionText": "Errores comunes de autenticación:",
    "type": "single",
    "options": [
      { "id": "q60_o1", "text": "Errores de identificación y autenticación.", "isCorrect": true }
    ],
    "hint": "Relacionado con credenciales y validación de identidad.",
    "explanation": "Los errores de identificación y autenticación incluyen fallas como contraseñas débiles, falta de MFA o validaciones incorrectas de identidad."
  },
  {
    "id": "q61",
    "questionText": "Explicabilidad en IA:",
    "type": "single",
    "options": [
      { "id": "q61_o1", "text": "La habilidad de explicar cómo y por qué toma decisiones.", "isCorrect": true }
    ],
    "hint": "Transparencia algorítmica.",
    "explanation": "La explicabilidad permite comprender cómo y por qué un modelo de IA toma decisiones, promoviendo transparencia, confianza y cumplimiento normativo."
  },
  {
    "id": "q62",
    "questionText": "Fuga de datos por error de gestión de credenciales:",
    "type": "single",
    "options": [
      { "id": "q62_o1", "text": "Uso incorrecto de credenciales.", "isCorrect": true }
    ],
    "hint": "Manejo inadecuado de secretos.",
    "explanation": "El uso incorrecto de credenciales (como almacenarlas en texto plano o compartirlas sin control) puede provocar fuga de datos sensibles."
  },
  {
    "id": "q63",
    "questionText": "Gracias a este tipo de requerimientos, se puede investigar qué ocurrió en un sistema y detectar actividades anormales o no autorizadas:",
    "type": "single",
    "options": [
      { "id": "q63_o1", "text": "Requerimientos de manejo de configuraciones.", "isCorrect": false },
      { "id": "q63_o2", "text": "Requerimientos de integridad.", "isCorrect": false },
      { "id": "q63_o3", "text": "Requerimientos de confidencialidad.", "isCorrect": false },
      { "id": "q63_o4", "text": "Requerimientos de seguimiento.", "isCorrect": true },
      { "id": "q63_o5", "text": "Requerimientos de autenticación.", "isCorrect": false },
      { "id": "q63_o6", "text": "Requerimientos de manejo de errores.", "isCorrect": false }
    ],
    "hint": "Logging y monitoreo.",
    "explanation": "Los requerimientos de seguimiento incluyen auditoría, trazabilidad y registro de eventos, permitiendo analizar incidentes y detectar comportamientos anómalos."
  },
  {
    "id": "q64",
    "questionText": "Para cifrar una gran cantidad de información en poco tiempo, ¿qué tipo de algoritmo se debe utilizar?",
    "type": "single",
    "options": [
      { "id": "q64_o1", "text": "Cifrado simétrico.", "isCorrect": true },
      { "id": "q64_o2", "text": "Curva elíptica.", "isCorrect": false },
      { "id": "q64_o3", "text": "Ofuscación.", "isCorrect": false },
      { "id": "q64_o4", "text": "Hash + salt value.", "isCorrect": false },
      { "id": "q64_o5", "text": "Hash.", "isCorrect": false },
      { "id": "q64_o6", "text": "Cifrado asimétrico.", "isCorrect": false }
    ],
    "hint": "Rapidez y eficiencia.",
    "explanation": "El cifrado simétrico es más eficiente para grandes volúmenes de datos, ya que utiliza una sola clave y tiene menor costo computacional."
  },
  {
    "id": "q65",
    "questionText": "En la técnica de modelado de amenazas STRIDE, ¿cuál opción pertenece al modelo?",
    "type": "single",
    "options": [
      { "id": "q65_o1", "text": "Tampering.", "isCorrect": true },
      { "id": "q65_o2", "text": "Information destruction.", "isCorrect": false },
      { "id": "q65_o3", "text": "Exploitation.", "isCorrect": false },
      { "id": "q65_o4", "text": "Elevation of privileges.", "isCorrect": false },
      { "id": "q65_o5", "text": "Session hijacking.", "isCorrect": false },
      { "id": "q65_o6", "text": "Information disclosure.", "isCorrect": false }
    ],
    "hint": "Pertenece al acrónimo STRIDE.",
    "explanation": "STRIDE incluye: Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service y Elevation of Privilege."
  },
  {
    "id": "q66",
    "questionText": "Lista blanca de URLs o IP permitidas para restringir destinos de solicitudes. ¿Qué amenaza mitiga?",
    "type": "single",
    "options": [
      { "id": "q66_o1", "text": "Autorización de nivel de propiedad de objeto roto.", "isCorrect": false },
      { "id": "q66_o2", "text": "Acceso sin restricciones a flujos comerciales sensibles.", "isCorrect": false },
      { "id": "q66_o3", "text": "Autorización de nivel de función rota.", "isCorrect": false },
      { "id": "q66_o4", "text": "Configuración incorrecta de seguridad.", "isCorrect": false },
      { "id": "q66_o5", "text": "Falsificación de solicitudes del lado del servidor (SSRF).", "isCorrect": true },
      { "id": "q66_o6", "text": "Gestión inadecuada del inventario.", "isCorrect": false }
    ],
    "hint": "Evita que el servidor acceda a destinos maliciosos.",
    "explanation": "Las listas blancas y validaciones estrictas de URL son medidas para prevenir ataques SSRF (Server-Side Request Forgery)."
  },
  {
    "id": "q67",
    "questionText": "Un atacante prueba múltiples combinaciones de claves hasta descifrar los datos. ¿Qué amenaza describe?",
    "type": "single",
    "options": [
      { "id": "q67_o1", "text": "Comunicación insegura.", "isCorrect": false },
      { "id": "q67_o2", "text": "Validación de entrada/salida insuficiente.", "isCorrect": false },
      { "id": "q67_o3", "text": "Criptografía insuficiente.", "isCorrect": true },
      { "id": "q67_o4", "text": "Controles de privacidad inadecuados.", "isCorrect": false },
      { "id": "q67_o5", "text": "Uso inadecuado de credenciales.", "isCorrect": false },
      { "id": "q67_o6", "text": "Autenticación/Autorización insegura.", "isCorrect": false }
    ],
    "hint": "Ataque de fuerza bruta sobre el cifrado.",
    "explanation": "Cuando el cifrado puede romperse mediante prueba sistemática de claves, se evidencia criptografía insuficiente o débil."
  },
{
    "id": "q68",
    "questionText": "Los desarrolladores dejan sus API y recursos vulnerables a ataques si los atacantes pueden manipular a proveedores externos. ¿A qué categoría de amenaza hace referencia el enunciado anterior?",
    "type": "single",
    "options": [
      { "id": "q68_o1", "text": "Acceso sin restricciones a flujos comerciales sensibles.", "isCorrect": false },
      { "id": "q68_o2", "text": "Consumo inseguro de API.", "isCorrect": true },
      { "id": "q68_o3", "text": "Configuración incorrecta de seguridad.", "isCorrect": false },
      { "id": "q68_o4", "text": "Autorización de nivel de propiedad de objeto roto.", "isCorrect": false },
      { "id": "q68_o5", "text": "Autorización de nivel de función rota.", "isCorrect": false },
      { "id": "q68_o6", "text": "Falsificación de solicitudes del lado del servidor.", "isCorrect": false }
    ],
    "hint": "Confianza indebida en servicios externos.",
    "explanation": "La amenaza corresponde a Consumo inseguro de API, ya que implica confiar en datos o servicios de terceros sin validaciones adecuadas, lo que puede permitir ataques indirectos mediante proveedores externos manipulados."
  },
  {
    "id": "q69",
    "questionText": "Los parámetros de consulta en la URL pueden ser visibles en registros del servidor, análisis del sitio web o historial del navegador. ¿Qué amenaza se describe?",
    "type": "single",
    "options": [
      { "id": "q69_o1", "text": "Protecciones binarias insuficientes.", "isCorrect": false },
      { "id": "q69_o2", "text": "Validación de entrada/salida insuficiente.", "isCorrect": false },
      { "id": "q69_o3", "text": "Autenticación/Autorización insegura.", "isCorrect": false },
      { "id": "q69_o4", "text": "Comunicación insegura.", "isCorrect": false },
      { "id": "q69_o5", "text": "Controles de privacidad inadecuados.", "isCorrect": true },
      { "id": "q69_o6", "text": "Uso inadecuado de credenciales.", "isCorrect": false }
    ],
    "hint": "Exposición de datos sensibles en la URL.",
    "explanation": "Corresponde a Controles de privacidad inadecuados, ya que los parámetros en la URL pueden exponer información sensible en múltiples lugares, como logs, historial del navegador o herramientas de análisis."
  },
  {
    "id": "q70",
    "questionText": "Monitorear y registrar el acceso a flujos comerciales confidenciales, junto con pruebas de penetración y revisiones de código, son soluciones ante qué tipo de amenaza?",
    "type": "single",
    "options": [
      { "id": "q70_o1", "text": "Gestión inadecuada del inventario.", "isCorrect": false },
      { "id": "q70_o2", "text": "Autorización de nivel de propiedad de objeto roto.", "isCorrect": false },
      { "id": "q70_o3", "text": "Falsificación de solicitudes del lado del servidor.", "isCorrect": false },
      { "id": "q70_o4", "text": "Autorización de nivel de función rota.", "isCorrect": false },
      { "id": "q70_o5", "text": "Acceso sin restricciones a flujos comerciales sensibles.", "isCorrect": true },
      { "id": "q70_o6", "text": "Configuración incorrecta de seguridad.", "isCorrect": false }
    ],
    "hint": "Protección de procesos de negocio críticos.",
    "explanation": "Estas acciones buscan prevenir y detectar accesos no autorizados a procesos internos sensibles, lo que corresponde a la amenaza de Acceso sin restricciones a flujos comerciales sensibles."
  },
  {
    "id": "q71",
    "questionText": "No revisar la seguridad en componentes de terceros puede provocar:",
    "type": "single",
    "options": [
      { "id": "q71_o1", "text": "La introducción de vulnerabilidades no identificadas.", "isCorrect": true }
    ],
    "hint": "Dependencias externas vulnerables.",
    "explanation": "Si no se revisan componentes de terceros, pueden introducirse vulnerabilidades desconocidas en el sistema."
  },
  {
    "id": "q72",
    "questionText": "¿La ofuscación de código pertenece a qué categoría MASVS?",
    "type": "single",
    "options": [
      { "id": "q72_o1", "text": "MASVS-RESILIENCE.", "isCorrect": true }
    ],
    "hint": "Protección contra ingeniería inversa.",
    "explanation": "La ofuscación de código forma parte de MASVS-RESILIENCE, ya que busca dificultar la ingeniería inversa y aumentar la resistencia de la aplicación ante ataques."
  },
  {
    "id": "q73",
    "questionText": "Para prevenir amenazas del tipo configuración incorrecta de seguridad, durante la fase de pruebas se deben validar mensajes de error. ¿Verdadero o Falso?",
    "type": "single",
    "options": [
      { "id": "q73_o1", "text": "Verdadero.", "isCorrect": true },
      { "id": "q73_o2", "text": "Falso.", "isCorrect": false }
    ],
    "hint": "Revisar que no se exponga información sensible.",
    "explanation": "Es verdadero, ya que validar mensajes de error permite asegurar que no se revele información técnica sensible que pueda ser explotada por atacantes."
  },
  {
    "id": "q74",
    "questionText": "Para prevenir amenazas del tipo configuración incorrecta de seguridad, durante la fase de pruebas se debe forzar que el software falle y validar que los mensajes de error no revelen detalles innecesarios. ¿Verdadero o Falso?",
    "type": "single",
    "options": [
      { "id": "q74_o1", "text": "Verdadero.", "isCorrect": true },
      { "id": "q74_o2", "text": "Falso.", "isCorrect": false }
    ],
    "hint": "Pruebas de fallos controlados.",
    "explanation": "Es verdadero, ya que provocar fallos controlados permite validar que los errores mostrados no expongan información sensible, práctica clave para evitar configuraciones incorrectas de seguridad."
  },
 {
    "id": "q75",
    "questionText": "¿Por qué es importante aplicar actualizaciones a los componentes de software de terceros en una aplicación?",
    "type": "single",
    "options": [
      { "id": "q75_o1", "text": "Para mejorar la compatibilidad con otros dispositivos.", "isCorrect": false },
      { "id": "q75_o2", "text": "Para reducir el tiempo de ejecución de la aplicación.", "isCorrect": false },
      { "id": "q75_o3", "text": "Para evitar el uso de componentes con vulnerabilidades conocidas.", "isCorrect": true },
      { "id": "q75_o4", "text": "Para facilitar la depuración de los componentes del sistema.", "isCorrect": false }
    ],
    "hint": "Relacionado con vulnerabilidades conocidas.",
    "explanation": "Actualizar componentes de terceros permite corregir vulnerabilidades conocidas y reducir la superficie de ataque de la aplicación."
  },
  {
    "id": "q76",
    "questionText": "¿Es necesario realizar pruebas para evaluar cambios en componentes críticos?",
    "type": "single",
    "options": [
      { "id": "q76_o1", "text": "Verdadero.", "isCorrect": true },
      { "id": "q76_o2", "text": "Falso.", "isCorrect": false }
    ],
    "hint": "Impacto en estabilidad y seguridad.",
    "explanation": "Es verdadero. Cualquier cambio en componentes críticos debe ser probado para garantizar que no se introduzcan fallos funcionales o vulnerabilidades."
  },
  {
    "id": "q77",
    "questionText": "¿Qué acción aumenta el riesgo de hackeos en los entornos informáticos?",
    "type": "single",
    "options": [
      { "id": "q77_o1", "text": "Limitar derechos de acceso.", "isCorrect": false },
      { "id": "q77_o2", "text": "Ignorar principios de seguridad en instalación.", "isCorrect": true },
      { "id": "q77_o3", "text": "Desactivar servicios innecesarios.", "isCorrect": false },
      { "id": "q77_o4", "text": "Prohibir acceso administrativo.", "isCorrect": false }
    ],
    "hint": "Configuraciones iniciales inseguras.",
    "explanation": "Ignorar principios de seguridad durante la instalación deja sistemas con configuraciones débiles o por defecto, aumentando el riesgo de ataques."
  },
  {
    "id": "q78",
    "questionText": "¿Qué acción debe realizarse cuando se actualiza una API?",
    "type": "single",
    "options": [
      { "id": "q78_o1", "text": "Comprobar si los cambios son compatibles con las versiones anteriores.", "isCorrect": true },
      { "id": "q78_o2", "text": "Desactivar la seguridad mientras se actualiza.", "isCorrect": false },
      { "id": "q78_o3", "text": "Exponer la API sin controles de acceso.", "isCorrect": false },
      { "id": "q78_o4", "text": "No realizar pruebas previas.", "isCorrect": false }
    ],
    "hint": "Backward compatibility.",
    "explanation": "Verificar la compatibilidad con versiones anteriores evita romper integraciones existentes y mantiene la estabilidad y seguridad del sistema."
  },
  {
    "id": "q79",
    "questionText": "¿Qué acción puede prevenir vulnerabilidades al trabajar con bibliotecas de terceros?",
    "type": "single",
    "options": [
      { "id": "q79_o1", "text": "No usar bibliotecas externas.", "isCorrect": false },
      { "id": "q79_o2", "text": "Compartir bibliotecas con otros desarrolladores.", "isCorrect": false },
      { "id": "q79_o3", "text": "Mantener las bibliotecas actualizadas.", "isCorrect": true },
      { "id": "q79_o4", "text": "Usar una sola biblioteca.", "isCorrect": false }
    ],
    "hint": "Gestión de dependencias.",
    "explanation": "Mantener bibliotecas actualizadas reduce el riesgo de usar versiones con vulnerabilidades conocidas."
  },
  {
    "id": "q80",
    "questionText": "¿Qué acción tomaría un atacante para realizar un ataque de SSRF?",
    "type": "single",
    "options": [
      { "id": "q80_o1", "text": "Cambiar las respuestas en el servidor.", "isCorrect": false },
      { "id": "q80_o2", "text": "Utilizar tokens OAuth para acceder a los recursos.", "isCorrect": false },
      { "id": "q80_o3", "text": "Manipular las credenciales de autenticación.", "isCorrect": false },
      { "id": "q80_o4", "text": "Manipular las URLs controladas por el usuario.", "isCorrect": true }
    ],
    "hint": "El servidor realiza solicitudes internas.",
    "explanation": "En un ataque SSRF, el atacante manipula URLs controladas por el usuario para forzar al servidor a realizar solicitudes no autorizadas."
  },
  {
    "id": "q81",
    "questionText": "¿Qué ataque es impedido al limitar intentos de autenticación y desactivar la cuenta luego de múltiples fallos?",
    "type": "single",
    "options": [
      { "id": "q81_o1", "text": "Fallos de integridad de software y datos.", "isCorrect": false },
      { "id": "q81_o2", "text": "Errores de identificación y autenticación.", "isCorrect": true },
      { "id": "q81_o3", "text": "Configuración incorrecta de seguridad.", "isCorrect": false },
      { "id": "q81_o4", "text": "Falsificación de solicitudes del lado del servidor.", "isCorrect": false },
      { "id": "q81_o5", "text": "Inyección.", "isCorrect": false }
    ],
    "hint": "Protección contra fuerza bruta.",
    "explanation": "Limitar intentos de autenticación previene ataques de fuerza bruta, asociados a errores de identificación y autenticación."
  },
  {
    "id": "q82",
    "questionText": "¿Qué ataque puede aprovecharse de mensajes de error mal gestionados?",
    "type": "single",
    "options": [
      { "id": "q82_o1", "text": "Cross-Site Scripting.", "isCorrect": false },
      { "id": "q82_o2", "text": "Fallas de manejo de excepciones.", "isCorrect": true },
      { "id": "q82_o3", "text": "Ataques AJAX.", "isCorrect": false },
      { "id": "q82_o4", "text": "Ataques de validación de entrada.", "isCorrect": false }
    ],
    "hint": "Información sensible en errores.",
    "explanation": "Mensajes de error mal gestionados pueden revelar información interna del sistema, lo que corresponde a fallas de manejo de excepciones."
  },
  {
    "id": "q83",
    "questionText": "¿Qué ayuda a preservar la integridad de los datos?",
    "type": "single",
    "options": [
      { "id": "q83_o1", "text": "Almacenando dependencias en repositorios confiables.", "isCorrect": true }
    ],
    "hint": "Evitar dependencias comprometidas.",
    "explanation": "Utilizar repositorios confiables reduce el riesgo de incorporar componentes alterados o maliciosos."
  },
  {
    "id": "q84",
    "questionText": "¿Qué control busca evitar análisis dinámicos y modificación del código en tiempo de ejecución?",
    "type": "single",
    "options": [
      { "id": "q84_o1", "text": "MASVS-STORAGE.", "isCorrect": false },
      { "id": "q84_o2", "text": "MASVS-CRYPTO.", "isCorrect": false },
      { "id": "q84_o3", "text": "MASVS-AUTH.", "isCorrect": false },
      { "id": "q84_o4", "text": "MASVS-NETWORK.", "isCorrect": false },
      { "id": "q84_o5", "text": "MASVS-DEVOPS.", "isCorrect": false },
      { "id": "q84_o6", "text": "MASVS-RESILIENCE.", "isCorrect": true }
    ],
    "hint": "Protección contra ingeniería inversa.",
    "explanation": "MASVS-RESILIENCE incluye controles para dificultar la ingeniería inversa y la manipulación del código en tiempo de ejecución."
  },
  {
    "id": "q85",
    "questionText": "¿Qué control intenta garantizar la integridad de la funcionalidad prevista de la aplicación, evitando modificaciones en el código y los recursos originales?",
    "type": "single",
    "options": [
      { "id": "q85_o1", "text": "MASVS-NETWORK.", "isCorrect": false },
      { "id": "q85_o2", "text": "MASVS-STORAGE.", "isCorrect": false },
      { "id": "q85_o3", "text": "MASVS-CRYPTO.", "isCorrect": false },
      { "id": "q85_o4", "text": "MASVS-AUTH.", "isCorrect": false },
      { "id": "q85_o5", "text": "MASVS-RESILIENCE.", "isCorrect": false },
      { "id": "q85_o6", "text": "MASVS-DEVOPS.", "isCorrect": true }
    ],
    "hint": "Protección de la integridad funcional.",
    "explanation": "MASVS-DEVOPS incluye controles relacionados con la integridad del ciclo de vida, despliegue y protección contra modificaciones no autorizadas."
  },
  {
    "id": "q86",
    "questionText": "¿Qué control valida que el sistema operativo no ha sido comprometido?",
    "type": "single",
    "options": [
      { "id": "q86_o1", "text": "MASVS-RESILIENCE.", "isCorrect": true },
      { "id": "q86_o2", "text": "MASVS-PLATFORM.", "isCorrect": false },
      { "id": "q86_o3", "text": "MASVS-CODE.", "isCorrect": false },
      { "id": "q86_o4", "text": "MASVS-CRYPTO.", "isCorrect": false }
    ],
    "hint": "Detección de entorno comprometido.",
    "explanation": "MASVS-RESILIENCE contempla mecanismos para detectar entornos comprometidos, como dispositivos rooteados o sistemas operativos alterados."
  },
 {
    "id": "q87",
    "questionText": "¿Qué criterio del modelo DREAD considera la posibilidad de que una amenaza pueda ser detectada por investigadores externos o atacantes?",
    "type": "single",
    "options": [
      { "id": "q87_o1", "text": "Daño potencial.", "isCorrect": false },
      { "id": "q87_o2", "text": "Sistemas afectados.", "isCorrect": false },
      { "id": "q87_o3", "text": "Explotabilidad.", "isCorrect": false },
      { "id": "q87_o4", "text": "Descubrimiento.", "isCorrect": true },
      { "id": "q87_o5", "text": "Reproducibilidad.", "isCorrect": false },
      { "id": "q87_o6", "text": "Usuarios afectados.", "isCorrect": false }
    ],
    "hint": "Qué tan fácil es encontrar la vulnerabilidad.",
    "explanation": "En el modelo DREAD, el criterio Descubrimiento evalúa qué tan fácil es que una vulnerabilidad sea encontrada por atacantes o investigadores externos."
  },
  {
    "id": "q88",
    "questionText": "¿Qué debe considerarse al estimar el impacto técnico de una vulnerabilidad?",
    "type": "single",
    "options": [
      { "id": "q88_o1", "text": "Complejidad del código.", "isCorrect": false },
      { "id": "q88_o2", "text": "Coste del desarrollo.", "isCorrect": false },
      { "id": "q88_o3", "text": "Tiempo estimado para solucionarla.", "isCorrect": false },
      { "id": "q88_o4", "text": "Confidencialidad, integridad y disponibilidad.", "isCorrect": true }
    ],
    "hint": "Triada clásica de seguridad.",
    "explanation": "El impacto técnico de una vulnerabilidad se mide evaluando cómo afecta la confidencialidad, integridad y disponibilidad (triada CIA)."
  },
  {
    "id": "q89",
    "questionText": "¿Qué detecta DAST mejor que SAST?",
    "type": "single",
    "options": [
      { "id": "q89_o1", "text": "Vulnerabilidades relacionadas con la red o el tráfico en vivo.", "isCorrect": true }
    ],
    "hint": "Análisis en ejecución.",
    "explanation": "DAST analiza la aplicación en ejecución y puede detectar vulnerabilidades relacionadas con la red, configuración y tráfico en tiempo real."
  },
  {
    "id": "q90",
    "questionText": "¿Qué enfoque debe utilizarse para configurar un ambiente seguro?",
    "type": "single",
    "options": [
      { "id": "q90_o1", "text": "Eliminar servicios innecesarios.", "isCorrect": true },
      { "id": "q90_o2", "text": "Mantener cuentas predeterminadas activas.", "isCorrect": false },
      { "id": "q90_o3", "text": "Otorgar derechos explícitos a todos los usuarios.", "isCorrect": false },
      { "id": "q90_o4", "text": "Dar acceso administrativo por defecto.", "isCorrect": false }
    ],
    "hint": "Reducir superficie de ataque.",
    "explanation": "Eliminar servicios innecesarios reduce la superficie de ataque y aplica el principio de mínimos privilegios."
  },
  {
    "id": "q91",
    "questionText": "¿Qué es \"Unrestricted Resource Consumption\"?",
    "type": "single",
    "options": [
      { "id": "q91_o1", "text": "La protección de recursos en el servidor.", "isCorrect": false },
      { "id": "q91_o2", "text": "El uso de recursos solo por administradores.", "isCorrect": false },
      { "id": "q91_o3", "text": "El uso eficiente de recursos en una API.", "isCorrect": false },
      { "id": "q91_o4", "text": "El consumo de recursos sin restricciones que puede llevar a la degradación del servicio.", "isCorrect": true }
    ],
    "hint": "Puede causar denegación de servicio.",
    "explanation": "Unrestricted Resource Consumption ocurre cuando no existen límites adecuados, permitiendo el uso excesivo de recursos y afectando la disponibilidad del servicio."
  },
  {
    "id": "q92",
    "questionText": "¿Qué es el análisis de código estático?",
    "type": "single",
    "options": [
      { "id": "q92_o1", "text": "Inspección del código sin ejecutarlo.", "isCorrect": true },
      { "id": "q92_o2", "text": "Ejecución del código en un entorno controlado.", "isCorrect": false },
      { "id": "q92_o3", "text": "Inspección del código mientras se ejecuta.", "isCorrect": false },
      { "id": "q92_o4", "text": "Eliminación de errores de compilación.", "isCorrect": false }
    ],
    "hint": "Análisis antes de ejecución.",
    "explanation": "El análisis estático examina el código fuente sin ejecutarlo para identificar vulnerabilidades y errores potenciales."
  },
  {
    "id": "q93",
    "questionText": "¿Qué es el diseño y desarrollo de aplicaciones web?",
    "type": "single",
    "options": [
      { "id": "q93_o1", "text": "Es el uso de tecnologías para implementar las necesidades, objetivos o ideas de los clientes en Internet.", "isCorrect": true },
      { "id": "q93_o2", "text": "Es la creación de videojuegos para Internet.", "isCorrect": false },
      { "id": "q93_o3", "text": "Es la implementación de herramientas internas para empresas.", "isCorrect": false },
      { "id": "q93_o4", "text": "Es la creación de sitios web exclusivamente para empresas.", "isCorrect": false }
    ],
    "hint": "Soluciones tecnológicas en Internet.",
    "explanation": "El diseño y desarrollo web implica usar tecnologías para construir soluciones que satisfagan necesidades y objetivos en entornos digitales."
  },
  {
    "id": "q94",
    "questionText": "¿Qué es un ataque de inyección en el contexto de APIs?",
    "type": "single",
    "options": [
      { "id": "q94_o1", "text": "Un ataque que inserta comandos maliciosos a través de entradas de la API.", "isCorrect": true },
      { "id": "q94_o2", "text": "Un ataque que realiza solicitudes a un servidor interno.", "isCorrect": false },
      { "id": "q94_o3", "text": "Un ataque que deshabilita un servidor.", "isCorrect": false },
      { "id": "q94_o4", "text": "Un ataque que busca robar claves API.", "isCorrect": false }
    ],
    "hint": "Manipulación de entradas.",
    "explanation": "Los ataques de inyección aprovechan entradas no validadas para ejecutar comandos o consultas maliciosas."
  },
  {
    "id": "q95",
    "questionText": "¿Qué estrategia es esencial para asegurar la calidad del producto en el desarrollo de aplicaciones?",
    "type": "single",
    "options": [
      { "id": "q95_o1", "text": "Pruebas unitarias y de integración.", "isCorrect": true },
      { "id": "q95_o2", "text": "Solo realizar pruebas manuales.", "isCorrect": false },
      { "id": "q95_o3", "text": "Dejar el aseguramiento a QA.", "isCorrect": false },
      { "id": "q95_o4", "text": "Enfocarse solo en pruebas UI.", "isCorrect": false }
    ],
    "hint": "Pruebas automatizadas.",
    "explanation": "Las pruebas unitarias e integración permiten detectar errores tempranamente y asegurar la calidad del producto."
  },
  {
    "id": "q96",
    "questionText": "¿Qué función realiza la administración de configuraciones en el desarrollo de software?",
    "type": "single",
    "options": [
      { "id": "q96_o1", "text": "Gestionar solo cambios en la base de datos.", "isCorrect": false },
      { "id": "q96_o2", "text": "Proteger exclusivamente bibliotecas del sistema.", "isCorrect": false },
      { "id": "q96_o3", "text": "Limitar revisiones técnicas.", "isCorrect": false },
      { "id": "q96_o4", "text": "Supervisar artefactos y componentes.", "isCorrect": true }
    ],
    "hint": "Control del ciclo de vida.",
    "explanation": "La administración de configuraciones supervisa y controla artefactos, versiones y componentes durante el ciclo de vida del software."
  },
  {
    "id": "q97",
    "questionText": "¿Qué se debe hacer antes del despliegue?",
    "type": "single",
    "options": [
      { "id": "q97_o1", "text": "Revisar todas las políticas de seguridad antes del despliegue.", "isCorrect": true }
    ],
    "hint": "Validación previa a producción.",
    "explanation": "Antes del despliegue es fundamental revisar políticas de seguridad para garantizar que el sistema cumple con los estándares establecidos."
  },
{
    "id": "q98",
    "questionText": "¿Qué herramienta o proceso ayuda a garantizar que los datos recolectados son esenciales para el propósito del modelo?",
    "type": "single",
    "options": [
      { "id": "q98_o1", "text": "Auditorías periódicas.", "isCorrect": true },
      { "id": "q98_o2", "text": "Pruebas de caja negra.", "isCorrect": false },
      { "id": "q98_o3", "text": "Sistemas de cifrado robusto.", "isCorrect": false },
      { "id": "q98_o4", "text": "Dashboards en tiempo real.", "isCorrect": false }
    ],
    "hint": "Revisión sistemática de minimización de datos.",
    "explanation": "Las auditorías periódicas permiten revisar si los datos recolectados son realmente necesarios, cumpliendo con los principios de minimización y privacidad por diseño."
  },
  {
    "id": "q99",
    "questionText": "¿Qué herramienta OWASP puede ayudar a identificar vulnerabilidades en el entorno donde opera la IA?",
    "type": "single",
    "options": [
      { "id": "q99_o1", "text": "OWASP AI-Test.", "isCorrect": false },
      { "id": "q99_o2", "text": "OWASP Model-Scan.", "isCorrect": false },
      { "id": "q99_o3", "text": "OWASP Dependency-Check.", "isCorrect": true },
      { "id": "q99_o4", "text": "OWASP ZAP.", "isCorrect": false }
    ],
    "hint": "Análisis de componentes de terceros.",
    "explanation": "OWASP Dependency-Check escanea bibliotecas y dependencias externas (como Frameworks de ML) para detectar vulnerabilidades conocidas (CVE)."
  },
  {
    "id": "q100",
    "questionText": "¿Qué herramienta se recomienda para proteger aplicaciones web de tráfico malicioso?",
    "type": "single",
    "options": [
      { "id": "q100_o1", "text": "IDS", "isCorrect": false },
      { "id": "q100_o2", "text": "Firewall de red", "isCorrect": false },
      { "id": "q100_o3", "text": "Cortafuegos de aplicaciones web (WAF)", "isCorrect": true },
      { "id": "q100_o4", "text": "Antivirus", "isCorrect": false }
    ],
    "hint": "Filtro específico para tráfico HTTP.",
    "explanation": "Un WAF está diseñado específicamente para filtrar y monitorear el tráfico entre una aplicación web e Internet, protegiéndola de ataques nivel capa 7."
  },
  {
    "id": "q101",
    "questionText": "¿Qué implica el control MASVS-CÓDIGO para la seguridad de la aplicación?",
    "type": "single",
    "options": [
      { "id": "q101_o1", "text": "Proteger las contraseñas utilizando técnicas de encriptación fuerte.", "isCorrect": false },
      { "id": "q101_o2", "text": "Permitir el acceso sin restricciones a los archivos de la aplicación.", "isCorrect": false },
      { "id": "q101_o3", "text": "Mejorar la interfaz gráfica de la aplicación.", "isCorrect": false },
      { "id": "q101_o4", "text": "Validar y desinfectar todas las entradas no confiables antes de usarlas.", "isCorrect": true }
    ],
    "hint": "Manejo de inputs en código fuente.",
    "explanation": "El control MASVS-CÓDIGO se enfoca en la validación y sanitización de entradas para prevenir inyecciones, XSS y otras manipulaciones de parámetros."
  },
  {
    "id": "q102",
    "questionText": "¿Qué medida ayuda a garantizar seguridad al actualizar imágenes de contenedor?",
    "type": "single",
    "options": [
      { "id": "q102_o1", "text": "Usar imágenes no verificadas", "isCorrect": false },
      { "id": "q102_o2", "text": "Ignorar parches del sistema operativo", "isCorrect": false },
      { "id": "q102_o3", "text": "Mantener versiones desactualizadas", "isCorrect": false },
      { "id": "q102_o4", "text": "Asegurarse de que runtime y SO estén actualizados", "isCorrect": true }
    ],
    "hint": "Gestión de parches en contenedores.",
    "explanation": "Mantener actualizados el entorno de ejecución (runtime) y el sistema operativo base de la imagen reduce significativamente la superficie de ataque."
  },
  {
    "id": "q103",
    "questionText": "¿Qué medida ayuda a prevenir un ataque de DoS contra una API?",
    "type": "single",
    "options": [
      { "id": "q103_o1", "text": "Aplicar limitación de velocidad (Rate Limiting)", "isCorrect": true },
      { "id": "q103_o2", "text": "Aumentar el número de endpoints", "isCorrect": false },
      { "id": "q103_o3", "text": "Permitir múltiples solicitudes por segundo", "isCorrect": false },
      { "id": "q103_o4", "text": "Quitar autenticación", "isCorrect": false }
    ],
    "hint": "Control de frecuencia de peticiones.",
    "explanation": "La limitación de velocidad restringe cuántas solicitudes puede hacer un cliente en un tiempo determinado, evitando el agotamiento de recursos del servidor."
  },
  {
    "id": "q104",
    "questionText": "¿Qué medida evita la amenaza del tipo inyección al validar entradas y separar datos de comandos?",
    "type": "single",
    "options": [
      { "id": "q104_o1", "text": "Verdadero", "isCorrect": true },
      { "id": "q104_o2", "text": "Falso", "isCorrect": false }
    ],
    "hint": "Principio de defensa contra inyección.",
    "explanation": "Validar entradas y asegurar que los datos no sean interpretados como comandos (por ejemplo, usando consultas parametrizadas) previene ataques de inyección."
  },
  {
    "id": "q105",
    "questionText": "¿Qué metodología se utiliza para comprobar los requisitos de seguridad en todas las etapas del proceso de desarrollo para garantizar su integración?",
    "type": "single",
    "options": [
      { "id": "q105_o1", "text": "COCOMO", "isCorrect": false },
      { "id": "q105_o2", "text": "S-SDLC", "isCorrect": false },
      { "id": "q105_o3", "text": "STRIDE", "isCorrect": false },
      { "id": "q105_o4", "text": "DEVSECOPS", "isCorrect": true }
    ],
    "hint": "Seguridad integrada en el ciclo de vida.",
    "explanation": "DevSecOps integra la seguridad de forma continua desde el planeamiento hasta la operación, automatizando pruebas en todo el flujo de entrega."
  },
  {
    "id": "q106",
    "questionText": "¿Qué mide 'Reproducibilidad' en el modelo DREAD?",
    "type": "single",
    "options": [
      { "id": "q106_o1", "text": "La cantidad de daño que la amenaza puede causar.", "isCorrect": false },
      { "id": "q106_o2", "text": "La cantidad de personas que descubrirán la amenaza.", "isCorrect": false },
      { "id": "q106_o3", "text": "La facilidad con que puede ser recreada la amenaza.", "isCorrect": true },
      { "id": "q106_o4", "text": "La gravedad de la amenaza.", "isCorrect": false }
    ],
    "hint": "Repetición exitosa del ataque.",
    "explanation": "La reproducibilidad evalúa qué tan fácil es para un atacante repetir el ataque de manera confiable y obtener el mismo resultado."
  },
  {
    "id": "q107",
    "questionText": "¿Qué ocurre cuando un servidor permite solicitudes maliciosas sin validación en una API?",
    "type": "single",
    "options": [
      { "id": "q107_o1", "text": "La API realiza un análisis de tráfico.", "isCorrect": false },
      { "id": "q107_o2", "text": "Se produce un SSRF.", "isCorrect": true },
      { "id": "q107_o3", "text": "Se produce un ataque DDoS.", "isCorrect": false },
      { "id": "q107_o4", "text": "La API no responde.", "isCorrect": false }
    ],
    "hint": "Server-Side Request Forgery.",
    "explanation": "Sin validación, un servidor puede ser engañado para realizar peticiones internas o externas no autorizadas en nombre del atacante (SSRF)."
  },
  {
    "id": "q108",
    "questionText": "¿Qué pasa si una API expone más datos de los necesarios?",
    "type": "single",
    "options": [
      { "id": "q108_o1", "text": "Los clientes de la API podrían tener acceso a datos que no deberían estar a su disposición.", "isCorrect": true },
      { "id": "q108_o2", "text": "La API se vuelve más eficiente.", "isCorrect": false },
      { "id": "q108_o3", "text": "Se mejora la seguridad por transparencia.", "isCorrect": false },
      { "id": "q108_o4", "text": "No ocurre nada relevante.", "isCorrect": false }
    ],
    "hint": "Exposición excesiva de datos.",
    "explanation": "La exposición excesiva de datos permite que información sensible llegue al cliente, aumentando el riesgo de filtraciones accidentales o robo de datos."
  },
{
    "id": "q109",
    "questionText": "¿Qué permite el modelado de amenazas durante el desarrollo de software?",
    "type": "single",
    "options": [
      { "id": "q109_o1", "text": "Ignorar vulnerabilidades de baja probabilidad.", "isCorrect": false },
      { "id": "q109_o2", "text": "Identificar problemas de seguridad en diseño.", "isCorrect": true },
      { "id": "id109_o3", "text": "Evitar revisiones manuales.", "isCorrect": false },
      { "id": "q109_o4", "text": "Aumentar el tiempo de desarrollo.", "isCorrect": false }
    ],
    "hint": "Seguridad desde la arquitectura.",
    "explanation": "El modelado de amenazas permite analizar componentes y flujos para detectar fallas estructurales antes de la implementación, reduciendo costos de corrección."
  },
  {
    "id": "q110",
    "questionText": "¿Qué política debe implementarse para asegurar la eliminación adecuada de los datos antiguos?",
    "type": "single",
    "options": [
      { "id": "q110_o1", "text": "Revisión de métricas clave.", "isCorrect": false },
      { "id": "q110_o2", "text": "Anonimización de datos.", "isCorrect": false },
      { "id": "q110_o3", "text": "Políticas de retención de datos.", "isCorrect": true },
      { "id": "q110_o4", "text": "Auditorías regulares.", "isCorrect": false }
    ],
    "hint": "Control del ciclo de vida del dato.",
    "explanation": "Las políticas de retención determinan cuánto tiempo se almacenan los datos y cómo eliminarlos de forma segura y legal."
  },
  {
    "id": "q111",
    "questionText": "¿Qué práctica asegura que los datos de entrenamiento representen adecuadamente a la población?",
    "type": "single",
    "options": [
      { "id": "q111_o1", "text": "Validación de conjuntos de datos.", "isCorrect": true },
      { "id": "q111_o2", "text": "Uso de dashboards en tiempo real.", "isCorrect": false },
      { "id": "q111_o3", "text": "Pruebas de caja negra.", "isCorrect": false },
      { "id": "q111_o4", "text": "Implementación de OWASP ZAP.", "isCorrect": false }
    ],
    "hint": "Evitar sesgos en IA.",
    "explanation": "Validar los datasets garantiza diversidad, evita discriminación algorítmica y asegura que el modelo sea justo y generalizable."
  },
  {
    "id": "q112",
    "questionText": "¿Qué práctica ayuda a garantizar que un modelo de IA sea resistente a manipulaciones externas?",
    "type": "single",
    "options": [
      { "id": "q112_o1", "text": "Utilizar OWASP ZAP.", "isCorrect": false },
      { "id": "q112_o2", "text": "Implementar pruebas adversariales.", "isCorrect": true },
      { "id": "q112_o3", "text": "Supervisar métricas clave.", "isCorrect": false },
      { "id": "q112_o4", "text": "Realizar pruebas de caja blanca.", "isCorrect": false }
    ],
    "hint": "Resistencia contra entradas manipuladas.",
    "explanation": "Las pruebas adversariales evalúan cómo responde el modelo ante entradas diseñadas intencionalmente para engañarlo (adversarial examples)."
  },
  {
    "id": "q113",
    "questionText": "¿Qué principio de seguridad se viola al otorgar derechos administrativos durante la instalación de software?",
    "type": "single",
    "options": [
      { "id": "q113_o1", "text": "Principio de menor privilegio.", "isCorrect": true },
      { "id": "q113_o2", "text": "Revisión de configuraciones.", "isCorrect": false },
      { "id": "q113_o3", "text": "Separación de funciones.", "isCorrect": false },
      { "id": "q113_o4", "text": "Principio de diseño seguro.", "isCorrect": false }
    ],
    "hint": "Solo los permisos necesarios.",
    "explanation": "Otorgar permisos administrativos innecesarios viola el principio de menor privilegio, que dicta dar solo el acceso mínimo para realizar una tarea."
  },
  {
    "id": "q114",
    "questionText": "¿Qué principio establece que el acceso debe ser permitido solo a usuarios específicos?",
    "type": "single",
    "options": [
      { "id": "q114_o1", "text": "Modelado de amenazas.", "isCorrect": false },
      { "id": "q114_o2", "text": "Hardening de seguridad.", "isCorrect": false },
      { "id": "q114_o3", "text": "Principio de mínimo privilegio.", "isCorrect": true },
      { "id": "q114_o4", "text": "Validación de entradas.", "isCorrect": false }
    ],
    "hint": "Restricción de acceso.",
    "explanation": "Este principio asegura que los usuarios tengan acceso limitado únicamente a lo que es estrictamente necesario para su rol."
  },
  {
    "id": "q115",
    "questionText": "¿Qué medida reduce la superficie de ataque en librerías?",
    "type": "single",
    "options": [
      { "id": "q115_o1", "text": "Eliminando funciones y frameworks no utilizados.", "isCorrect": true },
      { "id": "q115_o2", "text": "Aumentando el número de dependencias.", "isCorrect": false }
    ],
    "hint": "Minimización de componentes.",
    "explanation": "Remover código o bibliotecas que no se utilizan disminuye los posibles puntos de entrada para un atacante."
  },
  {
    "id": "q116",
    "questionText": "¿Qué representa desplazar la seguridad a etapas tardías?",
    "type": "single",
    "options": [
      { "id": "q116_o1", "text": "Desplazar la seguridad a la derecha (Shift Right).", "isCorrect": true },
      { "id": "q116_o2", "text": "Optimización del ciclo de vida.", "isCorrect": false }
    ],
    "hint": "Seguridad al final del proceso.",
    "explanation": "Dejar la seguridad para el final del ciclo de desarrollo se conoce como Shift Right, lo cual suele ser más costoso y riesgoso."
  },
  {
    "id": "q117",
    "questionText": "¿Qué representa el modelo CIA?",
    "type": "single",
    "options": [
      { "id": "q117_o1", "text": "Confidencialidad, integridad y disponibilidad.", "isCorrect": true },
      { "id": "q117_o2", "text": "Control, información y acceso.", "isCorrect": false }
    ],
    "hint": "Tríada fundamental de seguridad.",
    "explanation": "Es el pilar de la seguridad informática: Confidentiality, Integrity, Availability."
  },
  {
    "id": "q118",
    "questionText": "¿Qué representa la capacidad de explicar decisiones en IA?",
    "type": "single",
    "options": [
      { "id": "q118_o1", "text": "Trazabilidad y auditorías de decisiones.", "isCorrect": true },
      { "id": "q118_o2", "text": "Rendimiento del modelo.", "isCorrect": false }
    ],
    "hint": "Accountability en IA.",
    "explanation": "La trazabilidad permite entender y auditar el 'por qué' de una decisión tomada por un algoritmo de inteligencia artificial."
  },
  {
    "id": "q119",
    "questionText": "¿Qué requisito de seguridad protege contra la divulgación no autorizada de información sensible?",
    "type": "single",
    "options": [
      { "id": "q119_o1", "text": "Transparencia", "isCorrect": false },
      { "id": "q119_o2", "text": "Disponibilidad", "isCorrect": false },
      { "id": "q119_o3", "text": "Integridad", "isCorrect": false },
      { "id": "q119_o4", "text": "Confidencialidad", "isCorrect": true }
    ],
    "hint": "Privacidad de la información.",
    "explanation": "La confidencialidad garantiza que la información solo sea accesible a quienes tienen autorización."
  },
  {
    "id": "q120",
    "questionText": "¿Qué se busca equilibrar en la arquitectura de seguridad?",
    "type": "single",
    "options": [
      { "id": "q120_o1", "text": "Amenazas y oportunidades.", "isCorrect": false },
      { "id": "q120_o2", "text": "Seguridad y rendimiento.", "isCorrect": true },
      { "id": "q120_o3", "text": "Infraestructura y software.", "isCorrect": false },
      { "id": "q120_o4", "text": "Costos y ganancias.", "isCorrect": false }
    ],
    "hint": "Protección vs Operatividad.",
    "explanation": "Un diseño robusto debe aplicar controles de seguridad eficaces sin generar cuellos de botella o afectar la experiencia del usuario."
  },
  {
    "id": "q121",
    "questionText": "¿Qué se considera como parte de la seguridad de una base de datos?",
    "type": "single",
    "options": [
      { "id": "q121_o1", "text": "Solo la protección de los datos.", "isCorrect": false },
      { "id": "q121_o2", "text": "Solo el servidor de base de datos.", "isCorrect": false },
      { "id": "q121_o3", "text": "Protección de los datos, DBMS y aplicaciones asociadas.", "isCorrect": true },
      { "id": "q121_o4", "text": "Protección del software de la aplicación.", "isCorrect": false }
    ],
    "hint": "Enfoque integral de DB.",
    "explanation": "La seguridad de bases de datos abarca la información, el motor de gestión (DBMS) y las aplicaciones que interactúan con ella."
  },
  {
    "id": "q122",
    "questionText": "¿Qué se necesita para garantizar los requisitos de auditoría?",
    "type": "single",
    "options": [
      { "id": "q122_o1", "text": "Rastrear y registrar acciones específicas.", "isCorrect": true },
      { "id": "q122_o2", "text": "Monitorear exclusivamente usuarios no autorizados.", "isCorrect": false },
      { "id": "q122_o3", "text": "Hacer cumplir contraseñas seguras.", "isCorrect": false },
      { "id": "q122_o4", "text": "Deshabilitar modificaciones.", "isCorrect": false }
    ],
    "hint": "Logging y Tracking.",
    "explanation": "La auditoría efectiva requiere el registro detallado (quién, cuándo, qué) de acciones críticas para análisis forense y cumplimiento."
  },
  {
    "id": "q123",
    "questionText": "¿Qué significa 'Daño Potencial' en el modelo DREAD?",
    "type": "single",
    "options": [
      { "id": "q123_o1", "text": "El tiempo necesario para descubrir la amenaza.", "isCorrect": false },
      { "id": "q123_o2", "text": "La facilidad con que puede ocurrir la amenaza.", "isCorrect": false },
      { "id": "q123_o3", "text": "La magnitud del daño causado si se materializa la amenaza.", "isCorrect": true },
      { "id": "q123_o4", "text": "El número de usuarios afectados.", "isCorrect": false }
    ],
    "hint": "Impacto de la materialización.",
    "explanation": "El Daño Potencial mide la severidad de los efectos (pérdida de datos, caída de servicios) si una amenaza llega a concretarse."
  },
  {
    "id": "q124",
    "questionText": "¿Qué significa desplazar la seguridad a la izquierda (Shift Left) en el desarrollo de software?",
    "type": "single",
    "options": [
      { "id": "q124_o1", "text": "Corregir problemas después del despliegue.", "isCorrect": false },
      { "id": "q124_o2", "text": "Realizar pruebas en producción.", "isCorrect": false },
      { "id": "q124_o3", "text": "Focalizar la seguridad desde fases tempranas.", "isCorrect": true },
      { "id": "q124_o4", "text": "Evaluar solo errores críticos.", "isCorrect": false }
    ],
    "hint": "Seguridad proactiva.",
    "explanation": "Integrar la seguridad desde los requerimientos y el diseño permite detectar fallas antes, siendo más eficiente y económico."
  },
  {
    "id": "q125",
    "questionText": "¿Qué sistema ayuda a garantizar la seguridad del clúster en Kubernetes?",
    "type": "single",
    "options": [
      { "id": "q125_o1", "text": "Reducir el tráfico entrante.", "isCorrect": false },
      { "id": "q125_o2", "text": "Dar permisos de administrador a todos.", "isCorrect": false },
      { "id": "q125_o3", "text": "Aplicar control de acceso basado en roles (RBAC).", "isCorrect": true },
      { "id": "q125_o4", "text": "Compartir secretos entre contenedores.", "isCorrect": false }
    ],
    "hint": "Gestión de permisos en K8s.",
    "explanation": "RBAC permite asignar permisos específicos a usuarios y procesos dentro del clúster, limitando el radio de exposición."
  },
  {
    "id": "q126",
    "questionText": "¿A qué amenaza se refiere el consumo de recursos sin restricciones en una API?",
    "type": "single",
    "options": [
      { "id": "q126_o1", "text": "Consumo de recursos sin restricciones.", "isCorrect": true },
      { "id": "q126_o2", "text": "Configuración incorrecta de seguridad.", "isCorrect": false },
      { "id": "q126_o3", "text": "Falsificación de solicitudes (SSRF).", "isCorrect": false },
      { "id": "q126_o4", "text": "Gestión inadecuada del inventario.", "isCorrect": false }
    ],
    "hint": "Agotamiento de hardware.",
    "explanation": "Esta amenaza ocurre cuando una API no limita el uso de CPU, memoria o ancho de banda, lo que puede llevar a una denegación de servicio (DoS)."
  },
{
    "id": "q127",
    "questionText": "¿Qué son los 'secretos' en el contexto de la gestión de secretos?",
    "type": "single",
    "options": [
      { "id": "q127_o1", "text": "Contraseñas, claves de cifrado y otros elementos utilizados en la autenticación y autorización.", "isCorrect": true },
      { "id": "q127_o2", "text": "Protocolos de seguridad de la red.", "isCorrect": false },
      { "id": "q127_o3", "text": "Herramientas de desarrollo de software.", "isCorrect": false },
      { "id": "q127_o4", "text": "Información sobre los clientes de la empresa.", "isCorrect": false }
    ],
    "hint": "Credenciales y llaves de acceso.",
    "explanation": "Los secretos son datos sensibles como tokens, llaves API y contraseñas que permiten a usuarios o sistemas autenticarse y autorizar operaciones."
  },
  {
    "id": "q128",
    "questionText": "¿Qué técnica debe emplearse para proteger los datos durante el tiempo que se almacenan, según OWASP?",
    "type": "single",
    "options": [
      { "id": "q128_o1", "text": "Sistemas de monitoreo en tiempo real.", "isCorrect": false },
      { "id": "q128_o2", "text": "Técnicas de cifrado robusto.", "isCorrect": true },
      { "id": "q128_o3", "text": "Pruebas de caja blanca.", "isCorrect": false },
      { "id": "q128_o4", "text": "Pruebas adversariales.", "isCorrect": false }
    ],
    "hint": "Protección de datos en reposo.",
    "explanation": "El cifrado robusto es la medida fundamental recomendada por OWASP para garantizar que los datos almacenados permanezcan inaccesibles para atacantes."
  },
  {
    "id": "q129",
    "questionText": "¿Qué tipo de ataque se basa en el robo de credenciales a través de un correo electrónico?",
    "type": "single",
    "options": [
      { "id": "q129_o1", "text": "Troyano.", "isCorrect": false },
      { "id": "q129_o2", "text": "Whaling.", "isCorrect": false },
      { "id": "q129_o3", "text": "Ransomware.", "isCorrect": false },
      { "id": "q129_o4", "text": "Phishing.", "isCorrect": true }
    ],
    "hint": "Ingeniería social vía e-mail.",
    "explanation": "El phishing utiliza mensajes falsificados para engañar a los usuarios y lograr que revelen información confidencial o credenciales de acceso."
  },
  {
    "id": "q130",
    "questionText": "¿Qué tipo de control está diseñado específicamente para evitar ataques a los datos?",
    "type": "single",
    "options": [
      { "id": "q130_o1", "text": "Controles de acceso físico.", "isCorrect": false },
      { "id": "q130_o2", "text": "Controles de ciberseguridad.", "isCorrect": true },
      { "id": "q130_o3", "text": "Controles en la nube.", "isCorrect": false },
      { "id": "q130_o4", "text": "Controles de seguridad física.", "isCorrect": false }
    ],
    "hint": "Medidas de protección digital.",
    "explanation": "Los controles de ciberseguridad son medidas tecnológicas aplicadas para proteger la integridad, confidencialidad y disponibilidad de la información digital."
  },
  {
    "id": "q131",
    "questionText": "¿Qué tipo de errores deben evitarse en los registros de error de una API?",
    "type": "single",
    "options": [
      { "id": "q131_o1", "text": "Mostrar información detallada sobre el servidor y la base de datos.", "isCorrect": true },
      { "id": "q131_o2", "text": "Mensajes de error genéricos.", "isCorrect": false },
      { "id": "q131_o3", "text": "Registrando solo información de tráfico.", "isCorrect": false },
      { "id": "q131_o4", "text": "No registrar errores.", "isCorrect": false }
    ],
    "hint": "Evitar el Information Disclosure.",
    "explanation": "Exponer detalles técnicos del stack tecnológico en los errores ayuda a los atacantes a planificar ataques dirigidos; se deben usar siempre mensajes genéricos para el cliente."
  },
  {
    "id": "q132",
    "questionText": "¿Qué tipo de interfaz en sistemas de IA permite gestionar consentimiento y eliminación de datos?",
    "type": "single",
    "options": [
      { "id": "q132_o1", "text": "Revisión de seguridad", "isCorrect": false },
      { "id": "q132_o2", "text": "Analizar uso de datos", "isCorrect": false },
      { "id": "q132_o3", "text": "Reportar vulnerabilidades", "isCorrect": false },
      { "id": "q132_o4", "text": "Interfaz para solicitudes de eliminación de datos", "isCorrect": true }
    ],
    "hint": "Cumplimiento de privacidad.",
    "explanation": "Estas interfaces son cruciales para garantizar los derechos de los usuarios sobre sus datos, como el derecho al olvido y la gestión del consentimiento informado."
  },
  {
    "id": "q133",
    "questionText": "¿Qué tipo de malware recopila información sensible del usuario, como números de tarjetas de crédito?",
    "type": "single",
    "options": [
      { "id": "q133_o1", "text": "Inyección SQL.", "isCorrect": false },
      { "id": "q133_o2", "text": "Ransomware.", "isCorrect": false },
      { "id": "q133_o3", "text": "Troyano.", "isCorrect": false },
      { "id": "q133_o4", "text": "Spyware.", "isCorrect": true }
    ],
    "hint": "Software de espionaje.",
    "explanation": "El spyware está diseñado para operar de forma oculta y recolectar datos personales, financieros o de navegación sin el consentimiento del usuario."
  },
  {
    "id": "q134",
    "questionText": "¿Qué tipo de prueba permite detectar vulnerabilidades y problemas de licencias en bibliotecas de terceros?",
    "type": "single",
    "options": [
      { "id": "q134_o1", "text": "Pruebas de aceptación del usuario", "isCorrect": false },
      { "id": "q134_o2", "text": "DAST", "isCorrect": false },
      { "id": "q134_o3", "text": "SAST", "isCorrect": false },
      { "id": "q134_o4", "text": "Software Composition Analysis (SCA)", "isCorrect": true }
    ],
    "hint": "Análisis de dependencias externas.",
    "explanation": "SCA es la práctica específica para identificar componentes de código abierto con vulnerabilidades conocidas o licencias incompatibles."
  },
  {
    "id": "q135",
    "questionText": "¿Qué tipo de prueba se enfoca en validar el comportamiento del sistema ante las acciones que realiza un atacante?",
    "type": "single",
    "options": [
      { "id": "q135_o1", "text": "Pruebas de penetración.", "isCorrect": true },
      { "id": "q135_o2", "text": "Pruebas de rendimiento.", "isCorrect": false },
      { "id": "q135_o3", "text": "Pruebas de seguridad.", "isCorrect": false },
      { "id": "q135_o4", "text": "Pruebas de regresión.", "isCorrect": false }
    ],
    "hint": "Simulación de ataque real.",
    "explanation": "Las pruebas de penetración o pentesting simulan ataques reales para identificar brechas de seguridad que podrían ser explotadas por atacantes."
  },
  {
    "id": "q136",
    "questionText": "¿Qué tipo de vulnerabilidad permite que un atacante pueda acceder, modificar o eliminar valores de propiedad de los objetos en una API?",
    "type": "single",
    "options": [
      { "id": "q136_o1", "text": "Gestión inadecuada del inventario.", "isCorrect": false },
      { "id": "q136_o2", "text": "Configuración incorrecta de seguridad.", "isCorrect": false },
      { "id": "q136_o3", "text": "Consumo de recursos sin restricciones.", "isCorrect": false },
      { "id": "q136_o4", "text": "Autorización de nivel de propiedad de objeto roto (BOPLA).", "isCorrect": true }
    ],
    "hint": "Manipulación de campos en objetos JSON/XML.",
    "explanation": "Esta vulnerabilidad ocurre cuando la API no valida si el usuario tiene permiso para alterar campos específicos (como el rol o estado) dentro de un objeto."
  },
  {
    "id": "q137",
    "questionText": "¿Qué vulnerabilidad permite al atacante acceder a objetos de datos de otros usuarios sin permiso?",
    "type": "single",
    "options": [
      { "id": "q137_o1", "text": "Validación de entrada insuficiente", "isCorrect": false },
      { "id": "q137_o2", "text": "Falsificación de solicitudes del lado del servidor", "isCorrect": false },
      { "id": "q137_o3", "text": "Gestión inadecuada del inventario", "isCorrect": false },
      { "id": "q137_o4", "text": "Autorización de nivel de objeto roto (BOLA).", "isCorrect": true }
    ],
    "hint": "Acceso mediante IDs de otros usuarios.",
    "explanation": "BOLA ocurre cuando un usuario puede acceder a recursos ajenos simplemente cambiando el ID del objeto en la URL o cuerpo de la petición."
  },
  {
    "id": "q138",
    "questionText": "¿Qué vulnerabilidad puede permitir a un atacante robar información de otros usuarios en una página web inyectando scripts?",
    "type": "single",
    "options": [
      { "id": "q138_o1", "text": "Escaneo de contenido.", "isCorrect": false },
      { "id": "q138_o2", "text": "Validación débil de contraseñas.", "isCorrect": false },
      { "id": "q138_o3", "text": "Fuzzing dinámico.", "isCorrect": false },
      { "id": "q138_o4", "text": "Cross-Site Scripting (XSS).", "isCorrect": true }
    ],
    "hint": "Ejecución de scripts en el cliente.",
    "explanation": "XSS permite inyectar scripts maliciosos en el navegador de terceros para robar cookies de sesión o capturar credenciales."
  },
  {
    "id": "q139",
    "questionText": "¿Realizar inventario de versiones y análisis estático es suficiente para prevenir una falsificación de solicitudes (SSRF)?",
    "type": "single",
    "options": [
      { "id": "q139_o1", "text": "Falso", "isCorrect": true },
      { "id": "q139_o2", "text": "Verdadero", "isCorrect": false }
    ],
    "hint": "Protección contra SSRF.",
    "explanation": "El SSRF requiere validación dinámica de URLs y control de tráfico de salida; el análisis estático es insuficiente para prevenirlo por sí solo."
  },
  {
    "id": "q140",
    "questionText": "¿Qué vulnerabilidad se produce cuando las API obtienen recursos de URLs proporcionadas por el usuario sin validar autoridad?",
    "type": "single",
    "options": [
      { "id": "q140_o1", "text": "Configuración incorrecta de seguridad", "isCorrect": false },
      { "id": "q140_o2", "text": "Falsificación de solicitud del lado del servidor (SSRF).", "isCorrect": true },
      { "id": "q140_o3", "text": "Gestión inadecuada de secretos", "isCorrect": false },
      { "id": "q140_o4", "text": "Autorización de nivel de función rota", "isCorrect": false }
    ],
    "hint": "Ataques de petición interna.",
    "explanation": "SSRF permite a un atacante obligar al servidor a realizar peticiones HTTP hacia servicios internos o externos que normalmente están protegidos."
  },
  {
    "id": "q141",
    "questionText": "¿Qué vulnerabilidad se produce por documentar y administrar incorrectamente las API internas y de terceros?",
    "type": "single",
    "options": [
      { "id": "q141_o1", "text": "Gestión inadecuada del inventario.", "isCorrect": true },
      { "id": "q141_o2", "text": "Autorización de nivel de función rota.", "isCorrect": false },
      { "id": "q141_o3", "text": "Autorización de nivel de propiedad de objeto roto.", "isCorrect": false },
      { "id": "q141_o4", "text": "Configuración incorrecta de seguridad.", "isCorrect": false }
    ],
    "hint": "Control de activos de software.",
    "explanation": "Tener APIs 'olvidadas' o sin documentar aumenta la superficie de ataque al dejar versiones vulnerables activas sin supervisión."
  },
  {
    "id": "q142",
    "questionText": "¿Qué categoría describe problemas como parches no aplicados, exposición de logs de depuración o servicios innecesarios habilitados?",
    "type": "single",
    "options": [
      { "id": "q142_o1", "text": "Autorización de nivel de propiedad de objeto roto.", "isCorrect": false },
      { "id": "q142_o2", "text": "Gestión inadecuada del inventario.", "isCorrect": false },
      { "id": "q142_o3", "text": "Autorización de nivel de función rota.", "isCorrect": false },
      { "id": "q142_o4", "text": "Configuración incorrecta de seguridad.", "isCorrect": true }
    ],
    "hint": "Security Misconfiguration.",
    "explanation": "La configuración incorrecta de seguridad ocurre cuando no se siguen las mejores prácticas de endurecimiento (hardening) del sistema."
  },
  {
    "id": "q143",
    "questionText": "¿Qué proceso consiste en un análisis manual exhaustivo realizado por un individuo distinto al desarrollador para detectar errores y vulnerabilidades?",
    "type": "single",
    "options": [
      { "id": "q143_o1", "text": "Pruebas de rendimiento", "isCorrect": false },
      { "id": "q143_o2", "text": "Pruebas de regresión", "isCorrect": false },
      { "id": "q143_o3", "text": "Revisión de código (Code Review).", "isCorrect": true },
      { "id": "q143_o4", "text": "Fuzzing", "isCorrect": false }
    ],
    "hint": "Inspección humana del código.",
    "explanation": "La revisión de código por pares es una de las prácticas más efectivas para encontrar fallos lógicos y de seguridad antes de que el código llegue a producción."
  },
{
    "id": "q144",
    "questionText": "¿Según OWASP, cómo afecta la transparencia en IA la confianza de los usuarios?",
    "type": "single",
    "options": [
      { "id": "q144_o1", "text": "Reduce el sesgo.", "isCorrect": false },
      { "id": "q144_o2", "text": "Disminuye la cantidad de datos recolectados.", "isCorrect": false },
      { "id": "q144_o3", "text": "Permite mantener el almacenamiento seguro.", "isCorrect": false },
      { "id": "q144_o4", "text": "Aumenta la confianza en la seguridad del sistema.", "isCorrect": true }
    ],
    "hint": "Principio de gobernanza responsable.",
    "explanation": "La transparencia permite que el sistema sea auditable y que los usuarios comprendan cómo se toman las decisiones, lo que fomenta la confianza tanto ética como técnica."
  },
  {
    "id": "q145",
    "questionText": "¿Según OWASP, cómo se puede minimizar el sesgo en los modelos de IA?",
    "type": "single",
    "options": [
      { "id": "q145_o1", "text": "Implementando un dashboard de supervisión.", "isCorrect": false },
      { "id": "q145_o2", "text": "Utilizando conjuntos de datos diversos.", "isCorrect": true },
      { "id": "q145_o3", "text": "Entrenando con datos limitados.", "isCorrect": false },
      { "id": "q145_o4", "text": "Aplicando pruebas adversariales.", "isCorrect": false }
    ],
    "hint": "Representatividad de la población.",
    "explanation": "El sesgo se minimiza utilizando conjuntos de datos balanceados y representativos, evitando que el modelo aprenda patrones discriminatorios basados en datos incompletos."
  },
  {
    "id": "q146",
    "questionText": "Si no se gestionan adecuadamente los accesos, un cliente de la API podría acceder a recursos ajenos. ¿Qué principio de seguridad se ve afectado primordialmente?",
    "type": "single",
    "options": [
      { "id": "q146_o1", "text": "Confidencialidad", "isCorrect": true },
      { "id": "q146_o2", "text": "Logging", "isCorrect": false },
      { "id": "q146_o3", "text": "Autenticación", "isCorrect": false },
      { "id": "q146_o4", "text": "Disponibilidad", "isCorrect": false }
    ],
    "hint": "Acceso no autorizado a información.",
    "explanation": "La confidencialidad se pierde cuando datos sensibles son expuestos a usuarios que no tienen permiso para verlos, aumentando el riesgo de fuga de información."
  },
  {
    "id": "q147",
    "questionText": "¿Qué técnica se utiliza para evitar la ingeniería inversa, haciendo que el código fuente sea ilegible para los humanos pero funcional para la máquina?",
    "type": "single",
    "options": [
      { "id": "q147_o1", "text": "Copia de seguridad", "isCorrect": false },
      { "id": "q147_o2", "text": "Ofuscación", "isCorrect": true },
      { "id": "q147_o3", "text": "Código genérico", "isCorrect": false },
      { "id": "q147_o4", "text": "Hashes", "isCorrect": false }
    ],
    "hint": "Protección contra piratería.",
    "explanation": "La ofuscación transforma el código original en uno difícil de entender para los humanos, dificultando que un atacante descubra la lógica interna o secretos del software."
  },
  {
    "id": "q148",
    "questionText": "Tras un evento que detuvo el sistema, ¿qué métrica contractual incumplida puede implicar una sanción económica para el proveedor?",
    "type": "single",
    "options": [
      { "id": "q148_o1", "text": "SLA (Service Level Agreement).", "isCorrect": true },
      { "id": "q148_o2", "text": "KPI", "isCorrect": false },
      { "id": "q148_o3", "text": "MTBF", "isCorrect": false },
      { "id": "q148_o4", "text": "RTO", "isCorrect": false }
    ],
    "hint": "Acuerdo de nivel de servicio.",
    "explanation": "El SLA define el nivel de disponibilidad comprometido; si el sistema cae por debajo de este umbral, se activan penalizaciones contractuales."
  },
  {
    "id": "q149",
    "questionText": "Un administrador utiliza logs para rastrear acciones. Si un individuo intenta negar que realizó una acción, ¿qué requerimiento de seguridad lo impide?",
    "type": "single",
    "options": [
      { "id": "q149_o1", "text": "Autentificación.", "isCorrect": false },
      { "id": "q149_o2", "text": "Disponibilidad.", "isCorrect": false },
      { "id": "q149_o3", "text": "Confidencialidad.", "isCorrect": false },
      { "id": "q149_o4", "text": "No repudio.", "isCorrect": true }
    ],
    "hint": "Incapacidad de negar una autoría.",
    "explanation": "El no repudio asegura que una parte no pueda negar la autoría o participación en una transacción o acción registrada por el sistema."
  },
  {
    "id": "q150",
    "questionText": "Un atacante inyecta malware en una app durante el desarrollo y la firma con un certificado válido para engañar a la tienda oficial. ¿Qué amenaza es?",
    "type": "single",
    "options": [
      { "id": "q150_o1", "text": "Protecciones binarias insuficientes.", "isCorrect": false },
      { "id": "q150_o2", "text": "Comunicación insegura.", "isCorrect": false },
      { "id": "q150_o3", "text": "Seguridad inadecuada de la cadena de suministro.", "isCorrect": true },
      { "id": "q150_o4", "text": "Controles de privacidad inadecuados.", "isCorrect": false }
    ],
    "hint": "Compromiso del pipeline de distribución.",
    "explanation": "Esta amenaza ocurre cuando el atacante compromete el proceso de creación o firma del software antes de que llegue al usuario final, usando canales legítimos para distribuir malware."
  },
  {
    "id": "q151",
    "questionText": "Un atacante extrae físicamente credenciales guardadas en texto plano de un dispositivo móvil. ¿A qué categoría pertenece esta amenaza?",
    "type": "single",
    "options": [
      { "id": "q151_o1", "text": "Protecciones binarias insuficientes.", "isCorrect": false },
      { "id": "q151_o2", "text": "Uso inadecuado de credenciales.", "isCorrect": true },
      { "id": "q151_o3", "text": "Comunicación insegura.", "isCorrect": false },
      { "id": "q151_o4", "text": "Controles de privacidad inadecuados.", "isCorrect": false }
    ],
    "hint": "Almacenamiento local inseguro.",
    "explanation": "El uso inadecuado de credenciales incluye guardarlas sin cifrar en el dispositivo, permitiendo que un acceso físico o malware local las extraiga fácilmente."
  },
  {
    "id": "q152",
    "questionText": "¿Qué vulnerabilidad aprovecha un atacante que realiza múltiples intentos de acceso a una API usando contraseñas comunes (diccionario)?",
    "type": "single",
    "options": [
      { "id": "q152_o1", "text": "Acceso no autorizado a flujos sensibles.", "isCorrect": false },
      { "id": "q152_o2", "text": "Consumo de recursos sin restricción.", "isCorrect": false },
      { "id": "q152_o3", "text": "Autenticación rota.", "isCorrect": true },
      { "id": "q152_o4", "text": "Autorización de objeto rota.", "isCorrect": false }
    ],
    "hint": "Falla en el login o manejo de sesiones.",
    "explanation": "La autenticación rota permite ataques de fuerza bruta o de relleno de credenciales debido a la falta de bloqueos, MFA o políticas de contraseñas robustas."
  },
  {
    "id": "q153",
    "questionText": "Si una aplicación utiliza un cifrado débil (como MD5 o SHA1) para proteger datos sensibles, ¿qué vulnerabilidad presenta?",
    "type": "single",
    "options": [
      { "id": "q153_o1", "text": "Autenticación insegura.", "isCorrect": false },
      { "id": "q153_o2", "text": "Configuración incorrecta de seguridad.", "isCorrect": false },
      { "id": "q153_o3", "text": "Criptografía insuficiente.", "isCorrect": true },
      { "id": "q153_o4", "text": "Validación insuficiente.", "isCorrect": false }
    ],
    "hint": "Uso de algoritmos obsoletos.",
    "explanation": "La criptografía insuficiente ocurre cuando se usan algoritmos vulnerables, claves cortas o implementaciones caseras que facilitan el descifrado de la información."
  },
  {
    "id": "q154",
    "questionText": "Un atacante intercepta y manipula el tráfico entre la app y el servidor mediante un proxy. ¿Qué vulnerabilidad está explotando?",
    "type": "single",
    "options": [
      { "id": "q154_o1", "text": "Configuración incorrecta de seguridad", "isCorrect": false },
      { "id": "q154_o2", "text": "Comunicación insegura", "isCorrect": true },
      { "id": "q154_o3", "text": "Criptografía insuficiente", "isCorrect": false },
      { "id": "q154_o4", "text": "Almacenamiento inseguro de datos", "isCorrect": false }
    ],
    "hint": "Falta de TLS/SSL robusto.",
    "explanation": "La comunicación insegura se produce cuando no se cifra el canal de transmisión o no se valida correctamente el certificado del servidor (falta de SSL Pinning)."
  },
  {
    "id": "q155",
    "questionText": "Un atacante descubre una clave API 'hardcodeada' analizando el ejecutable de la app móvil. ¿Qué vulnerabilidad es?",
    "type": "single",
    "options": [
      { "id": "q155_o1", "text": "Autenticación insegura.", "isCorrect": false },
      { "id": "q155_o2", "text": "Protección binaria insuficiente.", "isCorrect": true },
      { "id": "q155_o3", "text": "Almacenamiento inseguro de datos.", "isCorrect": false },
      { "id": "q155_o4", "text": "Validación insuficiente.", "isCorrect": false }
    ],
    "hint": "Exposición de secretos en el binario.",
    "explanation": "La protección binaria insuficiente facilita la ingeniería inversa, permitiendo a los atacantes leer el código fuente y extraer secretos como claves API."
  },
  {
    "id": "q156",
    "questionText": "¿Qué estrategia se recomienda para que una app móvil sea accesible en teléfonos, tabletas y smartwatches con una sola base de código?",
    "type": "single",
    "options": [
      { "id": "q156_o1", "text": "Solo para teléfonos móviles.", "isCorrect": false },
      { "id": "q156_o2", "text": "Desarrollo web responsivo.", "isCorrect": false },
      { "id": "q156_o3", "text": "Desarrollo híbrido.", "isCorrect": true },
      { "id": "q156_o4", "text": "Desarrollo de apps específicas para cada dispositivo.", "isCorrect": false }
    ],
    "hint": "Multiplataforma eficiente.",
    "explanation": "El desarrollo híbrido utiliza tecnologías web empaquetadas en contenedores nativos, permitiendo ejecutar la misma lógica en múltiples factores de forma y plataformas."
  },
  {
    "id": "q157",
    "questionText": "¿Qué solución es más adecuada para una app que maneja grandes volúmenes de datos pero tiene prohibido guardarlos físicamente en el móvil?",
    "type": "single",
    "options": [
      { "id": "q157_o1", "text": "Solo almacenar datos temporales.", "isCorrect": false },
      { "id": "q157_o2", "text": "No almacenar datos.", "isCorrect": false },
      { "id": "q157_o3", "text": "Usar almacenamiento en la nube.", "isCorrect": true },
      { "id": "q157_o4", "text": "Guardar los datos en el dispositivo.", "isCorrect": false }
    ],
    "hint": "Externalización de persistencia.",
    "explanation": "El almacenamiento en la nube permite procesar y persistir datos sin ocupar espacio local, reduciendo el riesgo en caso de robo o pérdida del dispositivo."
  },
  {
    "id": "q158",
    "questionText": "Si un contenedor corre como 'root', ¿qué medida de endurecimiento (hardening) es fundamental aplicar?",
    "type": "single",
    "options": [
      { "id": "q158_o1", "text": "Deshabilitar el acceso de red.", "isCorrect": false },
      { "id": "q158_o2", "text": "Ejecutar el contenedor con privilegios mínimos (non-root).", "isCorrect": true },
      { "id": "q158_o3", "text": "Mantener privilegios elevados para soporte.", "isCorrect": false },
      { "id": "q158_o4", "text": "Permitir acceso a todas las APIs del host.", "isCorrect": false }
    ],
    "hint": "Principio de menor privilegio.",
    "explanation": "Ejecutar contenedores con usuarios no privilegiados limita el impacto de un posible escape del contenedor, protegiendo el sistema host subyacente."
  },
{
    "id": "q159",
    "questionText": "Un contenedor tiene un puerto expuesto innecesariamente. ¿Qué medida de seguridad es la más adecuada?",
    "type": "single",
    "options": [
      { "id": "q159_o1", "text": "No cambiar nada si no afecta al rendimiento.", "isCorrect": false },
      { "id": "q159_o2", "text": "Cerrar o restringir el acceso al puerto.", "isCorrect": true },
      { "id": "q159_o3", "text": "Dejar el puerto abierto por conveniencia.", "isCorrect": false },
      { "id": "q159_o4", "text": "Solo restringir el puerto para el contenedor afectado.", "isCorrect": false }
    ],
    "hint": "Reducción de la superficie de ataque.",
    "explanation": "Cerrar puertos innecesarios reduce los puntos de entrada para posibles exploits y limita la visibilidad del sistema ante escaneos de red externos."
  },
  {
    "id": "q160",
    "questionText": "Si un desarrollador configura incorrectamente los permisos de una aplicación, permitiendo accesos no autorizados, ¿qué vulnerabilidad se explota?",
    "type": "single",
    "options": [
      { "id": "q160_o1", "text": "Configuración incorrecta de seguridad (Security Misconfiguration).", "isCorrect": true },
      { "id": "q160_o2", "text": "Criptografía insuficiente.", "isCorrect": false },
      { "id": "q160_o3", "text": "Autenticación insegura.", "isCorrect": false },
      { "id": "q160_o4", "text": "Almacenamiento inseguro de datos.", "isCorrect": false }
    ],
    "hint": "Errores en parámetros o permisos.",
    "explanation": "La configuración incorrecta de seguridad ocurre cuando los ajustes predeterminados son inseguros o cuando se aplican permisos mal definidos en la aplicación o infraestructura."
  },
  {
    "id": "q161",
    "questionText": "Una API permite que cualquier usuario acceda a objetos de datos ajenos sin autorización. ¿Cómo se denomina esta vulnerabilidad?",
    "type": "single",
    "options": [
      { "id": "q161_o1", "text": "Consumo de recursos sin restricción.", "isCorrect": false },
      { "id": "q161_o2", "text": "Autorización de objeto rota (BOLA).", "isCorrect": true },
      { "id": "q161_o3", "text": "Autenticación rota.", "isCorrect": false },
      { "id": "q161_o4", "text": "Acceso no autorizado a flujos sensibles.", "isCorrect": false }
    ],
    "hint": "Falla en el control de acceso a nivel de ID.",
    "explanation": "BOLA (Broken Object Level Authorization) ocurre cuando la API no verifica si el usuario autenticado tiene derecho real a manipular el ID del objeto solicitado."
  },
  {
    "id": "q162",
    "questionText": "Si un desarrollador no está seguro de si su código tiene fallos de seguridad, ¿qué herramienta automatizada es la más recomendada para una revisión temprana?",
    "type": "single",
    "options": [
      { "id": "q162_o1", "text": "Revisar el código manualmente sin herramientas.", "isCorrect": false },
      { "id": "q162_o2", "text": "Herramientas de pruebas estáticas de seguridad (SAST).", "isCorrect": true },
      { "id": "q162_o3", "text": "Desplegar el código sin revisión previa.", "isCorrect": false },
      { "id": "q162_o4", "text": "Hacer pruebas solo después del lanzamiento.", "isCorrect": false }
    ],
    "hint": "Análisis del código fuente sin ejecución.",
    "explanation": "Las herramientas SAST permiten detectar vulnerabilidades comunes de forma automatizada durante el desarrollo, facilitando el enfoque 'Shift Left' (seguridad desde el inicio)."
  },
  {
    "id": "q163",
    "questionText": "La falta de validación en las entradas de usuario que permite ataques de Inyección SQL es una vulnerabilidad de:",
    "type": "single",
    "options": [
      { "id": "q163_o1", "text": "Protección binaria insuficiente.", "isCorrect": false },
      { "id": "q163_o2", "text": "Comunicación insegura.", "isCorrect": false },
      { "id": "q163_o3", "text": "Validación insuficiente.", "isCorrect": true },
      { "id": "q163_o4", "text": "Autenticación insegura.", "isCorrect": false }
    ],
    "hint": "Confiar ciegamente en el input del usuario.",
    "explanation": "No sanear o parametrizar las entradas del usuario permite que comandos maliciosos sean procesados por el backend, comprometiendo la base de datos."
  },
  {
    "id": "q164",
    "questionText": "¿Cuál es la solución más eficiente para una app móvil que carga imágenes lentas debido a su alta calidad?",
    "type": "single",
    "options": [
      { "id": "q164_o1", "text": "Usar almacenamiento en caché basado en la nube (CDN).", "isCorrect": true },
      { "id": "q164_o2", "text": "Limitar el uso de la aplicación.", "isCorrect": false },
      { "id": "q164_o3", "text": "Eliminar imágenes de la app.", "isCorrect": false },
      { "id": "q164_o4", "text": "Reducir la calidad de las imágenes.", "isCorrect": false }
    ],
    "hint": "Optimización de la entrega de contenido.",
    "explanation": "El uso de caché y CDNs reduce la latencia y el consumo de ancho de banda, permitiendo servir contenido pesado de forma rápida y escalable."
  },
  {
    "id": "q165",
    "questionText": "¿Qué estrategia permite que una app maneje muchos usuarios sin sobrecargar el hardware del dispositivo del usuario?",
    "type": "single",
    "options": [
      { "id": "q165_o1", "text": "Limitar las funcionalidades de la app.", "isCorrect": false },
      { "id": "q165_o2", "text": "Usar procesamiento en la nube.", "isCorrect": true },
      { "id": "q165_o3", "text": "Aumentar la capacidad del dispositivo.", "isCorrect": false },
      { "id": "q165_o4", "text": "Optimizar el código en el dispositivo.", "isCorrect": false }
    ],
    "hint": "Delegación de carga computacional.",
    "explanation": "El procesamiento en la nube (cloud offloading) desplaza las tareas pesadas al servidor, manteniendo la app ligera y fluida en cualquier dispositivo móvil."
  },
  {
    "id": "q166",
    "questionText": "Un director recibe un correo falso que parece ser de su secretaria pidiendo accesos. ¿Cómo se clasifica este ataque?",
    "type": "single",
    "options": [
      { "id": "q166_o1", "text": "Phishing", "isCorrect": true },
      { "id": "q166_o2", "text": "Man in the Middle", "isCorrect": false },
      { "id": "q166_o3", "text": "Whaling", "isCorrect": false },
      { "id": "q166_o4", "text": "Keylogger", "isCorrect": false }
    ],
    "hint": "Engaño mediante suplantación de identidad.",
    "explanation": "El phishing utiliza ingeniería social para engañar a personas clave. (Nota: Aunque el ataque a directivos se llama 'Whaling', el Phishing es la categoría genérica correcta)."
  },
  {
    "id": "q167",
    "questionText": "¿Qué ocurre si un modelo de IA se entrena con datos incompletos o con errores?",
    "type": "single",
    "options": [
      { "id": "q167_o1", "text": "El modelo no tendrá ningún problema.", "isCorrect": false },
      { "id": "q167_o2", "text": "El modelo podría tomar decisiones incorrectas y poco confiables.", "isCorrect": true },
      { "id": "q167_o3", "text": "El modelo mejorará al aprender de los errores.", "isCorrect": false },
      { "id": "q167_o4", "text": "El modelo se volverá más preciso con el tiempo.", "isCorrect": false }
    ],
    "hint": "Garbage in, garbage out.",
    "explanation": "La calidad de las predicciones de una IA depende directamente de la calidad de sus datos; datos erróneos producen resultados poco confiables."
  },
  {
    "id": "q168",
    "questionText": "¿Cuál es el beneficio principal de la Infraestructura como Código (IaC) para evitar inconsistencias en el despliegue?",
    "type": "single",
    "options": [
      { "id": "q168_o1", "text": "Eliminar scripts automatizados.", "isCorrect": false },
      { "id": "q168_o2", "text": "Crear configuraciones auditables y controladas por versiones.", "isCorrect": true },
      { "id": "q168_o3", "text": "Implementar herramientas de análisis dinámico.", "isCorrect": false },
      { "id": "q168_o4", "text": "Desplegar sin control de acceso.", "isCorrect": false }
    ],
    "hint": "Trazabilidad y repetibilidad.",
    "explanation": "IaC permite versionar la infraestructura como si fuera software, garantizando que los entornos sean idénticos, auditables y fáciles de revertir si hay fallos."
  },
  {
    "id": "q169",
    "questionText": "Para asegurar que las políticas de seguridad estén actualizadas antes de lanzar una aplicación, el equipo debe:",
    "type": "single",
    "options": [
      { "id": "q169_o1", "text": "Solo hacer pruebas a posteriori.", "isCorrect": false },
      { "id": "q169_o2", "text": "Implementar sin revisiones previas.", "isCorrect": false },
      { "id": "q169_o3", "text": "Ignorar las políticas hasta después del despliegue.", "isCorrect": false },
      { "id": "q169_o4", "text": "Revisar todas las políticas de seguridad antes del despliegue.", "isCorrect": true }
    ],
    "hint": "Validación preventiva.",
    "explanation": "Revisar las políticas antes de producción asegura que la configuración cumpla con los estándares de seguridad y previene vulnerabilidades evitables."
  },
  {
    "id": "q170",
    "questionText": "Normalizar datos y eliminar valores atípicos antes de entrenar un modelo de IA se conoce como:",
    "type": "single",
    "options": [
      { "id": "q170_o1", "text": "Limpieza de datos (Data Cleaning).", "isCorrect": true },
      { "id": "q170_o2", "text": "Uso de datos sintéticos.", "isCorrect": false },
      { "id": "q170_o3", "text": "Consentimiento explícito.", "isCorrect": false },
      { "id": "q170_o4", "text": "Auditorías periódicas.", "isCorrect": false }
    ],
    "hint": "Preparación técnica del dataset.",
    "explanation": "La limpieza de datos garantiza la integridad y precisión del conjunto de entrenamiento, reduciendo ruidos y sesgos en el modelo final."
  },
  {
    "id": "q171",
    "questionText": "¿Qué control de acceso es esencial para gestionar la seguridad operativa en un clúster de Kubernetes?",
    "type": "single",
    "options": [
      { "id": "q171_o1", "text": "Acceso sin restricciones.", "isCorrect": false },
      { "id": "q171_o2", "text": "No usar políticas de seguridad.", "isCorrect": false },
      { "id": "q171_o3", "text": "Usar una única cuenta para todo.", "isCorrect": false },
      { "id": "q171_o4", "text": "Aplicar control de acceso basado en roles (RBAC).", "isCorrect": true }
    ],
    "hint": "Privilegios granulares.",
    "explanation": "RBAC es fundamental en Kubernetes para limitar qué usuarios o servicios pueden realizar acciones específicas, aplicando el principio de menor privilegio."
  },
{
    "id": "q172",
    "questionText": "Un equipo de DevOps implementa contenedores sin realizar auditorías de seguridad regulares. ¿Qué problema puede surgir a largo plazo?",
    "type": "single",
    "options": [
      { "id": "q172_o1", "text": "Introducción de vulnerabilidades no detectadas y mayor riesgo de ataques.", "isCorrect": true },
      { "id": "q172_o2", "text": "El equipo ahorrará tiempo y recursos significativamente.", "isCorrect": false },
      { "id": "q172_o3", "text": "Los contenedores funcionarán más rápido sin auditorías.", "isCorrect": false },
      { "id": "q172_o4", "text": "Las vulnerabilidades no afectarán el rendimiento de los contenedores.", "isCorrect": false }
    ],
    "hint": "Deuda técnica de seguridad.",
    "explanation": "La falta de auditorías permite que vulnerabilidades en imágenes base o dependencias persistan, aumentando la superficie de ataque y el riesgo de compromiso del sistema."
  },
  {
    "id": "q173",
    "questionText": "¿Qué herramienta debería usarse en un pipeline para identificar vulnerabilidades dinámicas como inyección SQL en tiempo de ejecución?",
    "type": "single",
    "options": [
      { "id": "q173_o1", "text": "Plataformas de administración de artefactos.", "isCorrect": false },
      { "id": "q173_o2", "text": "Herramientas de prueba estática (SAST).", "isCorrect": false },
      { "id": "q173_o3", "text": "Herramientas de prueba dinámica (DAST).", "isCorrect": true },
      { "id": "q173_o4", "text": "Consolas de gestión de la nube.", "isCorrect": false }
    ],
    "hint": "Pruebas de 'caja negra' en ejecución.",
    "explanation": "Las herramientas DAST interactúan con la aplicación en funcionamiento para identificar fallos que solo son visibles durante la ejecución, como problemas de sesión o inyecciones."
  },
  {
    "id": "q174",
    "questionText": "¿Qué proceso permite detectar errores más temprano en el ciclo de desarrollo (Shift Left)?",
    "type": "single",
    "options": [
      { "id": "q174_o1", "text": "Realizar solo pruebas de integración.", "isCorrect": false },
      { "id": "q174_o2", "text": "Esperar hasta el final del ciclo para realizar pruebas.", "isCorrect": false },
      { "id": "q174_o3", "text": "Hacer pruebas solo en el entorno de producción.", "isCorrect": false },
      { "id": "q174_o4", "text": "Implementar pruebas automáticas durante el desarrollo (Continuous Testing).", "isCorrect": true }
    ],
    "hint": "Automatización constante.",
    "explanation": "El Continuous Testing integra pruebas automatizadas en cada etapa del desarrollo, permitiendo identificar y corregir errores antes de que avancen a fases costosas."
  },
  {
    "id": "q175",
    "questionText": "Si un equipo decide utilizar contenedores sin aplicar cifrado en los datos sensibles almacenados, ¿cuál es el riesgo principal?",
    "type": "single",
    "options": [
      { "id": "q175_o1", "text": "Exposición de datos confidenciales y acceso no autorizado.", "isCorrect": true },
      { "id": "q175_o2", "text": "Los contenedores serán más fáciles de manejar.", "isCorrect": false },
      { "id": "q175_o3", "text": "No habrá vulnerabilidades técnicas.", "isCorrect": false },
      { "id": "q175_o4", "text": "El contenedor será significativamente más rápido.", "isCorrect": false }
    ],
    "hint": "Pérdida de confidencialidad.",
    "explanation": "Sin cifrado, cualquier atacante que logre acceder al almacenamiento del contenedor o interceptar el volumen podrá leer los datos confidenciales directamente."
  },
  {
    "id": "q176",
    "questionText": "¿Qué acción es primordial para abordar de forma segura una vulnerabilidad detectada en un contenedor?",
    "type": "single",
    "options": [
      { "id": "q176_o1", "text": "Cambiar las configuraciones sin verificar la imagen.", "isCorrect": false },
      { "id": "q176_o2", "text": "Asegurar que la imagen base provenga de una fuente confiable.", "isCorrect": true },
      { "id": "q176_o3", "text": "Ignorar la vulnerabilidad hasta que afecte a producción.", "isCorrect": false },
      { "id": "q176_o4", "text": "Reemplazar el contenedor sin investigar el origen.", "isCorrect": false }
    ],
    "hint": "Cadena de suministro de imágenes.",
    "explanation": "Utilizar imágenes base de fuentes oficiales o confiables es el primer paso para mitigar vulnerabilidades heredadas y asegurar la integridad del software."
  },
  {
    "id": "q177",
    "questionText": "Ante la lentitud en la provisión de infraestructura por intervención manual, ¿qué solución automatizada se recomienda?",
    "type": "single",
    "options": [
      { "id": "q177_o1", "text": "Reemplazar sistemas automáticos por procesos manuales.", "isCorrect": false },
      { "id": "q177_o2", "text": "Evitar realizar pruebas en la infraestructura.", "isCorrect": false },
      { "id": "q177_o3", "text": "Continuar con provisión manual con más personal.", "isCorrect": false },
      { "id": "q177_o4", "text": "Implementar Infraestructura como Código (IaC).", "isCorrect": true }
    ],
    "hint": "Infraestructura definida por software.",
    "explanation": "La IaC permite automatizar la creación y gestión de entornos, eliminando cuellos de botella manuales y garantizando la repetibilidad del entorno."
  },
  {
    "id": "q178",
    "type": "single",
    "questionText": "Al utilizar herramientas de automatización en la nube, ¿qué elementos deben protegerse prioritariamente para evitar el acceso no autorizado a la infraestructura?",
    "options": [
      { "id": "q178_o1", "text": "Los contenedores únicamente.", "isCorrect": false },
      { "id": "q178_o2", "text": "Las claves SSH solamente.", "isCorrect": false },
      { "id": "q178_o3", "text": "Los scripts de automatización y las herramientas de aprovisionamiento.", "isCorrect": true },
      { "id": "q178_o4", "text": "Las bases de datos en la nube.", "isCorrect": false }
    ],
    "hint": "Protección de las 'llaves del reino'.",
    "explanation": "Si los scripts o herramientas de IaC están expuestos, un atacante puede manipular toda la infraestructura, crear recursos maliciosos o borrar entornos completos."
  },
  {
    "id": "q179",
    "questionText": "Un modelo de IA predice comportamiento delictivo basándose en perfiles demográficos. Según la Ley Europea de IA, ¿cuál es el problema principal?",
    "type": "single",
    "options": [
      { "id": "q179_o1", "text": "Los datos no están debidamente anonimizados.", "isCorrect": false },
      { "id": "q179_o2", "text": "No se utiliza aprendizaje federado.", "isCorrect": false },
      { "id": "q179_o3", "text": "No se realizó un análisis de rendimiento ético.", "isCorrect": false },
      { "id": "q179_o4", "text": "Involucra un alto riesgo para los derechos humanos y la equidad social.", "isCorrect": true }
    ],
    "hint": "Categorización de IA de alto riesgo/prohibida.",
    "explanation": "Los sistemas de IA que realizan vigilancia o predicciones de comportamiento delictivo basadas en perfiles demográficos se consideran de alto riesgo o incluso prohibidos por amenazar derechos fundamentales."
  },
  {
    "id": "q180",
    "questionText": "Si una IA analiza datos personales sin informar la base legal ni la finalidad del procesamiento a los usuarios, ¿qué se está violando?",
    "type": "single",
    "options": [
      { "id": "q180_o1", "text": "El principio de aprendizaje federado.", "isCorrect": false },
      { "id": "q180_o2", "text": "La anonimización técnica de datos.", "isCorrect": false },
      { "id": "q180_o3", "text": "Las regulaciones sobre especificación de finalidad.", "isCorrect": true },
      { "id": "q180_o4", "text": "La restricción del acceso físico a los datos.", "isCorrect": false }
    ],
    "hint": "Transparencia y propósito de los datos.",
    "explanation": "El principio de especificación de finalidad exige que los datos se recopilen para fines determinados, explícitos y legítimos, informando siempre al titular."
  },
  {
    "id": "q181",
    "questionText": "Un filtro de spam comienza a fallar debido a cambios sutiles en el formato de los correos, mostrando incapacidad para generalizar ante variaciones mínimas. ¿Qué indica esto?",
    "type": "single",
    "options": [
      { "id": "q181_o1", "text": "Exposición a datos adversariales deliberados.", "isCorrect": false },
      { "id": "q181_o2", "text": "Baja robustez del modelo.", "isCorrect": true },
      { "id": "q181_o3", "text": "Envenenamiento de datos de entrenamiento.", "isCorrect": false },
      { "id": "q181_o4", "text": "Necesidad de pruebas de vulnerabilidad de red.", "isCorrect": false }
    ],
    "hint": "Falta de resiliencia ante el ruido.",
    "explanation": "La robustez es la capacidad del modelo para mantener su rendimiento ante perturbaciones o cambios en los datos de entrada; si falla por cambios sutiles, el modelo no es robusto."
  },
  {
    "id": "q182",
    "questionText": "Un usuario encuentra sus archivos con extensiones desconocidas y un mensaje solicitando pago para recuperarlos. ¿Qué malware lo atacó?",
    "type": "single",
    "options": [
      { "id": "q182_o1", "text": "Ransomware.", "isCorrect": true },
      { "id": "q182_o2", "text": "Phishing.", "isCorrect": false },
      { "id": "q182_o3", "text": "PUP (Programa Potencialmente No Deseado).", "isCorrect": false },
      { "id": "q182_o4", "text": "Adware.", "isCorrect": false }
    ],
    "hint": "Cifrado con fines de extorsión.",
    "explanation": "El ransomware secuestra la información mediante cifrado y exige un rescate económico, afectando directamente la disponibilidad de los activos digitales."
  },
  {
    "id": "q183",
    "questionText": "Una API sufre lentitud y sobrecarga debido a que permite un número ilimitado de solicitudes. ¿A qué vulnerabilidad se enfrenta?",
    "type": "single",
    "options": [
      { "id": "q183_o1", "text": "Acceso no autorizado a flujos sensibles.", "isCorrect": false },
      { "id": "q183_o2", "text": "Consumo de recursos sin restricción.", "isCorrect": true },
      { "id": "q183_o3", "text": "Autorización de función rota.", "isCorrect": false },
      { "id": "q183_o4", "text": "Autenticación rota.", "isCorrect": false }
    ],
    "hint": "Falta de Rate Limiting.",
    "explanation": "El consumo de recursos sin restricción permite ataques de denegación de servicio (DoS) al agotar memoria, CPU o ancho de banda por exceso de peticiones."
  },
  {
    "id": "q184",
    "questionText": "Al usar una app de reconocimiento facial para fines distintos al original (como crear perfiles demográficos sin permiso), se ignora el principio de:",
    "type": "single",
    "options": [
      { "id": "q184_o1", "text": "Seguridad en el almacenamiento.", "isCorrect": false },
      { "id": "q184_o2", "text": "Auditoría técnica de datos.", "isCorrect": false },
      { "id": "q184_o3", "text": "Especificación de finalidad y consentimiento informado.", "isCorrect": true },
      { "id": "q184_o4", "text": "Aprendizaje federado.", "isCorrect": false }
    ],
    "hint": "Uso ético y legal de datos biométricos.",
    "explanation": "Cualquier uso de datos personales para un fin distinto al que el usuario autorizó inicialmente viola el principio de consentimiento informado y limitación de finalidad."
  },
{
    "id": "q187",
    "questionText": "Un sistema otorga permisos mínimos por defecto, pero permite elevar privilegios temporalmente para tareas específicas. ¿A qué conceptos hace referencia?",
    "type": "single",
    "options": [
      { "id": "q187_o1", "text": "Integridad y No repudio.", "isCorrect": false },
      { "id": "q187_o2", "text": "JEA (Just Enough Administration) y JIT (Just-In-Time).", "isCorrect": true },
      { "id": "q187_o3", "text": "Atomicidad y Disponibilidad.", "isCorrect": false },
      { "id": "q187_o4", "text": "Fallo seguro y Economía de mecanismos.", "isCorrect": false }
    ],
    "hint": "Privilegios suficientes y en el momento justo.",
    "explanation": "JEA asegura que el usuario tenga solo los permisos necesarios para la tarea, mientras que JIT limita esos permisos al tiempo exacto que dura la actividad, reduciendo la ventana de exposición."
  },
  {
    "id": "q188",
    "questionText": "Una empresa busca reducir la carga de datos en móviles transfiriendo el procesamiento a servidores remotos. ¿Qué tecnología se recomienda?",
    "type": "single",
    "options": [
      { "id": "q188_o1", "text": "Conexión con servicios en la nube.", "isCorrect": true },
      { "id": "q188_o2", "text": "Procesamiento exclusivo en el dispositivo.", "isCorrect": false },
      { "id": "q188_o3", "text": "Uso de gráficos avanzados locales.", "isCorrect": false },
      { "id": "q188_o4", "text": "Desarrollo de apps nativas offline.", "isCorrect": false }
    ],
    "hint": "Cloud Offloading.",
    "explanation": "Delegar el procesamiento a la nube permite que dispositivos con hardware limitado ejecuten aplicaciones complejas, mejorando la escalabilidad y el rendimiento percibido."
  },
  {
    "id": "q189",
    "questionText": "Un cliente solicita eliminar todos sus datos personales de los sistemas de entrenamiento de un modelo de IA. ¿Qué derecho ejerce?",
    "type": "single",
    "options": [
      { "id": "q189_o1", "text": "Derecho de acceso/portabilidad.", "isCorrect": false },
      { "id": "q189_o2", "text": "Derecho de supresión (u olvido).", "isCorrect": true },
      { "id": "q189_o3", "text": "Derecho de oposición.", "isCorrect": false },
      { "id": "q189_o4", "text": "Derecho de corrección.", "isCorrect": false }
    ],
    "hint": "Eliminación definitiva.",
    "explanation": "El derecho de supresión permite al titular exigir que sus datos personales sean eliminados de las bases de datos cuando ya no son necesarios o retira su consentimiento."
  },
  {
    "id": "q190",
    "questionText": "¿Qué riesgo surge al entrenar un modelo de IA para contratación con datos históricamente sesgados?",
    "type": "single",
    "options": [
      { "id": "q190_o1", "text": "El modelo podría perpetuar desigualdades o tomar decisiones injustas.", "isCorrect": true },
      { "id": "q190_o2", "text": "El modelo aprenderá solo de los mejores candidatos.", "isCorrect": false },
      { "id": "q190_o3", "text": "El modelo tomará decisiones equilibradas automáticamente.", "isCorrect": false },
      { "id": "q190_o4", "text": "No habrá efectos negativos en la calidad.", "isCorrect": false }
    ],
    "hint": "Bias in, bias out.",
    "explanation": "Los modelos de IA reflejan los prejuicios presentes en los datos de entrenamiento. Si los datos históricos contienen discriminación, el algoritmo la automatizará y ampliará."
  },
  {
    "id": "q191",
    "questionText": "El principio de implementar seguridad en cada capa de la aplicación (red, host, datos, etc.) se conoce como:",
    "type": "single",
    "options": [
      { "id": "q191_o1", "text": "Defensa en profundidad.", "isCorrect": true },
      { "id": "q191_o2", "text": "Fallo seguro.", "isCorrect": false },
      { "id": "q191_o3", "text": "Menor privilegio.", "isCorrect": false },
      { "id": "q191_o4", "text": "Economía de mecanismos.", "isCorrect": false }
    ],
    "hint": "Estrategia de capas de cebolla.",
    "explanation": "La defensa en profundidad busca que, si una medida de seguridad falla, existan otras capas adicionales para contener el ataque y proteger el activo."
  },
  {
    "id": "q192",
    "questionText": "¿Qué riesgo enfrenta una empresa que implementa IA con datos imprecisos o patrones defectuosos?",
    "type": "single",
    "options": [
      { "id": "q192_o1", "text": "El modelo será más seguro y eficiente.", "isCorrect": false },
      { "id": "q192_o2", "text": "Generará errores al tomar decisiones basadas en patrones defectuosos.", "isCorrect": true },
      { "id": "q192_o3", "text": "Se ajustará solo sin afectar resultados.", "isCorrect": false },
      { "id": "q192_o4", "text": "Será 100% confiable desde el inicio.", "isCorrect": false }
    ],
    "hint": "GIGO (Garbage In, Garbage Out).",
    "explanation": "La falta de precisión en los datos de entrada degrada la calidad de la salida del modelo, llevando a predicciones erróneas y fallos operativos."
  },
  {
    "id": "q193",
    "questionText": "Si una empresa quiere desarrollar para Android e iOS desde una sola base de código, el enfoque es:",
    "type": "single",
    "options": [
      { "id": "q193_o1", "text": "Desarrollo nativo.", "isCorrect": false },
      { "id": "q193_o2", "text": "Desarrollo solo para Android.", "isCorrect": false },
      { "id": "q193_o3", "text": "Aplicación web móvil.", "isCorrect": false },
      { "id": "q193_o4", "text": "Desarrollo híbrido/multiplataforma.", "isCorrect": true }
    ],
    "hint": "Escribe una vez, ejecuta en todos lados.",
    "explanation": "El desarrollo híbrido utiliza frameworks para desplegar una misma base de código en múltiples sistemas operativos móviles, optimizando costos y tiempo."
  },
  {
    "id": "q194",
    "questionText": "¿Cuál es el beneficio de usar una plataforma de gestión de consentimiento (CMP)?",
    "type": "single",
    "options": [
      { "id": "q194_o1", "text": "Recopilar datos sin permiso.", "isCorrect": false },
      { "id": "q194_o2", "text": "Eliminar revisiones de privacidad.", "isCorrect": false },
      { "id": "q194_o3", "text": "Gestionar el consentimiento conforme a regulaciones (GDPR, etc.).", "isCorrect": true },
      { "id": "q194_o4", "text": "Compartir datos sin restricciones.", "isCorrect": false }
    ],
    "hint": "Cumplimiento normativo y trazabilidad.",
    "explanation": "Las CMP ayudan a recolectar, almacenar y auditar los permisos otorgados por los usuarios, asegurando que el tratamiento de datos sea legal y transparente."
  },
  {
    "id": "q195",
    "questionText": "Al detectar una vulnerabilidad conocida en la imagen base de un contenedor, la acción correcta es:",
    "type": "single",
    "options": [
      { "id": "q195_o1", "text": "Asegurar que la imagen base provenga de una fuente confiable y esté actualizada.", "isCorrect": true },
      { "id": "q195_o2", "text": "Cambiar configuraciones al azar.", "isCorrect": false },
      { "id": "q195_o3", "text": "Reemplazar el contenedor sin investigar.", "isCorrect": false },
      { "id": "q195_o4", "text": "Ignorar la vulnerabilidad en producción.", "isCorrect": false }
    ],
    "hint": "Sanear la base del contenedor.",
    "explanation": "Mitigar vulnerabilidades en la imagen base implica usar fuentes oficiales y realizar escaneos preventivos antes del despliegue."
  },
  {
    "id": "q196",
    "questionText": "¿Cómo se deben gestionar los artefactos de compilación obsoletos en un repositorio de CI?",
    "type": "single",
    "options": [
      { "id": "q196_o1", "text": "Especificar condiciones de eliminación automática por tiempo o espacio.", "isCorrect": true },
      { "id": "q196_o2", "text": "Migrarlos todos a repositorios públicos.", "isCorrect": false },
      { "id": "q196_o3", "text": "Implementar pruebas DAST sobre ellos.", "isCorrect": false },
      { "id": "q196_o4", "text": "Manualizar su borrado.", "isCorrect": false }
    ],
    "hint": "Gestión eficiente del ciclo de vida.",
    "explanation": "La limpieza automática de artefactos antiguos evita el agotamiento de recursos y reduce el desorden en la cadena de suministro de software."
  },
  {
    "id": "q197",
    "questionText": "Un modelo de IA que predice delitos basándose en etnia o raza es ilegal principalmente porque:",
    "type": "single",
    "options": [
      { "id": "q197_o1", "text": "No usa aprendizaje federado.", "isCorrect": false },
      { "id": "q197_o2", "text": "Involucra un alto riesgo para los derechos humanos y la equidad.", "isCorrect": true },
      { "id": "q197_o3", "text": "No se realizó análisis ético previo.", "isCorrect": false },
      { "id": "q197_o4", "text": "Los datos no están anonimizados.", "isCorrect": false }
    ],
    "hint": "Discriminación algorítmica prohibida.",
    "explanation": "El perfilado demográfico para predicción delictiva viola principios fundamentales de igualdad y es clasificado como práctica prohibida o de altísimo riesgo en leyes modernas de IA."
  },
  {
    "id": "q198",
    "questionText": "Para proteger la consola de gestión de la nube ante un incremento de ataques, se debe:",
    "type": "single",
    "options": [
      { "id": "q198_o1", "text": "Usar claves SSH incrustadas.", "isCorrect": false },
      { "id": "q198_o2", "text": "Realizar pruebas SAST al código.", "isCorrect": false },
      { "id": "q198_o3", "text": "Controlar estrictamente el acceso con privilegios (MFA, IAM).", "isCorrect": true },
      { "id": "q198_o4", "text": "Automatizar scripts sin control de acceso.", "isCorrect": false }
    ],
    "hint": "Protección de la interfaz administrativa.",
    "explanation": "La consola de gestión es el punto de control total; protegerla requiere autenticación fuerte (MFA) y políticas de acceso granulares para prevenir el secuestro de la infraestructura."
  },
  {
    "id": "q199",
    "questionText": "Reutilizar datos financieros para marketing sin consentimiento nuevo, aunque estén anonimizados, requiere:",
    "type": "single",
    "options": [
      { "id": "q199_o1", "text": "Almacenamiento descentralizado.", "isCorrect": false },
      { "id": "q199_o2", "text": "Solo auditorías internas.", "isCorrect": false },
      { "id": "q199_o3", "text": "Solicitar consentimiento explícito para la nueva finalidad.", "isCorrect": true },
      { "id": "q199_o4", "text": "Limitar el acceso al personal inicial.", "isCorrect": false }
    ],
    "hint": "Principio de limitación de la finalidad.",
    "explanation": "Cambiar el propósito del tratamiento de datos exige informar al titular y obtener un nuevo consentimiento, independientemente de las medidas técnicas de anonimización."
  },
  {
    "id": "q200",
    "questionText": "Si una app de alimentos necesita escanear códigos de barras con alto rendimiento y fluidez, el desarrollo ideal es:",
    "type": "single",
    "options": [
      { "id": "id200_o1", "text": "Aplicación web simple.", "isCorrect": false },
      { "id": "id200_o2", "text": "Basado en la nube.", "isCorrect": false },
      { "id": "id200_o3", "text": "Nativo.", "isCorrect": true },
      { "id": "id200_o4", "text": "Híbrido de bajo costo.", "isCorrect": false }
    ],
    "hint": "Acceso directo al hardware (cámara).",
    "explanation": "Las apps nativas tienen acceso directo a las APIs de la cámara y el procesador, lo que garantiza que el escaneo de códigos de barras sea instantáneo y preciso."
  } 
]
  ;
