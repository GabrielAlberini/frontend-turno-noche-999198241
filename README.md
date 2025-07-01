# 📖 Clase 1: Introducción al Desarrollo Web

## 🎯 Objetivos de la Clase

- Comprender los fundamentos del desarrollo web
- Configurar el entorno de desarrollo
- Instalar y configurar Visual Studio Code
- Configurar Live Server para desarrollo local
- Crear tu primera página web

---

## 🛠️ Configuración del Entorno de Desarrollo

### 📥 Instalación de Visual Studio Code

1. **Descargar VS Code:**

   - Ve a [code.visualstudio.com](https://code.visualstudio.com)
   - Descarga la versión para tu sistema operativo
   - Instala siguiendo las instrucciones del instalador

2. **Extensiones Recomendadas:**

   - **Live Server** (Ritwick Dey) - Para servidor local
   - **HTML CSS Support** - Para autocompletado

     **_Plus:_**

   - **Auto Rename Tag** - Para HTML
   - **Prettier** - Para formateo de código

### ⚡ Configuración de Live Server

1. **Instalar Live Server:**

   - Abre VS Code
   - Ve a la pestaña de extensiones (Ctrl+Shift+X)
   - Busca "Live Server"
   - Instala la extensión de Ritwick Dey

2. **Configurar Live Server:**
   - Crea una carpeta para tu proyecto
   - Abre la carpeta en VS Code
   - Crea un archivo `index.html`
   - Haz clic derecho en el archivo
   - Selecciona "Open with Live Server"

---

## 🌐 Fundamentos del Desarrollo Web

### ¿Qué es el Desarrollo Web?

El desarrollo web es el proceso de crear sitios web y aplicaciones que se ejecutan en navegadores web. Incluye:

- **Frontend:** Lo que ve el usuario (HTML, CSS, JavaScript)
- **Backend:** La lógica del servidor (bases de datos, APIs)
- **Full Stack:** Desarrollo completo (frontend + backend)

### 🏗️ Arquitectura Cliente-Servidor

```
┌─────────────┐    HTTP/HTTPS    ┌─────────────┐
│   Cliente   │ ←──────────────→ │   Servidor  │
│ (Navegador) │                  │             │
└─────────────┘                  └─────────────┘
```

### 📚 Tecnologías que Aprenderemos

#### Módulo 1: HTML y CSS

- **HTML5:** Estructura y contenido
- **CSS3:** Estilos y diseño
- **Bootstrap:** Framework CSS

#### Módulo 2: JavaScript

- **JavaScript ES6+:** Programación del lado del cliente
- **DOM:** Manipulación de elementos web
- **React:** Introducción a frameworks

#### Módulo 3: React Avanzado

- **React:** Desarrollo de aplicaciones
- **Redux:** Gestión de estado
- **React Router:** Navegación

---

## 🚀 Tu Primera Página Web

### 📝 Código HTML Básico

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mi Primera Página Web</title>
  </head>
  <body>
    <h1>¡Hola Mundo!</h1>
    <p>Esta es mi primera página web creada con HTML.</p>
    <p>¡Bienvenido al curso de desarrollo frontend!</p>
  </body>
</html>
```

### 📋 Pasos para Crear tu Primera Página:

1. **Crear la estructura de carpetas:**

   ```
   mi-proyecto/
   ├── index.html
   ├── css/
   ├── js/
   └── images/
   ```

2. **Crear el archivo HTML:**

   - Abre VS Code
   - Crea un nuevo archivo
   - Guárdalo como `index.html`
   - Copia el código HTML básico

3. **Ejecutar con Live Server:**
   - Haz clic derecho en `index.html`
   - Selecciona "Open with Live Server"
   - Tu navegador se abrirá automáticamente

---

## 🎨 Conceptos Básicos de Diseño Web

### 📱 Responsive Design

- **Mobile First:** Diseñar primero para móviles
- **Breakpoints:** Puntos de cambio de diseño
- **Flexible Layouts:** Diseños que se adaptan

### 🎯 Principios de UX/UI

- **Usabilidad:** Fácil de usar
- **Accesibilidad:** Accesible para todos
- **Rendimiento:** Carga rápida
- **SEO:** Optimizado para buscadores

---

## 📚 Recursos Adicionales

### 🔗 Enlaces Útiles

- [MDN Web Docs](https://developer.mozilla.org/es/) - Documentación oficial
- [W3Schools](https://www.w3schools.com/) - Tutoriales interactivos
- [CSS-Tricks](https://css-tricks.com/) - Trucos de CSS
- [Stack Overflow](https://stackoverflow.com/) - Comunidad de desarrolladores

### 📖 Libros Recomendados

- "HTML & CSS: Design and Build Websites" - Jon Duckett
- "JavaScript & jQuery" - Jon Duckett
- "Learning Web Design" - Jennifer Niederst Robbins

---

## 🏠 Tarea para la Próxima Clase

### ✅ Ejercicio Práctico

1. **Instalar VS Code** y las extensiones recomendadas
2. **Configurar Live Server** y probar que funcione
3. **Crear una página web personal** con:
   - Título con tu nombre
   - Una breve descripción sobre ti
   - Una lista de tus hobbies
   - Una imagen (opcional)

### 📝 Código de Ejemplo para la Tarea

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mi Página Personal</title>
  </head>
  <body>
    <h1>Mi Nombre</h1>
    <p>Soy un estudiante de desarrollo web frontend.</p>

    <h2>Mis Hobbies</h2>
    <ul>
      <li>Programar</li>
      <li>Leer</li>
      <li>Música</li>
    </ul>
  </body>
</html>
```

---

## ❓ Preguntas Frecuentes

### ¿Por qué usar VS Code?

- **Gratuito** y de código abierto
- **Ligero** y rápido
- **Extensible** con muchas extensiones
- **Comunidad activa** y soporte

### ¿Qué es Live Server?

- **Servidor local** que se actualiza automáticamente
- **No requiere configuración** compleja
- **Perfecto para desarrollo** frontend
- **Actualización en tiempo real** al guardar archivos

### ¿Necesito conocimientos previos?

- **No es necesario** tener experiencia previa
- **Conocimientos básicos** de computación son suficientes
- **Curiosidad y ganas** de aprender son lo más importante

---

## 🎉 ¡Listo para Empezar!

¡Felicitaciones! Ya tienes todo configurado para comenzar tu viaje en el desarrollo web. En la próxima clase profundizaremos en HTML y aprenderemos a crear estructuras más complejas.

**Recuerda:** La práctica es la clave del éxito. ¡No dudes en experimentar y hacer preguntas! 🚀

---

_📧 **Contacto:** Si tienes dudas, no dudes en consultar durante la clase o por los canales de comunicación establecidos._