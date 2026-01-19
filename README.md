# Frontend Web17

Aplicación frontend construida con **React** y **Vite**, que proporciona una interfaz de usuario moderna y responsiva para la gestión de autenticación de usuarios.

## 📋 Descripción del Proyecto

Frontend web17 es una aplicación de una sola página (SPA) que implementa un sistema de autenticación y autorización. La aplicación permite a los usuarios:

- **Autenticación**: Login y logout de usuarios
- **Gestión de sesiones**: Manejo seguro de tokens y sesiones
- **Interfaz intuitiva**: Diseño responsivo con Tailwind CSS
- **Componentes reutilizables**: Arquitectura modular con componentes React

## 🛠️ Tecnologías Utilizadas

- **React 19.2.0** - Librería frontend
- **Vite 7.2.4** - Bundler y servidor de desarrollo
- **React Router 7.12.0** - Enrutamiento de la aplicación
- **React Hook Form 7.71.1** - Gestión de formularios
- **Tailwind CSS 4.1.18** - Estilos y diseño responsivo
- **ESLint** - Linting y análisis de código

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── AlertApp.jsx      - Componente para mostrar alertas
│   └── LogoutApp.jsx     - Componente de cierre de sesión
├── views/
│   ├── HomeScreen.jsx    - Pantalla principal
│   └── LoginScreen.jsx   - Pantalla de autenticación
├── helpers/
│   └── auth.js           - Funciones de autenticación
├── App.jsx               - Componente raíz
├── main.jsx              - Punto de entrada
├── App.css               - Estilos globales
└── index.css             - Estilos base
```

## 🚀 Primeros Pasos

### Requisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

El servidor de desarrollo estará disponible en `http://localhost:5173`

### Build

```bash
npm run build
```

Genera la versión de producción optimizada en la carpeta `dist/`.

### Preview

```bash
npm run preview
```

Previsualizacion local de la versión build.

### Lint

```bash
npm lint
```

Ejecuta ESLint para validar la calidad del código.

## 🔐 Autenticación

La aplicación implementa un sistema de autenticación que:

- Valida credenciales de usuario
- Gestiona tokens de sesión
- Proporciona protección de rutas autenticadas
- Maneja logout y cierre de sesión

## 📝 Notas

- React Compiler está habilitado para mejora de rendimiento
- La aplicación utiliza ESLint para mantener estándares de código
- Se recomienda usar TypeScript en futuros desarrollos
