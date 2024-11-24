document.addEventListener("DOMContentLoaded", function() {
  const textElements = document.querySelectorAll(".text-animation");

  textElements.forEach((element, index) => {
    const text = element.textContent;
    element.innerHTML = '';

    // Wrap each character in a <span> and set animation delay
    text.split('').forEach((char, charIndex) => {
      const span = document.createElement('span');
      span.textContent = char;
      // Calculate the delay for each character and each paragraph
      span.style.animationDelay = `${charIndex * 0.1 + index * 6}s`;
      span.style.animationDuration = '0.5s'; // Duration for each character's animation
      element.appendChild(span);
    });
  });

  const totalDuration = textElements.length * 6 + textElements[textElements.length - 1].textContent.length * 0.1;

  // Set timeout to reset animations
  setTimeout(() => {
    textElements.forEach(el => {
      el.style.animation = 'none';
      el.offsetHeight; // Trigger reflow
      el.style.animation = '';
    });
  }, totalDuration * 1000 + 6000); // Total duration for all animations plus extra delay for reset
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
