# Aceros Marín — Sitio web

Landing de **Aceros Marín E.I.R.L.** (taller en Ate, Lima): corte, doblez, rolado, bombeado y pestañado. El objetivo del sitio es que el cliente cotice por **WhatsApp**.

Repositorio del equipo: [acerosmarin202620-create/AcerosMarinWeb](https://github.com/acerosmarin202620-create/AcerosMarinWeb).

## Stack

| Tecnología | Versión |
| --- | --- |
| Next.js (App Router) | 16 |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | 4 |
| lucide-react | iconos |

Requisito: **Node.js 20 o superior** y npm.

## Cómo correr el proyecto

```bash
git clone https://github.com/acerosmarin202620-create/AcerosMarinWeb.git
cd AcerosMarinWeb
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

| Comando | Uso |
| --- | --- |
| `npm run dev` | Desarrollo local |
| `npm run build` | Compilar para producción |
| `npm run start` | Servir el build (`npm run build` antes) |
| `npm run lint` | Revisar errores de ESLint |

## Dónde se edita el contenido

Casi todo el texto, teléfonos, mapa y listado de servicios está en un solo archivo:

**`src/lib/constants.ts`**

Ahí se cambia, sin tocar el resto del código:

- Nombre, dirección, horario
- WhatsApp (`whatsapp` con código de país, ej. `51984912535`, y `celulares` para mostrar `984 912 535`)
- Enlaces de Google Maps (`mapsUrl` y `mapsEmbedSrc`)
- Menú (`NAV_LINKS`)
- Carrusel del inicio (`CARRUSEL` → fotos en `public/carousel/`)
- Servicios y fotos (`SERVICIOS` → fotos en `public/images/`)
- Galería (`GALERIA`)

Los enlaces de WhatsApp se arman en `src/lib/whatsapp.ts`. Todas las cotizaciones (formulario, botones Cotizar, botón flotante) usan el número de `EMPRESA.whatsapp`.

### Fotos

1. Copia el archivo a `public/images/` con un nombre **sin espacios** (ej. `bombeado-tapas.jpeg`).
2. Agrégalo en `SERVICIOS` (campo `fotos`) o en `GALERIA`.
3. Si un servicio tiene **más de una foto**, el recuadro las rota cada 5 segundos.

El logo está en `public/images/LogoAcerosMarin.png`.

## Estructura de carpetas

```
src/app/                  Páginas Next.js (layout, home, robots)
src/components/sections/  Secciones de la landing (Hero, Servicios, Contacto…)
src/components/ui/        Botones y títulos reutilizables
src/lib/constants.ts      Datos de la empresa (editar aquí)
src/lib/whatsapp.ts       Genera el enlace wa.me
public/images/            Fotos del taller y logo
public/carousel/          Imágenes del banner de inicio
```

La home (`src/app/page.tsx`) es una sola página con anclas: `#inicio`, `#nosotros`, `#servicios`, `#cotizar`, `#galeria`, `#contacto`, `#ubicacion`.

## Variables de entorno (producción)

Crea `.env.production` o configúralo en el hosting:

```
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```

Sirve para Open Graph y URLs absolutas. En local no es obligatorio (usa `http://localhost:3000`).

No subas secretos ni archivos `.env` con claves. Este sitio es estático: no hay base de datos ni API propia.

## Flujo de trabajo del equipo

1. Crea una rama: `git checkout -b feature/nombre-corto`
2. Haz el cambio (contenido en `constants.ts`, o UI en `src/components`)
3. Prueba en `npm run dev` (celular, tablet y laptop)
4. `npm run build` para confirmar que compila
5. Commit y push; abre un Pull Request hacia `main`

No commitees `.next/`, `node_modules/` ni `public/maquinasVideos/` si no se usa en el sitio.

## Publicar

1. `npm run build` y `npm run start` para probar el build.
2. Despliega en Vercel, Netlify u otro host Node, apuntando a este repositorio y a la rama `main`.
3. Define `NEXT_PUBLIC_SITE_URL` con el dominio real.

## Contacto técnico del sitio

- WhatsApp de cotizaciones: **984 912 535** (`51984912535` en el código)
- Dirección mostrada: Cal. 4 Mz. S Lt. 16, Parque Industrial El Asesor, Ate, Lima
- Mapa: [Google Maps](https://maps.app.goo.gl/9H3epXZ1v7hrN6p68)
