// Список компонент (from components.js)
const components = {
  content: new Content(),
  game1:new Roulette(),
  chips:new Chips(),
};

// Список поддерживаемых роутов (from pages.js)
const routes = {
  main: HomePage,
  default: HomePage,
  error: ErrorPage,
  enter: EnterPage,
  roulette:RoulettePage,
  slot:SlotPage,
};

// Инициализация приложения
document.addEventListener('DOMContentLoaded', () => {
  const app = new App({
    containerId: 'app',
    routes,
    components,
  });
  app.init();
});

// Инициализация приложения