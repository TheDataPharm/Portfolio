document.addEventListener("DOMContentLoaded", function() {
  const textElements = document.querySelectorAll(".text-animation");

  textElements.forEach((element, index) => {
    const text = element.textContent;
    element.innerHTML = '';

    text.split('').forEach((char, charIndex) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.animationDelay = `${charIndex * 0.1 + index * 5}s`; // Add delay based on character and line index
      span.style.animationDuration = '0.5s'; // Duration for each character's animation
      element.appendChild(span);
    });
  });

  const totalDuration = textElements.length * 5 + textElements[textElements.length - 1].textContent.length * 0.1;

  textElements[textElements.length - 1].addEventListener('animationend', () => {
    setTimeout(() => {
      textElements.forEach(el => {
        el.style.animation = 'none';
        el.offsetHeight; /* Trigger reflow */
        el.style.animation = '';
      });
    }, totalDuration * 1000); // Delay before resetting animations
  });
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
