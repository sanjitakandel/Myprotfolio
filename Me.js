
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}


const aboutTexts = [
  "I am studying at Nepathya College (Tilottama-5, Manigram).",
  "I enjoy problem-solving, coding, and building projects.",
  "I love learning new technologies and improving my skills.",
  "Exploring creativity through code makes me happy 🚀"
];

let index = 0;
const aboutElement = document.getElementById("about-text");

function updateAboutText() {
  aboutElement.classList.add("fade-out");
  setTimeout(() => {
    aboutElement.textContent = aboutTexts[index];
    index = (index + 1) % aboutTexts.length;
    aboutElement.classList.remove("fade-out");
  }, 1000); 
}


updateAboutText();


setInterval(updateAboutText, 5000);


document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (name && email && message) {
    formMessage.style.color = "lightgreen";
    formMessage.textContent = "Message sent successfully! ✅";
    this.reset();
  } else {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fill in all fields ❌";
  }
});
