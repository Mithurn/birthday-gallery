// Get modal, modal image, and close button
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModalButton = document.getElementById("closeModal");

// Event delegation: Add click event to the gallery container
document.querySelector('.gallery-container').addEventListener("click", function(event) {
    if (event.target && event.target.classList.contains('gallery-image')) {
        const image = event.target;
        modal.style.display = "block";        // Show the modal
        modalImg.src = image.src;            // Set clicked image as modal content
        modalImg.alt = image.alt || "Image";  // Set alt text for the modal image
    }
});

// Function to close the modal
function closeModal() {
    modal.style.display = "none";           // Hide the modal
}

// Event listener for close button
if (closeModalButton) {
    closeModalButton.addEventListener("click", closeModal);
}

// Close modal when clicking outside the image
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Prevent modal closing when clicking on the image
modalImg.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent event from propagating to the modal container
});
