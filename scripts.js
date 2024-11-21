document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.querySelector(".text-animation");
  const text = textElement.textContent;
  textElement.innerHTML = '';

  text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.setProperty('--char-index', index);
    textElement.appendChild(span);
  });
});

