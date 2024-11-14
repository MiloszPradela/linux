# React + Vite

  Docker:
  
Zbuduj i uruchom kontener:
docker-compose up --build

(Opcjonalnie) Uruchom kontener w tle:
docker-compose up -d --build

Sprawdź status kontenerów:
docker-compose ps

Zatrzymaj kontenery:
docker-compose down

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
