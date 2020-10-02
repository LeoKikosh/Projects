const toggle = document.getElementById("toggle");
const label = document.getElementById("main-label");

toggle.addEventListener("change", (e) => {
  document.body.classList.toggle("dark", e.target.checked);
  label.classList.toggle("white-circle");
  console.log(e);
});
