document.addEventListener("DOMContentLoaded", function () {
  // FOR NOTIFICATION BELL
  const bell = document.getElementById("bell"); //Selects the bell icon

  const notification = document.getElementById("notification"); //Selects the div with id "notification"

  // FOR THE PROFILE IMAGE PLACEHOLDER
  const showMenu = document.getElementById("dc"); //Selects the element with id "info"

  const showMenuMobile = document.getElementById("pi"); //Selects the element with id "info"

  const menu = document.getElementById("menu"); //Selects the div with id "info"

  // FOR DISMISS BUTTON
  const info = document.getElementById("info"); //Selects the div with id "info"

  const removeInfo = document.getElementById("remove-info"); //Selects the "x" icon

  // FOR NOTIFICATION BELL

  if (bell && notification) {
    bell.addEventListener("click", function () {
      if (
        notification.style.display === "none" ||
        notification.style.display === ""
      ) {
        notification.style.display = "block";
      } else {
        notification.style.display = "none";
      }
    });
  }

  // FOR THE PROFILE IMAGE PLACEHOLDER

  if (showMenu && menu) {
    showMenu.addEventListener("click", function () {
      if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
      } else {
        menu.style.display = "none";
      }
    });
  }

  if (showMenuMobile && menu) {
    showMenuMobile.addEventListener("click", function () {
      if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
      } else {
        menu.style.display = "none";
      }
    });
  }

  // FOR DISMISS BUTTON

  if (removeInfo) {
    removeInfo.addEventListener("click", function () {
      if (info) {
        info.style.display = "none";
      }
    });
  }
});

// FOR ACCORDION MENU

// document.addEventListener("DOMContentLoaded", function () {
//   const arrowDownButton = document.getElementById("arrow-down");
//   const arrowUpButton = document.getElementById("arrow-up");
//   const optionsContainer = document.querySelector(".options");
//   const firstOptionsDescription = document.querySelector(".options .des");
//   // const otherOptionsHeader = document.querySelector(".options-head");

//   arrowDownButton.addEventListener("click", function () {
//     optionsContainer.classList.toggle("show-options");
//     firstOptionsDescription.classList.toggle("show-description");
//     // otherOptionsHeader.classList.toggle("show-options-head");
//     arrowDownButton.style.display = "none";
//     arrowUpButton.style.display = "block";
//   });

//   arrowUpButton.addEventListener("click", function () {
//     optionsContainer.classList.toggle("show-options");
//     firstOptionsDescription.classList.toggle("show-description");
//     // otherOptionsHeader.classList.toggle("show-options-head");
//     arrowDownButton.style.display = "block";
//     arrowUpButton.style.display = "none";
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const arrowUp = document.getElementById("arrow-down");
//   const options = document.querySelectorAll(".options");

//   if (arrowUp) {
//     arrowUp.addEventListener("click", function () {
//       // Toggle visibility of the first .options element and its content
//       const firstOptions = options[0];
//       toggleVisibility(firstOptions);

//       // Toggle visibility of .options-head for the other 4 .options elements
//       for (let i = 1; i < options.length; i++) {
//         const otherOptionsHead = options[i].querySelector(".options-head");
//         toggleVisibility(otherOptionsHead);
//       }
//     });
//   }

//   function toggleVisibility(element) {
//     // Toggle the display property between 'block' and 'none'
//     element.style.display = element.style.display === "none" ? "block" : "none";
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const arrowUp = document.getElementById("arrow-down");
//   const options = document.querySelectorAll(".options");

//   if (arrowUp) {
//     arrowUp.addEventListener("click", function () {
//       // Toggle visibility of the first .options element and its content
//       const firstOptions = options[0];
//       toggleVisibility(firstOptions);

//       // Toggle visibility of .options-head for the other 4 .options elements
//       for (let i = 1; i < options.length; i++) {
//         const otherOptions = options[i];
//         toggleVisibility(otherOptions);
//         const otherOptionsHead = otherOptions.querySelector(".options-head");
//         toggleVisibility(otherOptionsHead);
//       }
//     });
//   }

//   function toggleVisibility(element) {
//     // Toggle the display property between 'block' and 'none'
//     element.style.display = element.style.display === "none" ? "block" : "none";
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const arrowDown = document.getElementById("arrow-down");
  const arrowUp = document.getElementById("arrow-up");

  if (arrowDown && arrowUp) {
    arrowDown.addEventListener("click", function () {
      arrowDown.style.display = "none";
      arrowUp.style.display = "block";
      showOptions();
      // Add your logic here for what should happen when arrow-down is clicked
    });

    arrowUp.addEventListener("click", function () {
      arrowUp.style.display = "none";
      arrowDown.style.display = "block";
      showOptions();
      // Add your logic here for what should happen when arrow-up is clicked
    });
  }
});

function showOptions() {
  const options = document.querySelectorAll(".options-head");
  options.forEach((option) => {
    option.style.display = "block";
  });
}
