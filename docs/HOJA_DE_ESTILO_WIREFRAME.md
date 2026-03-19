# Hoja de estilo del sitio (base para wireframe)

## 1) Perfil del sistema visual
- Estética: editorial/técnica, oscura, minimalista, con acento neón.
- Framework: Next.js (App Router) + Tailwind utilitario + variables CSS en `:root`.
- Patrón dominante: bloques rectangulares con bordes de 1px, sin esquinas redondeadas, separación visual por “grilla continua” (`seamless-grid`).

## 2) Tokens de diseño

### 2.1 Colores (variables globales)
- `--bg`: `#040405` (fondo base)
- `--bg-soft`: `#090a0c` (fondo cabecera)
- `--panel`: `#0d0f12` (superficie principal)
- `--panel-strong`: `#121419` (hover/superficie elevada)
- `--border`: `#1d2026` (líneas divisorias)
- `--text`: `#f1f3f7` (texto principal)
- `--muted`: `#7c818b` (texto secundario)
- `--accent`: `#00ffe1` (acento interactivo)
- `--accent-soft`: `#345b6379` (glow/foco suave)
- `--accent-glow`: `#00fffb`
- `--danger`: `#ff5656` (errores en formulario)

### 2.2 Tipografía
- Principal UI/cuerpo: `Manrope` (`--font-manrope`)
- Titulares (`h1, h2, h3`): `Spectral` (`--font-spectral`)
- Etiquetas técnicas/chips/kickers: `IBM Plex Mono` (`--font-plex-mono`)
- Convención:
  - `mono-ui`: mayúsculas + `letter-spacing: 0.08em`
  - Titulares con `text-wrap: balance`
  - Cuerpo con `line-height` amplio y tono `muted`

### 2.3 Bordes, radios y superficies
- Radio global: `0` (`--radius: 0`)
- Bordes: casi todo `1px solid var(--border)`
- Superficies:
  - `panel`: bloque estándar
  - `panel-strong`: hover/énfasis
- Regla fuerte: se anulan redondeados Tailwind (`rounded-*` => 0)

### 2.4 Espaciado y escala práctica
- Padding estructural típico: `p-4`, `p-6`, `p-8`, `p-10`
- Separación vertical de secciones: `my-2` se fuerza a `0` por CSS global
- Alturas de módulos frecuentes:
  - bloques hero/intro desktop: `min-h ~320-340px`
  - tiles de galería/taller/reparaciones: `170-200px` (según breakpoint)
- Ancho de layout principal: `1080px` con `max-width: calc(100% - 2rem)`

### 2.5 Movimiento e interacción
- Transición base: `--ease-ui: 180ms ease`
- Modal:
  - fade + pop + entrada escalonada de items
- Reveal de contenido:
  - `BlurFade` (opacidad + blur + desplazamiento corto)
- Interacción de cards:
  - `MagicCard` con overlay radial de acento
- `prefers-reduced-motion` contemplado globalmente

## 3) Reglas de layout (macro)

### 3.1 Contenedor general
- Body centrado con ancho fijo máximo.
- Fondo con radial gradient superior (no plano).
- Scroll vertical siempre visible (`overflow-y: scroll`).

### 3.2 Sistema de grilla
- Home y secciones hero: grid de `5` columnas en desktop.
- Páginas internas:
  - Galería: 1–2 columnas
  - Reparaciones/Taller: 4–6 columnas
  - Ficha instrumento: 8 columnas
- Patrón `seamless-grid`:
  - gap real `1px`
  - fondo/borde unificado para que cada celda parezca “cortada” por líneas

### 3.3 Header y navegación
- Header sticky (`top: 0`) con borde y fondo `bg-soft`.
- Logo a izquierda + botón menú a derecha.
- Navegación móvil en modal full-screen con panel centrado.
- Links tipo “tile” de alto uniforme, hover a `panel-strong` + `accent`.

## 4) Componentes UI (para wireframe)

### 4.1 Módulo de encabezado de sección (`PageIntroHeader`)
- Estructura:
  1. kicker mono (Sección/Colección/Ficha)
  2. título serif grande (peso light)
  3. descripción breve muted
- Uso: repetido en home e internas para consistencia narrativa.

### 4.2 Hero principal home
- Split 2/3 + 3/3 (desktop):
  - izquierda: propuesta de valor (H1 + párrafo)
  - derecha: croquis/imagen técnica destacada
- Ambos en panel con borde, unidos por grilla continua.

### 4.3 Bandas de contenido home
- `Instrumentos`, `Reparaciones`, `Galería`, `Testimonios`, `Contacto`
- Cada banda usa:
  - encabezado textual + CTA (lado A)
  - bloque visual/multimedia (lado B)
- CTA recurrente:
  - botón mono, alineado a esquina inferior, bordes abiertos en lado derecho/inferior.

### 4.4 Cards y listas
- Testimonios:
  - card fija en altura con:
    - cabecera autor (mono + accent)
    - cuerpo comentario
    - pie decorativo con estrellas
- Galería (listado):
  - fila clickeable con miniatura circular superpuesta + título
  - abre modal con slider

### 4.5 Modal de navegación / modal de galería
- Fondo oscurecido + blur.
- Contenedor central panel con borde.
- Cierre por overlay + botón explícito “Cerrar”.
- En galería: carrusel con controles laterales y dots.

### 4.6 Formulario de contacto
- Estructura:
  1. Header de formulario (kicker + explicación)
  2. Campos en bloque (nombre, email, teléfono, mensaje)
  3. Footer con botón submit
  4. Estado de feedback (éxito/error) bajo el form
- Inputs:
  - fondo `panel-strong`, borde 1px, tipografía simple, labels mono.

### 4.7 Footer
- Grilla 5 columnas:
  - bloque marca/claim/CTA (2 col)
  - 3 columnas de enlaces (Navegación, Servicios, Redes)
- Cierre inferior con versión y crédito técnico.

## 5) Plantillas de páginas (wireframe por tipo)

### 5.1 Home
1. Header sticky
2. Hero split (texto + croquis)
3. Ribbon horizontal de tags
4. Banda Instrumentos
5. Banda Reparaciones
6. Banda Galería
7. Intro Testimonios
8. Grilla de testimonios
9. Franja social (íconos)
10. Bloque Contacto (intro + formulario)
11. Footer

### 5.2 Página de sección (Galería / Reparaciones / Taller / Acerca de)
1. Header sticky
2. Intro de sección (`PageIntroHeader`)
3. Grilla principal de contenido visual/textual
4. Contacto (en la mayoría de layouts)
5. Footer

### 5.3 Ficha de instrumento (Buconero / Velluto / Eira)
1. Header sticky
2. Intro de ficha
3. Croquis numerado (vertical mobile / horizontal desktop)
4. Franja de marcas asociadas
5. Dos columnas:
  - especificaciones (lista numerada)
  - imagen de cuerpo del instrumento
6. Navegación entre modelos
7. Footer

## 6) Guía práctica para dibujar wireframes

### 6.1 Retícula sugerida
- Desktop: marco de 1080px, subdividido en 5 o 6 columnas según pantalla.
- Mobile: 1 columna base, módulos apilados, mantener bloques con borde.

### 6.2 Jerarquía visual
- Nivel 1: títulos serif grandes (H1/H2)
- Nivel 2: copy descriptivo muted
- Nivel 3: labels mono (kicker, botones, chips)
- Acento color solo para estados interactivos, indicadores y numeraciones.

### 6.3 Lenguaje de componentes
- Todo en “mosaico técnico”:
  - rectángulos duros
  - líneas finas continuas
  - microinteracciones discretas
- Evitar sombras fuertes y curvas suaves (no coincide con la identidad actual).

## 7) Convenciones de construcción (cómo se armó)
- Base UI con Tailwind utilitario + tokens CSS globales.
- Componentes reutilizables para:
  - encabezados de sección
  - tarjetas con efecto hover
  - animaciones de reveal
  - menús/modales
- Composición por secciones en páginas, no por un layout único monolítico.
- Contenido multimedia servido desde `public/` con `next/image`.

## 8) Observaciones de consistencia (rápidas)
- Muy buena coherencia de color, borde y estructura modular.
- La identidad depende mucho de `seamless-grid` + tipografía mono/serif; mantener esos 2 elementos en cualquier rediseño.
- Para wireframes de presentación, conviene destacar en cada bloque:
  - propósito
  - tipo de contenido (texto / imagen / acción)
  - variante desktop vs mobile
