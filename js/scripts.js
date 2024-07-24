function scrollToContainer() {
  document
    .getElementById("image-container")
    .scrollIntoView({ behavior: "smooth" });
}

function toggleModal() {
  const modal = document.getElementById('modal');
  if (modal.style.display === 'flex') {
      modal.style.opacity = '0';
      setTimeout(() => {
          modal.style.display = 'none';
      }, 300); // Fade out duration
  } else {
      modal.style.display = 'flex';
      setTimeout(() => {
          modal.style.opacity = '1';
      }, 50); // Fade in delay
  }
}

document.addEventListener('click', function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
      modal.style.opacity = '0';
      setTimeout(() => {
          modal.style.display = 'none';
      }, 300); // Fade out duration
  }
});