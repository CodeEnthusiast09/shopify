let remove = document.getElementsByClassName("info");

const removed = () => {
  document.getElementsByClassName("info").innerHTML = '';
};

document.addEventListener("DOMContentLoaded", function () {
  const arrowDownButton = document.getElementById("arrow-down");
  const arrowUpButton = document.getElementById("arrow-up");
  const optionsContainer = document.querySelector(".options");
  const firstOptionsDescription = document.querySelector(".options .des");

  arrowDownButton.addEventListener("click", function () {
    optionsContainer.classList.toggle("show-options");
    firstOptionsDescription.classList.toggle("show-description");
    arrowDownButton.style.display = "none";
    arrowUpButton.style.display = "block";
  });

  arrowUpButton.addEventListener("click", function () {
    optionsContainer.classList.toggle("show-options");
    firstOptionsDescription.classList.toggle("show-description");
    arrowDownButton.style.display = "block";
    arrowUpButton.style.display = "none";
  });
});
