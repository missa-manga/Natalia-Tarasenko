const pageLinks = document.querySelectorAll('.page_link');

scrollTo = (element) => {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
}

pageLinks.forEach(link => {
  if (link !== link) {
    link.addEventListener('click', () => {
      scrollTo(link);
    });
  }
});
