const authorMessage = document.querySelector(".author-message");
const nodes = document.querySelectorAll('.contacts-form__input');
const inputs = Array.from(nodes);

let offset = 0;

const effectHandler = () => {
  inputs.forEach(input => {
    setTimeout(() => {
      input.className = 'contacts-form__input show-inputs';
    }, offset);
    offset += 500;
  });
}

const myScrollFunc = () => {
  authorMessage.className = "author-message show";

  setTimeout(async () => {
    await effectHandler();
  }, 1000);
};

myScrollFunc();
