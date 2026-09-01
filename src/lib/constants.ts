export const EMPRESA = {
  nombre: "Aceros Marín",
  razonSocial: "Aceros Marín",
  telefonoFijo: "[Teléfono pendiente]",
  whatsapp: "51947997379",
  celulares: [
    { etiqueta: "WhatsApp", numero: "947 997 379", wa: "51947997379" },
  ],
  direccion: "[Dirección real pendiente]",
  distrito: "Lima, Perú",
  web: "",
  emails: {
    ventas: "",
    administracion: "",
  },
  mapsEmbedSrc:
    "https://maps.google.com/maps?q=Lima%2C%20Peru&z=14&hl=es&output=embed",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Lima%2C%20Peru",
} as const;

export const NAV_LINKS = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#nosotros", label: "Sobre nosotros" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#galeria", label: "Galería de Fotos" },
  { href: "/#contacto", label: "Contáctenos" },
] as const;

export const CARRUSEL = [
  {
    src: "/carousel/estructuras.webp",
    alt: "Fabricación y montaje de estructuras metálicas — Aceros Marín",
  },
  {
    src: "/carousel/soldadura.webp",
    alt: "Habilitación de material y metalmecánica en taller",
  },
  {
    src: "/carousel/rejas.webp",
    alt: "Carpintería metálica y cerramientos",
  },
  {
    src: "/carousel/techos.webp",
    alt: "Coberturas y cerramientos metálicos",
  },
] as const;

export const DIVISIONES = [
  {
    id: "estructuras",
    titulo: "Estructuras Metálicas",
    resumen:
      "Nuestra división de Estructuras Metálicas cuenta con un grupo de profesionales con amplia experiencia en el diseño, fabricación y montaje de estructuras metálicas, livianas, semipesadas y pesadas de acuerdo a las normas técnicas nacionales e internacionales.",
    items: [
      {
        id: "estructuras-pesadas",
        titulo: "Estructuras Pesadas",
        foto: "/servicios/estructuras-pesadas.png",
        descripcion:
          "Ejecutamos proyectos de estructuras metálicas pesadas. Nuestro equipo de ingeniería colabora y desarrolla los detalles y planos de fabricación, basados en las normas técnicas E-090, AISC y AWS. Técnicos e ingenieros capacitados garantizan calidad y seguridad en obra.",
      },
      {
        id: "estructuras-semipesadas",
        titulo: "Estructuras Semipesadas",
        foto: "/servicios/estructuras-semipesadas.png",
        descripcion:
          "Ejecutamos proyectos de estructuras metálicas semipesadas. El equipo de ingeniería desarrolla los detalles y planos de fabricación según las normas E-090, AISC y AWS, con personal técnico e ingenieros de amplia experiencia.",
      },
      {
        id: "estructuras-livianas",
        titulo: "Estructuras Livianas",
        foto: "/servicios/estructuras-livianas.png",
        descripcion:
          "Ejecutamos proyectos de estructuras metálicas extra livianas y livianas. Desarrollamos la ingeniería de detalle y planos de fabricación según las normas E-090, AISC y AWS, con técnicos e ingenieros que garantizan calidad y seguridad.",
      },
    ],
  },
  {
    id: "coberturas",
    titulo: "Coberturas y Cerramientos",
    resumen:
      "Nuestra división de Coberturas y Cerramientos Metálicos cuenta con un grupo de profesionales con amplia experiencia en el diseño, selección y montaje de coberturas y cerramientos en naves industriales, campamentos, centros comerciales, centros mineros y edificaciones en general, de acuerdo a las normas técnicas nacionales e internacionales.",
    items: [
      {
        id: "cerramientos-metalicos",
        titulo: "Cerramientos Metálicos",
        foto: "/servicios/cerramientos-metalicos.png",
        descripcion:
          "Colaboramos en el desarrollo del proyecto y recomendamos el tipo de material. Realizamos planos de detalle, diseño, suministro y fabricación de accesorios conformados como zócalos, esquineros y remates. Instalamos cerramientos con láminas de acero Aluzinc y paneles termo-acústicos, e instalación de cerramientos no metálicos.",
      },
      {
        id: "drywall",
        titulo: "Drywall",
        foto: "/servicios/drywall.png",
        descripcion:
          "Realizamos proyectos de ambientes de oficinas: instalamos muros, tabiques y cielos rasos en drywall y superboard. Suministro e instalación a precios competitivos, con calidad y seguridad.",
      },
      {
        id: "coberturas-metalicas",
        titulo: "Coberturas Metálicas",
        foto: "/servicios/coberturas-metalicas.png",
        descripcion:
          "Asesoramos en la selección del material según la necesidad del cliente. Elaboramos planos de detalle de las cubiertas, diseño, suministro y fabricación de canaletas pluviales y accesorios conformados (cumbreras, cenefas y esquineros). Instalamos cubiertas de acero Aluzinc, paneles termo-acústicos y coberturas no metálicas como PVC y fibrocemento.",
      },
    ],
  },
  {
    id: "corte-doblez",
    titulo: "Servicio de Corte y Doblez",
    resumen:
      "Nuestra división de Servicio de Corte y Doblez cuenta con máquinas hidráulicas diseñadas para distintos tipos de corte y doblez, adaptándose a la necesidad del cliente. El equipo técnico está capacitado para el corte y doblez que requiera cada proyecto.",
    items: [
      {
        id: "rolado",
        titulo: "Servicio de Rolado",
        foto: "/servicios/rolado.png",
        descripcion:
          "Rolado de planchas con técnicos capacitados: rolados cilíndricos, cónicos, de media luna y otros. Orientado a la elaboración de tanques de agua, tanques de gasolina y tanques de gas.",
      },
      {
        id: "plegado",
        titulo: "Servicio de Plegado",
        foto: "/servicios/plegado.png",
        descripcion:
          "Plegado con máquinas hidráulicas en longitudes L=2.40 m, L=3.00 m y L=6.00 m, y espesores de 0.4 mm a 9.0 mm. Realizamos canales U y C, zetas Z, ángulos, omegas, marcos de puerta, pasos de escalera, bandejas porta-cables, rieles, tapajuntas, canaletas y accesorios conformados.",
      },
      {
        id: "corte-planchas",
        titulo: "Corte de Planchas",
        foto: "/servicios/corte-planchas.png",
        descripcion:
          "Corte de planchas con máquinas hidráulicas en longitudes L=2.40 m, L=3.00 m y L=6.00 m, y espesores de 0.4 mm a 9.0 mm. Materiales: planchas galvanizadas, LAC, LAF, estriadas, perforadas y de acero inoxidable.",
      },
    ],
  },
  {
    id: "carpinteria",
    titulo: "Carpintería Metálica",
    resumen:
      "Nuestra división de Carpintería Metálica cuenta con profesionales con amplia experiencia en el diseño, fabricación y montaje de carpintería metálica de fierro y acero inoxidable en viviendas, edificios multifamiliares, edificios financieros, centros empresariales, centros comerciales, centros mineros, industrias, centros de estudios y edificaciones en general.",
    items: [
      {
        id: "revestimiento-inox",
        titulo: "Revestimiento de Acero Inoxidable",
        foto: "/servicios/revestimiento-inox.png",
        descripcion:
          "Asesoramos en el desarrollo y en la selección del tipo de acero inoxidable. Elaboramos planos de detalle y fabricación. Suministro, fabricación y montaje de revestimientos en columnas, puertas, hall de ascensores, pórticos de ingreso, zócalos, fachadas y más.",
      },
      {
        id: "carpinteria-inox",
        titulo: "Carpintería de Acero Inoxidable",
        foto: "/servicios/carpinteria-inox.png",
        descripcion:
          "Presentamos alternativas de solución según el tipo de proyecto. Asesoramos en el material, elaboramos planos de detalle y realizamos suministro, fabricación y montaje de barandas, pasamanos, rejillas, tapas, zócalos, tapajuntas, barras para baños accesibles, protectores y más.",
      },
      {
        id: "carpinteria-carbono",
        titulo: "Carpintería de Acero al Carbono",
        foto: "/servicios/carpinteria-carbono.png",
        descripcion:
          "Asesoramos la carpintería metálica de fierro según la arquitectura y la necesidad del cliente. Planos de detalle, suministro, fabricación y montaje de puertas peatonales y vehiculares, puertas corredizas, cercos perimétricos, escaleras de gato y rectangulares, rejillas, plataformas, barandas y pasamanos.",
      },
    ],
  },
] as const;

export const SERVICIOS_PRINCIPALES = DIVISIONES.flatMap((division) =>
  division.items.map((item) => ({
    ...item,
    division: division.titulo,
    divisionId: division.id,
  })),
);

export function getDivision(id: string) {
  return DIVISIONES.find((division) => division.id === id);
}

export const GALERIA = [
  {
    src: "/carousel/estructuras.webp",
    alt: "Estructuras metálicas en taller y obra",
  },
  {
    src: "/carousel/soldadura.webp",
    alt: "Corte, doblez y habilitación de material",
  },
  {
    src: "/carousel/rejas.webp",
    alt: "Carpintería metálica y cerramientos",
  },
  {
    src: "/carousel/techos.webp",
    alt: "Coberturas metálicas",
  },
  {
    src: "/servicios/inoxidable.webp",
    alt: "Trabajos en acero inoxidable",
  },
  {
    src: "/servicios/escaleras.webp",
    alt: "Barandas, pasamanos y carpintería",
  },
] as const;
