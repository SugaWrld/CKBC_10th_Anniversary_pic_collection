const correctPassword = "ckbc2025"; // Change this to your desired password

function checkPassword() {
  const entered = document.getElementById("passwordInput").value;
  const loginError = document.getElementById("loginError");

  if (entered === correctPassword) {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("siteContent").style.display = "block";
    loadImages(); // start loading gallery images
  } else {
    loginError.style.display = "block";
  }
}


// 🖼️ Dynamically load images from IMG_7060 to IMG_8295
function loadImages() {
  const gallery = document.getElementById("gallery");
  const folder = "images/";
  const start = 7060;
  const end = 8295;

  for (let i = start; i <= end; i++) {
    const filename = `IMG_${i}.jpg`;
    const img = new Image();
    img.src = folder + filename;

    img.onload = () => {
      const card = document.createElement("div");
      card.className = "card";

      const thumb = document.createElement("img");
      thumb.src = img.src;
      thumb.alt = filename;
      thumb.onclick = () => openModal(img.src);

      const link = document.createElement("a");
      link.href = img.src;
      link.download = filename;
      link.className = "btn";
      link.innerText = "Download";

      card.appendChild(thumb);
      card.appendChild(link);
      gallery.appendChild(card);
    };

    img.onerror = () => {
      // silently skip missing images
    };
  }
}
