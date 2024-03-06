const natureImg = document.getElementById('id-ph2')


natureImg.addEventListener('mouseover', () => {
    natureImg.style.position = 'relative';
    natureImg.style.transform = 'scale(2.5) translate(0%, 30%)'; // Enlarge the image by 1.5 times
    natureImg.style.transition = 'transform 0.3s'; // Add a smooth transition effect
    natureImg.style.zIndex = '10'; //Push image to front
  });
  natureImg.addEventListener('mouseout', () => {
    natureImg.style.position = 'relative';
    natureImg.style.transform = 'scale(1)';
    natureImg.style.transition = 'transform 0.2s';  // Reset the image size when mouse moves out
    natureImg.style.zIndex = '3' //Push image to front
  });

