const getGreeting = document.querySelector('.main-page__greeting');
const getButton = document.querySelector('.read_manga');

const fadeIn = (node, initClass) => {
  node.className = `${initClass} show`;
}

setTimeout(() => {
  fadeIn(getGreeting, 'main-page__greeting');
}, 400);

setTimeout(() => {
  fadeIn(getButton, 'read_manga');
}, 1200);
