# Mapas Bíblicos Interactivos

Repositorio de mapas interactivos para el estudio bíblico, organizados libro por libro según las divisiones clásicas de la Biblia.

## Estructura del repositorio

```
biblia-mapas/
├── index.html              ← Menú principal navegable
├── manifest.json           ← PWA del menú
├── sw.js                   ← Service worker (offline)
├── icon-192.png            ← Ícono general
├── icon-512.png
├── README.md               ← Este archivo
├── mapa-heb/               ← Mapa de Hebreos (DISPONIBLE)
│   ├── index.html
│   ├── manifest.json
│   ├── sw.js
│   └── icon-*.png
├── mapa-mat/               ← Mateo (DISPONIBLE)
├── mapa-mar/               ← Marcos (DISPONIBLE)
├── mapa-luc/               ← Lucas (DISPONIBLE)
├── mapa-jua/               ← Juan (DISPONIBLE)
├── mapa-gen/               ← Génesis (placeholder)
├── map-exo/                ← Éxodo (placeholder)
├── ... (una carpeta por cada libro)
└── mapa-apo/               ← Apocalipsis (placeholder)
```

## Estado actual

- **66 libros** organizados en **10 divisiones** temáticas
- **5 mapas disponibles**:
  - **Hebreos** (~104 nodos, 9 clusters, griego interlineal, versiones comparativas)
  - **Mateo** (~75 nodos) · **Marcos** (~65 nodos) · **Lucas** (~69 nodos) · **Juan** (~70 nodos)
- **61 mapas en preparación**: páginas placeholder listas para cuando se desarrolle cada libro

## Niveles de estudio

Cada mapa tiene tres niveles de profundidad (selector arriba a la derecha):

| Nivel | Contenido |
|-------|-----------|
| 🌿 **Básico** | Versículos + 1 comentario clásico por nodo |
| 🌊 **Intermedio** | + 2 comentarios extendidos de eruditos por nodo, glosario teológico, enlaces «Contexto» y versiones comparativas (RVR · NVI · LBLA) |
| 🔮 **Avanzado** | + Texto griego interlineal con análisis de términos |

**Feedback visual al cambiar de nivel**:
- Al cambiar de nivel aparece un **panel de resumen** con lo que se activa (conteos reales) y un botón para resaltar esos nodos.
- Los nodos con contenido nuevo del nivel llevan la etiqueta **NUEVO** (azul: versiones · púrpura: griego) y un aro de color, que **permanecen mientras estás en ese nivel**.
- La pastilla **«Novedades»** (junto a los filtros) resalta solo esos nodos y atenúa el resto.
- En **Básico**, los puntos azul/púrpura sobre los nodos indican que hay contenido adicional disponible en niveles superiores.

## Categorías de color

| Color | Categoría | Libros |
|-------|-----------|--------|
| 🟡 Oro | AT · Figura | Pentateuco + Históricos |
| 🔵 Azul | Pacto / Promesa | Poéticos y Sabiduría |
| 🟣 Púrpura | Esperanza | Profetas + Apocalipsis |
| 🔴 Rojo | Cristo | Evangelios + Hebreos |
| 🟢 Verde | Iglesia | Hechos + Cartas |

## Cómo usar

### Versión online (GitHub Pages)

1. Sube este repositorio a GitHub
2. Activar Pages: Settings → Pages → Source: Deploy from a branch → Branch: main / root
3. URL resultante: `https://TU_USUARIO.github.io/mapas-biblicos/`

### Versión offline (PWA instalable)

1. Abre la URL en tu celular
2. Android (Chrome): menú ⋮ → "Instalar aplicación"
3. iPhone (Safari): botón Compartir → "Añadir a pantalla de inicio"

Una vez instalada, funciona sin conexión a internet.

## Cómo agregar un nuevo mapa

Cuando desarrolles un mapa nuevo (ej: Romanos):

1. Crea la carpeta `mapa-rom/` (usa la abreviatura de 3 letras)
2. Coloca dentro: `index.html`, `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, `favicon-32.png`
3. Actualiza `index.html` raíz: cambia la clase `coming-soon` a `available` en la card de Romanos, y actualiza el `href` a `mapa-rom/index.html`
4. Actualiza `sw.js` para incluir los nuevos archivos en caché
5. Sube los cambios a GitHub

## Referencia visual

El diseño sigue el estilo del mapa de Hebreos:
- Tema oscuro con resplandores radiales de colores
- Tipografía sans-serif (Segoe UI / system)
- Animaciones de flujo en flechas
- Hover resalta conexiones luminosas
- Modal full-screen en móvil

## Créditos de comentarios

Los comentarios incluidos provienen de eruditos clásicos:
- Juan Calvino
- John Owen
- Agustín de Hipona
- Matthew Henry
- Juan Crisóstomo
- Tomás de Aquino

## Licencia

Uso personal y educativo.
