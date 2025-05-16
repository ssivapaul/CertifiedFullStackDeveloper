const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const closeBtn = document.getElementById("close-btn");
const lightboxImage = document.getElementById("lightbox-image");

// ✅ Show lightbox with full image
galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    let fullSrc = item.src.replace("-thumbnail", "");
    lightboxImage.src = fullSrc;
    lightbox.style.display = "flex";
  });
});

// ✅ Hide lightbox on close button
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// ✅ Hide lightbox on clicking outside image (on lightbox background)
lightbox.addEventListener("click", (e) => {
  //if (e.target === lightbox) {
  lightbox.style.display = "none";
  //}
});
