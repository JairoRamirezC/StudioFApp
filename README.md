# StudioFApp
StudioFApp es una Landing que sirve para presentar sus productos y dar a conocer la marca. Con esto se podra demostrar la destresa que tiene el desarrollador Frontend trabajando en proyectos con React + TypeScript + Vite

# Tabla de Contenidos
- [Instalación](#instalación)
- [Uso](#uso)
- [Capturas de Pantalla](#capturas-de-pantalla)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Visitar Pagina](#visitar-pagina)


# Instalación
Es importante seguir estos pasos para poder ejecutar la plataforma de manera local
En mi caso trabajé con npm

### Clonar el repositorio (https://github.com/JairoRamirezC/StudioFApp/tree/main)
git clone git@github.com:JairoRamirezC/StudioFApp.git

### Navegar al directorio del proyecto
cd StudioFApp

### SASS
```npm install --save-dev node-sass``` Y ```npm install -D sass-embedded```

### Material UI
```npm install @mui/material @emotion/react @emotion/styled @mui/lab```


# Uso
```npm run dev```

# Capturas de Pantalla
![image](https://github.com/user-attachments/assets/cbc126ea-28a0-4eb0-a685-08c4cef8b40f)

![image](https://github.com/user-attachments/assets/7f1f3ce8-b32d-4b1b-afd8-c1c818f97a1e)

# Estructura del Proyecto
```plaintext
# StudioFApp/
│── node_modules/
│── public/
│── src/
│   │── assets/
│   │   │── Icons/
│   │   │── Images/
│   │── common/
│   │   │── context/
│   │   │── utils/
│   │── components/
│   │   │── blusones-section/
│   │   │── drop-down-menu/
│   │   │── footer/
│   │   │── hero-section/
│   │   │   │── _hero_section.scss
│   │   │   │── HeroSection.tsx
│   │   │── info-card/
│   │   │── navbar/
│   │   │── tabs-info/
│   │   │── top-banner-slider/
│   │── hooks/
│   │   │── useIsMobile.tsx
│   │── pages/
│   │   │── _page_studiof.scss
│   │   │── PageStudiof.tsx
│   │── Styles/
│   │   │── Variables.scss
│── main.tsx
│── vite-env.d.ts
│── .gitignore
│── eslint.config.js
│── index.html
│── package.json
│── package-lock.json
│── README.md
│── tsconfig.app.json
│── tsconfig.json
│── tsconfig.node.json
│── vite.config.ts
└── README.md
```
# Tecnologías Utilizadas
- React
- Typescript
- Context
- Sass
- Material UI

# Visitar Pagina
[https://jairoramirezc.github.io/](https://jairoramirezc.github.io/StudioFApp/)
