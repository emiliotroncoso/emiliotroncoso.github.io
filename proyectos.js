/*
  ============================================================
  PROYECTOS DEL PORTAFOLIO — este es el único archivo que necesitas editar
  ============================================================

  Cómo agregar un proyecto nuevo:
  1. Copia un bloque completo, desde la llave { hasta la llave }, incluida la coma final.
  2. Pégalo donde quieras que aparezca (el orden de este archivo es el orden en la web).
  3. Cambia los textos que están entre comillas.
  4. Sube las fotos a la carpeta img/ y escribe sus nombres en "imgs", sin la extensión .jpg.
     La primera foto de la lista es la grande.

  Campos:
    grupo     -> "relacional", "colaboraciones" o "proyectos" (sección donde aparece)
    titulo    -> nombre del proyecto
    anio      -> año o rango, por ejemplo "2026" o "2021–hoy"
    estado    -> (opcional) "En curso". Muestra esa etiqueta junto al año.
    rol       -> qué hiciste tú
    contexto  -> cliente, artista, institución o concurso
    tecnicas  -> herramientas y materiales
    autoria   -> (opcional) solo si la obra es de otra persona, por ejemplo "Obra de la artista Carolina Pino".
                 Al ponerlo, el proyecto muestra la etiqueta "Colaboración".
    equipo    -> (opcional) quiénes trabajaron contigo
    desc      -> uno o más párrafos, cada uno entre comillas y separados por coma
    imgs      -> nombres de las fotos en img/ (deben ser .jpg)

  Cuidado: cada texto va entre comillas "así", y cada bloque termina en },
  Si el sitio queda en blanco después de un cambio, casi siempre falta una comilla o una coma.
*/

const PROYECTOS = [

  /* ---------- RELACIONAL.LAB ---------- */
  { grupo:"relacional", titulo:"Relacional", anio:"2020–2023",
    rol:"Investigación, diseño y prototipado", contexto:"Tesis Magíster en Ciencias del Diseño, UAI. Premio Mejor Tesis Proyectual", tecnicas:"Arduino, sensor de pulso cardíaco, válvula de aire, silicona, impresión 3D y corte láser",
    desc:["Interfaz material que conecta a dos personas a distancia mediante el gesto de tomarse las manos. Está pensada para pacientes en aislamiento hospitalario, sin la compañía de sus familias.","El pulso de una persona infla y desinfla la membrana que sostiene la otra, junto con una luz que sigue el mismo ritmo. Ese movimiento acciona la mano y la lleva a cerrarse sobre la membrana, reactivando el gesto que la distancia había interrumpido."],
    imgs:["relacional-4","relacional-1","relacional-3","relacional-5","relacional-6","relacional-2","relacional-moldes"] },
  { grupo:"relacional", titulo:"Texturas Remotas", anio:"2021–hoy",
    rol:"Concepto, desarrollo de aplicación y fabricación", contexto:"Relacional.lab", tecnicas:"App táctil, Grasshopper, impresión 3D, tallado CNC",
    desc:["Proyecto de diseño especulativo para compartir sensaciones táctiles a distancia. Una aplicación capta las interacciones de los dedos sobre una pantalla y las convierte en superficies que se fabrican como objetos: vasos, bandejas, placas."],
    imgs:["texturas-1","texturas-5","texturas-4","texturas-3","texturas-2"] },
  { grupo:"relacional", titulo:"Membranas de silicona y textil", anio:"2026", estado:"En curso",
    rol:"Investigación material", contexto:"Relacional.lab", tecnicas:"Silicona, telas, sensores",
    desc:["Exploración de un material compuesto de silicona y textil para las próximas membranas de Relacional. Abre nuevas formas de presencia material."],
    imgs:["silicona-1","silicona-3","silicona-4","silicona-2"] },
  { grupo:"relacional", titulo:"Lámpara a distancia", anio:"2026", estado:"En curso",
    rol:"Concepto y prototipado", contexto:"Relacional.lab", tecnicas:"Iluminación LED de color, fabricación digital",
    desc:["Una lámpara de pared que transita por distintos colores e intensidades. Explora la luz como otra forma de percibir la presencia de alguien a distancia, más allá del tacto: una atmósfera que se transforma en el espacio de quien la habita.","Amplía la investigación de Relacional.lab desde el gesto hacia otros estímulos, como la luz, el color y el espacio."],
    imgs:["lampara-1","lampara-2","lampara-3","lampara-4","lampara-5","lampara-6"] },

  /* ---------- COLABORACIONES ---------- */
  { grupo:"colaboraciones", titulo:"Umbral", anio:"2026",
    rol:"Procesos creativos y fabricación", contexto:"Concurso de arte, Aeropuerto Internacional Arturo Merino Benítez, Santiago",
    autoria:"Obra de la artista Carolina Pino", equipo:"Alejandro Casas y Emilio Troncoso", tecnicas:"Diseño digital, modelado 3D y sistemas de fabricación",
    desc:["Propuesta escultórica para el concurso del Aeropuerto de Santiago, desarrollada como parte del equipo de la artista Carolina Pino junto a Alejandro Casas.","La obra propone pensar el viaje no solo como un trayecto, sino como una transformación del cuerpo, el tiempo y el espacio. Umbral representa el tránsito entre dos mundos."],
    imgs:["umbral-1","umbral-2","umbral-3","umbral-4"] },
  { grupo:"colaboraciones", titulo:"Murmuraciones, escultura viva para Hualpén", anio:"2025",
    rol:"Proceso creativo y sistemas de fabricación digital", contexto:"Concurso MOP, Arte en puente industrial, Hualpén",
    autoria:"Obra de la artista Carolina Pino", equipo:"Alejandro Casas y Emilio Troncoso", tecnicas:"Datos de cantos de aves, modelado paramétrico, fierro negro, realidad aumentada",
    desc:["Proyecto en colaboración para la artista Carolina Pino, desarrollado en equipo con Alejandro Casas. Participé en el proceso creativo y estuve a cargo de los sistemas de fabricación digital.","La obra es una escultura de fierro negro que representa una bandada de aves en movimiento, generada a partir de datos del canto del cernícalo americano, la cigüeñuela y la gaviota dominicana.","Una experiencia de realidad aumentada proyecta las aves en vuelo hacia la desembocadura al recorrer la obra con un teléfono."],
    imgs:["murmuraciones-1","murmuraciones-2","murmuraciones-4","murmuraciones-3","murmuraciones-5","murmuraciones-6"] },
  { grupo:"colaboraciones", titulo:"Gabriel Épica, exploración material", anio:"2025",
    rol:"Impresión 3D para cera perdida", contexto:"Microescultura Gabriel Épica",
    autoria:"Obra de la artista Carolina Pino", tecnicas:"Impresión 3D de resina, fundición en bronce",
    desc:["Exploración de impresión 3D de resina para el proceso de cera perdida en bronce de las piezas de microescultura Gabriel Épica de Carolina Pino."],
    imgs:["gabriel-1","gabriel-2","gabriel-3","gabriel-4"] },

  /* ---------- PROYECTOS (del más reciente al más antiguo) ---------- */
  { grupo:"proyectos", titulo:"Muro paramétrico IDE Technologies", anio:"2024",
    rol:"Desarrollo digital y planimetría de fabricación", contexto:"Oficinas IDE Technologies, para Stein Arquitectos", tecnicas:"Grasshopper, corte láser, 150 piezas de acrílico",
    desc:["Desarrollo digital y planimetría para la fabricación mediante corte láser de 150 piezas de acrílico que forman el muro interior de las oficinas de IDE Technologies."],
    imgs:["ide-1","ide-2","ide-3","ide-4","ide-5"] },
  { grupo:"proyectos", titulo:"Stand CMPC, Semana de la Madera", anio:"2019",
    rol:"Diseño paramétrico y fabricación digital", contexto:"Para De Vanguardia", tecnicas:"Grasshopper, router CNC, terciado",
    desc:["Diseño paramétrico y colaboración en la fabricación digital del stand de CMPC en la feria Semana de la Madera: un muro ondulado de costillas de terciado cortadas en CNC."],
    imgs:["cmpc-1","cmpc-2","cmpc-3","cmpc-4"] },
  { grupo:"proyectos", titulo:"Exoport", anio:"2018",
    rol:"Integrante del equipo de fabricación", contexto:"Diplomado en Diseño, Innovación y Tecnología, Universidad Adolfo Ibáñez",
    equipo:"Francisca Lema, Sebastián Silva, Atahualpa Carrero y Emilio Troncoso", tecnicas:"Arduino, sensor de fuerza, corte por chorro de agua en aluminio, mecanizado CNC, termoformado, impresión 3D",
    desc:["Prototipo de brazo robótico vestible para empresas cuyos trabajadores manipulan cargas sobre los 25 kg, el límite que fija la Ley del Saco.","Un sensor de fuerza en el guante registra el peso y tres placas Arduino controlan la asistencia del brazo. La estructura combina aluminio cortado por chorro de agua con piezas mecanizadas en CNC, termoformadas e impresas en 3D."],
    imgs:["exoport-1","exoport-2","exoport-3","exoport-4","exoport-5"] },
  { grupo:"proyectos", titulo:"Mecanizado 3D CNC", anio:"2018–2023",
    rol:"Estrategias de fabricación y trayectorias", contexto:"Sinestesia.cc", tecnicas:"RhinoCAM, router CNC 3 ejes, biomateriales",
    desc:["Definición de estrategias de fabricación y trayectorias de mecanizado 3D para topografías y moldajes, en materiales convencionales y biomateriales."],
    imgs:["mecanizado-2","mecanizado-1","mecanizado-3","mecanizado-6","mecanizado-5","mecanizado-4"] },
  { grupo:"proyectos", titulo:"Insertos CNC para minería", anio:"2017–hoy",
    rol:"Estrategias de corte y fabricación", contexto:"Nigsa SpA", tecnicas:"RhinoCAM, router CNC, espuma de polietileno de alta densidad",
    desc:["Definición de estrategias de fabricación y trayectorias de corte CNC para insertos de espuma de polietileno que protegen herramientas de minería."],
    imgs:["insertos-2","insertos-1","insertos-3","insertos-4","insertos-5"] },
  { grupo:"proyectos", titulo:"Implementación 3D y capacitación en joyería", anio:"2016–hoy",
    rol:"Capacitación y puesta en marcha", contexto:"Joyas Pruzzo", tecnicas:"Modelado 3D, impresión de resina, cera perdida",
    desc:["Capacitación en software de diseño para fabricación digital y puesta en marcha de una impresora 3D de resina para procesos de cera perdida."],
    imgs:["joyeria-1","joyeria-2","joyeria-3","joyeria-4","joyeria-5","joyeria-6"] },
  { grupo:"proyectos", titulo:"Sets de televisión y exposiciones", anio:"2010–2014",
    rol:"Diseño, render 3D y montaje", contexto:"Diseñador independiente y Ma-Realizaciones", tecnicas:"Modelado y render 3D, planimetría",
    desc:["Diseño y montaje de sets para Chilevisión, Canal 13 y La Red, el set de prensa del Palacio de La Moneda, exposiciones y stands."],
    imgs:["tv-1","tv-3","tv-2","tv-4","tv-5"] },
];
