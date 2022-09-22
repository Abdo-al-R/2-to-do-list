const input = document.getElementById("input");
const button = document.querySelector(".icon-arrow-up");
const container = document.getElementById("container");

button.addEventListener("click", (eo) => {
  eo.preventDefault();
  const task = ` <div class="task">
          <span class="icon-star-full icon"></span>
          <p class="text-line">${input.value}</p>
  
          <div class="small-container">
              <span class="icon icon-angry2"></span>
              <span class="icon-cross icon"></span>
          </div>
     </div>     `;

  container.innerHTML += task;
  input.value = " "
});

container.addEventListener("click", (eo) => {

  switch (eo.target.className) {
    case "icon-cross icon":
      eo.target.parentElement.parentElement.remove();
      break;
  
    case "icon icon-angry2":
      eo.target.classList.remove("icon-angry2");
      eo.target.classList.add("icon-heart");
  
      eo.target.parentElement.parentElement.getElementsByClassName("text-line")[0].classList.add("line");
  
      break;
  
    case "icon icon-heart":
          eo.target.classList.remove("icon-heart");
          eo.target.classList.add("icon-angry2");
          eo.target.parentElement.parentElement.getElementsByClassName("text-line")[0].classList.remove("line");
      break;
  
    case "icon-star-full icon":
      eo.target.classList.add("yellow");
      container.prepend(eo.target.parentElement)
      break;
  
    case "icon-star-full icon yellow":
      eo.target.classList.remove("yellow");
      break;
  
  
  
    default:
      break;
  }

});

