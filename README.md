# Portafolio Emilio Troncoso

Sitio web del portafolio, publicado gratis con GitHub Pages.

## Publicarlo por primera vez (una sola vez, unos 10 minutos)

1. Crea una cuenta gratis en [github.com](https://github.com). El nombre de usuario aparecerá en la dirección del sitio; por ejemplo, `emiliotroncoso` da `https://emiliotroncoso.github.io`.
2. Arriba a la derecha, botón **+** → **New repository**.
3. En **Repository name** escribe exactamente `tuusuario.github.io` (con tu usuario real). Déjalo en **Public** y presiona **Create repository**.
4. En la página que aparece, haz clic en **uploading an existing file**.
5. Arrastra **todo el contenido** de esta carpeta: `index.html`, `proyectos.js`, `README.md`, `.nojekyll` y la carpeta `img`. Arrastra los archivos sueltos, no la carpeta que los contiene.
   - Si tu computador oculta `.nojekyll`, no importa: el sitio funciona igual.
6. Abajo, presiona **Commit changes**.
7. Ve a **Settings** → **Pages**. En **Branch** elige `main` y `/ (root)`, luego **Save**.
8. Espera uno o dos minutos y abre `https://tuusuario.github.io`. Ese es el link que va en tu CV.

## Agregar un proyecto nuevo

1. **Sube las fotos.** Entra a la carpeta `img` del repositorio → **Add file** → **Upload files**. Usa fotos `.jpg`, idealmente de no más de 1600 px de ancho, con nombres simples sin espacios ni tildes, por ejemplo `kayu-1.jpg`, `kayu-2.jpg`. Presiona **Commit changes**.
2. **Agrega el texto.** Abre `proyectos.js` → ícono del lápiz (**Edit**). Copia un bloque de proyecto completo, pégalo donde quieras que aparezca y cambia los textos. En `imgs` escribe los nombres de las fotos sin `.jpg`, por ejemplo `["kayu-1","kayu-2"]`.
3. Presiona **Commit changes**. En uno o dos minutos el sitio se actualiza.

Ejemplo de bloque:

```js
  { grupo:"proyectos", titulo:"Mobiliario infantil Kayu", anio:"2025",
    rol:"Diseño y desarrollo de fabricación", contexto:"Kayu Chile", tecnicas:"Router CNC, materiales FSC",
    desc:["Primer párrafo de descripción.","Segundo párrafo, si hace falta."],
    imgs:["kayu-1","kayu-2","kayu-3"] },
```

## Cambiar otras cosas

- **Orden de los proyectos:** mueve los bloques dentro de `proyectos.js`.
- **Quitar un proyecto:** borra su bloque completo, desde `{` hasta `},`.
- **Bio, docencia, charlas y contacto:** están escritos en `index.html`. Busca el texto con Ctrl+F dentro del editor y cámbialo.

## Si algo se rompe

- **La página queda sin proyectos:** falta una comilla `"` o una coma `,` en `proyectos.js`. Revisa el último bloque que editaste.
- **Una foto no aparece:** revisa que el nombre en `imgs` sea idéntico al archivo, sin `.jpg`, y respetando mayúsculas.
- **Volver atrás:** en GitHub, abre el archivo → **History**. Ahí están todas las versiones anteriores.
