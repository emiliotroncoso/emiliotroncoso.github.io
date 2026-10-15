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
    grupo     -> "investigacion" o "proyectos" (sección donde aparece)
    titulo    -> nombre del proyecto
    anio      -> año o rango, por ejemplo "2026" o "2021–hoy"
    rol       -> qué hiciste tú
    contexto  -> cliente, artista, institución o concurso
    tecnicas  -> herramientas y materiales
    desc      -> uno o más párrafos, cada uno entre comillas y separados por coma
    imgs      -> nombres de las fotos en img/ (deben ser .jpg)

  Cuidado: cada texto va entre comillas "así", y cada bloque termina en },
  Si el sitio queda en blanco después de un cambio, casi siempre falta una comilla o una coma.
*/

const PROYECTOS = [
  { grupo:"investigacion", titulo:"Relacional", anio:"2020–2023",
    rol:"Investigación, diseño y prototipado", contexto:"Tesis Magíster en Ciencias del Diseño, UAI. Premio Mejor Tesis Proyectual", tecnicas:"Arduino, sensores de presión, válvulas, silicona, impresión 3D",
    desc:["Interfaz material que conecta a dos personas a distancia mediante un gesto que simula tomarse de la mano. Está pensada para personas en aislamiento, como pacientes hospitalizados sin compañía de sus familias.","Cada membrana registra la presión de una mano y la reproduce en la otra con aire y luz, para ofrecer una experiencia de cercanía táctil a pesar de la distancia."],
    imgs:["relacional-4","relacional-1","relacional-3","relacional-5","relacional-6","relacional-2"] },
  { grupo:"investigacion", titulo:"Texturas Remotas", anio:"2021–hoy",
    rol:"Concepto, desarrollo de aplicación y fabricación", contexto:"Relacional.lab", tecnicas:"App táctil, Grasshopper, impresión 3D, tallado CNC",
    desc:["Proyecto de diseño especulativo para compartir sensaciones táctiles a distancia. Una aplicación capta las interacciones de los dedos sobre una pantalla y las convierte en superficies que se fabrican como objetos: vasos, bandejas, placas.","Busca sumar el tacto a la comunicación remota y abrir nuevas formas de conexión emocional."],
    imgs:["texturas-1","texturas-5","texturas-4","texturas-3","texturas-2"] },
  { grupo:"proyectos", titulo:"Murmuraciones, escultura viva para Hualpén", anio:"2025",
    rol:"Integrante de equipo y proceso creativo , sistemas de fabricación digital para Artista Carolina Pino", contexto:"Concurso MOP, Arte en puente industrial, Hualpén. Artista Carolina Pino", tecnicas:"Datos de cantos de aves, modelado paramétrico, fierro negro, realidad aumentada",
    desc:["Escultura de fierro negro que representa una bandada de aves en movimiento, generada a partir de datos del canto del cernícalo americano, la cigüeñuela y la gaviota dominicana.","Una experiencia de realidad aumentada proyecta las aves en vuelo hacia la desembocadura al recorrer la obra con un teléfono."],
    imgs:["murmuraciones-1","murmuraciones-2","murmuraciones-4","murmuraciones-3","murmuraciones-5","murmuraciones-6"] },
  { grupo:"proyectos", titulo:"Muro paramétrico IDE Technologies", anio:"2024",
    rol:"Desarrollo digital y planimetría de fabricación", contexto:"Oficinas IDE Technologies, para Stein Arquitectos", tecnicas:"Grasshopper, corte láser, 150 piezas de acrílico",
    desc:["Desarrollo digital y planimetría para la fabricación de muro parametrico basado en la olas del mar chileno, mediante corte láser de 150 piezas de acrílico que forman el muro interior de las oficinas de IDE Technologies."],
    imgs:["ide-1","ide-2","ide-3","ide-4","ide-5"] },
  { grupo:"proyectos", titulo:"Gabriel Épica, exploración material", anio:"2025",
    rol:"Impresión 3D para cera perdida", contexto:"Microescultura de la artista Carolina Pino", tecnicas:"Impresión 3D de resina, fundición en bronce",
    desc:["Exploración de impresión 3D de resina para el proceso de cera perdida en bronce de las piezas de microescultura Gabriel Épica."],
    imgs:["gabriel-1","gabriel-2","gabriel-3","gabriel-4"] },
  { grupo:"proyectos", titulo:"Stand CMPC, Semana de la Madera", anio:"2019",
    rol:"Diseño paramétrico y fabricación digital", contexto:"Para De Vanguardia", tecnicas:"Grasshopper, router CNC, terciado",
    desc:["Diseño paramétrico y colaboración en la fabricación digital del stand de CMPC en la feria Semana de la Madera: un muro ondulado de costillas de terciado cortadas en CNC."],
    imgs:["cmpc-1","cmpc-2","cmpc-3","cmpc-4"] },
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
