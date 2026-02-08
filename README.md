# SEEK - Sistema de Gestión de Tareas

Este proyecto es una aplicación de gestión de tareas desarrollada como parte de un reto técnico. Implementa una arquitectura limpia, gestión de estado centralizada, autenticación simulada y un diseño responsivo.

## Características

- **Autenticación**: Inicio de sesión con Nombre y Correo electrónico. Incluye validación de integridad (un nombre no puede usarse con otro correo una vez registrado).
- **Dashboard de Tareas**: Vista general con estadísticas (Total, En Progreso, Completadas).
- **CRUD de Tareas**: Creación, edición, cambio de estado y eliminación de tareas.
- **Seguridad de Rutas**: Protección de rutas privadas (Dashboard) y redirección automática.
- **Diseño Premium**: Interfaz moderna, responsiva y con micro-animaciones usando CSS Vanilla.

## Tecnologías Utilizadas

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Gestión de Estado**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Iconografía**: [Lucide React](https://lucide.dev/)
- **Testing**: [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Requisitos Previos

- **Node.js**: Versión 18.0.0 o superior recomendada.
- **npm**: Versión 9.0.0 o superior.

## Instalación y Configuración

1.  **Clonar el repositorio**:

    ```bash
    git clone https://github.com/gianni03/seek-gestion-de-tareas.git
    cd seek-gestion-de-tareas
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

## Ejecución

### Modo Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

### Construcción para Producción

Para generar el bundle optimizado:

```bash
npm run build
npm start
```

## Pruebas (Testing)

Para ejecutar la suite de pruebas unitarias:

```bash
npm test
```

Para ver la cobertura de los tests:

```bash
npm test -- --coverage
```

## Arquitectura del Proyecto

El proyecto sigue una estructura modular basada en funcionalidades (features) para escalabilidad:

- `src/app`: Definición de rutas y páginas (Next.js App Router).
- `src/components/ui`: Componentes de interfaz de usuario reutilizables y atómicos.
- `src/features`: Lógica de negocio y componentes específicos de cada funcionalidad (ej. `task`).
- `src/services`: Capa de servicios para comunicación con la API (mocks en este caso).
- `src/store`: Gestión de estado global con Zustand.
- `src/types`: Definiciones de tipos TypeScript globales.
- `src/utils`: Funciones de utilidad y helpers.



## Documentación consultada


- [Tsdocs](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Lucide React](https://lucide.dev/guide/)
- [Jest](https://jestjs.io/docs)
- [jes Functions](https://jestjs.io/docs/expect)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

---

Desarrollado para el reto técnico de SEEK.
