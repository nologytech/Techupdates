// Show Get Link button after 5s
window.onload = () => {
  let countdown = 5;
  const info = document.getElementById("info");
  const linkSection = document.getElementById("linkSection");

  const timer = setInterval(() => {
    countdown--;
    info.textContent = `Please wait... ${countdown} seconds remaining`;

    if (countdown <= 0) {
      clearInterval(timer);
      info.textContent = "Your link is ready!";
      linkSection.classList.remove("hidden");
    }
  }, 1000);

  document.getElementById("getLinkBtn").addEventListener("click", () => {
    window.location.href = "https://pastelink.net/your-download-link"; // Replace with real Pastelink URL
  });
};
