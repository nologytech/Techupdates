// Check if user is returning from Page 1
const params = new URLSearchParams(window.location.search);
const isReturning = params.get("return") === "1";

if (!isReturning) {
  // Redirect to Page 1 with ?from=page2
  window.location.href = "https://unitconverter4u.github.io/Unitconverter/?from=page2";
} else {
  // Wait 5 seconds and then show Get Link button
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
    window.location.href = "https://pastelink.net/3rr6bksq"; // Replace with your actual link
  });
}
