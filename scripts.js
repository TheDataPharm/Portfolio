document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.querySelector(".text-animation");
  const text = textElement.textContent;
  textElement.innerHTML = '';

  // Wrap each character in a <span>
  text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.setProperty('--char-index', index);
    textElement.appendChild(span);
  });

  // Function to reset the animation for repeating effect
  function resetAnimation() {
    textElement.style.animation = 'none';
    textElement.offsetHeight; // Trigger reflow
    textElement.style.animation = null;
  }

  // Call the reset function to loop the animation
  textElement.addEventListener('animationend', resetAnimation);
});


document.addEventListener("DOMContentLoaded", function() { 
  const slides = document.querySelectorAll(".text-slide"); 
  // Adjust this function to reset and trigger the animation loop
  function resetAnimation() {
    slides.forEach((slide, index) => { 
      slide.style.animation = 'none'; 
      slide.offsetHeight; // Trigger reflow 
      slide.style.animation = `slide 10s infinite`;
    }); 
  } // Call the reset function if needed
  resetAnimation(); 
});
