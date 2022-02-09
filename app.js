const allButton = document.getElementsByClassName("buton-test");
const title = document.getElementById("title");
const prime = document.getElementById("prime");

for (const button of allButton) {
  button.addEventListener("click", function (e) {
    if (e.target.id == "prime") {
      title.style.color = "red";
    } else {
      title.style.color = "green";
    }
  });
}
