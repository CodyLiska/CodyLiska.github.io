function scrollToContainer() {
  document
    .getElementById("image-container")
    .scrollIntoView({ behavior: "smooth" });
}

// Listen for when the modal is shown
var imageModal = document.getElementById('imageModal');
imageModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget;
  // Extract the URL from data-bs-* attributes
  var mediaUrl = button.getAttribute('data-bs-image');

  // Elements for image and video
  var modalImage = document.getElementById('modalImage');
  var modalVideo = document.getElementById('modalVideo');
  
  // Determine if it's an image or a video based on file extension
  if (mediaUrl.endsWith('.mp4')) {
    // Hide the image and show the video
    modalImage.style.display = 'none';
    modalVideo.style.display = 'block';
    modalVideo.querySelector('source').src = mediaUrl;
    modalVideo.load(); // Reload the video
  } else {
    // Hide the video and show the image
    modalVideo.style.display = 'none';
    modalImage.style.display = 'block';
    modalImage.src = mediaUrl;
  }
});

imageModal.addEventListener('hide.bs.modal', function () {
  var modalVideo = document.getElementById('modalVideo');
  modalVideo.pause(); // Pause the video when modal is closed
  modalVideo.currentTime = 0; // Reset the video to the start
});