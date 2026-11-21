==================================================
  HEBREOS · MAPA CONSTELAR INTERACTIVO (PWA)
==================================================

¿QUÉ ES ESTO?
--------------
Una Progressive Web App (PWA): una "aplicación web" que puedes
instalar en tu celular como si fuera una app nativa, con su propio
ícono en la pantalla de inicio, pantalla completa y funciona SIN
conexión a internet (offline).


CONTENIDO DE LA CARPETA
------------------------
  index.html            → El mapa interactivo (autocontenido)
  manifest.json         → Define cómo se ve la app instalada
  sw.js                 → Service worker (permite uso offline)
  icon-192.png          → Ícono para Android
  icon-512.png          → Ícono grande (Android/iOS)
  apple-touch-icon.png  → Ícono para iPhone/iPad
  favicon-32.png        → Favicon
  README.txt            → Este archivo


CÓMO INSTALARLO EN EL CELULAR
------------------------------

OPCIÓN A — MÁS FÁCIL (subir a Netlify Drop, gratis):
  1. En tu computadora, ve a https://app.netlify.com/drop
  2. Arrastra TODA esta carpeta (pwa-hebreos) al cuadro de Drop
  3. Te dará una URL pública como https://algo.netlify.app
  4. Abre esa URL en el navegador del celular
  5. Sigue los pasos de "Instalar" abajo

OPCIÓN B — GitHub Pages (gratis, requiere cuenta GitHub):
  1. Sube el contenido de esta carpeta a un repositorio nuevo
  2. En Settings → Pages → activa "main" como source
  3. Abre la URL en el celular y sigue los pasos de "Instalar"

OPCIÓN C — Hosting propio (si tienes un servidor):
  Sube estos archivos a cualquier hosting que sirva HTTPS.


PASOS PARA INSTALAR COMO APP
----------------------------

▸ En ANDROID (Chrome o Edge):
  1. Abre la URL en el navegador
  2. Toca el menú ⋮ (arriba a la derecha)
  3. Selecciona "Agregar a pantalla de inicio" o "Instalar aplicación"
  4. Aparecerá el ícono en tu pantalla de inicio
  5. Ábrela como cualquier app — se ve en pantalla completa, sin barra de navegador

▸ En iOS (iPhone/iPad, Safari):
  1. Abre la URL en Safari
  2. Toca el botón Compartir (cuadrado con flecha arriba, abajo)
  3. Selecciona "Añadir a pantalla de inicio"
  4. Ajusta el nombre si quieres (por defecto "Hebreos")
  5. Toca "Añadir" — aparece el ícono en pantalla de inicio
  6. Ábrela desde el ícono — se ve en pantalla completa, sin barra de Safari

▸ En PC/ESCritorio (Chrome/Edge):
  1. Abre la URL
  2. Aparecerá un ícono de "Instalar" en la barra de direcciones
  3. O entra al menú ⋮ → "Instalar la página como aplicación"


USO OFFLINE
-----------
Una vez instalada, la app funciona SIN internet. La primera vez
que la abres se descarga el contenido; después puedes estudiar
offline (en el subte, en un viaje, etc.).


¿PREGUNTAS?
-----------
Esta PWA no requiere login ni permisos especiales. Es 100%
privada: tu progreso de estudio se guarda solo en tu dispositivo.
