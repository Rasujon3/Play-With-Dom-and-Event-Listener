// const allButton = document.getElementsByClassName("buton-test");
// const title = document.getElementById("title");
// const prime = document.getElementById("prime");

// for (const button of allButton) {
//   button.addEventListener("click", function (e) {
//     if (e.target.id == "prime") {
//       title.style.color = "red";
//     } else {
//       title.style.color = "green";
//     }
//   });
// }

let count = 0;

function add(e) {
  count++;
  control("count");
}
function minus(e) {
  if (count > 0) {
    count--;
    control("count");
  } else {
    count = 0;
  }
}

function control(id) {
  document.getElementById(id).innerText = count;
}
