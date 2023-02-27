const box = document.getElementById("box");
let count = 0;
box.addEventListener("mouseover", function () {
  count++;
  if (count == 1) {
    this.classList.add("over");
    this.innerText = "사랑해";
  } else {
    if (count <= 10) {
      this.innerText += "사랑해";
    } else {
      this.classList.add("over10");
      this.innerText = "그만해!!!";
    }
  }
});
