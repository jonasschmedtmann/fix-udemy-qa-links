const btnConvert = document.querySelector('.btn--convert');
const outputEl = document.querySelector('.output');

btnConvert.addEventListener('click', () => {
  const input = document.querySelector('.input').value;
  if (!input) return;

  const inputArr = input.split('\n');

  outputEl.innerHTML = inputArr
    .map(
      link =>
        `<p><a target="_blank" href="https://www.udemy.com/instructor/communication/qa/${link
          .split('/')
          .pop()}/detail/">https://www.udemy.com/instructor/communication/qa/${link
          .split('/')
          .pop()}/detail/</a></p>`
    )
    .join('\n');
});
