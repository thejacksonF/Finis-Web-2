# Evidencias de la práctica de dashboard reactivo

Alumno: __________________________  
Materia: __________________________  
Fecha: __________________________

## Proyecto

FINIS práctica web es un dashboard de ejemplo construido con React y Bootstrap. Sus movimientos son datos inventados. Las tarjetas y la lista muestran información financiera simulada.

## 1. Componentes y Bootstrap

**Captura 1:** en VS Code, muestra `src/components/` y los archivos `BarraSuperior.jsx`, `MenuLateral.jsx`, `TarjetaResumen.jsx` y `ListaMovimientos.jsx`. Muestra también la parte de `App.jsx` donde se importan.

**Captura 2:** toma una imagen de la página completa, con las tarjetas de resumen y los movimientos. En el código de `App.jsx` y `TarjetaResumen.jsx` se utiliza la cuadrícula de Bootstrap mediante `row` y `col-md-4`.

[Pegar aquí las capturas 1 y 2]

## 2. Estado local con useState

**Captura 3:** toma la página con el resumen visible y otra después de presionar «Ocultar montos». Muestra el estado `mostrarMontos` y el botón correspondiente en `src/App.jsx`.

**Captura 4:** escribe `alimentación` en el buscador y toma una imagen que muestre la tabla filtrada. Muestra el estado `busqueda` y el filtro en `src/App.jsx`, además del campo de búsqueda en `src/components/ListaMovimientos.jsx`.

[Pegar aquí las capturas 3 y 4]

## 3. Ciclo de vida con useEffect

**Captura 5:** recarga la página y toma una captura del mensaje «Cargando información...» antes de que pasen dos segundos. En `src/App.jsx`, muestra el primer `useEffect`, que utiliza `setTimeout` y cancela el temporizador cuando corresponde.

**Captura 6:** escribe algo en el buscador y muestra el título de la pestaña `Buscando: ... | FINIS`. En `src/App.jsx`, muestra el segundo `useEffect`, que cambia `document.title` al cambiar la búsqueda.

[Pegar aquí las capturas 5 y 6]

## Enlace al repositorio

Repositorio de GitHub: __________________________

## Conclusión

La práctica integra componentes reutilizables, la cuadrícula de Bootstrap y estados que permiten filtrar movimientos y ocultar el resumen. También utiliza efectos para simular una carga y actualizar el título de la pestaña.
