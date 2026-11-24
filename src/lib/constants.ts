const MAPS_QUERY =
  "Calle 4 Mz. S Lt. 16 Parque Industrial El Asesor, Ate, Lima, Peru";

export const EMPRESA = {
  nombre: "Aceros Marín",
  razonSocial: "Aceros Marín E.I.R.L.",
  logo: "/images/LogoAcerosMarin.png",
  slogan: "Corte · Doblez · Rolado",
  telefonoFijo: "01-5030519",
  telefonoFijoHref: "tel:+5115030519",
  whatsapp: "51947997379",
  celulares: [
    { etiqueta: "WhatsApp", numero: "947 997 379", wa: "51947997379" },
    { etiqueta: "WhatsApp", numero: "946 360 707", wa: "51946360707" },
  ],
  direccion: "Cal. 4 Mz. S Lt. 16, Parque Industrial El Asesor",
  sucursal: "Av. Las Torres Nro. 694",
  distrito: "Ate, Lima",
  horario: "Lun a Sáb · 8:00 AM - 6:00 PM",
  zona: "Parque Industrial El Asesor, Ate — Lima",
  web: "",
  emails: {
    ventas: "aceros_marin@hotmail.com",
    administracion: "",
  },
  mapsEmbedSrc: `https://maps.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&z=16&hl=es&output=embed`,
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`,
} as const;

export const CAPACIDAD = [
  { titulo: "Guillotina", dato: "6 metros de largo" },
  { titulo: "Plegadora", dato: "6 m · de 2 mm a 19 mm" },
  { titulo: "Rolado", dato: "Conos, cilindros y planchas" },
] as const;

export const COMO_COTIZAR = [
  "Elige el servicio: corte, doblez, rolado, bombeado o pestañado.",
  "Indica medida, espesor y tipo de material (L.A.F., LAC, galvanizado o inoxidable).",
  "Di cuántas piezas necesitas y para cuándo.",
  "Si puedes, manda una foto de la pieza o el plano por WhatsApp.",
] as const;

export const NAV_LINKS = [
  { href: "/#inicio", id: "inicio", label: "Inicio" },
  { href: "/#nosotros", id: "nosotros", label: "Nosotros" },
  { href: "/#servicios", id: "servicios", label: "Servicios" },
  { href: "/#cotizar", id: "cotizar", label: "Cotizar" },
  { href: "/#galeria", id: "galeria", label: "Galería" },
  { href: "/#contacto", id: "contacto", label: "Contacto" },
  { href: "/#ubicacion", id: "ubicacion", label: "Ubicación" },
] as const;

export const CARRUSEL = [
  {
    src: "/carousel/estructuras.webp",
    alt: "Estructuras metálicas en taller",
  },
  {
    src: "/carousel/soldadura.webp",
    alt: "Soldadura y habilitación de material",
  },
  {
    src: "/carousel/rejas.webp",
    alt: "Trabajos de metal en taller",
  },
  {
    src: "/carousel/techos.webp",
    alt: "Coberturas y montaje metálico",
  },
] as const;

export const SERVICIOS = [
  {
    id: "bombeado-pestanado",
    titulo: "Bombeado y pestañado",
    descripcion:
      "Servicio de bombeado y pestañado de tapas para tanques desde 0.5 mm hasta 25 mm de espesor, por diámetros de 6 metros.",
    fotos: [
      {
        src: "/images/bombeado-tapas.jpeg",
        alt: "Tapas bombeadas y pestañadas para tanques",
      },
      {
        src: "/images/bombeado-maquina.jpeg",
        alt: "Máquina de bombeado y pestañado de tapas",
      },
      {
        src: "/images/bombeado-piezas.jpeg",
        alt: "Piezas de bombeado y pestañado",
      },
      {
        src: "/images/bombeado-tanque.jpeg",
        alt: "Tanque con tapa bombeada",
      },
      {
        src: "/images/bombeado-pestanado.jpeg",
        alt: "Bombeado y pestañado",
      },
    ],
  },
  {
    id: "rolado-cono",
    titulo: "Rolado de cono",
    descripcion:
      "Rolado cónico para tolvas, reducciones y piezas de transición. Trabajamos el cono según medida y espesor del material.",
    fotos: [
      {
        src: "/images/rolado-cono.jpeg",
        alt: "Rolado de cono",
      },
      {
        src: "/images/rolado-cono-2.jpeg",
        alt: "Rolado de cono en taller",
      },
    ],
  },
  {
    id: "rolado-planchas",
    titulo: "Rolado de planchas",
    descripcion:
      "Rolado de planchas para cilindros, ductos y piezas de sección especial. Habilitación de material en taller.",
    fotos: [
      {
        src: "/images/rolado-rectangular.jpeg",
        alt: "Rolado de planchas",
      },
    ],
  },
  {
    id: "guillotina",
    titulo: "Guillotina de 6 metros",
    descripcion:
      "Corte de planchas en guillotina de 6 metros. Servicio de corte para habilitar material según medida.",
    fotos: [
      {
        src: "/images/guillotina-6m.jpeg",
        alt: "Guillotina de 6 metros",
      },
    ],
  },
  {
    id: "plegadora",
    titulo: "Plegadora de 6 metros",
    descripcion:
      "Doblez y plegado en máquina de 6 metros, con capacidad de 2 mm hasta 19 mm. Canales, ángulos y piezas conformadas a medida.",
    fotos: [
      {
        src: "/images/plegadora-6m.jpeg",
        alt: "Plegadora de 6 metros, 2 mm a 19 mm",
      },
    ],
  },
] as const;

export const GALERIA = [
  {
    src: "/images/bombeado-tapas.jpeg",
    alt: "Tapas bombeadas y pestañadas para tanques",
  },
  {
    src: "/images/bombeado-maquina.jpeg",
    alt: "Máquina de bombeado y pestañado de tapas",
  },
  {
    src: "/images/bombeado-piezas.jpeg",
    alt: "Piezas de bombeado y pestañado",
  },
  {
    src: "/images/bombeado-tanque.jpeg",
    alt: "Tanque con tapa bombeada",
  },
  {
    src: "/images/bombeado-pestanado.jpeg",
    alt: "Bombeado y pestañado",
  },
  {
    src: "/images/rolado-cono.jpeg",
    alt: "Rolado de cono",
  },
  {
    src: "/images/rolado-cono-2.jpeg",
    alt: "Rolado de cono en taller",
  },
  {
    src: "/images/rolado-rectangular.jpeg",
    alt: "Pieza rolada en taller",
  },
  {
    src: "/images/guillotina-6m.jpeg",
    alt: "Guillotina de 6 metros",
  },
  {
    src: "/images/plegadora-6m.jpeg",
    alt: "Plegadora de 6 metros, 2 mm a 19 mm",
  },
  {
    src: "/images/taller-obra.jpeg",
    alt: "Trabajos de taller Aceros Marín",
  },
] as const;
