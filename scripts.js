document.addEventListener("DOMContentLoaded", function() {
  const textElement = document.querySelector(".text-animation");
  const lines = textElement.innerHTML.split('<br>');

  textElement.innerHTML = '';

  // Wrap each character of each line in a <span>
  lines.forEach((line, lineIndex) => {
    const lineSpan = document.createElement('span');
    lineSpan.classList.add('line');

    line.split('').forEach((char, charIndex) => {
      const charSpan = document.createElement('span');
      charSpan.textContent = char;
      charSpan.style.animationDelay = `${(lineIndex * 2) + (charIndex * 0.1)}s`; // Delay based on character and line index
      charSpan.style.animationDuration = '0.5s'; // Duration for each character's animation
      lineSpan.appendChild(charSpan);
    });

    textElement.appendChild(lineSpan);
    if (lineIndex < lines.length - 1) {
      textElement.appendChild(document.createElement('br')); // Add line break if not the last line
    }
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
