# FINIS práctica web

Una demostración sencilla para aprender React y Bootstrap, separada del proyecto compartido FINIS. Los nombres, cantidades y movimientos son ejemplos; no hay conexión a bancos ni al backend.

## Cómo ejecutarla

Abre una terminal en esta carpeta y ejecuta:

```powershell
npm.cmd install
npm.cmd run dev
```

Abre en el navegador la dirección `Local` que aparezca. Para detener el servidor usa Ctrl+C. Bootstrap y la tipografía se descargan de internet.

## Qué contiene

- `index.html`: página principal y enlace CDN de Bootstrap.
- `src/main.jsx`: inicia React y muestra `App`.
- `src/App.jsx`: datos de ejemplo, estados, efectos, búsqueda y cálculos.
- `src/components/`: barra superior, menú lateral, tarjeta de resumen y lista de movimientos, cada uno en su archivo.
- `src/dinero.js`: formato de importes en pesos mexicanos.
- `src/styles.css`: estilos propios de la página.

`App` importa los cuatro componentes y pasa datos mediante props, por ejemplo `usuario`, `valor` y `lista`. Los movimientos se convierten en filas con `.map()` y cada fila usa su `id` como `key`. Las tarjetas usan la cuadrícula de Bootstrap `row` y `col-md-4`.

## Qué mostrar para la tarea

1. **Componentes:** abre `src/components/` y muestra los archivos; en `App.jsx` se importan y se les pasan props.
2. **Primer uso de useState:** pulsa «Ocultar montos» y «Mostrar montos». Cambia el estado `mostrarMontos`.
3. **Segundo uso de useState:** escribe «alimentación» en el buscador. El estado `busqueda` filtra la tabla mientras escribes; prueba también una palabra que no exista.
4. **Primer useEffect:** recarga la página. Verás «Cargando...» durante dos segundos antes de los datos de ejemplo. El efecto usa `setTimeout` y limpia el temporizador al desmontar.
5. **Segundo useEffect:** escribe en el buscador y observa el título de la pestaña: cambia a «Buscando: ... | FINIS». Al borrar la búsqueda vuelve al título normal.

Los importes del resumen se calculan con todos los movimientos, no solo con los que coinciden con la búsqueda. Las imágenes del reporte deben mostrar tanto el resultado como el código correspondiente. La entrega también solicita el enlace al repositorio GitHub.

El botón solo oculta los montos de las tarjetas de resumen; las cantidades de la tabla siguen visibles. Es una interacción de demostración, no una función de privacidad.

## Cómo podría adaptarse a FINIS

Las tarjetas podrían mostrar un resumen real y la lista podría mostrar movimientos del usuario. Para ello primero hay que revisar con el equipo el esquema GraphQL, la autenticación y las reglas de acceso. Después se sustituirían los datos de ejemplo por respuestas de la API. La autorización y protección de datos deben ser aplicadas por el servidor. Esta práctica no implementa esas conexiones ni modifica la aplicación Android.
