const natureImg = document.getElementById('id-ph2')


natureImg.addEventListener('mouseover', () => {
    natureImg.style.transform = 'scale(1.5)'; // Enlarge the image by 1.5 times
    natureImg.style.transition = 'transform 0.3s'; // Add a smooth transition effect
  });
  natureImg.addEventListener('mouseout', () => {
    natureImg.style.transform = 'scale(1)';
    natureImg.style.transition = 'transform 0.2s';  // Reset the image size when mouse moves out
  });

