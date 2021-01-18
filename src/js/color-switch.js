const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const startButtonRef = document.querySelector('button[data-action="start"]');
const stopButtonRef = document.querySelector('button[data-action="stop"]');
const bodyRef = document.body;
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const currentInterval = {
  idInterval: 0,
  isActive: false,
  startInterval() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.idInterval = setInterval(() => {
      bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
    }, 1000);
  },
  stopInterval() {
    this.isActive = false;
    clearInterval(this.idInterval);
  },
};

startButtonRef.addEventListener(
  'click',
  currentInterval.startInterval.bind(currentInterval),
);
stopButtonRef.addEventListener(
  'click',
  currentInterval.stopInterval.bind(currentInterval),
);
