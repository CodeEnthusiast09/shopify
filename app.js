"use strict";

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

  const menuItems = document.querySelectorAll(".menuItems"); // Selects every menuItem

  // FOR NOTIFICATION BELL

  if (bell && notification) {
    bell.addEventListener("click", function () {
      toggleNotification();
    });

    bell.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        toggleNotification();
      } else if (event.key === "Escape") {
        closeNotification();
      }
    });
  }

  function toggleNotification() {
    if (
      notification.style.display === "none" ||
      notification.style.display === ""
    ) {
      notification.style.display = "block";
    } else {
      notification.style.display = "none";
    }
  }

  function closeNotification() {
    // Close notification logic
    notification.style.display = "none";
  }

  // FOR THE PROFILE IMAGE PLACEHOLDER

  function toggleMenu() {
    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }

  function closeMenu() {
    toggleMenu();
  }

  // Function to handle keyboard navigation
  function handleKeyboardNavigation(event) {
    if (event.key === "Escape") {
      // Close the menu on "Escape" key press
      closeMenu();
    }

    const isLastItem = menuItems.length - 1;
    const currentIndex = Array.from(menuItems).indexOf(document.activeElement);

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      // Move focus to the next item
      const nextIndex = currentIndex === isLastItem ? 0 : currentIndex + 1;
      menuItems[nextIndex].focus();
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      // Move focus to the previous item
      const prevIndex = currentIndex === 0 ? isLastItem : currentIndex - 1;
      menuItems[prevIndex].focus();
    }
  }

  // Add click event listener to toggle menu visibility
  showMenu.addEventListener("click", toggleMenu);

  // Add keyboard event listener to handle arrow keys and Escape
  showMenu.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      // Trigger toggle function on "Enter" or "Space" key press
      toggleMenu();
    } else {
      // Handle keyboard navigation for menu items
      handleKeyboardNavigation(event);
    }
  });

  // Add keyboard event listeners to menu items
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("keyup", handleKeyboardNavigation);
  });

  if (showMenuMobile && menu) {
    // Add click event listener
    showMenuMobile.addEventListener("click", toggleMenu);

    // Add keyboard event listener
    showMenuMobile.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        // Trigger toggle function on "Enter" or "Space" key press
        toggleMenu();
      }
    });
  }

  // FOR DISMISS BUTTON

  if (removeInfo) {
    removeInfo.addEventListener("click", function () {
      removeInformation();
    });

    removeInfo.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        removeInformation();
      }
    });
  }

  function removeInformation() {
    if (info) {
      info.style.display = "none";
    }
  }
});

//  FOR THE CUSTOM CHECKBOX, COUNTER AND PROGRESS BAR

document.addEventListener("DOMContentLoaded", function () {
  const checkBoxes = document.getElementsByClassName("checkbox");

  const checkedIcons = document.getElementsByClassName("checked");

  const count = document.getElementById("counter");

  const progress = document.getElementById("bar");

  let countChecked = 0;

  // TO TOGGLE CHECKBOX

  if (
    checkBoxes.length > 0 &&
    checkedIcons.length > 0 &&
    checkBoxes.length === checkedIcons.length
  ) {
    for (let i = 0; i < checkBoxes.length; i++) {
      checkBoxes[i].addEventListener("click", function () {
        toggleCheckbox(i);
        updateCheckedCount(i);
        updateProgress();
      });

      checkedIcons[i].addEventListener("click", function () {
        toggleCheckbox(i);
        updateCheckedCount(i);
        updateProgress();
      });

      // Add keyboard event listener for the "Enter" key
      checkBoxes[i].addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          toggleCheckbox(i);
          updateCheckedCount(i);
          updateProgress();
        }
      });

      // Add keyboard event listener for the "Enter" key on checked icons
      checkedIcons[i].addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          toggleCheckbox(i);
          updateCheckedCount(i);
          updateProgress();
        }
      });
    }
  }

  function toggleCheckbox(index) {
    checkBoxes[index].style.display =
      checkBoxes[index].style.display === "none" ? "block" : "none";
    checkedIcons[index].style.display =
      checkedIcons[index].style.display === "block" ? "none" : "block";
  }

  // TO COUNT CHECKED ITEMS

  function updateCheckedCount() {
    countChecked = 0;
    for (let i = 0; i < checkBoxes.length; i++) {
      if (checkBoxes[i].style.display === "none") {
        countChecked++;
      }
    }
    count.textContent = countChecked;
  }

  // FOR UPDATING THE PROGRESS BAR
  function updateProgress() {
    const totalCheckboxes = checkBoxes.length;
    const completionPercentage = (countChecked / totalCheckboxes) * 100;
    progress.style.width = `${completionPercentage}%`;
    progress.style.transition = "width 0.5s ease";
  }
});

// FOR ACCORDION MENU

document.addEventListener("DOMContentLoaded", function () {
  const arrowDown = document.getElementById("arrow-down");
  const arrowUp = document.getElementById("arrow-up");
  const showOptionsOrNot = document.getElementsByClassName("options");
  const heads = document.getElementsByClassName("options");
  const descriptions = document.getElementsByClassName("des");
  const images = document.getElementsByClassName("img");

  // Initial state: hide options
  toggleOptionsDisplay(showOptionsOrNot, true);
  showContent(0);

  if (arrowDown && arrowUp) {
    arrowDown.addEventListener("click", function () {
      toggleOptionsDisplay(showOptionsOrNot, true);
      arrowDown.style.visibility = "hidden";
      arrowUp.style.visibility = "visible";
      arrowUp.focus();
    });

    arrowDown.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        if (isFirstClick) {
          showContent(0);
          isFirstClick = false;
        } else {
          toggleOptionsDisplay(showOptionsOrNot, true);
        }
        arrowDown.style.visibility = "hidden";
        arrowUp.style.visibility = "visible";
        arrowUp.focus();
      }
    });

    arrowUp.addEventListener("click", function () {
      toggleOptionsDisplay(showOptionsOrNot, false);
      arrowDown.style.visibility = "visible";
      arrowUp.style.visibility = "hidden";
      arrowUp.focus();
    });

    arrowUp.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        toggleOptionsDisplay(showOptionsOrNot, false);
        arrowDown.style.visibility = "visible";
        arrowUp.style.visibility = "hidden";
        arrowUp.focus();
      }
    });
  }

  function toggleOptionsDisplay(showOptionsOrNot, show) {
    for (let i = 0; i < showOptionsOrNot.length; i++) {
      showOptionsOrNot[i].style.display = show ? "block" : "none";
    }
  }

  if (
    heads.length > 0 &&
    descriptions.length > 0 &&
    images.length > 0 &&
    heads.length === descriptions.length &&
    heads.length === images.length
  ) {
    for (let i = 0; i < heads.length; i++) {
      heads[i].addEventListener("click", function () {
        showContent(i);
      });

      heads[i].addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          showContent(i);
        }
      });
    }
  }

  function showContent(index) {
    for (let j = 0; j < descriptions.length; j++) {
      descriptions[j].style.display = "none";
      images[j].style.display = "none";
    }

    descriptions[index].style.display = "block";
    if (window.innerWidth > 600) {
      images[index].style.display = "block";
    }
  }
});
